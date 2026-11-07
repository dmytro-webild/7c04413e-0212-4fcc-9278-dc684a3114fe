import React, { useEffect } from "react";
import PolicyContent from "@/components/sections/legal/PolicyContent";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CookiePolicyPage(): React.JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      heading: "1. ¿QUÉ SON LAS COOKIES?",
      content: [
        {
          type: "paragraph" as const,
          text: "Una cookie es un pequeño archivo de texto que un sitio web almacena en el navegador del usuario al navegar por sus páginas. Las cookies permiten que el sitio web recuerde información sobre su visita, como su idioma preferido y otras opciones de configuración, para facilitar su próxima visita y hacer que el sitio le resulte más útil.",
        },
        {
          type: "paragraph" as const,
          text: "Además de las cookies, pueden utilizarse otras tecnologías similares como almacenamiento local (local storage) o identificadores técnicos para garantizar la funcionalidad y seguridad de la página web.",
        },
      ],
    },
    {
      heading: "2. TIPOS DE COOKIES QUE UTILIZAMOS",
      content: [
        {
          type: "paragraph" as const,
          text: "En Monix Agency únicamente utilizamos cookies y tecnologías de almacenamiento estrictamente necesarias para el correcto funcionamiento del sitio web.",
        },
        {
          type: "paragraph" as const,
          text: "Las categorías de cookies utilizadas son:",
        },
        {
          type: "list" as const,
          items: [
            "Cookies técnicas y de funcionamiento: Permiten la navegación a través del sitio web y el uso de las diferentes opciones o servicios que en él existen, como controlar el tráfico y la comunicación de datos, recordar elementos de configuración o gestionar el consentimiento de cookies.",
            "Almacenamiento preferencial local: Se utiliza exclusivamente para recordar la aceptación o estado de aviso de privacidad y preferencias básicas de navegación.",
          ],
        },
        {
          type: "paragraph" as const,
          text: "Este sitio web no utiliza cookies publicitarias, de perfilado ni de analítica masiva de terceros que rastreen la actividad del usuario a través de diferentes sitios web.",
        },
      ],
    },
    {
      heading: "3. COOKIES DE TERCEROS E INFRAESTRUCTURA",
      content: [
        {
          type: "paragraph" as const,
          text: "El sitio web se aloja en infraestructura provista por Webild Inc. En la carga de recursos técnicos (fuentes, elementos multimedia o scripts de renderizado) pueden emplearse cookies técnicas de red o infraestructura estrictamente orientadas a garantizar la velocidad, estabilidad y seguridad de la conexión.",
        },
      ],
    },
    {
      heading: "4. GESTIÓN Y CONFIGURACIÓN DE COOKIES DESDE EL NAVEGADOR",
      content: [
        {
          type: "paragraph" as const,
          text: "El usuario puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones de su navegador de Internet. En caso de que no permita la instalación de cookies necesarias en su navegador, es posible que no pueda acceder a algunas de las secciones de nuestro sitio web o que este no funcione correctamente.",
        },
        {
          type: "paragraph" as const,
          text: "A continuación le facilitamos información sobre cómo gestionar o desactivar cookies en los principales navegadores:",
        },
        {
          type: "list" as const,
          items: [
            "Google Chrome: Configuración > Privacidad y seguridad > Cookies y otros datos de sitios.",
            "Mozilla Firefox: Ajustes > Privacidad & Seguridad > Cookies y datos del sitio.",
            "Safari (macOS / iOS): Preferencias / Ajustes > Privacidad > Bloquear todas las cookies.",
            "Microsoft Edge: Configuración > Cookies y permisos del sitio > Administrar y eliminar cookies.",
          ],
        },
      ],
    },
    {
      heading: "5. MODIFICACIONES DE LA POLÍTICA DE COOKIES",
      content: [
        {
          type: "paragraph" as const,
          text: "Monix Agency podrá modificar la presente Política de Cookies en función de nuevas exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos (AEPD).",
        },
        {
          type: "paragraph" as const,
          text: "Cuando se produzcan cambios significativos en esta Política de Cookies se informará al usuario mediante un aviso en el sitio web.",
        },
      ],
    },
    {
      heading: "6. CONTACTO",
      content: [
        {
          type: "paragraph" as const,
          text: "Si tiene dudas sobre esta Política de Cookies, puede ponerse en contacto con Monix Agency a través de:",
        },
        {
          type: "list" as const,
          items: [
            "Nombre comercial: MonixAgency",
            "Titular: Jorge Hidalgo",
            "Correo electrónico: hola@monixagency.com",
            "Ubicación: Badalona, Barcelona",
          ],
        },
      ],
    },
  ];

  return (
    <ScrollReveal variant="fade">
      <PolicyContent
        title="Política de Cookies – Monix Agency"
        subtitle="Última actualización: 7 de noviembre de 2026"
        sections={sections}
      />
    </ScrollReveal>
  );
}
