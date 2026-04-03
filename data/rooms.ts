import { Room } from "@/types";

// 3 salles fictives à réserver
export const rooms: Room[] = [
  {
    id: "salon-cuivre",
    name: "Salon Cuivré",
    description: "Un espace intime aux tons cuivrés, idéal pour une dégustation en petit comité ou un rendez-vous d'affaires autour d'un café d'exception.",
    capacity: 6,
    image: "/images/rooms/salon-cuivre.jpg",
    features: [
      "2 à 6 personnes",
      "Service de dégustation inclus",
      "Ambiance tamisée",
      "Wi-Fi haut débit",
    ],
  },
  {
    id: "salle-aromes",
    name: "Salle des Arômes",
    description: "Notre salle de dégustation principale, pensée pour les ateliers et les événements de groupe. Table en chêne massif et vue sur notre atelier de torréfaction.",
    capacity: 12,
    image: "/images/rooms/salle-aromes.jpg",
    features: [
      "6 à 12 personnes",
      "Atelier torréfaction possible",
      "Écran de présentation",
      "Service traiteur sur demande",
    ],
  },
  {
    id: "terrasse-jardin",
    name: "Terrasse Jardin",
    description: "Un écrin de verdure en plein Paris. Terrasse végétalisée avec tonnelle, parfaite pour les beaux jours et les événements décontractés.",
    capacity: 20,
    image: "/images/rooms/terrasse-jardin.jpg",
    features: [
      "8 à 20 personnes",
      "En plein air (couverte)",
      "Barbecue disponible",
      "Idéale d'avril à octobre",
    ],
  },
];
