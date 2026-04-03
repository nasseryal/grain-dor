"use client";

import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

// Section teaser "Notre histoire" — split image/texte
export default function AboutTeaser() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image placeholder */}
        <AnimatedSection className="w-full md:w-1/2">
          <div
            className="w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-2xl bg-cover bg-center"
            style={{ backgroundImage: "url('/images/about.jpg')" }}
          />
        </AnimatedSection>

        {/* Texte */}
        <AnimatedSection className="w-full md:w-1/2" delay={0.2}>
          <p className="font-body text-xs text-terracotta uppercase tracking-[0.3em] mb-3">
            Notre histoire
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brown mb-6">
            Du grain vert à votre tasse
          </h2>
          <p className="font-body text-brown-light leading-relaxed mb-4">
            Depuis 2018, nous parcourons le monde à la rencontre de producteurs passionnés. Chaque grain est sélectionné à la main, puis torréfié dans notre atelier du 11e arrondissement de Paris.
          </p>
          <p className="font-body text-brown-light leading-relaxed mb-8">
            Notre philosophie : respect du producteur, fraîcheur absolue et torréfaction sur mesure pour révéler le meilleur de chaque terroir.
          </p>
          <Button href="/notre-histoire" variant="outline">
            En savoir plus
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
