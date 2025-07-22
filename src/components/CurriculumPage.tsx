import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  Github, 
  Linkedin, 
  Download,
  Code,
  Cloud,
  Shield,
  Database,
  Server,
  Smartphone,
  GraduationCap,
  Briefcase,
  Target,
  Rocket,
  Brain
} from "lucide-react";

const CurriculumPage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header Section */}
      <div className="bg-gradient-hero text-accent-foreground">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold mb-2">Lino Requena</h1>
              <h2 className="text-xl lg:text-2xl mb-4 opacity-90">
                Desarrollador Web | Estudiante de Ciencias de la Computación
              </h2>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Santiago, Chile</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>linitoo@icloud.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+56 9 3702 9093</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4">
                <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Globe className="w-4 h-4" />
                  rifacil.click
                </Button>
                <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Github className="w-4 h-4" />
                  LiinooRF
                </Button>
              </div>
            </div>
            
            <div className="animate-slide-in">
              <Button variant="hero" size="lg" className="shadow-glow">
                <Download className="w-5 h-5" />
                Descargar CV
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Perfil Profesional */}
            <Card className="shadow-elegant animate-fade-in backdrop-blur-sm bg-gradient-card border-glass-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Target className="w-6 h-6 text-primary" />
                  Perfil Profesional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Desarrollador web con enfoque en soluciones prácticas y escalables. Estudiante de Ciencias de la Computación en la Universidad Católica de Chile con experiencia en desarrollo de plataformas online, conocimientos en Cloud Computing (AWS) y manejo avanzado de sistemas operativos Windows y Linux. He trabajado en entornos reales con clientes, automatizando procesos, creando bots y desarrollando plataformas personalizadas.
                </p>
              </CardContent>
            </Card>

            {/* Experiencia */}
            <Card className="shadow-elegant animate-fade-in backdrop-blur-sm bg-gradient-card border-glass-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Briefcase className="w-6 h-6 text-primary" />
                  Experiencia
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Worldcoin */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold">Agente de Validación</h3>
                    <Badge variant="secondary">2021</Badge>
                  </div>
                  <p className="text-accent font-medium mb-3">Worldcoin (Tools for Humanity)</p>
                  <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                    <li>Participé en el proceso de validación de identidad con tecnología de biometría avanzada, promoviendo la adopción de la criptoeconomía global mediante el escaneo de iris con dispositivos llamados Orbs.</li>
                    <li>Orienté a usuarios en el uso de la app y entregué información clara sobre privacidad, identidad digital y recompensas en WLD (Worldcoin Token).</li>
                    <li>Experiencia directa en atención a público, manejo de información sensible y trabajo con herramientas móviles y digitales.</li>
                  </ul>
                </div>

                <Separator />

                {/* Rifacil */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold">Fundador y Desarrollador</h3>
                    <Badge variant="secondary">Enero 2024 – Actualidad</Badge>
                  </div>
                  <p className="text-accent font-medium mb-3">Rifacil.click</p>
                  <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                    <li>Desarrollé rifacil.click, landing page para promocionar mi software propio de rifas online.</li>
                    <li>Implementación de formulario con validaciones, subida de comprobantes, asignación aleatoria de tickets y gestión desde bot de Telegram con Python y FastAPI.</li>
                    <li>Alojamiento y configuración completa en VPS Linux, incluyendo Nginx, seguridad SSH y correo con Mailgun.</li>
                    <li>Optimización SEO para captar clientes en Google y posicionamiento orgánico.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Proyectos Destacados */}
            <Card className="shadow-elegant animate-fade-in backdrop-blur-sm bg-gradient-card border-glass-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Rocket className="w-6 h-6 text-primary" />
                  Proyectos Destacados
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                
                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-5 h-5 text-accent" />
                    <h3 className="font-semibold">rifacil.click</h3>
                  </div>
                  <p className="text-muted-foreground">Plataforma para gestionar rifas online con validación de pagos, bots y sistema de asignación.</p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Smartphone className="w-5 h-5 text-accent" />
                    <h3 className="font-semibold">Bot de Telegram</h3>
                  </div>
                  <p className="text-muted-foreground">Automatización de rifas, gestión de usuarios y envío de correos.</p>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-accent" />
                    <h3 className="font-semibold">Servidores VPS</h3>
                  </div>
                  <p className="text-muted-foreground">Configurados con seguridad personalizada y monitoreo.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Habilidades Técnicas */}
            <Card className="shadow-elegant animate-slide-in backdrop-blur-sm bg-gradient-card border-glass-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  Habilidades Técnicas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Lenguajes
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">HTML</Badge>
                    <Badge variant="outline">CSS</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">Python</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Server className="w-4 h-4" />
                    Frameworks & Herramientas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Bootstrap</Badge>
                    <Badge variant="outline">WordPress</Badge>
                    <Badge variant="outline">Aiogram</Badge>
                    <Badge variant="outline">FastAPI</Badge>
                    <Badge variant="outline">Mailgun</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Cloud className="w-4 h-4" />
                    Cloud Computing
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">AWS EC2</Badge>
                    <Badge variant="outline">S3</Badge>
                    <Badge variant="outline">EFS</Badge>
                    <Badge variant="outline">CloudWatch</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Database className="w-4 h-4" />
                    Bases de datos
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">MySQL</Badge>
                    <Badge variant="outline">Archivos planos</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Educación */}
            <Card className="shadow-elegant animate-slide-in backdrop-blur-sm bg-gradient-card border-glass-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Educación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <h3 className="font-semibold">Ciencias de la Computación</h3>
                  <p className="text-accent font-medium">Universidad Católica de Chile</p>
                  <p className="text-sm text-muted-foreground">2025 – Actualmente cursando</p>
                </div>
              </CardContent>
              <CardContent>
                <div>
                  <h3 className="font-semibold">Desarrollador Full Stack</h3>
                  <p className="text-accent font-medium">CoderHouse</p>
                  <p className="text-sm text-muted-foreground">2021</p>
                </div>
              </CardContent>
            </Card>

            {/* Otras Competencias */}
            <Card className="shadow-elegant animate-slide-in backdrop-blur-sm bg-gradient-card border-glass-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  Otras Competencias
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Atención a público y experiencia en terreno</li>
                  <li>• Comunicación efectiva y liderazgo</li>
                  <li>• Aprendizaje autodidacta constante</li>
                  <li>• Tecnologías emergentes</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumPage;