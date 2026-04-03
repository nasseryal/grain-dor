"use client";

import { RoastLevel, TastingNote } from "@/types";

const roastLevels: RoastLevel[] = ["légère", "moyenne", "foncée"];
const tastingNotes: TastingNote[] = ["fruité", "chocolaté", "noisette", "floral", "épicé", "caramel"];

// Barre de filtres — torréfaction et notes de dégustation
export default function FilterBar({
  activeRoast,
  activeNote,
  onRoastChange,
  onNoteChange,
}: {
  activeRoast: RoastLevel | null;
  activeNote: TastingNote | null;
  onRoastChange: (roast: RoastLevel | null) => void;
  onNoteChange: (note: TastingNote | null) => void;
}) {
  return (
    <div className="mb-10 space-y-4">
      {/* Filtres torréfaction */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-body text-sm text-brown-light mr-2">Torréfaction :</span>
        <button
          onClick={() => onRoastChange(null)}
          className={`px-3 py-1.5 rounded-full text-xs font-body transition-colors ${
            !activeRoast ? "bg-forest text-cream" : "bg-cream text-brown-light hover:bg-sand-dark"
          }`}
        >
          Toutes
        </button>
        {roastLevels.map((level) => (
          <button
            key={level}
            onClick={() => onRoastChange(activeRoast === level ? null : level)}
            className={`px-3 py-1.5 rounded-full text-xs font-body capitalize transition-colors ${
              activeRoast === level ? "bg-forest text-cream" : "bg-cream text-brown-light hover:bg-sand-dark"
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Filtres notes */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-body text-sm text-brown-light mr-2">Notes :</span>
        <button
          onClick={() => onNoteChange(null)}
          className={`px-3 py-1.5 rounded-full text-xs font-body transition-colors ${
            !activeNote ? "bg-terracotta text-cream" : "bg-cream text-brown-light hover:bg-sand-dark"
          }`}
        >
          Toutes
        </button>
        {tastingNotes.map((note) => (
          <button
            key={note}
            onClick={() => onNoteChange(activeNote === note ? null : note)}
            className={`px-3 py-1.5 rounded-full text-xs font-body capitalize transition-colors ${
              activeNote === note ? "bg-terracotta text-cream" : "bg-cream text-brown-light hover:bg-sand-dark"
            }`}
          >
            {note}
          </button>
        ))}
      </div>
    </div>
  );
}
