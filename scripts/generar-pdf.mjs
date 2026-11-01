// Genera public/cv-lino-requena.pdf a partir del sitio ya construido.
//
//   npm run pdf
//
// Requiere Playwright con Chromium instalado:
//   npx playwright install chromium
//
// Hay que volver a correrlo cada vez que cambie el contenido del CV,
// porque el boton de descarga sirve este archivo tal cual.

import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";

const PUERTO = 4390;
const SALIDA = "public/cv-lino-requena.pdf";
const SITIO = "https://www.liinoo.tech";

let chromium;
try {
  ({ chromium } = await import("playwright"));
} catch {
  console.error(
    "Falta Playwright. Instalalo con:\n" +
      "  npm i -D playwright && npx playwright install chromium"
  );
  process.exit(1);
}

const servidor = spawn("npx", ["vite", "preview", "--port", String(PUERTO), "--strictPort"], {
  stdio: "ignore",
});

try {
  let listo = false;
  for (let i = 0; i < 40 && !listo; i++) {
    await sleep(500);
    listo = await fetch(`http://localhost:${PUERTO}/`).then((r) => r.ok).catch(() => false);
  }
  if (!listo) throw new Error(`El preview no respondio en el puerto ${PUERTO}`);

  const navegador = await chromium.launch();
  const pagina = await navegador.newPage();
  await pagina.goto(`http://localhost:${PUERTO}/`, { waitUntil: "networkidle" });

  // Dentro del PDF un href relativo queda apuntando a localhost y no abre
  // nada. Hay que pasarlos todos al dominio real antes de imprimir.
  const reescritos = await pagina.evaluate((sitio) => {
    const enlaces = [...document.querySelectorAll('a[href^="/"]')];
    enlaces.forEach((a) => (a.href = sitio + a.getAttribute("href")));
    return enlaces.length;
  }, SITIO);
  if (reescritos) console.log(`${reescritos} enlace(s) relativo(s) apuntados a ${SITIO}`);

  await pagina.pdf({
    path: SALIDA,
    format: "A4",
    printBackground: true,
    margin: { top: "10mm", bottom: "10mm", left: "12mm", right: "12mm" },
  });
  await navegador.close();
  console.log(`PDF generado en ${SALIDA}`);
} finally {
  servidor.kill();
}
