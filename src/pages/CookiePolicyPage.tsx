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
          text: "Las cookies son pequeños archivos de información que se almacenan en el dispositivo del usuario cuando visita determinadas páginas web.",
        },
        {
          type: "paragraph" as const,
          text: "Permiten, entre otras funciones, facilitar la navegación, recordar determinadas preferencias y garantizar el correcto funcionamiento de un sitio web.",
        },
        {
          type: "paragraph" as const,
          text: "Además de las cookies, pueden utilizarse tecnologías similares, como el almacenamiento local del navegador (local storage), que permiten conservar determinada información técnica o preferencias de navegación.",
        },
      ],
    },
    {
      heading: "2. ¿QUÉ TIPOS DE COOKIES UTILIZAMOS?",
      content: [
        {
          type: "paragraph" as const,
          text: "MonixAgency utiliza, según la configuración técnica facilitada por su proveedor de desarrollo web, cookies y tecnologías de almacenamiento estrictamente necesarias para el funcionamiento del sitio web.",
        },
        {
          type: "paragraph" as const,
          text: "Estas tecnologías se clasifican en las siguientes categorías:",
        },
        {
          type: "list" as const,
          items: [
            "Cookies técnicas o necesarias: Permiten la navegación por el sitio web y la utilización de sus funcionalidades básicas. Pueden emplearse para garantizar la seguridad de la conexión, gestionar el tráfico, permitir la correcta visualización de los contenidos y mantener la estabilidad de los servicios.",
            "Almacenamiento de preferencias: Permite recordar determinadas opciones de configuración del usuario, como las preferencias relacionadas con el aviso de cookies y privacidad. Su finalidad es evitar que el usuario tenga que configurar repetidamente las mismas opciones durante su navegación.",
          ],
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
          text: "El usuario puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones de su navegador de Internet. En caso de que no permita la instalación de cookies necesarias en su navegador, es posible que no pueda acceder a algunas de las secciones del sitio web o que este no funcione correctamente.",
        },
        {
          type: "paragraph" as const,
          text: "A continuación se facilita información sobre cómo gestionar o desactivar cookies en los principales navegadores:",
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
          text: "MonixAgency podrá modificar la presente Política de Cookies en función de nuevas exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos (AEPD).",
        },
        {
          type: "paragraph" as const,
          text: "Cuando se produzcan cambios significativos en esta Política de Cookies se informará al usuario mediante un aviso en el sitio web.",
        },
      ],
    },
  ];

  return (
    <ScrollReveal variant="fade">
      <PolicyContent
        title="Política de Cookies – MonixAgency"
        subtitle="Última actualización: 7 de noviembre de 2026"
        sections={sections}
      />
    </ScrollReveal>
  );
}
