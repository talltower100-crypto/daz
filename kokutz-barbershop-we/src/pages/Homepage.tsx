import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { Star, ArrowRight, MapPin, Phone, Clock, Scissors } from "lucide-react";
import { services } from "../data/services";
import AnimatedPaths from "../components/AnimatedPaths";
import SparklesOverlay from "../components/SparklesOverlay";
import Tilt3DCard from "../components/Tilt3DCard";
import { FloatingOrbs, RotatingCube, ParallaxLayer, Card3DReveal } from "../components/Scene3D";

const HERO_BG = "https://vibe.filesafe.space/1781208974742594917/assets/3d68723a-9bda-46a3-bc63-52ada5f6853f.png";
const GALLERY = [
  "https://vibe.filesafe.space/1781208974742594917/attachments/e306e5c4-3b87-4a93-b466-6eb53e96c7f2.jpg",
  "https://vibe.filesafe.space/1781208974742594917/attachments/0a8df868-ca03-4bc5-87b8-9c8146aa6fa1.jpg",
  "https://vibe.filesafe.space/1781208974742594917/attachments/7bce42eb-43d7-4fac-bbb9-6e73b74fed72.jpg",
  "https://vibe.filesafe.space/1781208974742594917/attachments/1b5d263d-20f4-447d-a810-ac8db261dea9.jpg",
  "https://vibe.filesafe.space/1781208974742594917/attachments/1aa29f1d-4b1b-446f-81db-965796da8e42.jpg",
];

const testimonials = [
  {
    name: "Ayo",
    rating: 5,
    text: "Certainly lives up to his 5 star review. Helped me out in a pinch and I think I'll just have to keep coming back now. Great cut.",
    date: "1 month ago"
  },
  {
    name: "Winston Chen",
    rating: 5,
    text: "This the best right here man clean blowouts everyday and very good environment.",
    date: "1 month ago"
  },
  {
    name: "Thatguy Paris",
    rating: 5,
    text: "Always been top tier for clean cuts. Highly recommend.",
    date: "3 months ago"
  },
  {
    name: "Diane Guffey",
    rating: 5,
    text: "I would give TEN STARS if I could! If you have a kid with sensory needs who hates haircuts and will fight you to the death, then I'm telling you, make sure you bring them here! Kokutz barbershop in Hartford was able to successfully cut my child's hair.",
    date: "4 months ago"
  },
  {
    name: "Jessolvania Rivera",
    rating: 5,
    text: "Outstanding homely service; great vibes and very polite people. I trust Ko so much that I let him shave my head bald for the second time, might keep it this way. Nothing but laughs and conversations, you'll never know what you're missing until you come.",
    date: "4 months ago"
  },
  {
    name: "Norman Campbell",
    rating: 5,
    text: "I have been going here to get my haircut and lineups for years. The best barber I know, he consistently provides quality, stunning and head turning haircuts. I always get compliments on my haircut after seating in his chair. I now bring my kids here too.",
    date: "8 months ago"
  },
  {
    name: "Cyrus Henry",
    rating: 5,
    text: "If you're looking for a professional barber and a clean, welcoming atmosphere, this is the place. My brother and I have been getting our hair cut here since we were toddlers, and now into adulthood. Koko always makes us feel comfortable.",
    date: "7 months ago"
  },
  {
    name: "Damian Upson",
    rating: 5,
    text: "Great experience. Kok was professional from start to finish and knows exactly what he's doing. My cut came out clean, sharp, and exactly how I wanted it. On top of that, he's entertaining and easy to talk to, which made the whole experience even better.",
    date: "6 months ago"
  },
  {
    name: "Marc Blue",
    rating: 5,
    text: "Had a great experience for me and my son. Our appointment ran right on time and he was extremely professional and friendly. He made my young son feel very comfortable. Checkout was fast and easy with their available cashless tap to pay.",
    date: "6 months ago"
  },
  {
    name: "Williams Soccer Academy",
    rating: 5,
    text: "Boss barber! Better human being! Has been in our family for 20 plus years! Manners and Respect!",
    date: "7 months ago"
  },
  {
    name: "Keyonni Jones",
    rating: 5,
    text: "Coco isn't just a barber, he's family. The way he carries himself with professionalism and pride in his work shows every time you sit in his chair. He makes you feel comfortable, keeps the vibe positive, and treats every cut like it matters.",
    date: "8 months ago"
  },
  {
    name: "Chrishia Brackett",
    rating: 5,
    text: "My son has been getting his hair cut by Koko since he was just 3 years old, and now at 16, we wouldn't go anywhere else. Koko doesn't just give a haircut, he pours into my son, encourages him, and helps keep him on the right track.",
    date: "8 months ago"
  }
];

