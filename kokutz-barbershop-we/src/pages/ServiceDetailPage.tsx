import { useRef } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Clock, ArrowLeft } from "lucide-react";
import { getServiceBySlug, services } from "../data/services";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) return <Navigate to="/services" replace />;

  const related = services.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-0 bg-[oklch(0.08_0.005_270)]">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <motion.img
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.005_270)] via-[oklch(0.08_0.005_270)]/50 to-[oklch(0.08_0.005_270)]/20" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-6 pb-16 w-full">
              <Link to="/services" className="inline-flex items-center gap-2 font-condensed text-xs tracking-widest uppercase text-[oklch(0.55_0.008_270)] hover:text-[oklch(0.72_0.18_80)] transition-colors mb-6">
                <ArrowLeft size={14} /> Back to Services
              </Link>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <span className="font-condensed text-xs tracking-[0.3em] uppercase text-[oklch(0.72_0.18_80)]">Our Service</span>
                <h1 className="font-display text-5xl md:text-8xl text-white tracking-widest mt-2 leading-none">{service.name.toUpperCase()}</h1>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 bg-[oklch(0.08_0.005_270)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="flex items-center gap-6 mb-8">
                  <div className="bg-[oklch(0.72_0.18_80)] px-6 py-4">
                    <p className="font-display text-4xl text-[oklch(0.08_0.005_270)] leading-none">{service.price}</p>
                  </div>
                  <div className="flex items-center gap-2 text-[oklch(0.55_0.008_270)]">
                    <Clock size={18} className="text-[oklch(0.72_0.18_80)]" />
                    <span className="font-condensed text-sm tracking-wide">{service.duration}</span>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="gold-line w-16 mb-8" />
                <h2 className="font-display text-4xl text-white tracking-wider mb-6">About This Service</h2>
                <p className="font-body text-[oklch(0.72_0.005_270)] leading-relaxed text-lg mb-8">{service.longDesc}</p>
                <p className="font-body text-[oklch(0.65_0.005_270)] leading-relaxed mb-8">
                  At Kokutz Barbershop, every service is delivered by experienced professionals. We consult with you before beginning to understand exactly what you want, and we make sure you leave looking your best.
                </p>
                <p className="font-body text-[oklch(0.65_0.005_270)] leading-relaxed mb-10">
                  With a 5.0-star rating from 65+ Google reviews, Kokutz is Hartford's trusted barbershop. Come experience a real, quality cut.
                </p>
                <a href="https://getsquire.com/booking/book/kokutz-hartford/barber/kokutz-rochester/services" target="_blank" rel="noopener noreferrer">
                  <button className="btn-gold font-condensed text-sm tracking-widest flex items-center gap-2">
                    Book {service.name} <ArrowRight size={16} />
                  </button>
                </a>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div>
              <FadeIn delay={0.2}>
                <div className="bg-[oklch(0.11_0.005_270)] border border-[oklch(0.18_0.005_270)] p-6 mb-6">
                  <h3 className="font-display text-2xl text-white tracking-wider mb-4">What's Included</h3>
                  <div className="gold-line w-8 mb-6" />
                  <ul className="flex flex-col gap-3">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.18_80)] shrink-0" />
                        <span className="font-condensed text-sm text-[oklch(0.75_0.005_270)]">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-[oklch(0.72_0.18_80)] p-6">
                  <h3 className="font-display text-2xl text-[oklch(0.08_0.005_270)] tracking-wider mb-2">Ready to Book?</h3>
                  <p className="font-condensed text-sm text-[oklch(0.08_0.005_270)]/80 mb-4">Contact us to schedule your appointment or walk in during business hours.</p>
                  <a href="https://getsquire.com/booking/book/kokutz-hartford/barber/kokutz-rochester/services" target="_blank" rel="noopener noreferrer">
                    <button className="w-full bg-[oklch(0.08_0.005_270)] text-[oklch(0.72_0.18_80)] font-condensed text-sm tracking-widest uppercase py-3 hover:bg-[oklch(0.12_0.005_270)] transition-colors">
                      Book Now
                    </button>
                  </a>
                  <a href="tel:8607615751" className="block mt-3 text-center font-condensed text-sm text-[oklch(0.08_0.005_270)]/70 hover:text-[oklch(0.08_0.005_270)] transition-colors">
                    (860) 761-5751
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-6 bg-[oklch(0.11_0.005_270)]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-10">
            <h2 className="font-display text-4xl text-white tracking-wider">OTHER SERVICES</h2>
            <div className="gold-line w-12 mt-4" />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((s, i) => (
              <FadeIn key={s.id} delay={i * 0.08}>
                <Link to={`/services/${s.slug}`}>
                  <div className="group bg-[oklch(0.08_0.005_270)] border border-[oklch(0.18_0.005_270)] hover:border-[oklch(0.72_0.18_80)] transition-all duration-300 overflow-hidden">
                    <div className="relative h-40 overflow-hidden">
                      <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.005_270)] to-transparent" />
                      <div className="absolute top-3 right-3 bg-[oklch(0.72_0.18_80)] px-2 py-0.5">
                        <span className="font-condensed text-xs font-bold text-[oklch(0.08_0.005_270)]">{s.price}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-2xl text-white tracking-wider mb-1 group-hover:text-[oklch(0.72_0.18_80)] transition-colors">{s.name}</h3>
                      <p className="font-condensed text-xs text-[oklch(0.55_0.008_270)]">{s.duration}</p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetailPage;
