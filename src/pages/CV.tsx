import { Button } from "@/components/ui/button";
import {
  Mail,
  MapPin,
  Globe,
  Phone,
  Download,
  FileImage,
  BadgeCheck,
  Github,
} from "lucide-react";
import metaTechProvider from "@/assets/meta-tech-provider.png";

// Flyer del Track de n8n en el CITT (public/flyer-track-n8n.jpg).
// Con null el enlace no se muestra.
const TRACK_FLYER: string | null = "/flyer-track-n8n.jpg";

type Job = {
  role: string;
  org: string;
  orgUrl?: string;
  period: string;
  bullets: string[];
  flyer?: boolean;
};

const experience: Job[] = [
  {
    role: "Cofundador & Desarrollador Full Stack",
    org: "VoxTi Labs · voxtilabs.cl",
    orgUrl: "https://voxtilabs.cl",
    period: "2026 – Presente",
    bullets: [
      "Creé VoxIA, voz humana automatizada que llama al contacto apenas entra: vendido a la Municipalidad de Temuco, donde opera hoy en el 800 100 650.",
      "Creé IAxTi: CRM omnicanal con IA que atiende, da seguimiento y cierra ventas 24/7, pensado para pymes que no tienen un equipo detrás.",
      "Levanté la infraestructura completa del producto: VPS y servidores dedicados, Docker, Dokploy, CI/CD y Cloudflare.",
      "Creé SentryCore: software de rondas de guardias con NFC y GPS, con la app del guardia publicada en Google Play y panel web para el supervisor.",
    ],
  },
  {
    role: "Especialista en Automatización con IA",
    org: "Agencia Palena",
    orgUrl: "https://agenciapalena.cl",
    period: "2026",
    bullets: [
      "Rediseñé flujos en n8n potenciados con IA para sacarle trabajo manual a la operación de los clientes.",
      "Conecté CRM (Pipedrive), canales de mensajería y APIs de terceros en un solo circuito.",
      "Construí landings de captación optimizadas para buscadores y para IA (SEO/AEO).",
    ],
  },
  {
    role: "Líder de Track e Instructor",
    org: "CITT · Duoc UC San Joaquín",
    orgUrl: "https://www.duoc.cl",
    period: "2026",
    bullets: [
      "Dirijo e imparto el track de Automatización con n8n + IA: clases, material propio y acompañamiento de los proyectos.",
    ],
    flyer: true,
  },
  {
    role: "Desarrollador Full Stack Independiente",
    org: "Proyectos propios y para clientes",
    period: "2025 – Presente",
    bullets: [
      "Llevo proyectos de punta a punta para pymes: del problema del cliente al producto funcionando.",
      "Automatizo operaciones con n8n, WhatsApp Business API, Telegram y correo transaccional.",
      "Administro los servidores donde corre todo: VPS, servidores dedicados, Linux y Nginx.",
    ],
  },
  {
    role: "Desarrollador de Chatbots a Medida",
    org: "PortalTerreno.com",
    orgUrl: "https://portalterreno.com",
    period: "2026",
    bullets: [
      "Chatbots que atienden, hacen seguimiento y capturan leads sin intervención humana.",
      "Automaticé el flujo comercial completo integrando sus APIs.",
    ],
  },
];

type Project = {
  title: string;
  detail: string;
  link?: string;
  linkLabel?: string;
  link2?: string;
  link2Label?: string;
};

const projects: Project[] = [
  {
    title: "VoxIA · Contacto de leads por voz",
    link: "https://voxtilabs.cl",
    linkLabel: "voxtilabs.cl",
    detail:
      "Vendido a la Municipalidad de Temuco, donde opera en el 800 100 650. Voz humana automatizada que llama al contacto apenas entra. También en producción en Inmobiliaria Segura, con el seguimiento sincronizado a Pipedrive.",
  },
  {
    title: "IAxTi · CRM omnicanal con IA",
    link: "https://iaxti.cl",
    linkLabel: "iaxti.cl",
    detail:
      "Atiende, da seguimiento y cierra ventas 24/7. Hecho para pymes por una pyme, sobre WhatsApp Business API oficial.",
  },
  {
    title: "SentryCore · App en Google Play",
    detail:
      "Software de rondas de guardias para seguridad privada: el guardia marca cada punto con NFC, el recorrido queda registrado y el informe con mapa sale solo. Panel web para el supervisor y preparado para la Ley 21.719.",
    link: "https://sentry.voxtilabs.cl",
    linkLabel: "sentry.voxtilabs.cl",
    link2: "https://play.google.com/store/apps/details?id=com.voxtilabs.sentrycore",
    link2Label: "Google Play",
  },
  {
    title: "Landings con SEO/AEO",
    detail:
      "Páginas que captan tanto desde Google como desde ChatGPT y Perplexity.",
  },
];

