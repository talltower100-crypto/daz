import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

// Floating 3D geometric shapes for background depth
export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Large slow orb */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.72 0.18 80 / 0.04) 0%, transparent 70%)",
          top: "-10%",
          right: "-15%",
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Medium orb */}
      <motion.div
        className="absolute w-80 h-80 rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.55 0.14 80 / 0.06) 0%, transparent 70%)",
          bottom: "5%",
          left: "-8%",
        }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      {/* Small accent orb */}
      <motion.div
        className="absolute w-48 h-48 rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.72 0.18 80 / 0.08) 0%, transparent 70%)",
          top: "40%",
          left: "50%",
        }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
}

// 3D rotating wireframe cube
export function RotatingCube({ size = 60, className = "" }: { size?: number; className?: string }) {
  return (
    <motion.div
      className={`relative pointer-events-none ${className}`}
      style={{ width: size, height: size, transformStyle: "preserve-3d", perspective: 600 }}
      animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
      transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
    >
      {/* Cube faces rendered as SVG lines */}
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" className="absolute inset-0">
        {/* Front face */}
        <rect x={size * 0.15} y={size * 0.15} width={size * 0.5} height={size * 0.5}
          stroke="oklch(0.72 0.18 80)" strokeWidth="0.8" strokeOpacity="0.5" fill="none" />
        {/* Back face (offset) */}
        <rect x={size * 0.35} y={size * 0.35} width={size * 0.5} height={size * 0.5}
          stroke="oklch(0.72 0.18 80)" strokeWidth="0.8" strokeOpacity="0.25" fill="none" />
        {/* Connecting lines */}
        <line x1={size * 0.15} y1={size * 0.15} x2={size * 0.35} y2={size * 0.35}
          stroke="oklch(0.72 0.18 80)" strokeWidth="0.8" strokeOpacity="0.35" />
        <line x1={size * 0.65} y1={size * 0.15} x2={size * 0.85} y2={size * 0.35}
          stroke="oklch(0.72 0.18 80)" strokeWidth="0.8" strokeOpacity="0.35" />
        <line x1={size * 0.15} y1={size * 0.65} x2={size * 0.35} y2={size * 0.85}
          stroke="oklch(0.72 0.18 80)" strokeWidth="0.8" strokeOpacity="0.35" />
        <line x1={size * 0.65} y1={size * 0.65} x2={size * 0.85} y2={size * 0.85}
          stroke="oklch(0.72 0.18 80)" strokeWidth="0.8" strokeOpacity="0.35" />
      </svg>
    </motion.div>
  );
}

// Parallax depth layer wrapper
export function ParallaxLayer({ children, speed = 0.5, className = "" }: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${-50 * speed}px`, `${50 * speed}px`]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  );
}

// 3D card reveal with depth
export function Card3DReveal({ children, delay = 0, className = "" }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useRef(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: 20, z: -100 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformStyle: "preserve-3d", perspective: 1200 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
