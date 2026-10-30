import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedPaths from "../components/AnimatedPaths";
import { FloatingOrbs } from "../components/Scene3D";

const galleryImages = [
  "https://vibe.filesafe.space/1781208974742594917/attachments/e306e5c4-3b87-4a93-b466-6eb53e96c7f2.jpg",
  "https://vibe.filesafe.space/1781208974742594917/attachments/0a8df868-ca03-4bc5-87b8-9c8146aa6fa1.jpg",
  "https://vibe.filesafe.space/1781208974742594917/attachments/7bce42eb-43d7-4fac-bbb9-6e73b74fed72.jpg",
  "https://vibe.filesafe.space/1781208974742594917/attachments/1b5d263d-20f4-447d-a810-ac8db261dea9.jpg",
  "https://vibe.filesafe.space/1781208974742594917/attachments/1aa29f1d-4b1b-446f-81db-965796da8e42.jpg",
  "https://vibe.filesafe.space/1781208974742594917/attachments/56310444-f716-450c-b2b9-84cdfd5f564e.jpg",
  "https://vibe.filesafe.space/1781208974742594917/attachments/8fa35cf1-115b-464c-8a93-cb21a9d55c0f.jpg",
  "https://vibe.filesafe.space/1781208974742594917/attachments/abf23d6d-1d16-45ef-a8d5-21243f766c70.jpg",
  "https://vibe.filesafe.space/1781208974742594917/attachments/31db0695-48df-43b5-aa02-fb69600b2ac6.jpg",
  "https://vibe.filesafe.space/1781208974742594917/attachments/a9952a01-235f-4ad0-af0b-081111b4f60d.jpg"
];

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Gallery = () => {
  return (
    <main className="pt-24 min-h-screen bg-[oklch(0.08_0.005_270)] relative overflow-hidden">
      <FloatingOrbs />
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <AnimatedPaths />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <FadeIn className="text-center mb-16">
          <span className="font-condensed text-xs tracking-[0.3em] uppercase text-[oklch(0.72_0.18_80)]">Our Work</span>
          <h1 className="font-display text-6xl md:text-8xl text-white tracking-wider mt-3 mb-6 leading-none">
            GALLERY
          </h1>
          <div className="gold-line w-24 mx-auto mb-8" />
          <p className="font-body text-[oklch(0.65_0.005_270)] max-w-2xl mx-auto text-lg">
            A showcase of our best cuts, fades, and events. Real work from the barbers at Kokutz.
          </p>
        </FadeIn>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {(galleryImages || []).map((img, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid relative group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={img}
                alt={`Kokutz Barbershop Work ${i + 1}`}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Gallery;
