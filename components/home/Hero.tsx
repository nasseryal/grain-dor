"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

// Section hero — plein écran avec image de fond et accroche
export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Image de fond */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      {/* Overlay sombre pour le contraste */}
      <div className="absolute inset-0 z-0 bg-black/50" />

      {/* Contenu */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          className="font-body text-sand-light/80 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.3em] uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Torréfacteur artisanal — Paris
        </motion.p>

        <motion.h1
          className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          L&apos;art de la torréfaction artisanale
        </motion.h1>

        <motion.p
          className="font-body text-sand-light/90 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Des grains d&apos;exception sélectionnés aux quatre coins du monde, torréfiés avec passion dans notre atelier parisien.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button href="/nos-cafes" variant="outline" size="lg" className="border-terracotta text-terracotta hover:bg-terracotta hover:text-cream">
            Découvrir nos cafés
          </Button>
          <Button href="/reserver" variant="outline" size="lg" className="border-cream text-cream hover:bg-cream hover:text-brown">
            Réserver une salle
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
