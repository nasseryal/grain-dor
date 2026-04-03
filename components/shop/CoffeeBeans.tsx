"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Un grain de café avec position et rotation aléatoires
interface Bean {
  id: number;
  x: number;       // position en %
  y: number;       // position en %
  rotation: number; // rotation initiale en degrés
  size: number;     // taille en px
  duration: number; // durée de l'animation
  delay: number;
}

function generateBeans(count: number): Bean[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
    size: Math.random() * 12 + 10, // entre 10px et 22px
    duration: Math.random() * 20 + 15, // entre 15s et 35s
    delay: Math.random() * 2,
  }));
}

// Particules en forme de grains de café — flottent lentement
export default function CoffeeBeans() {
  const [beans, setBeans] = useState<Bean[]>([]);

  useEffect(() => {
    setBeans(generateBeans(20));
  }, []);

  if (beans.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-[5]">
      {beans.map((bean) => (
        <motion.div
          key={bean.id}
          className="absolute"
          style={{
            left: `${bean.x}%`,
            top: `${bean.y}%`,
            fontSize: bean.size,
          }}
          animate={{
            y: [0, -20, 10, -15, 0],
            x: [0, 10, -8, 12, 0],
            rotate: [bean.rotation, bean.rotation + 30, bean.rotation - 20, bean.rotation + 15, bean.rotation],
            opacity: [0.3, 0.5, 0.4, 0.5, 0.3],
          }}
          transition={{
            duration: bean.duration,
            delay: bean.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🫘
        </motion.div>
      ))}
    </div>
  );
}
