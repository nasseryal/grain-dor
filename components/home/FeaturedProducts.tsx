"use client";

import { products } from "@/data/products";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

// Couleurs des notes de dégustation
const noteColors: Record<string, string> = {
  "fruité": "bg-red-100 text-red-700",
  "chocolaté": "bg-amber-100 text-amber-800",
  "noisette": "bg-yellow-100 text-yellow-800",
  "floral": "bg-purple-100 text-purple-700",
  "épicé": "bg-orange-100 text-orange-700",
  "caramel": "bg-amber-50 text-amber-700",
};

// Section produits vedettes — les 4 premiers cafés
export default function FeaturedProducts() {
  const featured = products.slice(0, 4);

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Nos cafés vedettes"
            subtitle="Une sélection de nos torréfactions les plus appréciées"
          />
        </AnimatedSection>

        {/* Grille de produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featured.map((product, index) => (
            <AnimatedSection key={product.id} delay={index * 0.1}>
              <div className="bg-cream rounded-2xl p-5 border border-brown/5 hover:shadow-lg transition-shadow duration-300">
                {/* Image placeholder */}
                <div
                  className="w-full h-36 sm:h-48 rounded-xl mb-4 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/images/products/coffee-${
                      product.roastLevel === "légère" ? "light" :
                      product.roastLevel === "moyenne" ? "medium" :
                      "dark"
                    }.jpg')`,
                  }}
                />

                {/* Infos */}
                <p className="font-body text-xs text-brown-light uppercase tracking-wider mb-1">
                  {product.origin}
                </p>
                <h3 className="font-playfair text-lg font-semibold text-brown mb-2">
                  {product.name}
                </h3>

                {/* Notes de dégustation */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {product.tastingNotes.map((note) => (
                    <span
                      key={note}
                      className={`px-2 py-0.5 rounded-full text-xs font-body ${noteColors[note] || "bg-gray-100 text-gray-600"}`}
                    >
                      {note}
                    </span>
                  ))}
                </div>

                {/* Prix */}
                <p className="font-body font-semibold text-terracotta text-lg">
                  {product.price.toFixed(2)} €
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Lien vers tous les cafés */}
        <div className="text-center">
          <Button href="/nos-cafes" variant="outline">
            Voir tous nos cafés
          </Button>
        </div>
      </div>
    </section>
  );
}
