"use client";

import { CartItem as CartItemType } from "@/types";
import { useCart } from "@/lib/cart-context";

// Ligne d'article dans le panier
export default function CartItem({ item }: { item: CartItemType }) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="bg-cream rounded-xl p-4 border border-brown/5">
      {/* Ligne 1 : image + infos + supprimer */}
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex-shrink-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/products/coffee-${
              item.product.roastLevel === "légère" ? "light" :
              item.product.roastLevel === "moyenne" ? "medium" :
              "dark"
            }.jpg')`,
          }}
        />
        <div className="flex-grow min-w-0">
          <h4 className="font-playfair font-semibold text-brown text-sm sm:text-base truncate">{item.product.name}</h4>
          <p className="font-body text-xs text-brown-light capitalize">{item.grind}</p>
        </div>
        <button
          onClick={() => removeItem(item.product.id, item.grind)}
          className="text-brown-light hover:text-terracotta transition-colors flex-shrink-0"
          aria-label="Supprimer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Ligne 2 : quantité + prix */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => updateQuantity(item.product.id, item.grind, item.quantity - 1)}
            className="w-8 h-8 rounded-full bg-sand text-brown hover:bg-sand-dark transition-colors flex items-center justify-center font-body font-bold"
          >
            −
          </button>
          <span className="font-body text-sm font-semibold text-brown w-6 text-center">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.product.id, item.grind, item.quantity + 1)}
            className="w-8 h-8 rounded-full bg-sand text-brown hover:bg-sand-dark transition-colors flex items-center justify-center font-body font-bold"
          >
            +
          </button>
        </div>
        <p className="font-body font-semibold text-terracotta">
          {(item.product.price * item.quantity).toFixed(2)} €
        </p>
      </div>
    </div>
  );
}
