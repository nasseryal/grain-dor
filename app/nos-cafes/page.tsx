"use client";

import { useState, useMemo } from "react";
import { products } from "@/data/products";
import { RoastLevel, TastingNote } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import FilterBar from "@/components/shop/FilterBar";
import ProductCard from "@/components/shop/ProductCard";
import AnimatedSection from "@/components/ui/AnimatedSection";

// Page boutique — 12 cafés avec filtres
export default function NosCafes() {
  const [activeRoast, setActiveRoast] = useState<RoastLevel | null>(null);
  const [activeNote, setActiveNote] = useState<TastingNote | null>(null);

  // Filtre les produits selon les critères actifs
  const filtered = useMemo(() => {
    return products.filter((product) => {
      if (activeRoast && product.roastLevel !== activeRoast) return false;
      if (activeNote && !product.tastingNotes.includes(activeNote)) return false;
      return true;
    });
  }, [activeRoast, activeNote]);

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Nos Cafés"
            subtitle="12 origines d'exception, torréfiées dans notre atelier parisien"
          />
        </AnimatedSection>

        <FilterBar
          activeRoast={activeRoast}
          activeNote={activeNote}
          onRoastChange={setActiveRoast}
          onNoteChange={setActiveNote}
        />

        {/* Grille de produits */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 0.05}>
                <ProductCard product={product} />
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="font-body text-brown-light text-lg">
              Aucun café ne correspond à ces critères.
            </p>
            <button
              onClick={() => { setActiveRoast(null); setActiveNote(null); }}
              className="mt-4 font-body text-terracotta hover:underline"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
