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
      heading: "4. COOKIES DE ANÁLISIS Y PUBLICIDAD",
      content: [
        {
          type: "paragraph" as const,
          text: "MonixAgency no utiliza cookies de análisis, rastreo, publicidad comportamental ni elaboración de perfiles de usuario.",
        },
        {
          type: "paragraph" as const,
          text: "En el momento actual, la navegación por este sitio web no implica la instalación de cookies destinadas al seguimiento ni a la obtención de datos estadísticos o de medición de audiencia.",
        },
      ],
    },
    {
      heading: "5. BASE JURÍDICA Y CONSENTIMIENTO (LSSI-CE)",
      content: [
        {
          type: "paragraph" as const,
          text: "De conformidad con el artículo 22.2 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), las cookies estrictamente necesarias para permitir el funcionamiento del sitio web o prestar un servicio expresamente solicitado por el usuario están exceptuadas de la obligación de obtener su consentimiento.",
        },
        {
          type: "paragraph" as const,
          text: "Por este motivo, las cookies utilizadas exclusivamente para estas finalidades técnicas pueden instalarse sin solicitar consentimiento previo.",
        },
        {
          type: "paragraph" as const,
          text: "En caso de que MonixAgency incorpore en el futuro cookies de análisis, publicidad u otras tecnologías que requieran consentimiento, se informará previamente a los usuarios y se habilitarán los mecanismos necesarios para aceptar, rechazar o configurar su utilización.",
        },
      ],
    },
    {
      heading: "6. CÓMO CONFIGURAR O ELIMINAR LAS COOKIES",
      content: [
        {
          type: "paragraph" as const,
          text: "El usuario puede permitir, bloquear o eliminar las cookies almacenadas en su dispositivo mediante las opciones de configuración de su navegador.",
        },
        {
          type: "paragraph" as const,
          text: "La desactivación de determinadas cookies técnicas podría afectar al funcionamiento o visualización de algunas funcionalidades del sitio web.",
        },
        {
          type: "paragraph" as const,
          text: "A continuación se indican las opciones de configuración de los principales navegadores:",
        },
        {
          type: "list" as const,
          items: [
            "Google Chrome: Configuración > Privacidad y seguridad > Cookies de terceros.",
            "Mozilla Firefox: Ajustes > Privacidad y seguridad > Cookies y datos del sitio.",
            "Safari: Ajustes o Preferencias > Privacidad.",
            "Microsoft Edge: Configuración > Cookies y permisos del sitio.",
          ],
        },
      ],
    },
    {
      heading: "7. MODIFICACIONES DE LA POLÍTICA DE COOKIES",
      content: [
        {
          type: "paragraph" as const,
          text: "MonixAgency podrá modificar la presente Política de Cookies en función de nuevas exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos (AEPD).",
        },
        {
          type: "paragraph" as const,
          text: "Cuando se produzcan cambios significativos en esta Política de Cookies se informará al usuario mediante un aviso en el sitio web y se recomienda a los usuarios revisar periódicamente esta información.",
        },
      ],
    },
    {
      heading: "8. DATOS DE CONTACTO",
      content: [
        {
          type: "paragraph" as const,
          text: "Si tiene cualquier duda o consulta sobre esta Política de Cookies o sobre el uso de cookies en el sitio web, puede contactar con MonixAgency a través de los siguientes datos:",
        },
        {
          type: "list" as const,
          items: [
            "Titular: Jorge Hidalgo (MonixAgency)",
            "NIF: 46716959A",
            "Domicilio: Badalona, Barcelona",
            "Correo electrónico: hola@monixagency.com",
          ],
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
