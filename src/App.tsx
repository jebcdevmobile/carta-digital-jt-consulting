/**
 * Punto de entrada de la aplicación JT Consulting.
 * Ensambla todos los componentes de sección en una sola página.
 * @module App
 */

import { Navbar } from "./components/layout/navbar";
import { WhatsappButton } from "./components/ui/whatsapp-button";
import { HeroSection } from "./components/sections/hero-section";
import { ServicesSection } from "./components/sections/services-section";
import { TrustBarSection } from "./components/sections/trust-bar-section";
import { Footer } from "./components/layout/footer";

export const App = () => {
  return (
    <>
      <Navbar />
      <WhatsappButton />
      <HeroSection />
      <ServicesSection />
      <TrustBarSection />
      <Footer />
    </>
  );
};
