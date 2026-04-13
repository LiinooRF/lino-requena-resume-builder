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
  ExternalLink,
  Phone,
} from "lucide-react";
import metaTechProvider from "@/assets/meta-tech-provider.png";

const skills = [
  {
    category: "Desarrollo Web",
    icon: Code2,
    items: ["React", "TypeScript", "WordPress", "HTML/CSS", "Tailwind CSS"],
  },
  {
    category: "Backend & Infraestructura",
    icon: Server,
    items: ["Python", "Java", "PostgreSQL", "Linux", "VPS", "Cloud Hosting", "Nginx"],
  },
  {
    category: "Automatización & Integraciones",
    icon: Bot,
    items: ["n8n", "Bots de Telegram", "APIs de Meta", "Mailgun", "WhatsApp Business API"],
  },
  {
    category: "Herramientas",
    icon: Wrench,
    items: ["Git", "Vercel", "Supabase", "DevOps"],
  },
];

const experience = [
  {
    title: "Fundador & Desarrollador",
    company: "LinoTech SpA",
    period: "2025 – Presente",
    description:
      "Empresa de desarrollo de software y soluciones tecnológicas. Desarrollo de plataformas web, automatización de procesos, bots e integraciones con APIs para empresas y emprendedores.",
  },
  {
    title: "Creador",
    company: "Rifacil.click",
    period: "2024 – Presente",
    description:
      "Plataforma de rifas online con validación de pagos, asignación aleatoria de tickets y gestión automatizada mediante bot de Telegram.",
  },
];

const CV = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
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
            Automatizaciones con IA
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

        {/* About */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-accent" />
            Perfil
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Tengo 21 años, estudiante de segundo año de Ingeniería Informática en Duoc UC. Fundador de LinoTech SpA, empresa dedicada al desarrollo de software, automatización de procesos y soluciones digitales. Meta Tech Provider verificado con acceso a las APIs de Meta. Apasionado por construir herramientas tecnológicas que resuelvan problemas reales.
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

        {/* Education */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-accent" />
            Educación
          </h2>
          <div className="border border-border rounded-xl p-6">
            <p className="font-semibold text-foreground">Ingeniería Informática</p>
            <p className="text-sm text-muted-foreground">Duoc UC · 2º año en curso</p>
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
              <div key={exp.title} className="border border-border rounded-xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <p className="font-semibold text-foreground">{exp.title}</p>
                  <span className="text-xs text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-sm font-medium text-accent mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
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

        {/* Projects link */}
        <section className="text-center pt-6">
          <Button variant="outline" size="lg" asChild>
            <a href="/#proyectos">
              Ver proyectos
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </Button>
        </section>
      </main>
    </div>
  );
};

export default CV;
