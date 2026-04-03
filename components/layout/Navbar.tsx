"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "@/data/navigation";
import CartIcon from "@/components/cart/CartIcon";

// Barre de navigation — fixe en haut, transparente puis opaque au scroll
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-[32px] z-50 transition-all duration-300 ${
        scrolled ? "bg-sand/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-playfair text-xl sm:text-2xl font-bold text-brown hover:text-forest transition-colors">
          Grain d&apos;Or
        </Link>

        {/* Liens desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-brown-light hover:text-forest transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <CartIcon />
        </div>

        {/* Boutons mobile — panier + hamburger */}
        <div className="flex items-center gap-4 md:hidden">
          <CartIcon />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-brown p-1"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-sand/95 backdrop-blur-md border-t border-brown/10 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-body text-brown-light hover:text-forest transition-colors border-b border-brown/5 last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
