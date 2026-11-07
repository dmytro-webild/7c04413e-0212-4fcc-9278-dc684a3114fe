import React, { useEffect } from "react";
import PolicyContent from "@/components/sections/legal/PolicyContent";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function LegalNoticePage(): React.JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      heading: "1. Datos identificativos",
      content: [
        {
          type: "paragraph" as const,
          text: "En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se facilitan a continuación los datos de información general de este sitio web:",
        },
        {
          type: "list" as const,
          items: [
            "Denominación social: Monix Agency",
            "Correo electrónico de contacto: hola@monixagency.com",
            "Actividad: Servicios de agencia y desarrollo web",
          ],
        },
      ],
    },
    {
      heading: "2. Términos y condiciones de uso",
      content: [
        {
          type: "paragraph" as const,
          text: "El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios facilitados de conformidad con la legislación aplicable, la buena fe y el orden público.",
        },
      ],
    },
    {
      heading: "3. Propiedad intelectual e industrial",
      content: [
        {
          type: "paragraph" as const,
          text: "Todos los contenidos de este sitio web, incluyendo textos, diseños, marcas, logotipos, elementos gráficos, imágenes y código fuente, están protegidos por los derechos de propiedad intelectual e industrial correspondientes a Monix Agency o a sus respectivos licenciantes.",
        },
        {
          type: "paragraph" as const,
          text: "Queda prohibida la reproducción, distribución, comunicación pública o transformación de dichos contenidos sin la autorización previa y por escrito de Monix Agency.",
        },
      ],
    },
    {
      heading: "4. Exclusión de responsabilidad",
      content: [
        {
          type: "paragraph" as const,
          text: "Monix Agency no se hace responsable de los daños o perjuicios de cualquier naturaleza que pudieran derivarse de interferencias, omisiones, interrupciones, virus informáticos o desconexiones en el funcionamiento del sistema electrónico, motivados por causas ajenas a la entidad.",
        },
      ],
    },
    {
      heading: "5. Enlaces a terceros",
      content: [
        {
          type: "paragraph" as const,
          text: "En caso de que en el sitio web se dispusiesen enlaces o hipervínculos hacia otros sitios de Internet, Monix Agency no ejercerá ningún tipo de control sobre dichos sitios y contenidos, ni asumirá responsabilidad alguna por los contenidos de ningún enlace perteneciente a un sitio web ajeno.",
        },
      ],
    },
    {
      heading: "6. Legislación aplicable y jurisdicción",
      content: [
        {
          type: "paragraph" as const,
          text: "La relación entre Monix Agency y el usuario se regirá por la normativa española vigente. Cualquier controversia se someterá a los juzgados y tribunales del domicilio que corresponda conforme a la legislación aplicable.",
        },
      ],
    },
  ];

  return (
    <ScrollReveal variant="fade">
      <PolicyContent
        title="Aviso Legal – Monix Agency"
        sections={sections}
      />
    </ScrollReveal>
  );
}
