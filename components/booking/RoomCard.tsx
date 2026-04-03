"use client";

import { Room } from "@/types";

// Carte de salle — sélectionnable avec bordure active
export default function RoomCard({
  room,
  isSelected,
  onSelect,
}: {
  room: Room;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className={`text-left w-full rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
        isSelected
          ? "border-forest shadow-lg scale-[1.02]"
          : "border-transparent hover:border-brown/10 hover:shadow-md"
      }`}
    >
      {/* Image de la salle */}
      <div
        className="w-full h-36 sm:h-48 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/rooms/${room.id}.jpg')` }}
      />

      <div className="bg-cream p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-playfair text-lg font-semibold text-brown">
            {room.name}
          </h3>
          <span className="font-body text-xs text-brown-light bg-sand px-2.5 py-1 rounded-full">
            Jusqu&apos;à {room.capacity} pers.
          </span>
        </div>

        <p className="font-body text-sm text-brown-light leading-relaxed mb-3">
          {room.description}
        </p>

        {/* Caractéristiques */}
        <ul className="space-y-1">
          {room.features.map((feature) => (
            <li key={feature} className="font-body text-xs text-brown-light flex items-center gap-2">
              <span className="text-forest">✓</span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Indicateur de sélection */}
        {isSelected && (
          <div className="mt-3 text-center">
            <span className="font-body text-sm font-semibold text-forest">
              ✓ Sélectionnée
            </span>
          </div>
        )}
      </div>
    </button>
  );
}
