/**
 * Sección de servicios con cuadrícula de 2 columnas y 5 tarjetas.
 * Incluye imagen de fondo con overlay, callout pill y CTA a WhatsApp.
 * @module components/sections/services-section
 */

import { useTranslation } from "react-i18next";

/** Icon SVG paths para cada servicio */
const SERVICE_ICONS = [
  // Servicio 1: Contabilidad (chart)
  "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  // Servicio 2: Informes (trending up)
  "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
  // Servicio 3: Presupuestos (dollar)
  "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  // Servicio 4: Análisis (search)
  "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  // Servicio 5: Apoyo (globe)
  "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
] as const;

const WHATSAPP_URL = "https://wa.me/573006221079";

/**
 * Sección de servicios con tarjetas en grid 2-col y llamada a la acción.
 */
export function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section
      id="servicios"
      className="relative bg-[#1B4332] py-16 lg:py-24 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="03-financial-clarity-business.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1B4332]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Circle Callout */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
            <span className="text-white font-semibold text-lg">
              {t("services_callout")}
            </span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column — servicios 1, 2, 3 */}
          <div className="space-y-6">
            {([1, 2, 3] as const).map((i) => (
              <ServiceCard
                key={i}
                iconPath={SERVICE_ICONS[i - 1]}
                title={t(`service_${i}_title`)}
                description={t(`service_${i}_desc`)}
              />
            ))}
          </div>

          {/* Right Column — servicios 4, 5 */}
          <div className="space-y-6">
            {([4, 5] as const).map((i) => (
              <ServiceCard
                key={i}
                iconPath={SERVICE_ICONS[i - 1]}
                title={t(`service_${i}_title`)}
                description={t(`service_${i}_desc`)}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#b8983f] text-[#0D2137] font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
          >
            {t("services_cta")}
          </a>
        </div>
      </div>
    </section>
  );
}

/** Props para la tarjeta de servicio individual */
interface ServiceCardProps {
  /** SVG path data del icono */
  iconPath: string;
  /** Título del servicio */
  title: string;
  /** Descripción corta del servicio */
  description: string;
}

/**
 * Tarjeta individual de servicio con icono dorado, título y descripción.
 */
function ServiceCard({ iconPath, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-[#C9A84C] rounded-full flex items-center justify-center flex-shrink-0">
          <svg
            className="w-6 h-6 text-[#0D2137]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={iconPath}
            />
          </svg>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
          <p className="text-white/80 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
