import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import DemoBanner from "@/components/layout/DemoBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Grain d'Or — Torréfacteur Artisanal",
  description: "Torréfacteur artisanal à Paris. Cafés de spécialité, réservation de salles de dégustation et commande en ligne.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-sand text-brown font-body antialiased">
        <CartProvider>
          <DemoBanner />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
