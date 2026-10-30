import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { services } from "../data/services";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ServicesPage = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-28 px-6 bg-[oklch(0.08_0.005_270)]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-condensed text-xs tracking-[0.3em] uppercase text-[oklch(0.72_0.18_80)]">What We Offer</span>
            <h1 className="font-display text-6xl md:text-8xl text-white tracking-widest mt-3 mb-6 leading-none">OUR<br />SERVICES</h1>
            <div className="gold-line w-24 mx-auto mb-8" />
            <p className="font-body text-xl text-[oklch(0.65_0.005_270)] max-w-2xl mx-auto leading-relaxed">
              Ten services designed to meet every grooming need, delivered by Hartford's trusted barbers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 bg-[oklch(0.11_0.005_270)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <FadeIn key={service.id} delay={i * 0.06}>
                <Link to={`/services/${service.slug}`}>
                  <div className="group bg-[oklch(0.08_0.005_270)] border border-[oklch(0.18_0.005_270)] hover:border-[oklch(0.72_0.18_80)] transition-all duration-300 overflow-hidden h-full flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.005_270)] via-[oklch(0.08_0.005_270)]/20 to-transparent" />
                      <div className="absolute top-4 right-4 bg-[oklch(0.72_0.18_80)] px-3 py-1.5">
                        <span className="font-display text-xl text-[oklch(0.08_0.005_270)]">{service.price}</span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h2 className="font-display text-3xl text-white tracking-wider group-hover:text-[oklch(0.72_0.18_80)] transition-colors">{service.name}</h2>
                        <div className="flex items-center gap-1.5 text-[oklch(0.55_0.008_270)]">
                          <Clock size={13} />
                          <span className="font-condensed text-xs">{service.duration}</span>
                        </div>
                      </div>
                      <p className="font-body text-sm text-[oklch(0.55_0.008_270)] leading-relaxed mb-6 flex-1">{service.shortDesc}</p>
                      <div className="flex items-center gap-2 text-[oklch(0.72_0.18_80)]">
                        <span className="font-condensed text-xs tracking-widest uppercase">Book This Service</span>
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[oklch(0.08_0.005_270)]">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl text-white tracking-widest mb-6 leading-none">NOT SURE<br />WHAT TO BOOK?</h2>
          <div className="gold-line w-16 mx-auto mb-6" />
          <p className="font-body text-[oklch(0.65_0.005_270)] mb-8">
            Call us and we'll help you find the perfect service for your needs. Our barbers are happy to advise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://getsquire.com/booking/book/kokutz-hartford/barber/kokutz-rochester/services" target="_blank" rel="noopener noreferrer">
              <button className="btn-gold font-condensed text-sm tracking-widest">Book Now</button>
            </a>
            <a href="tel:8607615751">
              <button className="btn-outline-gold font-condensed text-sm tracking-widest">Call (860) 761-5751</button>
            </a>
          </div>
        </FadeIn>
      </section>
    </main>
  );
};

export default ServicesPage;
