import React, { useState } from 'react';
import TextAnimation from '@/components/ui/TextAnimation';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Accordion from '@/components/ui/Accordion';
import ImageOrVideo from '@/components/ui/ImageOrVideo';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import { 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Target, 
  Layers, 
  Code, 
  BarChart3, 
  AlertCircle
} from 'lucide-react';

export default function HomePage(): React.JSX.Element {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const faqItems = [
    {
      title: "¿Cuánto tiempo tarda en desarrollarse un proyecto web?",
      content: "El tiempo de desarrollo varía según la complejidad. Un sitio corporativo suele tardar entre 3 y 5 semanas, mientras que proyectos más avanzados o e-commerce pueden requerir entre 6 y 10 semanas."
    },
    {
      title: "¿Cómo es el proceso de comunicación durante el trabajo?",
      content: "Mantenemos una comunicación fluida y constante a través de reuniones semanales de seguimiento, canal directo de consultas y acceso en tiempo real al estado del proyecto."
    },
    {
      title: "¿Ofrecen soporte técnico y mantenimiento tras el lanzamiento?",
      content: "Sí, disponemos de planes de mantenimiento continuo para garantizar que tu sitio web se mantenga seguro, actualizado y funcionando con la máxima velocidad."
    },
    {
      title: "¿El diseño estará optimizado para dispositivos móviles y buscadores?",
      content: "Absolutamente. Todos nuestros desarrollos son 100% adaptables (responsive) y siguen las mejores prácticas de SEO técnico y velocidad de carga."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <div data-webild-section="HeroSection" id="hero" className="relative overflow-hidden">
        <div className="w-content-width mx-auto flex flex-col items-center text-center gap-6">
          <ScrollReveal variant="fade-blur">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 card rounded-full text-sm font-medium text-foreground">
              <Sparkles className="w-4 h-4 text-primary-cta" />
              <span>Agencia de Estrategia & Desarrollo Digital</span>
            </div>
          </ScrollReveal>

          <TextAnimation
            text="Transformamos ideas en experiencias digitales de alto impacto"
            variant="slide-up"
            gradientText={true}
            tag="h1"
            className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-tight max-w-content-width"
          />

          <TextAnimation
            text="Diseñamos y desarrollamos sitios web, marcas e identidades digitales enfocadas en acelerar el crecimiento y la reputación de tu negocio."
            variant="fade-blur"
            gradientText={false}
            tag="p"
            className="text-lg md:text-xl text-accent max-w-content-width text-balance leading-relaxed"
          />

          <ScrollReveal variant="slide-up" delay={0.2} className="w-full max-w-content-width mt-8">
            <div className="p-2 card rounded-xl overflow-hidden shadow-2xl">
              <ImageOrVideo
                imageSrc="https://picsum.photos/seed/945624861/1200/800"
                className="w-full h-[320px] md:h-[480px] object-cover rounded-lg"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* PROBLEMA SECTION */}
      <div data-webild-section="ProblemaSection" id="problema" className="">
        <div className="w-content-width mx-auto flex flex-col">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="px-3.5 py-1 card rounded text-xs uppercase tracking-wider font-semibold text-accent">
              El Desafío
            </div>
            <TextAnimation
              text="¿Por qué muchas marcas no logran destacar en internet?"variant="slide-up"
              gradientText={false}
              tag="h2"
              className="text-3xl md:text-5xl font-bold text-foreground max-w-content-width"
            />
            <p className="text-base md:text-lg text-accent max-w-content-width text-balance">
              Un diseño web obsoleto o la ausencia de una estrategia bien definida pueden limitar significativamente las oportunidades de crecimiento de tu empresa.
            </p>
          </div>

          <ScrollReveal variant="fade-blur">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 card rounded-xl flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg primary-button flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-primary-cta-text" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Sitios sin conversión</h3>
                <p className="text-base text-accent leading-relaxed">
                  Páginas lentas o difíciles de navegar que hacen que los visitantes abandonen sin interactuar.
                </p>
              </div>

              <div className="p-8 card rounded-xl flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg primary-button flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-cta-text" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Sin estrategia clara</h3>
                <p className="text-base text-accent leading-relaxed">
                  Presencia digital improvisada sin objetivos medibles ni orientación hacia el público idóneo.
                </p>
              </div>

              <div className="p-8 card rounded-xl flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg primary-button flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary-cta-text" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Baja visibilidad</h3>
                <p className="text-base text-accent leading-relaxed">
                  Falta de optimización SEO y posicionamiento orgánico que impide llegar a clientes potenciales.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* SERVICIOS SECTION */}
      <div data-webild-section="ServiciosSection" id="servicios" className="">
        <div className="w-content-width mx-auto flex flex-col">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="px-3.5 py-1 card rounded text-xs uppercase tracking-wider font-semibold text-accent">
              Nuestros Servicios
            </div>
            <TextAnimation
              text="Soluciones digitales integrales a medida"
              variant="slide-up"
              gradientText={true}
              tag="h2"
              className="text-3xl md:text-5xl font-bold text-foreground max-w-content-width"
            />
            <p className="text-base md:text-lg text-accent max-w-content-width text-balance">
              Ofrecemos un catálogo completo de servicios especializados para impulsar cada etapa de tu presencia digital.
            </p>
          </div>

          <ScrollReveal variant="slide-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 card rounded-xl flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg primary-button flex items-center justify-center">
                  <Code className="w-6 h-6 text-primary-cta-text" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Desarrollo Web & Apps</h3>
                <p className="text-base text-accent leading-relaxed">
                  Construimos plataformas rápidas, seguras, totalmente responsive y escalables adaptadas a tus requerimientos tecnológicos.
                </p>
              </div>

              <div className="p-8 card rounded-xl flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg primary-button flex items-center justify-center">
                  <Layers className="w-6 h-6 text-primary-cta-text" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Diseño UI/UX & Branding</h3>
                <p className="text-base text-accent leading-relaxed">
                  Creamos identidades de marca sólidas e interfaces intuitivas que conectan emocionalmente con tu audiencia.
                </p>
              </div>

              <div className="p-8 card rounded-xl flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg primary-button flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-primary-cta-text" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Estrategia SEO & Growth</h3>
                <p className="text-base text-accent leading-relaxed">
                  Optimizamos tu arquitectura web para los motores de búsqueda y desarrollamos estrategias de crecimiento sostenible.
                </p>
              </div>

              <div className="p-8 card rounded-xl flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg primary-button flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-primary-cta-text" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Mantenimiento & Soporte</h3>
                <p className="text-base text-accent leading-relaxed">
                  Aseguramos la estabilidad, actualización continua y seguridad proactiva de tu infraestructura web.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* SECTORES SECTION */}
      <div data-webild-section="SectoresSection" id="sectores" className="">
        <div className="w-content-width mx-auto flex flex-col">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="px-3.5 py-1 card rounded text-xs uppercase tracking-wider font-semibold text-accent">
              Sectores
            </div>
            <TextAnimation
              text="Experiencia adaptada a diversos entornos de negocio"
              variant="slide-up"
              gradientText={false}
              tag="h2"
              className="text-3xl md:text-5xl font-bold text-foreground max-w-content-width"
            />
            <p className="text-base md:text-lg text-accent max-w-content-width text-balance">
              Colaboramos con organizaciones de múltiples industrias, adaptando nuestra metodología a las particularidades de cada sector.
            </p>
          </div>

          <ScrollReveal variant="fade-blur">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: 'Servicios Profesionales', desc: 'Despachos, consultoras y agencias' },
                { title: 'E-commerce & Retail', desc: 'Tiendas online y marcas de consumo' },
                { title: 'Salud & Bienestar', desc: 'Clínicas, centros y salud digital' },
                { title: 'Tecnología & SaaS', desc: 'Startups y plataformas software' },
              ].map((sector) => (
                <div key={sector.title} className="p-6 card rounded-xl flex flex-col gap-2 text-center items-center">
                  <CheckCircle2 className="w-8 h-8 text-primary-cta mb-2" />
                  <h3 className="text-lg font-bold text-foreground">{sector.title}</h3>
                  <p className="text-sm text-accent">{sector.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* PROCESO SECTION */}
      <div data-webild-section="ProcesoSection" id="proceso" className="">
        <div className="w-content-width mx-auto flex flex-col">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="px-3.5 py-1 card rounded text-xs uppercase tracking-wider font-semibold text-accent">
              Metodología
            </div>
            <TextAnimation
              text="Un proceso transparente y orientado a la excelencia"
              variant="slide-up"
              gradientText={true}
              tag="h2"
              className="text-3xl md:text-5xl font-bold text-foreground max-w-content-width"
            />
            <p className="text-base md:text-lg text-accent max-w-content-width text-balance">
              Trabajamos con etapas estructuradas para garantizar entregas en tiempo y forma, con total visibilidad para tu equipo.
            </p>
          </div>

          <ScrollReveal variant="slide-up">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Descubrimiento', desc: 'Análisis detallado de necesidades, público e investigación de mercado.' },
                { step: '02', title: 'Diseño & UX', desc: 'Creación de prototipos e interfaz gráfica enfocada en usabilidad.' },
                { step: '03', title: 'Desarrollo', desc: 'Programación limpia, integración de funciones y pruebas de rendimiento.' },
                { step: '04', title: 'Lanzamiento', desc: 'Despliegue controlado, optimización SEO y monitoreo posterior.' }
              ].map((item) => (
                <div key={item.step} className="p-8 card rounded-xl flex flex-col gap-4 relative">
                  <span className="text-4xl font-extrabold text-primary-cta opacity-80">{item.step}</span>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-accent leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* VENTAJAS SECTION */}
      <div data-webild-section="VentajasSection" id="ventajas" className="">
        <div className="w-content-width mx-auto flex flex-col">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="px-3.5 py-1 card rounded text-xs uppercase tracking-wider font-semibold text-accent">
              ¿Por qué Monix?
            </div>
            <TextAnimation
              text="Ventajas clave de colaborar con nosotros"
              variant="slide-up"
              gradientText={false}
              tag="h2"
              className="text-3xl md:text-5xl font-bold text-foreground max-w-content-width"
            />
            <p className="text-base md:text-lg text-accent max-w-content-width text-balance">
              Nos enfocamos en ser un socio estratégico a largo plazo, no un simple proveedor puntual.
            </p>
          </div>

          <ScrollReveal variant="fade-blur">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 card rounded-xl flex flex-col gap-4">
                <Zap className="w-10 h-10 text-primary-cta" />
                <h3 className="text-xl font-bold text-foreground">Atención 100% Directa</h3>
                <p className="text-base text-accent leading-relaxed">
                  Trato personalizado y comunicación clara sin intermediarios ni burocracia.
                </p>
              </div>

              <div className="p-8 card rounded-xl flex flex-col gap-4">
                <Users className="w-10 h-10 text-primary-cta" />
                <h3 className="text-xl font-bold text-foreground">Equipo Especializado</h3>
                <p className="text-base text-accent leading-relaxed">
                  Profesionales expertos en diseño, desarrollo web y estrategia digital.
                </p>
              </div>

              <div className="p-8 card rounded-xl flex flex-col gap-4">
                <ShieldCheck className="w-10 h-10 text-primary-cta" />
                <h3 className="text-xl font-bold text-foreground">Calidad Garantizada</h3>
                <p className="text-base text-accent leading-relaxed">
                  Sistemas seguros, optimizados y alineados con los estándares actuales de la web.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div data-webild-section="FaqSection" id="faq" className="">
        <div className="w-content-width mx-auto flex flex-col">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="px-3.5 py-1 card rounded text-xs uppercase tracking-wider font-semibold text-accent">
              Preguntas Frecuentes
            </div>
            <TextAnimation
              text="Resolvemos tus dudas principales"
              variant="slide-up"
              gradientText={true}
              tag="h2"
              className="text-3xl md:text-5xl font-bold text-foreground max-w-content-width"
            />
            <p className="text-base md:text-lg text-accent max-w-content-width text-balance">
              Respuestas rápidas a las consultas más habituales sobre nuestra forma de trabajar.
            </p>
          </div>

          <ScrollReveal variant="slide-up" className="max-w-content-width mx-auto w-full">
            <Accordion items={faqItems} className="w-full" />
          </ScrollReveal>
        </div>
      </div>

      {/* CONTACTO SECTION */}
      <div data-webild-section="ContactoSection" id="contacto" className="">
        <div className="w-content-width mx-auto flex flex-col">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="px-3.5 py-1 card rounded text-xs uppercase tracking-wider font-semibold text-accent">
              Contacto
            </div>
            <TextAnimation
              text="Estamos aquí para escucharte"
              variant="slide-up"
              gradientText={false}
              tag="h2"
              className="text-3xl md:text-5xl font-bold text-foreground max-w-content-width"
            />
            <p className="text-base md:text-lg text-accent max-w-content-width text-balance">
              Escríbenos directamente o déjanos un mensaje a través del formulario.
            </p>
          </div>

          <ScrollReveal variant="fade-blur">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
              <div className="flex flex-col gap-8 p-8 card rounded-xl">
                <h3 className="text-2xl font-bold text-foreground">Información de contacto</h3>
                <p className="text-base text-accent leading-relaxed">
                  Si deseas consultar sobre nuestros servicios o comentarnos tu idea, no dudes en ponerte en contacto.
                </p>

                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg primary-button flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary-cta-text" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-semibold text-accent">Correo electrónico</p>
                      <a href="mailto:hola@monixagency.es" className="text-lg font-medium text-foreground hover:underline">
                        hola@monixagency.es
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg primary-button flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary-cta-text" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-semibold text-accent">Horario de atención</p>
                      <p className="text-lg font-medium text-foreground">Lunes a Viernes: 09:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg primary-button flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary-cta-text" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-semibold text-accent">Ubicación</p>
                      <p className="text-lg font-medium text-foreground">Madrid, España</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 card rounded-xl flex flex-col gap-6">
                <h3 className="text-2xl font-bold text-foreground">Envíanos un mensaje</h3>
                {formSubmitted ? (
                  <div className="p-6 card rounded-lg flex flex-col items-center text-center gap-3">
                    <CheckCircle2 className="w-12 h-12 text-primary-cta" />
                    <h4 className="text-xl font-bold text-foreground">¡Mensaje enviado con éxito!</h4>
                    <p className="text-sm text-accent">
                      Gracias por contactar con Monix Agency. Te responderemos a la brevedad.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-foreground">Nombre completo</label>
                      <Input required placeholder="Tu nombre" className="w-full" />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-foreground">Correo electrónico</label>
                      <Input required type="email" placeholder="tu@email.com" className="w-full" />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-foreground">Mensaje</label>
                      <Textarea required rows={4} placeholder="¿En qué te podemos ayudar?"className="w-full" />
                    </div>

                    <Button text="Enviar mensaje" variant="primary" className="mt-2 w-full" />
                  </form>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}