const skills = [
  {
    label: "DevOps & Infraestructura",
    items: [
      "VPS",
      "Servidores dedicados",
      "SysAdmin Linux",
      "Docker",
      "Dokploy",
      "CI/CD",
      "Nginx",
      "Traefik",
      "Cloudflare (firewall, DNS, WAF)",
      "Vercel",
    ],
  },
  {
    label: "Observabilidad",
    items: ["Sentry", "Grafana", "Monitoreo y alertas", "Healthchecks"],
  },
  {
    label: "IA & Agentes",
    items: [
      "Agentes IA",
      "Vercel AI SDK",
      "OpenRouter",
      "LLMs",
      "n8n",
      "Automatización de voz",
      "Prompting aplicado",
    ],
  },
  {
    label: "Bases de datos",
    items: ["PostgreSQL", "Oracle", "Redis", "Supabase", "SQL Server"],
  },
  {
    label: "Lenguajes & Frameworks",
    items: ["TypeScript", "Python", "Java", "Node.js", "React", "Tailwind CSS"],
  },
  {
    label: "Integraciones",
    items: [
      "WhatsApp Business API",
      "APIs de Meta",
      "Telegram",
      "Chatwoot",
      "Pipedrive",
      "Mailgun",
    ],
  },
  {
    label: "Web & Posicionamiento",
    items: ["SEO", "AEO", "Landings de conversión", "WordPress", "HTML/CSS"],
  },
];

