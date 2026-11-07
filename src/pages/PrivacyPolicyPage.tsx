import React, { useEffect } from "react";
import PolicyContent from "@/components/sections/legal/PolicyContent";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PrivacyPolicyPage(): React.JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      heading: "1. RESPONSABLE DEL TRATAMIENTO",
      content: [
        {
          type: "paragraph" as const,
          text: "En cumplimiento del Reglamento (UE) 2016/679, General de Protección de Datos (RGPD), y de la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales, se informa a los usuarios sobre el tratamiento de sus datos personales.",
        },
        {
          type: "paragraph" as const,
          text: "El responsable del tratamiento es:",
        },
        {
          type: "list" as const,
          items: [
            "Nombre comercial: MonixAgency",
            "Responsable: Jorge Hidalgo",
            "NIF: 46716959A",
            "Domicilio: Badalona, Barcelona",
            "Correo electrónico: hola@monixagency.com",
          ],
        },
      ],
    },
    {
      heading: "2. DATOS PERSONALES RECOPILADOS",
      content: [
        {
          type: "paragraph" as const,
          text: "MonixAgency podrá tratar los datos personales que los usuarios faciliten voluntariamente al contactar mediante correo electrónico.",
        },
        {
          type: "paragraph" as const,
          text: "Estos datos pueden incluir:",
        },
        {
          type: "list" as const,
          items: [
            "Nombre y apellidos.",
            "Dirección de correo electrónico.",
            "Teléfono, si el usuario lo facilita voluntariamente.",
            "Información relacionada con los servicios solicitados.",
            "Cualquier otro dato incluido voluntariamente en las comunicaciones.",
          ],
        },
        {
          type: "paragraph" as const,
          text: "Asimismo, durante la navegación pueden tratarse determinados datos técnicos, como la dirección IP o información del navegador, cuando resulte necesario para el funcionamiento y la seguridad del sitio web.",
        },
      ],
    },
    {
      heading: "3. FINALIDAD DEL TRATAMIENTO",
      content: [
        {
          type: "paragraph" as const,
          text: "Los datos personales facilitados serán utilizados para las siguientes finalidades:",
        },
        {
          type: "list" as const,
          items: [
            "a) Atender las consultas y solicitudes de información recibidas.",
            "b) Elaborar y enviar presupuestos relacionados con los servicios de diseño y desarrollo web.",
            "c) Gestionar la contratación y prestación de los servicios solicitados.",
            "d) Mantener las comunicaciones necesarias con los clientes.",
            "e) Cumplir las obligaciones legales, administrativas, fiscales y contables que correspondan.",
          ],
        },
        {
          type: "paragraph" as const,
          text: "Los datos no se utilizarán para enviar comunicaciones comerciales no solicitadas.",
        },
      ],
    },
    {
      heading: "4. LEGITIMACIÓN DEL TRATAMIENTO",
      content: [
        {
          type: "paragraph" as const,
          text: "El tratamiento de los datos personales se fundamenta, según corresponda, en las siguientes bases jurídicas:",
        },
        {
          type: "list" as const,
          items: [
            "Aplicación de medidas precontractuales: para atender solicitudes de presupuestos o información sobre servicios.",
            "Ejecución de un contrato: para gestionar los servicios contratados.",
            "Cumplimiento de obligaciones legales: para atender obligaciones fiscales, contables y administrativas.",
            "Interés legítimo: para atender comunicaciones generales y garantizar la seguridad del sitio web, cuando resulte aplicable y prevalezcan los derechos e intereses del usuario.",
          ],
        },
        {
          type: "paragraph" as const,
          text: "Cuando un tratamiento requiera consentimiento, este se solicitará previamente.",
        },
      ],
    },
    {
      heading: "5. CONSERVACIÓN DE LOS DATOS",
      content: [
        {
          type: "paragraph" as const,
          text: "Los datos personales se conservarán durante el tiempo necesario para atender las solicitudes realizadas y, en su caso, mantener la relación contractual.",
        },
        {
          type: "paragraph" as const,
          text: "Una vez finalizada dicha relación, los datos se conservarán únicamente durante los plazos exigidos por la legislación aplicable o mientras puedan derivarse responsabilidades legales.",
        },
        {
          type: "paragraph" as const,
          text: "Cuando corresponda, los datos serán eliminados o bloqueados de acuerdo con la normativa vigente.",
        },
      ],
    },
    {
      heading: "6. DESTINATARIOS DE LOS DATOS",
      content: [
        {
          type: "paragraph" as const,
          text: "Los datos personales no se venderán ni comunicarán a terceros con fines comerciales.",
        },
        {
          type: "paragraph" as const,
          text: "No obstante, determinados proveedores tecnológicos podrán acceder a los datos cuando sea necesario para prestar servicios de alojamiento web, correo electrónico, mantenimiento técnico u otros servicios auxiliares.",
        },
        {
          type: "paragraph" as const,
          text: "Estos proveedores tratarán los datos conforme a las obligaciones legales y contractuales que les resulten aplicables.",
        },
        {
          type: "paragraph" as const,
          text: "También podrán comunicarse datos a las administraciones públicas cuando exista una obligación legal.",
        },
      ],
    },
    {
      heading: "7. TRANSFERENCIAS INTERNACIONALES",
      content: [
        {
          type: "paragraph" as const,
          text: "El sitio web ha sido creado mediante la plataforma Webild, desarrollada por Webild Inc., entidad establecida en Estados Unidos.",
        },
        {
          type: "paragraph" as const,
          text: "En función de la infraestructura y los servicios utilizados, determinados datos técnicos o personales podrían ser tratados fuera del Espacio Económico Europeo.",
        },
        {
          type: "paragraph" as const,
          text: "Cuando se produzcan transferencias internacionales de datos personales, deberán realizarse de conformidad con el RGPD y contar con las garantías legalmente exigidas.",
        },
        {
          type: "paragraph" as const,
          text: "Antes de la publicación de esta política se verificará qué proveedores intervienen efectivamente en el funcionamiento del sitio web y qué garantías se aplican a las transferencias internacionales.",
        },
      ],
    },
    {
      heading: "8. DERECHOS DE LOS USUARIOS",
      content: [
        {
          type: "paragraph" as const,
          text: "Los usuarios podrán ejercer, cuando corresponda, los siguientes derechos:",
        },
        {
          type: "list" as const,
          items: [
            "Acceso a sus datos personales.",
            "Rectificación de los datos inexactos.",
            "Supresión de sus datos.",
            "Oposición al tratamiento.",
            "Limitación del tratamiento.",
            "Portabilidad de los datos.",
            "Retirada del consentimiento previamente otorgado, sin afectar a la licitud del tratamiento anterior.",
          ],
        },
        {
          type: "paragraph" as const,
          text: "Para ejercer estos derechos, podrán enviar una solicitud al correo electrónico: hola@monixagency.com",
        },
        {
          type: "paragraph" as const,
          text: "Asimismo, si consideran que sus derechos han sido vulnerados, podrán presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD), a través de su página oficial: www.aepd.es.",
        },
      ],
    },
    {
      heading: "9. SEGURIDAD DE LOS DATOS",
      content: [
        {
          type: "paragraph" as const,
          text: "MonixAgency adoptará las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales recopilados y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología y la naturaleza de los datos almacenados.",
        },
      ],
    },
    {
      heading: "10. MODIFICACIONES DE LA POLÍTICA DE PRIVACIDAD",
      content: [
        {
          type: "paragraph" as const,
          text: "MonixAgency se reserva el derecho de modificar la presente Política de Privacidad para adaptarla a novedades legislativas, jurisprudenciales o cambios en sus actividades.",
        },
        {
          type: "paragraph" as const,
          text: "Cualquier modificación será publicada en este sitio web, indicando la fecha de la última actualización.",
        },
      ],
    },
  ];

  return (
    <ScrollReveal variant="fade">
      <PolicyContent
        title="Política de Privacidad – MonixAgency"
        subtitle="Última actualización: 7 de noviembre de 2026"
        sections={sections}
      />
    </ScrollReveal>
  );
}
