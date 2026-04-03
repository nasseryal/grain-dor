"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

// Formulaire de réservation
export default function BookingForm({ selectedRoomId }: { selectedRoomId: string | null }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    date: "",
    time: "",
    partySize: "",
    name: "",
    email: "",
    phone: "",
  });

  // Créneaux disponibles (fictifs)
  const timeSlots = [
    "9h00", "9h30", "10h00", "10h30", "11h00", "11h30",
    "14h00", "14h30", "15h00", "15h30", "16h00", "16h30", "17h00", "17h30",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-cream rounded-2xl p-8 text-center border border-forest/20">
        <span className="text-4xl mb-4 block">✓</span>
        <h3 className="font-playfair text-2xl font-bold text-forest mb-3">
          Réservation confirmée !
        </h3>
        <p className="font-body text-brown-light mb-6">
          Ceci est une démonstration. Aucune réservation n&apos;a été enregistrée.
        </p>
        <Button onClick={() => { setSubmitted(false); setForm({ date: "", time: "", partySize: "", name: "", email: "", phone: "" }); }} variant="outline">
          Faire une nouvelle réservation
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-cream rounded-2xl p-6 md:p-8 border border-brown/5">
      <h3 className="font-playfair text-xl font-semibold text-brown mb-6">
        Détails de la réservation
      </h3>

      {!selectedRoomId && (
        <p className="font-body text-terracotta text-sm mb-6">
          Veuillez d&apos;abord sélectionner une salle ci-dessus.
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Date */}
        <div>
          <label className="font-body text-sm text-brown-light block mb-1">Date</label>
          <input
            type="date"
            required
            disabled={!selectedRoomId}
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-sand border border-brown/10 font-body text-sm text-brown focus:outline-none focus:border-forest disabled:opacity-40"
          />
        </div>

        {/* Heure */}
        <div>
          <label className="font-body text-sm text-brown-light block mb-1">Heure</label>
          <select
            required
            disabled={!selectedRoomId}
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-sand border border-brown/10 font-body text-sm text-brown focus:outline-none focus:border-forest disabled:opacity-40"
          >
            <option value="">Choisir un créneau</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
        </div>

        {/* Nombre de personnes */}
        <div>
          <label className="font-body text-sm text-brown-light block mb-1">Nombre de personnes</label>
          <input
            type="number"
            min="1"
            max="20"
            required
            disabled={!selectedRoomId}
            value={form.partySize}
            onChange={(e) => setForm({ ...form, partySize: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-sand border border-brown/10 font-body text-sm text-brown focus:outline-none focus:border-forest disabled:opacity-40"
          />
        </div>

        {/* Nom */}
        <div>
          <label className="font-body text-sm text-brown-light block mb-1">Nom complet</label>
          <input
            type="text"
            required
            disabled={!selectedRoomId}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-sand border border-brown/10 font-body text-sm text-brown focus:outline-none focus:border-forest disabled:opacity-40"
          />
        </div>

        {/* Email */}
        <div>
          <label className="font-body text-sm text-brown-light block mb-1">Email</label>
          <input
            type="email"
            required
            disabled={!selectedRoomId}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-sand border border-brown/10 font-body text-sm text-brown focus:outline-none focus:border-forest disabled:opacity-40"
          />
        </div>

        {/* Téléphone */}
        <div>
          <label className="font-body text-sm text-brown-light block mb-1">Téléphone</label>
          <input
            type="tel"
            required
            disabled={!selectedRoomId}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-sand border border-brown/10 font-body text-sm text-brown focus:outline-none focus:border-forest disabled:opacity-40"
          />
        </div>
      </div>

      <Button type="submit" variant="primary" size="lg" className={`w-full ${!selectedRoomId ? "opacity-40 pointer-events-none" : ""}`}>
        Confirmer la réservation
      </Button>
    </form>
  );
}