const CV = () => {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Nav - hidden on print */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 print:hidden">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-sm font-semibold tracking-tight text-foreground">
            Lino Requena
            <span className="text-muted-foreground font-normal ml-2 hidden sm:inline">
              Currículum Vitae
            </span>
          </span>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/LiinooRF" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-1" />
                GitHub
              </a>
            </Button>
            <Button size="sm" onClick={handleDownloadPDF}>
              <Download className="w-4 h-4 mr-1" />
              Descargar PDF
            </Button>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-28 pb-20 cv-print-main">
        {/* Header */}
        <header className="mb-7 cv-header">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-1 cv-name">
            Lino Requena
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground cv-subtitle">
            Cofundador de VoxTi Labs · Full Stack · Automatizaciones con IA · DevOps
          </p>

          {/* Meta Tech Provider — bloque destacado */}
          <div className="mt-5 rounded-xl border border-accent/30 bg-accent/5 p-4 flex items-center gap-4 cv-meta-badge">
            <img
              src={metaTechProvider}
              alt="Meta Tech Provider verificado — Lino Requena"
              className="h-12 w-auto shrink-0 cv-meta-logo"
            />
            <div className="min-w-0">
              <p className="inline-flex items-center gap-1.5 text-sm font-bold text-foreground">
                <BadgeCheck className="w-4 h-4 text-accent shrink-0" />
                Meta Tech Provider verificado
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                Proveedor tecnológico acreditado por Meta para integrar WhatsApp Business API de forma oficial.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground mt-4 cv-contact">
            <a href="mailto:linitoo@icloud.com" className="inline-flex items-center gap-1 hover:text-foreground transition-colors">
              <Mail className="w-3.5 h-3.5" /> linitoo@icloud.com
            </a>
            <a href="tel:+56937029093" className="inline-flex items-center gap-1 hover:text-foreground transition-colors">
              <Phone className="w-3.5 h-3.5" /> +56 9 3702 9093
            </a>
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> Santiago, Chile
            </span>
            <a href="https://github.com/LiinooRF" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-foreground transition-colors">
              <Globe className="w-3.5 h-3.5" /> github.com/LiinooRF
            </a>
          </div>
        </header>

        <hr className="border-border mb-6" />

        {/* Profile */}
        <section className="mb-7 cv-profile">
          <h2 className="text-sm font-bold uppercase tracking-wider text-foreground mb-2 cv-section-title">
            Perfil profesional
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Construyo productos que contactan, atienden y venden solos, y la infraestructura donde corren.
            Cofundador de <strong className="text-foreground font-semibold">VoxTi Labs</strong>, donde creé{" "}
            <strong className="text-foreground font-semibold">VoxIA</strong> —voz humana automatizada que llama al
            lead apenas entra— e <strong className="text-foreground font-semibold">IAxTi</strong>, un CRM omnicanal
            con IA que atiende 24/7, hecho para pymes por una pyme. No solo escribo el código: administro los
            servidores donde vive, con VPS y servidores dedicados, Docker, Dokploy, CI/CD, Cloudflare y Sentry.
            Eso es lo que me lleva hacia{" "}
            <strong className="text-foreground font-semibold">DevOps</strong>. Líder de Track de Automatización
            con n8n + IA en el CITT de Duoc UC.{" "}
            <strong className="text-foreground font-semibold">Meta Tech Provider verificado</strong>.
          </p>
        </section>

        {/* 2-column layout */}
        <div className="cv-columns lg:grid lg:grid-cols-[1.15fr_1fr] lg:gap-x-10 lg:items-start">
          <div className="cv-col-left">
            <section className="mb-7">
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3 cv-section-title">
                Experiencia profesional
              </h2>
              <div className="space-y-4">
                {experience.map((job) => (
                  <article key={`${job.org}-${job.role}`} className="relative pl-4 cv-job">
                    <span className="absolute left-0 top-[0.42rem] w-1.5 h-1.5 rounded-full bg-accent cv-job-dot" />
                    <div className="flex items-baseline justify-between gap-3 flex-wrap">
                      <h3 className="text-sm font-semibold text-foreground leading-snug">{job.role}</h3>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{job.period}</span>
                    </div>
                    <p className="text-xs font-medium text-accent mb-1">
                      {job.orgUrl ? (
                        <a href={job.orgUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {job.org}
                        </a>
                      ) : (
                        job.org
                      )}
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-0.5">
                      {job.bullets.map((b) => (
                        <li key={b}>• {b}</li>
                      ))}
                    </ul>
                    {job.flyer && TRACK_FLYER && (
                      <a
                        href={TRACK_FLYER}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-1.5 text-xs font-medium text-accent hover:underline"
                      >
                        <FileImage className="w-3 h-3" />
                        Ver flyer del track
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </section>

          </div>

          <div className="cv-col-right">
            <section className="mb-7">
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3 cv-section-title">
                Proyectos destacados
              </h2>
              <div className="space-y-2.5">
                {projects.map((p) => (
                  <article key={p.title}>
                    <h3 className="text-xs font-semibold text-foreground">{p.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {p.detail}
                      {p.link && (
                        <>
                          {" "}
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-accent hover:underline"
                          >
                            {p.linkLabel} →
                          </a>
                        </>
                      )}
                      {p.link2 && (
                        <>
                          {" · "}
                          <a
                            href={p.link2}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-accent hover:underline"
                          >
                            {p.link2Label} →
                          </a>
                        </>
                      )}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="mb-7">
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3 cv-section-title">
                Habilidades técnicas
              </h2>
              <div className="space-y-3">
                {skills.map((group) => (
                  <div key={group.label}>
                    <h3 className="text-xs font-semibold text-foreground mb-1.5">{group.label}</h3>
                    <ul className="flex flex-wrap gap-1 cv-chips">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="text-[11px] px-2 py-0.5 rounded-md border border-border bg-muted/40 text-muted-foreground"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>


            <section className="mb-7">
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3 cv-section-title">
                Educación
              </h2>
              <div className="space-y-2">
                <div>
                  <h3 className="text-xs font-semibold text-foreground">Ingeniería Informática</h3>
                  <p className="text-xs text-muted-foreground">Duoc UC · 2º año en curso</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-foreground">Desarrollo Web Full Stack</h3>
                  <p className="text-xs text-muted-foreground">Coderhouse · 2022</p>
                </div>
              </div>
            </section>

            <section >
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3 cv-section-title">
                Idiomas
              </h2>
              <div className="flex gap-4 text-xs">
                <span><strong className="text-foreground">Español</strong> — Nativo</span>
                <span><strong className="text-foreground">Inglés</strong> — Básico</span>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CV;
