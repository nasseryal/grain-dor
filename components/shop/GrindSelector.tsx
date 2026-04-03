"use client";

import { GrindOption } from "@/types";

const grinds: GrindOption[] = ["grain entier", "filtre", "espresso", "piston"];

// Sélecteur de mouture — boutons inline
export default function GrindSelector({
  selected,
  onChange,
}: {
  selected: GrindOption;
  onChange: (grind: GrindOption) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {grinds.map((grind) => (
        <button
          key={grind}
          onClick={() => onChange(grind)}
          className={`px-2.5 py-1 rounded-full text-xs font-body capitalize transition-colors ${
            selected === grind
              ? "bg-forest text-cream"
              : "bg-sand text-brown-light hover:bg-sand-dark"
          }`}
        >
          {grind}
        </button>
      ))}
    </div>
  );
}
