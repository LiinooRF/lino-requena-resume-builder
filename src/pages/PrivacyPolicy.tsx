import { Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    id: "introduccion",
    title: "1. Introducción",
    content: `LinoTech SpA (en adelante, "LinoTech", "nosotros" o "la empresa") es una empresa chilena dedicada al desarrollo de software, automatización de procesos y soluciones digitales, con domicilio en Santiago, Chile, identificada con RUT 78.382.778-6.

La presente Política de Privacidad tiene como propósito informar a los usuarios sobre cómo recopilamos, utilizamos, almacenamos y protegemos sus datos personales cuando interactúan con nuestros servicios, sitio web o plataformas de comunicación, incluyendo WhatsApp Business.

Nos comprometemos a respetar la privacidad de nuestros usuarios y a tratar sus datos personales de conformidad con la legislación chilena vigente (Ley 19.628 sobre Protección de la Vida Privada) y estándares internacionales de protección de datos.`,
  },
  {
    id: "responsable",
    title: "2. Responsable del Tratamiento",
    content: `El responsable del tratamiento de los datos personales es:

**LinoTech SpA**
RUT: 78.382.778-6
Dirección: Santiago, Chile
Correo electrónico: contacto@linorequena.xyz
Teléfono: +56 9 3702 9093

LinoTech SpA es la entidad encargada de decidir sobre los fines y medios del tratamiento de los datos personales recopilados a través de sus servicios y plataformas.`,
  },
  {
    id: "datos-recopilados",
    title: "3. Datos Personales que Recopilamos",
    content: `En el ejercicio de nuestras actividades, podemos recopilar los siguientes tipos de datos personales:

**Datos de identificación:**
• Nombre completo
• Número de teléfono
• Dirección de correo electrónico
• Nombre de empresa u organización (cuando aplique)

**Datos de comunicación:**
• Mensajes enviados por el usuario a través de formularios web, correo electrónico o WhatsApp
• Historial de conversaciones relacionadas con servicios solicitados

**Datos técnicos:**
• Dirección IP
• Tipo y versión del navegador web
• Sistema operativo
• Páginas visitadas y tiempo de permanencia en el sitio
• Datos de geolocalización aproximada (derivados de la IP)

**Datos transaccionales:**
• Información relacionada con servicios contratados
• Datos de facturación cuando corresponda`,
  },
  {
    id: "metodos-recopilacion",
    title: "4. Métodos de Recopilación",
    content: `Recopilamos datos personales a través de los siguientes medios:

**Formularios web:** Cuando el usuario completa formularios de contacto, solicitud de servicios o suscripción en nuestro sitio web.

**Interacción vía WhatsApp:** Cuando el usuario inicia una conversación o interactúa con nuestros servicios a través de WhatsApp Business, utilizando la API oficial de Meta.

**Uso del sitio web:** De forma automática mediante cookies y tecnologías similares cuando el usuario navega por nuestro sitio web.

**Comunicación directa:** Cuando el usuario nos contacta por correo electrónico, teléfono u otros canales de comunicación.

**Prestación de servicios:** Durante la ejecución de proyectos y servicios contratados por el cliente.`,
  },
  {
    id: "finalidad",
    title: "5. Finalidad del Tratamiento",
    content: `Los datos personales recopilados son utilizados para las siguientes finalidades:

• **Responder consultas:** Atender y dar seguimiento a las solicitudes de información, cotizaciones y consultas realizadas por los usuarios.

• **Prestación de servicios:** Ejecutar los servicios de desarrollo de software, automatización y soluciones digitales contratados por nuestros clientes.

• **Automatización de respuestas:** Procesar y gestionar comunicaciones automatizadas a través de bots y sistemas de mensajería, incluyendo WhatsApp Business.

• **Mejora de la experiencia del usuario:** Analizar el uso de nuestro sitio web y servicios para optimizar la experiencia, funcionalidad y contenido.

• **Gestión de clientes:** Administrar la relación comercial con nuestros clientes, incluyendo facturación, soporte técnico y comunicaciones relevantes.

• **Cumplimiento legal:** Cumplir con obligaciones legales y regulatorias aplicables en Chile.`,
  },
  {
    id: "base-legal",
    title: "6. Base Legal del Tratamiento",
    content: `El tratamiento de datos personales se realiza sobre las siguientes bases legales:

**Consentimiento del usuario:** El usuario otorga su consentimiento al proporcionar voluntariamente sus datos a través de formularios, mensajes de WhatsApp u otros canales de comunicación.

**Ejecución contractual:** El tratamiento es necesario para la ejecución de los servicios solicitados o contratados por el usuario, incluyendo desarrollo de software, automatización y soluciones tecnológicas.

**Interés legítimo:** En ciertos casos, el tratamiento se basa en el interés legítimo de LinoTech SpA para mejorar sus servicios, garantizar la seguridad de sus plataformas y gestionar eficientemente las relaciones comerciales.

**Cumplimiento legal:** Cuando el tratamiento sea necesario para cumplir con una obligación legal aplicable a LinoTech SpA.`,
  },
  {
    id: "whatsapp-meta",
    title: "7. Uso de WhatsApp y Meta",
    content: `LinoTech SpA utiliza la **API oficial de WhatsApp Business** proporcionada por Meta Platforms, Inc. para la comunicación con usuarios y clientes. En relación con este uso, informamos lo siguiente:

• Los mensajes enviados y recibidos a través de WhatsApp Business pueden ser procesados para fines de automatización de respuestas, gestión de consultas y prestación de servicios.

• Meta Platforms, Inc. actúa como proveedor de infraestructura de comunicación. Los datos transmitidos a través de WhatsApp están sujetos también a la Política de Privacidad de Meta y los Términos de Servicio de WhatsApp Business.

• LinoTech SpA no comparte datos personales de los usuarios con Meta más allá de lo estrictamente necesario para el funcionamiento del servicio de mensajería.

• Los usuarios pueden consultar la política de privacidad de Meta en: https://www.facebook.com/privacy/policy/

• El uso de la API de WhatsApp Business cumple con las políticas comerciales y de mensajería de Meta.`,
  },
  {
    id: "comparticion",
    title: "8. Compartición de Datos",
    content: `LinoTech SpA **no vende, alquila ni comercializa** datos personales de sus usuarios a terceros.

Los datos personales pueden ser compartidos únicamente en los siguientes casos:

• **Proveedores de servicios:** Con terceros que nos asisten en la prestación de servicios (por ejemplo, proveedores de hosting, servicios de correo electrónico, plataformas de comunicación como Meta/WhatsApp). Estos proveedores están obligados a proteger los datos y utilizarlos únicamente para los fines autorizados.

• **Obligaciones legales:** Cuando sea requerido por ley, orden judicial o autoridad competente en Chile.

• **Protección de derechos:** Para proteger los derechos, propiedad o seguridad de LinoTech SpA, sus clientes o terceros.

En todos los casos, nos aseguramos de que los terceros con quienes se compartan datos cuenten con medidas de seguridad adecuadas.`,
  },
  {
    id: "seguridad",
    title: "9. Almacenamiento y Seguridad",
    content: `LinoTech SpA implementa medidas de seguridad técnicas y organizativas razonables para proteger los datos personales contra accesos no autorizados, alteración, divulgación o destrucción. Estas medidas incluyen:

• Cifrado de datos en tránsito mediante protocolos HTTPS/TLS.
• Control de acceso restringido a los datos personales.
• Almacenamiento seguro en servidores con protección contra intrusiones.
• Monitoreo y actualización periódica de sistemas de seguridad.
• Copias de seguridad regulares.

Si bien tomamos precauciones razonables, ningún sistema de transmisión o almacenamiento de datos es completamente seguro. En caso de una brecha de seguridad que afecte datos personales, notificaremos a los usuarios afectados y a las autoridades competentes conforme a la legislación aplicable.`,
  },
  {
    id: "retencion",
    title: "10. Retención de Datos",
    content: `Los datos personales serán almacenados únicamente durante el tiempo necesario para cumplir con las finalidades descritas en esta política, o según lo exija la legislación aplicable.

**Criterios de retención:**
• Los datos de clientes activos se conservan durante la vigencia de la relación comercial.
• Los datos de consultas se conservan por un período máximo de 24 meses desde la última interacción.
• Los datos de facturación se conservan según los plazos legales tributarios en Chile (mínimo 6 años).

Una vez cumplido el período de retención, los datos personales serán eliminados o anonimizados de forma segura. Los usuarios pueden solicitar la eliminación anticipada de sus datos en cualquier momento, sujeto a las obligaciones legales de conservación.`,
  },
  {
    id: "derechos",
    title: "11. Derechos del Usuario",
    content: `De conformidad con la legislación chilena y estándares internacionales, los usuarios tienen los siguientes derechos sobre sus datos personales:

• **Derecho de acceso:** Solicitar información sobre qué datos personales tenemos almacenados y cómo los utilizamos.

• **Derecho de rectificación:** Solicitar la corrección de datos personales inexactos o incompletos.

• **Derecho de eliminación:** Solicitar la eliminación de sus datos personales cuando ya no sean necesarios para los fines para los cuales fueron recopilados.

• **Derecho de oposición:** Oponerse al tratamiento de sus datos personales en determinadas circunstancias.

Para ejercer cualquiera de estos derechos, los usuarios pueden contactarnos a través de:
• Correo electrónico: contacto@linorequena.xyz
• Teléfono: +56 9 3702 9093

Responderemos a las solicitudes en un plazo máximo de 15 días hábiles.`,
  },
  {
    id: "cookies",
    title: "12. Cookies y Tecnologías Similares",
    content: `Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar la experiencia del usuario. Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario al visitar nuestro sitio web.

**Tipos de cookies que podemos utilizar:**
• **Cookies esenciales:** Necesarias para el funcionamiento básico del sitio web.
• **Cookies analíticas:** Nos ayudan a entender cómo los usuarios interactúan con el sitio, permitiéndonos mejorar su funcionamiento.
• **Cookies de preferencias:** Permiten recordar las preferencias del usuario para personalizar la experiencia.

El usuario puede configurar su navegador para rechazar todas o algunas cookies, o para recibir un aviso cuando se envíen cookies. Sin embargo, al desactivar las cookies, algunas funcionalidades del sitio podrían verse limitadas.`,
  },
  {
    id: "menores",
    title: "13. Menores de Edad",
    content: `Los servicios de LinoTech SpA están dirigidos a personas mayores de 18 años. No recopilamos intencionalmente datos personales de menores de edad.

Si tomamos conocimiento de que hemos recopilado datos personales de un menor sin el consentimiento verificable de su padre, madre o tutor legal, procederemos a eliminar dicha información de nuestros registros a la mayor brevedad posible.

Si usted es padre, madre o tutor y cree que su hijo ha proporcionado datos personales a LinoTech SpA, le invitamos a contactarnos para que podamos tomar las medidas necesarias.`,
  },
  {
    id: "cambios",
    title: "14. Cambios en la Política de Privacidad",
    content: `LinoTech SpA se reserva el derecho de modificar o actualizar esta Política de Privacidad en cualquier momento para reflejar cambios en nuestras prácticas, servicios o en la legislación aplicable.

Cualquier modificación será publicada en esta misma página con la fecha de última actualización. En caso de cambios sustanciales, haremos esfuerzos razonables para notificar a los usuarios a través de los canales disponibles.

Recomendamos a los usuarios revisar periódicamente esta política para mantenerse informados sobre cómo protegemos sus datos personales.`,
  },
];

