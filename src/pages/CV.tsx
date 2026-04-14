import { Button } from "@/components/ui/button";
import {
  Mail,
  MapPin,
  ArrowLeft,
  Globe,
  Phone,
  Download,
} from "lucide-react";
import metaTechProvider from "@/assets/meta-tech-provider.png";

const CV = () => {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Nav - hidden on print */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 print:hidden">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Button variant="ghost" size="sm" asChild>
            <a href="/">
              <ArrowLeft className="w-4 h-4 mr-1" />
              LinoTech SpA
            </a>
          </Button>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground hidden sm:inline">Currículum Vitae</span>
            <Button size="sm" onClick={handleDownloadPDF}>
              <Download className="w-4 h-4 mr-1" />
              Descargar PDF
            </Button>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-28 pb-20 cv-print-main">
        {/* Header */}
        <header className="mb-8 cv-header">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-1 cv-name">
                Lino Requena
              </h1>
              <p className="text-lg text-muted-foreground cv-subtitle">
                Desarrollador de automatizaciones e integraciones con IA
              </p>
            </div>
            <div className="flex items-center gap-3 cv-meta-badge">
              <img src={metaTechProvider} alt="Meta Tech Provider" className="h-10 w-auto" />
              <div>
                <p className="text-xs font-semibold text-foreground">Meta Tech Provider</p>
                <p className="text-[10px] text-muted-foreground">Verificado</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground mt-3 cv-contact">
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
        <section className="mb-6 cv-profile">
          <h2 className="text-sm font-bold uppercase tracking-wider text-foreground mb-2 cv-section-title">Perfil</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Estudiante de Ingeniería Informática en Duoc UC y fundador de LinoTech SpA. Especializado en desarrollo de software, automatización con IA e integración de APIs. Experiencia práctica en n8n, WhatsApp Business API, Telegram, Meta APIs e infraestructura VPS/Linux. Meta Tech Provider verificado.
          </p>
        </section>

        {/* 2-column layout for print */}
        <div className="cv-columns">
          {/* Left column */}
          <div className="cv-col-left">
            {/* Experience */}
            <section className="mb-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3 cv-section-title">Experiencia</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-foreground">Fundador & Desarrollador</p>
                    <span className="text-xs text-muted-foreground">2025 – Presente</span>
                  </div>
                  <p className="text-xs font-medium text-accent mb-1">LinoTech SpA</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li>• Software y soluciones digitales para empresas.</li>
                    <li>• Automatización con n8n, Telegram, WhatsApp API y correo transaccional.</li>
                    <li>• Bots e integraciones con APIs de terceros.</li>
                    <li>• Infraestructura VPS con Linux y Nginx.</li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-foreground">Creador</p>
                    <span className="text-xs text-muted-foreground">2025 – Presente</span>
                  </div>
                  <p className="text-xs font-medium text-accent mb-1">Rifacil.click</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li>• Plataforma de rifas online con pagos automatizados.</li>
                    <li>• Asignación de tickets y gestión vía bot de Telegram.</li>
                    <li>• Arquitectura full-stack con panel de administración.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="mb-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3 cv-section-title">Proyectos Destacados</h2>
              <div className="space-y-2">
                <div>
                  <p className="text-xs font-semibold text-foreground">Rifacil.click</p>
                  <p className="text-xs text-muted-foreground">Rifas online con pagos automatizados y gestión vía Telegram.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Automatizaciones con n8n</p>
                  <p className="text-xs text-muted-foreground">Flujos automatizados: notificaciones, sincronización y procesos operativos.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Integraciones Meta & WhatsApp</p>
                  <p className="text-xs text-muted-foreground">Conexión con APIs de Meta para atención digital y marketing.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Infraestructura VPS</p>
                  <p className="text-xs text-muted-foreground">Servidores Linux con Nginx para apps en producción.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right column */}
          <div className="cv-col-right">
            {/* Skills */}
            <section className="mb-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3 cv-section-title">Habilidades Técnicas</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold text-foreground mb-1">Tecnologías Principales</p>
                  <p className="text-xs text-muted-foreground">Python · Java · TypeScript · PostgreSQL · Git</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground mb-1">Automatización & Integraciones</p>
                  <p className="text-xs text-muted-foreground">n8n · Bots de Telegram · WhatsApp Business API · APIs de Meta · Mailgun</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground mb-1">Infraestructura & Despliegue</p>
                  <p className="text-xs text-muted-foreground">Linux · VPS · Nginx · Cloud Hosting · Vercel · Supabase · DevOps</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground mb-1">Frontend</p>
                  <p className="text-xs text-muted-foreground">React · TypeScript · Tailwind CSS · HTML/CSS · WordPress</p>
                </div>
              </div>
            </section>

            {/* Strengths */}
            <section className="mb-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3 cv-section-title">Fortalezas</h2>
              <div className="flex flex-wrap gap-1.5">
                {["Automatización de procesos", "Integración de APIs", "Desarrollo de bots", "Soluciones con IA", "Despliegue en VPS", "Resolución de problemas"].map((s) => (
                  <span key={s} className="text-[11px] px-2.5 py-1 rounded-full border border-border bg-muted/30 text-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mb-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3 cv-section-title">Educación</h2>
              <div className="space-y-2">
                <div>
                  <p className="text-xs font-semibold text-foreground">Ingeniería Informática</p>
                  <p className="text-xs text-muted-foreground">Duoc UC · 2º año en curso</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">Desarrollo Web</p>
                  <p className="text-xs text-muted-foreground">Coderhouse · 2022</p>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3 cv-section-title">Idiomas</h2>
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