const features = [
  "25+ Years of Combined Experience",
  "Walk-ins Welcome",
  "Kids-Friendly Atmosphere",
  "Precision Fades and Lineups",
  "Hot Towel Shave Services",
  "Hartford's Top-Rated Shop"
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

const SlideIn = ({ children, delay = 0, direction = "left", className = "" }: { children: React.ReactNode; delay?: number; direction?: "left" | "right"; className?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction === "left" ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ScaleIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Homepage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <main>
      {/* HERO */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
          <img
            src={HERO_BG}
            alt="Kokutz Barbershop Hartford"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.08_0.005_270)]/70 via-[oklch(0.08_0.005_270)]/50 to-[oklch(0.08_0.005_270)]" />
        </motion.div>

        {/* Animated gold background paths */}
        <AnimatedPaths />

        {/* Floating sparkles */}
        <SparklesOverlay />

        {/* 3D floating wireframe cubes — pushed far left */}
        <RotatingCube size={80} className="absolute top-[10%] left-[-2%] opacity-40" />
        <RotatingCube size={50} className="absolute top-[55%] left-[-1%] opacity-30" />
        <RotatingCube size={35} className="absolute bottom-[10%] left-[2%] opacity-25" />
        <RotatingCube size={65} className="absolute bottom-[35%] left-[5%] opacity-20" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >


          <div className="overflow-hidden mb-4">
            {"STAY".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`inline-block font-display text-6xl md:text-[7rem] text-white tracking-widest leading-none ${char === " " ? "mr-4" : ""}`}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
          <div className="overflow-hidden mb-6">
            {"SHARP.".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.7, delay: 0.9 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block font-display text-6xl md:text-[7rem] text-[oklch(0.72_0.18_80)] tracking-widest leading-none"
              >
                {char}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mb-10 max-w-2xl mx-auto bg-black/40 backdrop-blur-md border border-[oklch(0.22_0.005_270)] p-4 rounded-xl"
          >
            <p className="font-condensed text-xl md:text-2xl text-white tracking-wide" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}>
              Precision. Style. Confidence. Hartford's most trusted barbers delivering cuts that define you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="https://getsquire.com/booking/book/kokutz-hartford/barber/kokutz-rochester/services" target="_blank" rel="noopener noreferrer">
              <button className="btn-gold font-condensed text-sm tracking-widest">Book Your Appointment</button>
            </a>
            <Link to="/services">
              <button className="btn-outline-gold font-condensed text-sm tracking-widest">View Services</button>
            </Link>
          </motion.div>

        </motion.div>
      </section>


      {/* ABOUT INTRO */}
      <section className="py-24 px-6 bg-[oklch(0.08_0.005_270)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
              <div>
                <span className="font-condensed text-xs tracking-[0.3em] uppercase text-[oklch(0.72_0.18_80)]">Who We Are</span>
                <h2 className="font-display text-5xl md:text-7xl text-white tracking-wider mt-3 mb-6 leading-none">
                  HARTFORD'S<br />BARBERSHOP
                </h2>
                <div className="gold-line w-16 mb-8" />
                <p className="font-body text-[oklch(0.65_0.005_270)] leading-relaxed mb-6 text-lg">
                  Located at 90 Gillett Street in Hartford, Kokutz delivers premium haircuts, fades, and shaves. With over 25 years of combined experience and a 5-star rating, our barbers provide sharp, consistent results every time.
                </p>
                <p className="font-body text-[oklch(0.65_0.005_270)] leading-relaxed mb-6">
                  Originally on Sisson Ave, we brought our skills and loyal clients to our new shop. Clean cuts, real conversations, and professional service.
                </p>
                <p className="font-body text-[oklch(0.65_0.005_270)] leading-relaxed mb-8">
                  Walk in or book ahead. We handle all hair types and styles with precision.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {features.map((f, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.18_80)] shrink-0" />
                      <span className="font-condensed text-sm text-[oklch(0.75_0.005_270)]">{f}</span>
                    </motion.div>
                  ))}
                </div>
                <Link to="/about">
                  <button className="btn-outline-gold font-condensed text-sm tracking-widest flex items-center gap-2">
                    Our Story <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
              <Tilt3DCard intensity={8}>
                <div className="relative">
                  <ParallaxLayer speed={0.3}>
                    <motion.img
                      src="https://vibe.filesafe.space/1781208974742594917/assets/09e5b568-b3f8-4935-902f-e21e726eb51d.jpg"
                      alt="Kokutz barbershop Hartford CT - real client work"
                      className="w-full aspect-square object-cover"
                    />
                  </ParallaxLayer>
                  <motion.div
                    className="absolute -bottom-6 -left-6 bg-[oklch(0.72_0.18_80)] p-6"
                    style={{ translateZ: 30, transformStyle: "preserve-3d" }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="font-display text-4xl text-[oklch(0.08_0.005_270)] leading-none">25+</p>
                    <p className="font-condensed text-xs tracking-widest uppercase text-[oklch(0.08_0.005_270)]/80">Years Experience</p>
                  </motion.div>
                  {/* Rotating square corner */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[oklch(0.72_0.18_80)] opacity-40"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  {/* Extra 3D accent */}
                  <RotatingCube size={45} className="absolute -bottom-8 right-4 opacity-50" />
                </div>
              </Tilt3DCard>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 px-6 bg-[oklch(0.11_0.005_270)]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="font-condensed text-xs tracking-[0.3em] uppercase text-[oklch(0.72_0.18_80)]">What We Offer</span>
            <h2 className="font-display text-5xl md:text-7xl text-white tracking-wider mt-3 mb-4 leading-none">OUR SERVICES</h2>
            <div className="gold-line w-16 mx-auto mb-6" />
            <p className="font-body text-[oklch(0.55_0.008_270)] max-w-xl mx-auto">
              Professional cuts, fades, and shaves tailored to you.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, i) => (
              <Card3DReveal key={service.id} delay={i * 0.1}>
                <Tilt3DCard intensity={10} className="h-full">
                  <Link to={`/services/${service.slug}`}>
                    <div className="group bg-[oklch(0.08_0.005_270)] border border-[oklch(0.18_0.005_270)] hover:border-[oklch(0.72_0.18_80)] transition-colors duration-300 overflow-hidden h-full">
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.005_270)] via-transparent to-transparent" />
                        <motion.div
                          className="absolute top-3 right-3 bg-[oklch(0.72_0.18_80)] px-2 py-1"
                          style={{ transformStyle: "preserve-3d", translateZ: 20 }}
                        >
                          <span className="font-condensed text-xs font-bold text-[oklch(0.08_0.005_270)]">{service.price}</span>
                        </motion.div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-display text-2xl text-white tracking-wider group-hover:text-[oklch(0.72_0.18_80)] transition-colors">{service.name}</h3>
                          <span className="font-condensed text-xs text-[oklch(0.55_0.008_270)]">{service.duration}</span>
                        </div>
                        <p className="font-body text-sm text-[oklch(0.55_0.008_270)] mb-4">{service.shortDesc}</p>
                        <div className="flex items-center gap-2 text-[oklch(0.72_0.18_80)] group-hover:gap-3 transition-all">
                          <span className="font-condensed text-xs tracking-widest uppercase">Learn More</span>
                          <ArrowRight size={12} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </Tilt3DCard>
              </Card3DReveal>
            ))}
          </div>

          <FadeIn delay={0.3} className="text-center mt-12">
            <Link to="/services">
              <button className="btn-gold font-condensed text-sm tracking-widest">View All 10 Services</button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* GALLERY — 3D tilt grid */}
      <section className="py-24 px-6 bg-[oklch(0.08_0.005_270)] relative overflow-hidden">
        <FloatingOrbs />
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn className="text-center mb-16">
            <span className="font-condensed text-xs tracking-[0.3em] uppercase text-[oklch(0.72_0.18_80)]">Our Work</span>
            <h2 className="font-display text-5xl md:text-7xl text-white tracking-wider mt-3 mb-4 leading-none">THE GALLERY</h2>
            <div className="gold-line w-16 mx-auto mb-6" />
            <p className="font-body text-[oklch(0.55_0.008_270)] max-w-xl mx-auto">
              Real cuts from our shop. See the quality for yourself.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {GALLERY.map((img, i) => (
              <Card3DReveal key={i} delay={i * 0.08}>
                <Tilt3DCard intensity={12} className="h-full">
                  <div className="group relative overflow-hidden aspect-square">
                    <img
                      src={img}
                      alt={`Kokutz Barbershop Hartford work ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-[oklch(0.08_0.005_270)]/0 group-hover:bg-[oklch(0.08_0.005_270)]/40 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.div
                        animate={{ rotateY: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        style={{ display: "inline-flex" }}
                      >
                        <Scissors size={28} className="text-[oklch(0.72_0.18_80)]" />
                      </motion.div>
                    </div>
                  </div>
                </Tilt3DCard>
              </Card3DReveal>
            ))}
          </div>

          <FadeIn delay={0.3} className="text-center mt-12">
            <Link to="/gallery">
              <button className="btn-outline-gold font-condensed text-sm tracking-widest flex items-center gap-2 mx-auto">
                View Gallery <ArrowRight size={16} />
              </button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 px-6 bg-[oklch(0.11_0.005_270)] relative overflow-hidden">
        {/* Subtle animated paths in background */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <AnimatedPaths />
        </div>
        {/* 3D floating cubes */}
        <RotatingCube size={55} className="absolute top-12 right-24 opacity-20" />
        <RotatingCube size={35} className="absolute bottom-16 left-16 opacity-15" />
        <FloatingOrbs />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "5.0", label: "Google Rating", gold: false },
                { value: "65+", label: "5-Star Reviews", gold: false },
                { value: "25+", label: "Years Combined Exp.", gold: false },
                { value: "10+", label: "Services Offered", gold: true },
              ].map((stat, i) => (
                <Card3DReveal key={i} delay={i * 0.1}>
                  <Tilt3DCard intensity={18}>
                    <div className={`${stat.gold ? "bg-[oklch(0.72_0.18_80)]" : "bg-[oklch(0.08_0.005_270)] border border-[oklch(0.18_0.005_270)] hover:border-[oklch(0.72_0.18_80)]"} p-6 text-center transition-colors duration-300`}>
                      <motion.p
                        className={`font-display text-5xl mb-2 ${stat.gold ? "text-[oklch(0.08_0.005_270)]" : "text-[oklch(0.72_0.18_80)]"}`}
                        initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        {stat.value}
                      </motion.p>
                      <p className={`font-condensed text-xs tracking-widest uppercase ${stat.gold ? "text-[oklch(0.08_0.005_270)]/80" : "text-[oklch(0.55_0.008_270)]"}`}>{stat.label}</p>
                    </div>
                  </Tilt3DCard>
                </Card3DReveal>
              ))}
            </div>
            <SlideIn direction="right" delay={0.2}>
              <span className="font-condensed text-xs tracking-[0.3em] uppercase text-[oklch(0.72_0.18_80)]">Why Choose Us</span>
              <h2 className="font-display text-5xl md:text-6xl text-white tracking-wider mt-3 mb-6 leading-none">
                THE KOKUTZ<br />STANDARD
              </h2>
              <div className="gold-line w-16 mb-8" />
              <p className="font-body text-[oklch(0.65_0.005_270)] leading-relaxed mb-6">
                We focus on the details. Clean lines, smooth fades, and classic straight razor shaves. Our shop is kid-friendly, walk-ins are welcome, and our barbers have the skills to handle any hair type or style.
              </p>
              <p className="font-body text-[oklch(0.65_0.005_270)] leading-relaxed mb-8">
                Located at 90 Gillett Street in Hartford, Connecticut, we're open Monday through Saturday from 9am to 7:30pm.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-[oklch(0.72_0.18_80)]" />
                  <span className="font-condensed text-sm text-[oklch(0.65_0.005_270)]">90 Gillett St, Hartford, CT 06105</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[oklch(0.72_0.18_80)]" />
                  <a href="tel:8607615751" className="font-condensed text-sm text-[oklch(0.65_0.005_270)] hover:text-[oklch(0.72_0.18_80)] transition-colors">(860) 761-5751</a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-[oklch(0.72_0.18_80)]" />
                  <span className="font-condensed text-sm text-[oklch(0.65_0.005_270)]">Mon - Sat: 9am - 7:30pm</span>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Masonry grid */}
      <section className="py-24 px-6 bg-[oklch(0.08_0.005_270)]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="font-condensed text-xs tracking-[0.3em] uppercase text-[oklch(0.72_0.18_80)]">What Clients Say</span>
            <h2 className="font-display text-5xl md:text-7xl text-white tracking-wider mt-3 mb-4 leading-none">REVIEWS</h2>
            <div className="gold-line w-16 mx-auto mb-4" />
            <div className="flex items-center justify-center gap-2">
              {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="oklch(0.72 0.18 80)" className="text-[oklch(0.72_0.18_80)]" />)}
              <span className="font-condensed text-sm text-[oklch(0.55_0.008_270)] ml-2">5.0 Average | 65 Google Reviews</span>
            </div>
          </FadeIn>

          {/* Masonry-style columns */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="break-inside-avoid bg-[oklch(0.11_0.005_270)] border border-[oklch(0.18_0.005_270)] p-6 hover:border-[oklch(0.72_0.18_80)] transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
              >
                {/* Gold quote mark */}
                <div className="font-display text-5xl leading-none text-[oklch(0.72_0.18_80)] opacity-30 mb-2 select-none">"</div>
                <p className="font-body text-sm text-[oklch(0.75_0.005_270)] leading-relaxed mb-5">{t.text}</p>
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map(j => <Star key={j} size={11} fill="oklch(0.72 0.18 80)" className="text-[oklch(0.72_0.18_80)]" />)}
                </div>
                <div className="flex items-center justify-between border-t border-[oklch(0.18_0.005_270)] pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[oklch(0.72_0.18_80)] flex items-center justify-center shrink-0">
                      <span className="font-display text-sm text-[oklch(0.08_0.005_270)]">{t.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-condensed text-sm font-semibold text-white leading-tight">{t.name}</p>
                      <p className="font-condensed text-xs text-[oklch(0.45_0.005_270)]">{t.date}</p>
                    </div>
                  </div>
                  <span className="font-condensed text-xs text-[oklch(0.72_0.18_80)] tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Google</span>
                </div>
              </motion.div>
            ))}
          </div>

          <FadeIn delay={0.2} className="text-center mt-12">
            <a
              href="https://share.google/iGhmdySvoTCPedgPm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-outline-gold font-condensed text-sm tracking-widest">Read All Reviews on Google</button>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-6 bg-[oklch(0.11_0.005_270)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 opacity-50 pointer-events-none">
          <AnimatedPaths />
        </div>
        {/* 3D floating cubes in corners */}
        <RotatingCube size={70} className="absolute top-8 left-8 opacity-25" />
        <RotatingCube size={50} className="absolute top-12 right-12 opacity-20" />
        <RotatingCube size={40} className="absolute bottom-8 left-20 opacity-15" />
        <RotatingCube size={60} className="absolute bottom-12 right-8 opacity-20" />
        {/* Pulsing gold orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, oklch(0.72 0.18 80 / 0.08), transparent 70%)" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Secondary pulsing ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-[oklch(0.72_0.18_80)] pointer-events-none"
          animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Card3DReveal>
            <span className="font-condensed text-xs tracking-[0.3em] uppercase text-[oklch(0.72_0.18_80)]">Ready?</span>
            <div className="overflow-hidden mt-3 mb-6">
              {"BOOK YOUR SEAT".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 60, rotateX: -45 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                  className={`inline-block font-display text-5xl md:text-8xl text-white tracking-widest leading-none ${char === " " ? "mr-4" : ""}`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
            <div className="gold-line w-24 mx-auto mb-8" />
            <p className="font-body text-[oklch(0.65_0.005_270)] text-xl mb-10 max-w-xl mx-auto">
              Book your next cut at Kokutz Barbershop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://getsquire.com/booking/book/kokutz-hartford/barber/kokutz-rochester/services" target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="btn-gold font-condensed text-sm tracking-widest"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  Book Appointment Now
                </motion.button>
              </a>
              <a href="tel:8607615751">
                <motion.button
                  className="btn-outline-gold font-condensed text-sm tracking-widest"
                  whileHover={{ scale: 1.05, rotateY: -5 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  Call (860) 761-5751
                </motion.button>
              </a>
            </div>
          </Card3DReveal>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
