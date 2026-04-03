// Types de données pour le site Grain d'Or

// Notes de dégustation possibles
export type TastingNote = "fruité" | "chocolaté" | "noisette" | "floral" | "épicé" | "caramel";

// Niveaux de torréfaction
export type RoastLevel = "légère" | "moyenne" | "foncée";

// Options de mouture
export type GrindOption = "grain entier" | "filtre" | "espresso" | "piston";

// Un café dans la boutique
export interface Product {
  id: string;
  name: string;
  origin: string;
  description: string;
  tastingNotes: TastingNote[];
  roastLevel: RoastLevel;
  price: number;
  image: string;
  grinds: GrindOption[];
}

// Un article dans le panier
export interface CartItem {
  product: Product;
  grind: GrindOption;
  quantity: number;
}

// Une salle à réserver
export interface Room {
  id: string;
  name: string;
  description: string;
  capacity: number;
  image: string;
  features: string[];
}
