import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { services } from "../data/services";

const LOGO_URL = "https://vibe.filesafe.space/1781208974742594917/assets/2a14105f-973e-4e21-9c90-2772ab7369f4.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAboutOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[oklch(0.08_0.005_270)] border-b border-[oklch(0.22_0.005_270)]" : "bg-[oklch(0.08_0.005_270)] border-b border-[oklch(0.22_0.005_270)]/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center h-20">
        {/* Logo */}
        <div className="flex-1">
          <Link to="/" className="inline-flex items-center group">
            <motion.img
              src={LOGO_URL}
              alt="Kokutz Barbershop Logo"
              className="h-16 w-auto object-contain"
              style={{ mixBlendMode: "screen" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Link>
        </div>

        {/* Desktop Nav — centered */}
        <nav className="hidden lg:flex items-center justify-center gap-10">
          {/* About Dropdown */}
          <div className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
            <button className="flex items-center gap-1 font-condensed text-sm tracking-widest uppercase text-[oklch(0.75_0.005_270)] hover:text-[oklch(0.72_0.18_80)] transition-colors">
              About <ChevronDown size={14} className={`transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, rotateX: -15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: 10, rotateX: -15 }}
                  transition={{ duration: 0.2 }}
                  style={{ transformOrigin: "top center", perspective: 800 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-[oklch(0.10_0.005_270)] border border-[oklch(0.22_0.005_270)] shadow-2xl"
                >
                  <div className="p-2">
                    <Link to="/about" className="block px-4 py-2.5 font-condensed text-sm text-[oklch(0.85_0.005_270)] hover:text-[oklch(0.72_0.18_80)] hover:bg-[oklch(0.15_0.005_270)] transition-colors">
                      About Us
                    </Link>
                    <Link to="/location" className="block px-4 py-2.5 font-condensed text-sm text-[oklch(0.85_0.005_270)] hover:text-[oklch(0.72_0.18_80)] hover:bg-[oklch(0.15_0.005_270)] transition-colors">
                      Location
                    </Link>
                    <Link to="/blog" className="block px-4 py-2.5 font-condensed text-sm text-[oklch(0.85_0.005_270)] hover:text-[oklch(0.72_0.18_80)] hover:bg-[oklch(0.15_0.005_270)] transition-colors">
                      Blog
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className="flex items-center gap-1 font-condensed text-sm tracking-widest uppercase text-[oklch(0.75_0.005_270)] hover:text-[oklch(0.72_0.18_80)] transition-colors">
              Services <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, rotateX: -15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: 10, rotateX: -15 }}
                  transition={{ duration: 0.2 }}
                  style={{ transformOrigin: "top center", perspective: 800 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-[oklch(0.10_0.005_270)] border border-[oklch(0.22_0.005_270)] shadow-2xl"
                >
                  <div className="p-2">
                    <Link to="/services" className="block px-4 py-2 font-condensed text-xs tracking-widest uppercase text-[oklch(0.72_0.18_80)] hover:bg-[oklch(0.72_0.18_80)] hover:text-[oklch(0.08_0.005_270)] transition-colors">
                      All Services
                    </Link>
                    <div className="my-1 h-px bg-[oklch(0.22_0.005_270)]" />
                    {services.map((s) => (
                      <Link
                        key={s.id}
                        to={`/services/${s.slug}`}
                        className="flex items-center justify-between px-4 py-2.5 group hover:bg-[oklch(0.15_0.005_270)] transition-colors"
                      >
                        <span className="font-condensed text-sm text-[oklch(0.85_0.005_270)] group-hover:text-[oklch(0.72_0.18_80)] transition-colors">{s.name}</span>
                        <span className="font-condensed text-xs text-[oklch(0.72_0.18_80)]">{s.price}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/gallery" className="font-condensed text-sm tracking-widest uppercase text-[oklch(0.75_0.005_270)] hover:text-[oklch(0.72_0.18_80)] transition-colors">Gallery</Link>
        </nav>

        {/* Right Actions & Mobile Toggle */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <a href="https://getsquire.com/booking/book/kokutz-hartford/barber/kokutz-rochester/services" target="_blank" rel="noopener noreferrer" className="hidden lg:block">
            <button className="btn-gold font-condensed text-sm tracking-widest">Book Now</button>
          </a>
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[oklch(0.08_0.005_270)] border-t border-[oklch(0.22_0.005_270)] overflow-hidden"
          >
            <nav className="px-6 py-6 flex flex-col gap-4">
              <div>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex items-center gap-2 font-condensed text-sm tracking-widest uppercase text-[oklch(0.75_0.005_270)] w-full"
                >
                  About <ChevronDown size={14} className={aboutOpen ? "rotate-180" : ""} />
                </button>
                {aboutOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-3">
                    <Link to="/about" className="font-condensed text-sm text-[oklch(0.65_0.005_270)]">About Us</Link>
                    <Link to="/location" className="font-condensed text-sm text-[oklch(0.65_0.005_270)]">Location</Link>
                    <Link to="/blog" className="font-condensed text-sm text-[oklch(0.65_0.005_270)]">Blog</Link>
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center gap-2 font-condensed text-sm tracking-widest uppercase text-[oklch(0.75_0.005_270)] w-full"
                >
                  Services <ChevronDown size={14} className={servicesOpen ? "rotate-180" : ""} />
                </button>
                {servicesOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-3">
                    <Link to="/services" className="font-condensed text-xs tracking-widest uppercase text-[oklch(0.72_0.18_80)]">All Services</Link>
                    {services.map((s) => (
                      <Link key={s.id} to={`/services/${s.slug}`} className="font-condensed text-sm text-[oklch(0.65_0.005_270)] flex justify-between pr-4">
                        <span>{s.name}</span><span className="text-[oklch(0.72_0.18_80)]">{s.price}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/gallery" className="font-condensed text-sm tracking-widest uppercase text-[oklch(0.75_0.005_270)]">Gallery</Link>
              <a href="https://getsquire.com/booking/book/kokutz-hartford/barber/kokutz-rochester/services" target="_blank" rel="noopener noreferrer">
                <button className="btn-gold w-full text-center font-condensed text-sm tracking-widest mt-2">Book Now</button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
