"use client";

import { createContext, useContext, useReducer, ReactNode } from "react";
import { CartItem, Product, GrindOption } from "@/types";

// État du panier
interface CartState {
  items: CartItem[];
}

// Actions possibles sur le panier
type CartAction =
  | { type: "ADD_ITEM"; product: Product; grind: GrindOption; quantity: number }
  | { type: "REMOVE_ITEM"; productId: string; grind: GrindOption }
  | { type: "UPDATE_QUANTITY"; productId: string; grind: GrindOption; quantity: number }
  | { type: "CLEAR_CART" };

// Reducer — gère les modifications du panier
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingIndex = state.items.findIndex(
        (item) => item.product.id === action.product.id && item.grind === action.grind
      );
      if (existingIndex >= 0) {
        // Si le même produit + mouture existe déjà, on augmente la quantité
        const newItems = [...state.items];
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: newItems[existingIndex].quantity + action.quantity,
        };
        return { items: newItems };
      }
      // Sinon on ajoute un nouvel article
      return {
        items: [...state.items, { product: action.product, grind: action.grind, quantity: action.quantity }],
      };
    }
    case "REMOVE_ITEM":
      return {
        items: state.items.filter(
          (item) => !(item.product.id === action.productId && item.grind === action.grind)
        ),
      };
    case "UPDATE_QUANTITY": {
      if (action.quantity <= 0) {
        return {
          items: state.items.filter(
            (item) => !(item.product.id === action.productId && item.grind === action.grind)
          ),
        };
      }
      return {
        items: state.items.map((item) =>
          item.product.id === action.productId && item.grind === action.grind
            ? { ...item, quantity: action.quantity }
            : item
        ),
      };
    }
    case "CLEAR_CART":
      return { items: [] };
    default:
      return state;
  }
}

// Contexte
interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, grind: GrindOption, quantity: number) => void;
  removeItem: (productId: string, grind: GrindOption) => void;
  updateQuantity: (productId: string, grind: GrindOption, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | null>(null);

// Provider — enveloppe toute l'application
export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addItem = (product: Product, grind: GrindOption, quantity: number) =>
    dispatch({ type: "ADD_ITEM", product, grind, quantity });

  const removeItem = (productId: string, grind: GrindOption) =>
    dispatch({ type: "REMOVE_ITEM", productId, grind });

  const updateQuantity = (productId: string, grind: GrindOption, quantity: number) =>
    dispatch({ type: "UPDATE_QUANTITY", productId, grind, quantity });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ items: state.items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook pour accéder au panier depuis n'importe quel composant
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart doit être utilisé dans un CartProvider");
  }
  return context;
}
