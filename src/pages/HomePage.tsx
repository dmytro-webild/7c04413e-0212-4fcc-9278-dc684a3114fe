import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesComparison from '@/components/sections/features/FeaturesComparison';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import TeamListCards from '@/components/sections/team/TeamListCards';
import { Calendar, Layout, MessageCircle, Search, Settings, Smartphone } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroOverlay
      tag="Tu agencia web de confianza"
      title="Tu negocio merece una web que atraiga clientes"
      description="Creamos webs profesionales, rápidas y adaptadas a móviles para ayudarte a destacar, transmitir confianza y vender más en tu localidad."
      primaryButton={{
        text: "Solicitar presupuesto gratis",
        href: "#contacto",
      }}
      secondaryButton={{
        text: "Ver cómo trabajamos",
        href: "#proceso",
      }}
      imageSrc="https://images.pexels.com/photos/8533353/pexels-photo-8533353.jpeg?auto=compress&cs=tinysrgb&h=650&w=940&_wi=1"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="problema" data-section="problema">
    <SectionErrorBoundary name="problema">
          <FeaturesComparison
      tag="La realidad"
      title="¿Por qué tu negocio necesita un cambio?"
      description="Una web anticuada o inexistente es una oportunidad perdida cada día."
      negativeItems={[
        "Clientes que buscan en Google y no te encuentran",
        "Webs que no cargan o se ven mal en el móvil",
        "Dependencia absoluta del boca a boca",
        "Transmisión de poca confianza a nuevos clientes",
      ]}
      positiveItems={[
        "Imagen profesional y moderna que transmite seguridad",
        "Web optimizada para móviles y Google",
        "Captación constante de clientes desde internet",
        "Facilidad para que te reserven o te contacten",
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="servicios" data-section="servicios">
    <SectionErrorBoundary name="servicios">
          <AboutFeaturesSplit
      tag="Nuestra propuesta"
      title="Todo lo que necesitas para triunfar online"
      description="Creamos soluciones digitales completas pensadas para que tú te preocupes solo de gestionar tu negocio mientras tu web trabaja para ti."
      items={[
        {
          icon: Layout,
          title: "Diseño web a medida",
          description: "Creamos un diseño único que refleja la esencia de tu marca.",
        },
        {
          icon: Smartphone,
          title: "Webs adaptadas a móvil",
          description: "Tus clientes te verán perfecto desde cualquier dispositivo.",
        },
        {
          icon: Search,
          title: "Optimización para Google",
          description: "SEO básico para que aparezcas cuando te busquen.",
        },
        {
          icon: Calendar,
          title: "Reservas y pedidos",
          description: "Gestión sencilla de citas, reservas o pedidos online.",
        },
        {
          icon: MessageCircle,
          title: "Integración total",
          description: "Botón de WhatsApp y formularios de contacto directos.",
        },
        {
          icon: Settings,
          title: "Mantenimiento y soporte",
          description: "Tu web siempre al día, segura y funcionando al 100%.",
        },
      ]}
      textAnimation="slide-up"
      imageSrc="https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    />
    </SectionErrorBoundary>
  </div>

  <div id="sectores" data-section="sectores">
    <SectionErrorBoundary name="sectores">
          <FeaturesRevealCardsBento
      tag="Especialistas en negocios locales"
      title="Impulsamos tu sector"
      description="Sabemos qué necesita cada tipo de negocio para destacar."
      items={[
        {
          title: "Restaurantes",
          description: "Muestra tu carta y recibe reservas online 24/7.",
          href: "#contacto",
          imageSrc: "https://images.pexels.com/photos/5420975/pexels-photo-5420975.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Clínicas",
          description: "Reserva de citas simplificada y confianza profesional.",
          href: "#contacto",
          imageSrc: "https://images.pexels.com/photos/149637/pexels-photo-149637.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Gimnasios",
          description: "Gestión de suscripciones y horarios de clases.",
          href: "#contacto",
          imageSrc: "https://images.pexels.com/photos/927576/pexels-photo-927576.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Cafeterías",
          description: "Tu menú y ubicación siempre disponibles.",
          href: "#contacto",
          imageSrc: "https://images.pexels.com/photos/354102/pexels-photo-354102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Peluquerías",
          description: "Agenda llena gracias a las reservas rápidas.",
          href: "#contacto",
          imageSrc: "https://images.pexels.com/photos/9841328/pexels-photo-9841328.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Tiendas locales",
          description: "Catálogo de productos y contacto directo.",
          href: "#contacto",
          imageSrc: "https://images.pexels.com/photos/39277867/pexels-photo-39277867.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Otros servicios",
          description: "Diseños a medida para cualquier tipo de negocio.",
          href: "#contacto",
          imageSrc: "https://images.pexels.com/photos/270700/pexels-photo-270700.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="proceso" data-section="proceso">
    <SectionErrorBoundary name="proceso">
          <MetricsMediaCards
      tag="Cómo trabajamos"
      title="Un proceso sencillo y claro"
      description="Sin complicaciones técnicas. Nos encargamos de todo de principio a fin."
      metrics={[
        {
          value: "01",
          title: "Conectamos",
          description: "Hablas con nosotros para entender las metas de tu negocio.",
          imageSrc: "https://images.pexels.com/photos/2882568/pexels-photo-2882568.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          value: "02",
          title: "Diseñamos",
          description: "Preparamos una propuesta adaptada a tu estilo.",
          imageSrc: "https://images.pexels.com/photos/442161/pexels-photo-442161.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          value: "03",
          title: "Desarrollamos",
          description: "Construimos tu web y revisamos cada detalle contigo.",
          imageSrc: "https://images.pexels.com/photos/267414/pexels-photo-267414.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          value: "04",
          title: "Lanzamos",
          description: "Tu web sale al mundo lista para atraer nuevos clientes.",
          imageSrc: "https://images.pexels.com/photos/761437/pexels-photo-761437.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="ventajas" data-section="ventajas">
    <SectionErrorBoundary name="ventajas">
          <TeamListCards
      tag="Por qué Monix Agency"
      title="Tu socio digital de confianza"
      description="Nos enfocamos en ofrecer un servicio humano, profesional y sin sorpresas."
      groups={[
        {
          title: "Nuestras claves",
          members: [
            {
              name: "Trato Cercano",
              role: "Personalización",
              detail: "Escuchamos tu historia para reflejarla en tu web.",
              imageSrc: "https://images.pexels.com/photos/7679865/pexels-photo-7679865.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            },
            {
              name: "Enfoque Conversión",
              role: "Resultados",
              detail: "Diseñamos para que los visitantes se vuelvan clientes.",
              imageSrc: "https://images.pexels.com/photos/11216329/pexels-photo-11216329.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            },
            {
              name: "Precios Claros",
              role: "Transparencia",
              detail: "Sabrás exactamente qué pagas, sin sorpresas.",
              imageSrc: "https://images.pexels.com/photos/32238893/pexels-photo-32238893.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            },
            {
              name: "Acompañamiento",
              role: "Soporte",
              detail: "Seguimos ayudándote tras el lanzamiento de tu web.",
              imageSrc: "https://images.pexels.com/photos/6289048/pexels-photo-6289048.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            },
          ],
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSimple
      tag="Dudas frecuentes"
      title="¿Tienes preguntas?"
      description="Aquí resolvemos las dudas más comunes de nuestros clientes."
      items={[
        {
          question: "¿Cuánto tarda en estar lista mi web?",
          answer: "Trabajamos de forma ágil para que tu web esté online lo antes posible, cuidando cada detalle.",
        },
        {
          question: "¿Necesito tener conocimientos técnicos?",
          answer: "En absoluto. Nosotros nos encargamos de toda la parte técnica para que tú no te preocupes de nada.",
        },
        {
          question: "¿Podré modificar el contenido?",
          answer: "Sí, te entregamos una web intuitiva y te enseñamos a hacer cambios básicos si lo necesitas.",
        },
        {
          question: "¿Incluye dominio y hosting?",
          answer: "Sí, nos encargamos de toda la infraestructura para que no tengas que gestionar nada externo.",
        },
        {
          question: "¿Qué pasa después de publicar la web?",
          answer: "Seguimos a tu lado con soporte constante y mantenimiento para que tu web nunca falle.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="cta" data-section="cta">
    <SectionErrorBoundary name="cta">
          <ContactCta
      tag="Es el momento"
      text="¿Listo para que tu negocio dé el salto online?"
      primaryButton={{
        text: "Quiero mi web",
        href: "#contacto",
      }}
      secondaryButton={{
        text: "Hablar por WhatsApp",
        href: "#",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contacto" data-section="contacto">
    <SectionErrorBoundary name="contacto">
          <ContactCta
      tag="Contacto"
      text="Solicita tu presupuesto gratuito hoy mismo y hablemos de tu proyecto."
      primaryButton={{
        text: "Enviar solicitud",
        href: "#",
      }}
      secondaryButton={{
        text: "WhatsApp",
        href: "#",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
