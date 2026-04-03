"use client";

import { useState } from "react";
import { Product, GrindOption } from "@/types";
import { useCart } from "@/lib/cart-context";
import GrindSelector from "./GrindSelector";

// Couleurs des notes de dégustation
const noteColors: Record<string, string> = {
  "fruité": "bg-red-100 text-red-700",
  "chocolaté": "bg-amber-100 text-amber-800",
  "noisette": "bg-yellow-100 text-yellow-800",
  "floral": "bg-purple-100 text-purple-700",
  "épicé": "bg-orange-100 text-orange-700",
  "caramel": "bg-amber-50 text-amber-700",
};

// Indicateur de torréfaction (barres)
const roastBars: Record<string, number> = {
  "légère": 1,
  "moyenne": 2,
  "foncée": 3,
};

// Carte produit — affiche un café avec ses infos et le bouton ajout panier
export default function ProductCard({ product }: { product: Product }) {
  const [selectedGrind, setSelectedGrind] = useState<GrindOption>("grain entier");
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product, selectedGrind, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="bg-cream rounded-2xl p-5 border border-brown/5 hover:shadow-lg transition-all duration-300 flex flex-col">
      {/* Image du café selon le niveau de torréfaction */}
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

      {/* Origine */}
      <p className="font-body text-xs text-brown-light uppercase tracking-wider mb-1">
        {product.origin}
      </p>

      {/* Nom */}
      <h3 className="font-playfair text-lg font-semibold text-brown mb-2">
        {product.name}
      </h3>

      {/* Description */}
      <p className="font-body text-sm text-brown-light leading-relaxed mb-3 flex-grow">
        {product.description}
      </p>

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

      {/* Torréfaction */}
      <div className="flex items-center gap-2 mb-4">
        <span className="font-body text-xs text-brown-light">Torréfaction :</span>
        <div className="flex gap-1">
          {[1, 2, 3].map((level) => (
            <div
              key={level}
              className={`w-4 h-2 rounded-sm ${
                level <= roastBars[product.roastLevel] ? "bg-brown" : "bg-brown/20"
              }`}
            />
          ))}
        </div>
        <span className="font-body text-xs text-brown-light capitalize">{product.roastLevel}</span>
      </div>

      {/* Sélecteur de mouture */}
      <div className="mb-4">
        <p className="font-body text-xs text-brown-light mb-1.5">Mouture :</p>
        <GrindSelector selected={selectedGrind} onChange={setSelectedGrind} />
      </div>

      {/* Prix + bouton */}
      <div className="flex items-center justify-between mt-auto">
        <p className="font-playfair font-bold text-xl text-terracotta">
          {product.price.toFixed(2)} €
        </p>
        <button
          onClick={handleAdd}
          className={`px-4 py-2 rounded-full text-sm font-body font-semibold transition-all duration-300 ${
            added
              ? "bg-forest text-cream"
              : "bg-terracotta text-cream hover:bg-terracotta-dark"
          }`}
        >
          {added ? "✓ Ajouté" : "Ajouter"}
        </button>
      </div>
    </div>
  );
}
