import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  MapPin,
  ArrowLeft,
  Globe,
  GraduationCap,
  Code2,
  Bot,
  Server,
  Wrench,
  Languages,
  Phone,
  Zap,
  FolderOpen,
  Star,
} from "lucide-react";
import metaTechProvider from "@/assets/meta-tech-provider.png";

const skills = [
  {
    category: "Tecnologías Principales",
    icon: Code2,
    items: ["Python", "Java", "TypeScript", "PostgreSQL", "Git"],
  },
  {
    category: "Automatización & Integraciones",
    icon: Bot,
    items: ["n8n", "Bots de Telegram", "WhatsApp Business API", "APIs de Meta", "Mailgun"],
  },
  {
    category: "Infraestructura & Despliegue",
    icon: Server,
    items: ["Linux", "VPS", "Nginx", "Cloud Hosting", "Vercel", "Supabase", "DevOps"],
  },
  {
    category: "Frontend",
    icon: Globe,
    items: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS", "WordPress"],
  },
];

const experience = [
  {
    title: "Fundador & Desarrollador",
    company: "LinoTech SpA",
    period: "2025 – Presente",
    bullets: [
      "Desarrollo de software y soluciones digitales para empresas y emprendedores.",
      "Automatización de procesos operativos mediante flujos con n8n, Telegram, WhatsApp Business API y correo transaccional.",
      "Diseño e implementación de bots e integraciones con APIs de terceros.",
      "Despliegue y mantenimiento de infraestructura en VPS con Linux y Nginx.",
    ],
  },
  {
    title: "Creador",
    company: "Rifacil.click",
    period: "2025 – Presente",
    bullets: [
      "Plataforma de rifas online con validación automática de pagos.",
      "Asignación aleatoria de tickets y gestión integral mediante bot de Telegram.",
      "Arquitectura full-stack con base de datos, backend y panel de administración.",
    ],
  },
];

const projects = [
  {
    name: "Rifacil.click",
    description: "Plataforma de rifas online con pagos automatizados, asignación de tickets y gestión vía Telegram.",
  },
  {
    name: "Automatizaciones con n8n y APIs",
    description: "Flujos de trabajo automatizados para empresas: notificaciones, sincronización de datos y procesos operativos.",
  },
  {
    name: "Integraciones con WhatsApp Business API y Meta",
    description: "Conexión de sistemas empresariales con las APIs de Meta para atención digital y marketing automatizado.",
  },
  {
    name: "Infraestructura self-hosted en VPS",
    description: "Despliegue y administración de servidores Linux con Nginx para aplicaciones web en producción.",
  },
];

const strengths = [
  "Automatización de procesos",
  "Integración de APIs",
  "Desarrollo de bots",
  "Soluciones con IA",
  "Despliegue en VPS",
  "Resolución de problemas reales con tecnología",
];

const CV = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Button variant="ghost" size="sm" asChild>
            <a href="/">
              <ArrowLeft className="w-4 h-4 mr-1" />
              LinoTech SpA
            </a>
          </Button>
          <span className="text-sm text-muted-foreground">Currículum Vitae</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        {/* Header */}
        <section className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-2">
            Lino Requena
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Desarrollador de automatizaciones e integraciones con IA
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <a href="mailto:linitoo@icloud.com" className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Mail className="w-4 h-4" /> linitoo@icloud.com
            </a>
            <a href="tel:+56937029093" className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" /> +56 9 3702 9093
            </a>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4" /> Santiago, Chile
            </span>
            <a href="https://github.com/LiinooRF" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Globe className="w-4 h-4" /> github.com/LiinooRF
            </a>
          </div>
        </section>

        <Separator className="mb-10" />

        {/* Profile */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-accent" />
            Perfil Profesional
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Estudiante de segundo año de Ingeniería Informática en Duoc UC y fundador de LinoTech SpA. Me especializo en desarrollo de software, automatización de procesos e integración de APIs para empresas y emprendedores. He diseñado y construido plataformas web, bots conversacionales y flujos automatizados con inteligencia artificial, orientados a resolver problemas reales, reducir tiempos operativos y potenciar la atención digital. Cuento con experiencia práctica en n8n, WhatsApp Business API, Telegram, Meta APIs e infraestructura en VPS/Linux. Meta Tech Provider verificado con acceso directo a las APIs de la plataforma.
          </p>
        </section>

        {/* Meta Badge */}
        <section className="mb-10">
          <div className="inline-flex items-center gap-4 border border-border rounded-xl px-6 py-4 bg-muted/30">
            <img src={metaTechProvider} alt="Meta Tech Provider" className="h-12 w-auto" />
            <div>
              <p className="text-sm font-semibold text-foreground">Meta Tech Provider</p>
              <p className="text-xs text-muted-foreground">Proveedor tecnológico verificado por Meta</p>
            </div>
          </div>
        </section>

        <Separator className="mb-10" />

        {/* Experience */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-accent" />
            Experiencia
          </h2>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.company} className="border border-border rounded-xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <p className="font-semibold text-foreground">{exp.title}</p>
                  <span className="text-xs text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-sm font-medium text-accent mb-3">{exp.company}</p>
                <ul className="space-y-1.5">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                      <span className="text-accent mt-1.5 shrink-0">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <Separator className="mb-10" />

        {/* Projects */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <FolderOpen className="w-5 h-5 text-accent" />
            Proyectos Destacados
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {projects.map((project) => (
              <div key={project.name} className="border border-border rounded-xl p-6">
                <p className="font-semibold text-foreground text-sm mb-2">{project.name}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator className="mb-10" />

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-accent" />
            Habilidades Técnicas
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map((group) => (
              <div key={group.category} className="border border-border rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <group.icon className="w-4 h-4 text-accent" />
                  <p className="font-semibold text-sm text-foreground">{group.category}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator className="mb-10" />

        {/* Strengths */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-accent" />
            Fortalezas
          </h2>
          <div className="flex flex-wrap gap-3">
            {strengths.map((s) => (
              <span key={s} className="text-sm px-4 py-2 rounded-full border border-border bg-muted/30 text-foreground">
                {s}
              </span>
            ))}
          </div>
        </section>

        <Separator className="mb-10" />

        {/* Education */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-accent" />
            Educación
          </h2>
          <div className="space-y-4">
            <div className="border border-border rounded-xl p-6">
              <p className="font-semibold text-foreground">Ingeniería Informática</p>
              <p className="text-sm text-muted-foreground">Duoc UC · 2º año en curso</p>
            </div>
            <div className="border border-border rounded-xl p-6">
              <p className="font-semibold text-foreground">Desarrollo Web</p>
              <p className="text-sm text-muted-foreground">Coderhouse · 2022</p>
            </div>
          </div>
        </section>

        <Separator className="mb-10" />

        {/* Languages */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Languages className="w-5 h-5 text-accent" />
            Idiomas
          </h2>
          <div className="flex gap-4">
            <div className="border border-border rounded-xl px-6 py-4">
              <p className="font-semibold text-foreground text-sm">Español</p>
              <p className="text-xs text-muted-foreground">Nativo</p>
            </div>
            <div className="border border-border rounded-xl px-6 py-4">
              <p className="font-semibold text-foreground text-sm">Inglés</p>
              <p className="text-xs text-muted-foreground">Básico</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CV;
