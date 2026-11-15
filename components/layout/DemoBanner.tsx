// Bandeau "site fictif" toujours visible en haut de page
export default function DemoBanner() {
  return (
    <div className="sticky top-0 z-60 bg-forest text-cream text-center py-2 px-4 text-xs font-body tracking-wide">
      Site fictif — Modèle de démonstration{" "}
      <a
        href="https://www.yalaouidigital.fr/entreprises"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-sand-light"
      >
        Yalaoui Digital
      </a>
    </div>
  );
}
