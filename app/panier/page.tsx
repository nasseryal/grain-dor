"use client";

import { useCart } from "@/lib/cart-context";
import SectionHeading from "@/components/ui/SectionHeading";
import CartItemComponent from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import Button from "@/components/ui/Button";

// Page panier — liste d'articles + récapitulatif
export default function Panier() {
  const { items } = useCart();

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Votre panier" />

        {items.length === 0 ? (
          <div className="text-center py-16">
            <span className="text-5xl mb-4 block">🛒</span>
            <p className="font-body text-brown-light text-lg mb-6">
              Votre panier est vide
            </p>
            <Button href="/nos-cafes" variant="primary">
              Découvrir nos cafés
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Liste des articles */}
            <div className="lg:col-span-2 space-y-3">
              {items.map((item) => (
                <CartItemComponent
                  key={`${item.product.id}-${item.grind}`}
                  item={item}
                />
              ))}
            </div>

            {/* Récapitulatif */}
            <div>
              <CartSummary />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
