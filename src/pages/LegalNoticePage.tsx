import React, { useEffect } from "react";
import PolicyContent from "@/components/sections/legal/PolicyContent";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function LegalNoticePage(): React.JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      heading: "1. DATOS IDENTIFICATIVOS",
      content: [
        {
          type: "paragraph" as const,
          text: "En cumplimiento de lo establecido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios de los siguientes datos identificativos:",
        },
        {
          type: "list" as const,
          items: [
            "Nombre comercial: MonixAgency",
            "Titular: Jorge Hidalgo",
            "NIF: 46716959A",
            "Domicilio: Badalona, Barcelona, Barcelona",
            "Correo electrónico: hola@monixagency.com",
            "Sitio web: www.monixagency.com",
          ],
        },
        {
          type: "paragraph" as const,
          text: "MonixAgency es una marca comercial dedicada al diseño, desarrollo y creación de páginas web, así como a la prestación de servicios digitales relacionados.",
        },
      ],
    },
    {
      heading: "2. OBJETO DEL SITIO WEB",
      content: [
        {
          type: "paragraph" as const,
          text: "El presente sitio web tiene como finalidad ofrecer información sobre los servicios de MonixAgency, mostrar sus proyectos y facilitar el contacto con potenciales clientes interesados en contratar sus servicios.",
        },
        {
          type: "paragraph" as const,
          text: "El acceso y navegación por este sitio web atribuye la condición de usuario e implica la aceptación de las condiciones recogidas en el presente Aviso Legal.",
        },
      ],
    },
    {
      heading: "3. CONDICIONES DE USO",
      content: [
        {
          type: "paragraph" as const,
          text: "El usuario se compromete a utilizar este sitio web de forma adecuada, respetando la legislación vigente, la buena fe y el orden público.",
        },
        {
          type: "paragraph" as const,
          text: "Queda prohibida cualquier utilización de los contenidos o servicios de la web con fines ilícitos o que pueda perjudicar los derechos e intereses del titular o de terceros.",
        },
        {
          type: "paragraph" as const,
          text: "El titular se reserva el derecho a modificar, actualizar o eliminar los contenidos del sitio web cuando lo considere necesario.",
        },
      ],
    },
    {
      heading: "4. PROPIEDAD INTELECTUAL E INDUSTRIAL",
      content: [
        {
          type: "paragraph" as const,
          text: "Los contenidos de este sitio web, incluyendo textos, imágenes, diseños, elementos gráficos, logotipos y demás materiales, están protegidos por la normativa aplicable en materia de propiedad intelectual e industrial.",
        },
        {
          type: "paragraph" as const,
          text: "Los contenidos originales pertenecen a su titular o se utilizan con las autorizaciones o licencias correspondientes.",
        },
        {
          type: "paragraph" as const,
          text: "Queda prohibida su reproducción, distribución, transformación o utilización comercial sin la autorización del titular o de los respectivos titulares de derechos, salvo en los casos legalmente permitidos.",
        },
      ],
    },
    {
      heading: "5. RESPONSABILIDAD",
      content: [
        {
          type: "paragraph" as const,
          text: "El titular procura que la información publicada en el sitio web sea correcta, actualizada y accesible.",
        },
        {
          type: "paragraph" as const,
          text: "No obstante, no garantiza la ausencia de errores, interrupciones o incidencias técnicas.",
        },
        {
          type: "paragraph" as const,
          text: "El titular no será responsable de los daños derivados de circunstancias ajenas a su control, sin perjuicio de las responsabilidades que legalmente le correspondan.",
        },
      ],
    },
    {
      heading: "6. ENLACES EXTERNOS",
      content: [
        {
          type: "paragraph" as const,
          text: "Este sitio web puede contener enlaces a páginas de terceros.",
        },
        {
          type: "paragraph" as const,
          text: "MonixAgency no controla sus contenidos, servicios ni políticas de privacidad y no asume responsabilidad por ellos, salvo en los supuestos legalmente previstos.",
        },
        {
          type: "paragraph" as const,
          text: "Se recomienda a los usuarios consultar las condiciones legales y políticas de privacidad de los sitios externos.",
        },
      ],
    },
    {
      heading: "7. PROTECCIÓN DE DATOS PERSONALES",
      content: [
        {
          type: "paragraph" as const,
          text: "Los datos personales que los usuarios faciliten al contactar con MonixAgency serán tratados de conformidad con la normativa vigente en materia de protección de datos.",
        },
        {
          type: "paragraph" as const,
          text: "Para obtener información detallada sobre el tratamiento de datos personales, los usuarios pueden consultar la Política de Privacidad del sitio web.",
        },
      ],
    },
    {
      heading: "8. LEGISLACIÓN APLICABLE",
      content: [
        {
          type: "paragraph" as const,
          text: "El presente Aviso Legal se rige por la legislación española.",
        },
        {
          type: "paragraph" as const,
          text: "Las controversias que pudieran surgir se someterán a los juzgados y tribunales competentes conforme a la normativa aplicable, respetando en todo caso los derechos que correspondan a los consumidores y usuarios.",
        },
      ],
    },
  ];

  return (
    <ScrollReveal variant="fade">
      <PolicyContent
        title="Aviso Legal – Monix Agency"
        subtitle="Última actualización: 7 de noviembre de 2026
"
        sections={sections}
      />
    </ScrollReveal>
  );
}
