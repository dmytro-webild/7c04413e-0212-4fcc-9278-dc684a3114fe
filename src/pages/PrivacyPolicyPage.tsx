import React, { useEffect } from "react";
import PolicyContent from "@/components/sections/legal/PolicyContent";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PrivacyPolicyPage(): React.JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      heading: "1. Responsable del sitio web",
      content: [
        {
          type: "paragraph" as const,
          text: "Este sitio web pertenece a Monix Agency.",
        },
      ],
    },
    {
      heading: "2. Datos personales",
      content: [
        {
          type: "paragraph" as const,
          text: "Monix Agency no dispone de formularios de recogida de datos personales en su página web. Los visitantes pueden contactar mediante el enlace de correo electrónico disponible en el sitio web.",
        },
      ],
    },
    {
      heading: "3. Finalidad del tratamiento",
      content: [
        {
          type: "paragraph" as const,
          text: "Los datos personales que se reciban voluntariamente por correo electrónico se utilizarán únicamente para responder a las consultas recibidas y mantener la comunicación con el remitente.",
        },
      ],
    },
    {
      heading: "4. Cookies",
      content: [
        {
          type: "paragraph" as const,
          text: "Este sitio web no utiliza herramientas de seguimiento ni analítica propias. No obstante, podrían existir cookies técnicas o necesarias para el funcionamiento de la plataforma de alojamiento.",
        },
      ],
    },
    {
      heading: "5. Derechos de los usuarios",
      content: [
        {
          type: "paragraph" as const,
          text: "Los usuarios pueden solicitar información sobre sus datos personales, así como ejercer sus derechos de acceso, rectificación, supresión y otros derechos reconocidos por la normativa de protección de datos, escribiendo al correo electrónico de contacto de Monix Agency.",
        },
      ],
    },
    {
      heading: "6. Cambios en la política de privacidad",
      content: [
        {
          type: "paragraph" as const,
          text: "Monix Agency se reserva el derecho de actualizar esta política para adaptarla a posibles cambios legales o técnicos.",
        },
      ],
    },
  ];

  return (
    <ScrollReveal variant="fade">
      <PolicyContent
        title="Política de privacidad – Monix Agency"
        sections={sections}
      />
    </ScrollReveal>
  );
}
