import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  MapPin,
  ArrowRight,
  Code2,
  Bot,
  Plug,
  Cog,
  Globe,
  ChevronDown,
  Building2,
  Phone,
} from "lucide-react";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const RevealSection = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal-section ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const services = [
  {
    icon: Code2,
    title: "Desarrollo de Software",
    description:
      "Aplicaciones web y plataformas a medida, construidas con tecnologías modernas para escalar junto a tu negocio.",
  },
  {
    icon: Cog,
    title: "Automatización de Procesos",
    description:
      "Eliminamos tareas manuales con flujos automatizados que ahorran tiempo y reducen errores operativos.",
  },
  {
    icon: Bot,
    title: "Bots y Soluciones Digitales",
    description:
      "Bots de Telegram, WhatsApp y otras plataformas para atención al cliente, ventas y gestión interna.",
  },
  {
    icon: Plug,
    title: "Integraciones con APIs",
    description:
      "Conectamos tus herramientas existentes — WhatsApp Business, pasarelas de pago, CRMs y más.",
  },
];

const projects = [
  {
    title: "Rifacil.click",
    category: "Plataforma Web",
    description:
      "Sistema completo de rifas online con validación de pagos, asignación aleatoria de tickets y gestión automatizada mediante bot de Telegram.",
  },
  {
    title: "Bot de Gestión",
    category: "Automatización",
    description:
      "Bot de Telegram con integración de correos, gestión de usuarios y procesamiento de comprobantes de pago en tiempo real.",
  },
  {
    title: "Infraestructura Cloud",
    category: "DevOps",
    description:
      "Configuración y mantenimiento de servidores VPS con seguridad avanzada, Nginx, monitoreo y despliegues automatizados.",
  },
];

const LinoTechPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-lg font-semibold tracking-tight text-foreground">
            LinoTech<span className="text-muted-foreground font-normal ml-1">SpA</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#nosotros" className="hover:text-foreground transition-colors">Nosotros</a>
            <a href="#servicios" className="hover:text-foreground transition-colors">Servicios</a>
            <a href="#proyectos" className="hover:text-foreground transition-colors">Proyectos</a>
            <a href="#contacto" className="hover:text-foreground transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-gradient-subtle" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="reveal-section revealed">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background text-sm text-muted-foreground mb-8">
              <Building2 className="w-3.5 h-3.5" />
              Empresa de software · Santiago, Chile
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mb-6" style={{ textWrap: "balance" }}>
              LinoTech SpA
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed" style={{ textWrap: "balance" }}>
              Empresa de desarrollo de software y soluciones tecnológicas
            </p>
            <p className="text-base text-muted-foreground/80 max-w-xl mx-auto mb-10 leading-relaxed">
              Construimos herramientas digitales que automatizan, conectan y escalan tu negocio. Desde plataformas web hasta bots e integraciones con APIs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-12 px-8 text-base" asChild>
                <a href="#contacto">
                  Conversemos
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
              <Button variant="ghost" size="lg" className="h-12 px-8 text-base text-muted-foreground" asChild>
                <a href="#servicios">Ver servicios</a>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-5 h-5 text-muted-foreground/50" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="nosotros" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">Sobre nosotros</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                Tecnología con propósito, construida desde Chile
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">LinoTech SpA</strong> es una empresa tecnológica fundada por Lino Requena, dedicada al desarrollo de software, automatización de procesos y soluciones digitales para negocios de todos los tamaños.
                </p>
                <p>
                  Operamos desde Santiago de Chile con un enfoque práctico: entender el problema real del cliente y entregar herramientas que funcionen desde el día uno. No vendemos promesas — construimos soluciones.
                </p>
                <p>
                  Como empresa formalmente constituida, trabajamos con la seriedad y responsabilidad que cada proyecto requiere, combinando agilidad técnica con compromiso profesional.
                </p>
              </div>
            </RevealSection>
            <RevealSection delay={120}>
              <div className="bg-muted/50 rounded-2xl p-8 lg:p-10 space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Razón Social</p>
                  <p className="text-lg font-semibold text-foreground">LinoTech SpA</p>
                </div>
                <Separator />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">RUT</p>
                  <p className="text-lg font-semibold text-foreground">78.382.778-6</p>
                </div>
                <Separator />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Actividad</p>
                  <p className="text-foreground">Desarrollo de software, automatización de procesos, soluciones digitales y servicios tecnológicos</p>
                </div>
                <Separator />
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>Santiago, Chile</span>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <RevealSection className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">Servicios</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              Lo que hacemos
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Soluciones tecnológicas diseñadas para resolver problemas concretos y generar valor real en tu operación.
            </p>
          </RevealSection>
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <RevealSection key={service.title} delay={i * 80}>
                <div className="group bg-background rounded-xl border border-border p-8 h-full transition-shadow duration-300 hover:shadow-card">
                  <service.icon className="w-8 h-8 text-accent mb-5 transition-transform duration-300 group-hover:scale-105" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-[0.95rem]">{service.description}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="proyectos" className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <RevealSection className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">Proyectos</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              Trabajo que habla por sí solo
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Algunos de los proyectos en los que hemos trabajado, desde plataformas web hasta infraestructura cloud.
            </p>
          </RevealSection>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <RevealSection key={project.title} delay={i * 80}>
                <div className="group border border-border rounded-xl p-8 h-full transition-shadow duration-300 hover:shadow-card">
                  <span className="text-xs font-medium tracking-wider uppercase text-accent">{project.category}</span>
                  <h3 className="text-xl font-semibold text-foreground mt-3 mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-[0.95rem] leading-relaxed">{project.description}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <RevealSection>
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">Contacto</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                Cuéntanos qué necesitas y te responderemos a la brevedad. Estamos listos para ayudarte a llevar tu idea al siguiente nivel.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                <a
                  href="mailto:linitoo@icloud.com"
                  className="inline-flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  linitoo@icloud.com
                </a>
                <a
                  href="https://rifacil.click"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors"
                >
                  <Globe className="w-5 h-5" />
                  rifacil.click
                </a>
              </div>
              <Button size="lg" className="h-12 px-8 text-base" asChild>
                <a href="mailto:linitoo@icloud.com">
                  Enviar un correo
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="sm:col-span-2 lg:col-span-2">
              <p className="text-lg font-semibold text-foreground mb-1">
                LinoTech<span className="text-muted-foreground font-normal ml-1">SpA</span>
              </p>
              <p className="text-sm text-muted-foreground mb-4 max-w-sm leading-relaxed">
                Empresa tecnológica dedicada al desarrollo de software y soluciones digitales. Construimos herramientas que automatizan y escalan tu negocio.
              </p>
              <p className="text-xs text-muted-foreground/70">RUT: 78.382.778-6</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground mb-4">Navegación</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#nosotros" className="hover:text-foreground transition-colors">Nosotros</a></li>
                <li><a href="#servicios" className="hover:text-foreground transition-colors">Servicios</a></li>
                <li><a href="#proyectos" className="hover:text-foreground transition-colors">Proyectos</a></li>
                <li><a href="#contacto" className="hover:text-foreground transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground mb-4">Contacto</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5" />
                  linitoo@icloud.com
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" />
                  Santiago, Chile
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-10" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/60">
            <p>© {new Date().getFullYear()} LinoTech SpA. Todos los derechos reservados.</p>
            <p>Empresa de software · Santiago, Chile</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LinoTechPage;
