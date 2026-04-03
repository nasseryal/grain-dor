import Link from "next/link";
import { navLinks } from "@/data/navigation";

// Pied de page — 3 colonnes : marque, navigation, infos pratiques
export default function Footer() {
  return (
    <footer className="bg-brown text-sand-light">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Colonne marque */}
          <div>
            <h3 className="font-playfair text-2xl font-bold text-cream mb-4">Grain d&apos;Or</h3>
            <p className="font-body text-sm text-sand-dark leading-relaxed">
              Torréfacteur artisanal depuis 2018. Nous sélectionnons les meilleurs grains du monde pour vous offrir une expérience café unique.
            </p>
          </div>

          {/* Colonne navigation */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-cream mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-sand-dark hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne infos pratiques */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-cream mb-4">Nous trouver</h4>
            <div className="font-body text-sm text-sand-dark space-y-2">
              <p>23 Rue des Torréfacteurs</p>
              <p>75011 Paris, France</p>
              <p className="mt-4">Lun – Ven : 8h – 19h</p>
              <p>Sam : 9h – 18h</p>
              <p>Dim : Fermé</p>
              <p className="mt-4">contact@graindor-demo.fr</p>
            </div>
          </div>
        </div>

        {/* Barre du bas */}
        <div className="border-t border-sand-dark/20 mt-12 pt-6 text-center">
          <p className="font-body text-xs text-sand-dark">
            Site fictif — Démonstration portfolio. Aucune commande ni réservation n&apos;est réelle.
          </p>
        </div>
      </div>
    </footer>
  );
}
