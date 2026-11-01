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

// Flyer del Track de n8n en el CITT. Al tener el archivo: dejarlo en public/
// y poner su ruta aqui (ej. "/flyer-track-n8n.jpg"). Con null no se muestra nada.
const TRACK_FLYER: string | null = null;

type Job = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
  flyer?: boolean;
};

const experience: Job[] = [
  {
    role: "Cofundador & Desarrollador Full Stack",
    org: "VoxTi Labs · voxtilabs.cl",
    period: "2026 – Presente",
    bullets: [
      "VoxIA: contacto de leads en el menor tiempo posible mediante automatización de voz humana, con trackeo de cada llamado en Pipedrive.",
      "IAxTi: CRM omnicanal potenciado por IA, hecho para pymes por una pyme.",
      "Observabilidad del stack con Sentry autohospedado (sentry.voxtilabs.cl): errores, releases y alertas.",
      "Despliegue continuo sobre VPS y servidores dedicados con Dokploy, Docker y Cloudflare.",
    ],
  },
  {
    role: "Automatizador · n8n + IA",
    org: "Agencia Palena",
    period: "2026",
    bullets: [
      "Mejoramiento de flujos en n8n potenciados con IA para operaciones de clientes.",
      "Integraciones entre CRM, canales de mensajería y APIs de terceros.",
      "Landings de captación con SEO/AEO.",
    ],
  },
  {
    role: "Líder de Track · Automatización con n8n + IA",
    org: "CITT · Duoc UC San Joaquín",
    period: "2026",
    bullets: [
      "Imparto el track de Automatización con n8n + IA: clases, material y acompañamiento de proyectos.",
    ],
    flyer: true,
  },
  {
    role: "Fundador & Desarrollador",
    org: "LinoTech SpA",
    period: "2025 – Presente",
    bullets: [
      "Desarrollo de software y soluciones digitales para pymes.",
      "Automatización con n8n, Telegram, WhatsApp Business API y correo transaccional.",
      "Administración de servidores: VPS, servidores dedicados, Linux y Nginx.",
    ],
  },
  {
    role: "Automatizaciones con chatbots a medida",
    org: "PortalTerreno.com",
    period: "2026",
    bullets: [
      "Chatbots a medida para atención, seguimiento y captura de leads.",
      "Automatización de flujos comerciales e integración con APIs.",
    ],
  },
  {
    role: "Creador",
    org: "Rifacil.click",
    period: "2025 – Presente",
    bullets: [
      "Plataforma de rifas online con validación de pagos y asignación de tickets.",
      "Gestión y notificaciones vía bot de Telegram.",
    ],
  },
];

const projects = [
  {
    title: "VoxIA · Contacto de leads por voz",
    detail:
      "Contacta al lead en el menor tiempo posible y trackea cada llamado en Pipedrive. En producción en Inmobiliaria Segura.",
  },
  {
    title: "IAxTi · CRM omnicanal con IA",
    detail:
      "Hecho para pymes por una pyme. WhatsApp Business API oficial como Meta Tech Provider.",
  },
  {
    title: "Sentry autohospedado",
    detail:
      "sentry.voxtilabs.cl: punto único de errores y releases en producción.",
  },
  {
    title: "Landings con SEO/AEO",
    detail:
      "Captación optimizada para buscadores y motores de respuesta con IA.",
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
    items: ["Sentry (autohospedado)", "Monitoreo y alertas", "Healthchecks"],
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
            Desarrollador full stack especializado en automatizaciones con IA e infraestructura, con el objetivo
            de consolidarme en <strong className="text-foreground font-semibold">DevOps</strong>. Cofundador de{" "}
            <strong className="text-foreground font-semibold">VoxTi Labs</strong>, donde desarrollo{" "}
            <strong className="text-foreground font-semibold">VoxIA</strong> —contacto de leads por voz humana
            automatizada— e <strong className="text-foreground font-semibold">IAxTi</strong>, CRM omnicanal
            potenciado por IA hecho para pymes por una pyme. Administro mi propia infraestructura (VPS y servidores
            dedicados, Docker, Dokploy, CI/CD, Cloudflare, Sentry autohospedado) y construyo agentes de IA sobre
            PostgreSQL, Oracle, Redis y Supabase. Fundador de LinoTech SpA y Líder de Track de Automatización con
            n8n + IA en el CITT de Duoc UC.{" "}
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
                    <p className="text-xs font-medium text-accent mb-1">{job.org}</p>
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
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.detail}</p>
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
