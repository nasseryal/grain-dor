"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

// Formulaire de contact
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-cream rounded-2xl p-8 text-center border border-forest/20">
        <span className="text-4xl mb-4 block">✉️</span>
        <h3 className="font-playfair text-2xl font-bold text-forest mb-3">
          Message envoyé !
        </h3>
        <p className="font-body text-brown-light mb-6">
          Ceci est une démonstration. Aucun message n&apos;a été envoyé.
        </p>
        <Button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }} variant="outline">
          Envoyer un autre message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-cream rounded-2xl p-6 md:p-8 border border-brown/5">
      <div className="space-y-4">
        <div>
          <label className="font-body text-sm text-brown-light block mb-1">Nom</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-sand border border-brown/10 font-body text-sm text-brown focus:outline-none focus:border-forest"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label className="font-body text-sm text-brown-light block mb-1">Email</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-sand border border-brown/10 font-body text-sm text-brown focus:outline-none focus:border-forest"
            placeholder="votre@email.fr"
          />
        </div>
        <div>
          <label className="font-body text-sm text-brown-light block mb-1">Message</label>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-sand border border-brown/10 font-body text-sm text-brown focus:outline-none focus:border-forest resize-none"
            placeholder="Votre message..."
          />
        </div>
      </div>
      <div className="mt-6">
        <Button type="submit" variant="primary" size="lg" className="w-full">
          Envoyer
        </Button>
      </div>
    </form>
  );
}
