import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarFullscreenStatic from '@/components/ui/NavbarFullscreenStatic';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Servicios",
    "href": "#servicios"
  },
  {
    "name": "Proceso",
    "href": "#proceso"
  },
  {
    "name": "Sectores",
    "href": "#sectores"
  },
  {
    "name": "Preguntas frecuentes",
    "href": "#faq"
  },
  {
    "name": "Contacto",
    "href": "#contacto"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Problema",
    "href": "#problema"
  }
];

  return (
    <StyleProvider buttonVariant="bubble" siteBackground="floatingGradient" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFullscreenStatic
      logo="Monix Agency"
      ctaButton={{
        text: "Pide tu presupuesto",
        href: "#contacto",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleMedia
      brand="Monix Agency"
      columns={[
        {
          title: "Navegación",
          items: [
            {
              label: "Servicios",
              href: "#servicios",
            },
            {
              label: "Proceso",
              href: "#proceso",
            },
            {
              label: "Contacto",
              href: "#contacto",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Aviso legal",
              href: "#",
            },
            {
              label: "Privacidad",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2026 Monix Agency. Todos los derechos reservados."
      links={[
        {
          label: "hola@monixagency.es",
          href: "mailto:hola@monixagency.es",
        },
      ]}
      imageSrc="https://images.pexels.com/photos/12882794/pexels-photo-12882794.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
