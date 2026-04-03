"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import Button from "@/components/ui/Button";

// Résumé du panier — sous-total, livraison, total + bouton commande
export default function CartSummary() {
  const { totalPrice, clearCart } = useCart();
  const [ordered, setOrdered] = useState(false);

  const shipping = totalPrice >= 35 ? 0 : 4.90;
  const total = totalPrice + shipping;

  if (ordered) {
    return (
      <div className="bg-cream rounded-2xl p-8 text-center border border-forest/20">
        <span className="text-4xl mb-4 block">🎉</span>
        <h3 className="font-playfair text-2xl font-bold text-forest mb-3">
          Merci pour votre commande !
        </h3>
        <p className="font-body text-brown-light mb-6">
          Ceci est une démonstration. Aucune commande n&apos;a été passée et aucun paiement n&apos;a été effectué.
        </p>
        <Button onClick={() => { setOrdered(false); clearCart(); }} variant="outline">
          Retour à la boutique
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-cream rounded-2xl p-6 border border-brown/5">
      <h3 className="font-playfair text-lg font-semibold text-brown mb-4">
        Récapitulatif
      </h3>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between font-body text-sm">
          <span className="text-brown-light">Sous-total</span>
          <span className="text-brown font-semibold">{totalPrice.toFixed(2)} €</span>
        </div>
        <div className="flex justify-between font-body text-sm">
          <span className="text-brown-light">Livraison</span>
          <span className="text-brown font-semibold">
            {shipping === 0 ? "Offerte" : `${shipping.toFixed(2)} €`}
          </span>
        </div>
        {shipping > 0 && (
          <p className="font-body text-xs text-forest">
            Livraison offerte à partir de 35 €
          </p>
        )}
        <div className="border-t border-brown/10 pt-3 flex justify-between">
          <span className="font-playfair font-bold text-brown">Total</span>
          <span className="font-playfair font-bold text-terracotta text-xl">{total.toFixed(2)} €</span>
        </div>
      </div>

      <Button onClick={() => setOrdered(true)} variant="primary" size="lg" className="w-full">
        Passer commande
      </Button>

      <p className="font-body text-xs text-brown-light text-center mt-3">
        Démonstration — aucun paiement réel
      </p>
    </div>
  );
}