const PrivacyPolicy = () => {
  const lastUpdated = "20 de marzo de 2026";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold tracking-tight text-foreground">
            LinoTech<span className="text-muted-foreground font-normal ml-1">SpA</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Inicio</Link>
            <a href="/#nosotros" className="hover:text-foreground transition-colors">Nosotros</a>
            <a href="/#servicios" className="hover:text-foreground transition-colors">Servicios</a>
            <a href="/#proyectos" className="hover:text-foreground transition-colors">Proyectos</a>
            <a href="/#contacto" className="hover:text-foreground transition-colors">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 lg:py-24 pt-24">
        <header className="mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Política de Privacidad
          </h1>
          <p className="text-muted-foreground">
            Última actualización: {lastUpdated}
          </p>
        </header>

        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                {section.title}
              </h2>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-[0.95rem] [&_strong]:text-foreground [&_strong]:font-medium">
                {section.content.split("**").map((part, i) =>
                  i % 2 === 1 ? (
                    <strong key={i}>{part}</strong>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </div>
            </section>
          ))}

          {/* Contact Section */}
          <section id="contacto" className="scroll-mt-24">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              15. Contacto
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-[0.95rem]">
              Para cualquier consulta, solicitud o reclamo relacionado con esta
              Política de Privacidad o el tratamiento de sus datos personales,
              puede contactarnos a través de los siguientes medios:
            </p>
            <div className="bg-muted/50 rounded-xl p-6 space-y-3">
              <p className="font-semibold text-foreground text-lg">LinoTech SpA</p>
              <p className="text-sm text-muted-foreground">RUT: 78.382.778-6</p>
              <div className="flex flex-col gap-2 pt-2 text-sm text-muted-foreground">
                <a
                  href="mailto:contacto@linorequena.xyz"
                  className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  contacto@linorequena.xyz
                </a>
                <a
                  href="tel:+56937029093"
                  className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  +56 9 3702 9093
                </a>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0" />
                  Santiago, Chile
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="max-w-4xl mx-auto px-6 py-10 text-center text-xs text-muted-foreground/60 space-y-1">
          <p>© {new Date().getFullYear()} LinoTech SpA. Todos los derechos reservados.</p>
          <p>RUT: 78.382.778-6 · Santiago, Chile</p>
          <p>Empresa de desarrollo de software y soluciones tecnológicas</p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
