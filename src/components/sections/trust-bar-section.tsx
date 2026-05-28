/**
 * Barra de confianza con 3 columnas: icono emoji + título + descripción.
 * @module components/sections/trust-bar-section
 */

import { useTranslation } from "react-i18next";

/** Datos de los ítems de confianza */
const TRUST_ITEMS = [
  { emoji: "🛡️", titleKey: "trust_1_title", descKey: "trust_1_desc" },
  { emoji: "⏰", titleKey: "trust_2_title", descKey: "trust_2_desc" },
  { emoji: "💬", titleKey: "trust_3_title", descKey: "trust_3_desc" },
] as const;

/**
 * Sección de confianza con 3 indicadores de valor.
 */
export function TrustBarSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#1B4332] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8">
          {TRUST_ITEMS.map((item) => (
            <div key={item.titleKey} className="text-center sm:text-left">
              <div className="text-3xl mb-3">{item.emoji}</div>
              <h4 className="text-white font-bold text-lg mb-2">
                {t(item.titleKey)}
              </h4>
              <p className="text-white/70 text-sm">{t(item.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
