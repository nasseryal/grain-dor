"use client";

import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

// Section teaser réservation — fond atmosphérique + CTA
export default function ReservationTeaser() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Fond avec image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/reservation-bg.jpg')" }}
      />
      <div className="absolute inset-0 z-0 bg-black/60" />

      {/* Contenu */}
      <AnimatedSection className="relative z-10 text-center max-w-2xl mx-auto">
        <p className="font-body text-sand-light/70 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.3em] uppercase mb-4">
          Espaces privatifs
        </p>
        <h2 className="font-playfair text-2xl sm:text-3xl md:text-5xl font-bold text-cream mb-6">
          Réservez votre espace dégustation
        </h2>
        <p className="font-body text-sand-light/80 text-base sm:text-lg mb-8 sm:mb-10 max-w-lg mx-auto">
          Trois espaces uniques pour vos dégustations privées, réunions d&apos;affaires ou événements entre amis.
        </p>
        <Button href="/reserver" variant="secondary" size="lg">
          Réserver maintenant
        </Button>
      </AnimatedSection>
    </section>
  );
}
