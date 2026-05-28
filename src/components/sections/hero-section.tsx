/**
 * Sección hero con imagen de ancho completo.
 * La imagen cambia según el idioma activo (EN → 01-financial-clarity.jpeg, ES → 02-claridad-finaciera.jpeg).
 * @module components/sections/hero-section
 */

import { useTranslation } from "react-i18next";

/**
 * Hero de la página con imagen a ancho completo que se adapta al idioma.
 */
export function HeroSection() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const imgSrc =
    lang === "es"
      ? "02-claridad-finaciera.jpeg"
      : "01-financial-clarity.jpeg";

  const imgAlt =
    lang === "es"
      ? "Mujer profesional trabajando en finanzas"
      : "Professional woman working on finances";

  return (
    <section className="bg-[#0D2137]">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="w-full h-auto block"
        loading="eager"
      />
    </section>
  );
}
