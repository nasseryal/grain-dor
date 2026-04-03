"use client";

import { useState } from "react";
import { rooms } from "@/data/rooms";
import SectionHeading from "@/components/ui/SectionHeading";
import RoomCard from "@/components/booking/RoomCard";
import BookingForm from "@/components/booking/BookingForm";
import AnimatedSection from "@/components/ui/AnimatedSection";

// Page réservation — choix de salle + formulaire
export default function Reserver() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Réserver un espace"
            subtitle="Choisissez votre salle, puis remplissez le formulaire"
          />
        </AnimatedSection>

        {/* Sélection de salle */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {rooms.map((room, index) => (
            <AnimatedSection key={room.id} delay={index * 0.1}>
              <RoomCard
                room={room}
                isSelected={selectedRoom === room.id}
                onSelect={() => setSelectedRoom(room.id)}
              />
            </AnimatedSection>
          ))}
        </div>

        {/* Formulaire */}
        <AnimatedSection delay={0.3}>
          <div className="max-w-2xl mx-auto">
            <BookingForm selectedRoomId={selectedRoom} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
