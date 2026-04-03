import Link from "next/link";
import { ReactNode } from "react";

// Bouton réutilisable — 3 variantes visuelles
const variants = {
  primary: "bg-forest text-cream hover:bg-forest-dark",
  secondary: "bg-terracotta text-cream hover:bg-terracotta-dark",
  outline: "bg-transparent border-2 border-forest text-forest hover:bg-forest hover:text-cream",
};

const sizes = {
  sm: "px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm",
  md: "px-4 py-2.5 text-sm sm:px-6 sm:py-3",
  lg: "px-6 py-3 text-sm sm:px-8 sm:py-4 sm:text-base",
};

interface ButtonProps {
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles = `inline-flex items-center justify-center font-body font-semibold rounded-full transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseStyles}>
      {children}
    </button>
  );
}
