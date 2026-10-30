import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

function SparkleIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <motion.div
      style={style}
      className="absolute pointer-events-none"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        rotate: [0, 180],
      }}
      transition={{
        duration: 1.5 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 3,
        ease: "easeInOut",
      }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z"
          fill="oklch(0.72 0.18 80)"
        />
      </svg>
    </motion.div>
  );
}

const SPARKLE_POSITIONS = [
  { top: "12%", left: "8%" },
  { top: "22%", left: "92%" },
  { top: "45%", left: "4%" },
  { top: "68%", left: "88%" },
  { top: "80%", left: "15%" },
  { top: "35%", left: "78%" },
  { top: "58%", left: "50%" },
  { top: "15%", left: "55%" },
  { top: "75%", left: "60%" },
  { top: "90%", left: "35%" },
];

export default function SparklesOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
      {SPARKLE_POSITIONS.map((pos, i) => (
        <SparkleIcon
          key={i}
          style={{ ...pos, position: "absolute" }}
        />
      ))}
    </div>
  );
}
