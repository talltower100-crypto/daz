import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const TEAM_IMG = "https://vibe.filesafe.space/1781208974742594917/attachments/ae32445b-cdc4-4298-a2fa-6dae92b845b4.jpg";
const BARBER1 = "https://vibe.filesafe.space/1781208974742594917/attachments/eea3db1e-0487-44e9-af65-d0f72226feba.png";

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

const values = [
  { title: "Precision", desc: "We focus on clean lines, smooth fades, and consistent results." },
  { title: "Community", desc: "We're proud to serve Hartford. We know our regular clients and remember how they like their cuts." },
  { title: "Craft", desc: "We take our work seriously. Our barbers stay current with new styles while mastering the classics." },
  { title: "Respect", desc: "Everyone gets our best work, whether it's a quick shape-up or a full service." },
];

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-32 px-6 bg-[oklch(0.08_0.005_270)] overflow-hidden">
        <div className="absolute inset-0 opacity-5 overflow-hidden">
          <img src={TEAM_IMG} alt="" className="w-full h-full object-cover object-top" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-condensed text-xs tracking-[0.3em] uppercase text-[oklch(0.72_0.18_80)]">Our Story</span>
            <h1 className="font-display text-6xl md:text-8xl text-white tracking-widest mt-3 mb-6 leading-none">ABOUT<br />KOKUTZ</h1>
            <div className="gold-line w-24 mx-auto mb-8" />
            <p className="font-body text-xl text-[oklch(0.65_0.005_270)] max-w-2xl mx-auto leading-relaxed">
              Hartford's trusted barbershop for precision cuts and fades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 bg-[oklch(0.11_0.005_270)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src={TEAM_IMG}
                alt="Kokutz Barbershop team Hartford"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <span className="font-condensed text-xs tracking-[0.3em] uppercase text-[oklch(0.72_0.18_80)]">Our Foundation</span>
            <h2 className="font-display text-5xl text-white tracking-wider mt-3 mb-6 leading-none">WHERE WE<br />COME FROM</h2>
            <div className="gold-line w-16 mb-8" />
            <p className="font-body text-[oklch(0.65_0.005_270)] leading-relaxed mb-6 text-lg">
              Kokutz delivers consistent, high-quality haircuts in a professional environment. We built our reputation on Sisson Avenue before expanding to our current location at 90 Gillett Street.
            </p>
            <p className="font-body text-[oklch(0.65_0.005_270)] leading-relaxed mb-8">
              We maintain a 5.0-star rating across 65 Google reviews because we focus on what matters: clean cuts, reliable service, and respecting our clients' time.
            </p>
            <div className="flex items-center gap-2 mb-2">
              {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="oklch(0.72 0.18 80)" className="text-[oklch(0.72_0.18_80)]" />)}
            </div>
            <p className="font-condensed text-sm text-[oklch(0.55_0.008_270)]">5.0 Rating | 65 Google Reviews | Hartford, CT</p>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-[oklch(0.08_0.005_270)]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="font-condensed text-xs tracking-[0.3em] uppercase text-[oklch(0.72_0.18_80)]">What Drives Us</span>
            <h2 className="font-display text-5xl md:text-7xl text-white tracking-wider mt-3 mb-4 leading-none">OUR VALUES</h2>
            <div className="gold-line w-16 mx-auto" />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-[oklch(0.11_0.005_270)] border border-[oklch(0.18_0.005_270)] p-8 hover:border-[oklch(0.72_0.18_80)] transition-colors group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 border border-[oklch(0.72_0.18_80)] flex items-center justify-center group-hover:bg-[oklch(0.72_0.18_80)] transition-colors">
                      <div className="w-2.5 h-2.5 rounded-full bg-[oklch(0.72_0.18_80)] group-hover:bg-[oklch(0.08_0.005_270)] transition-colors" />
                    </div>
                    <h3 className="font-display text-3xl text-white tracking-wider">{v.title}</h3>
                  </div>
                  <p className="font-body text-[oklch(0.65_0.005_270)] leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 bg-[oklch(0.11_0.005_270)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn delay={0.2}>
            <span className="font-condensed text-xs tracking-[0.3em] uppercase text-[oklch(0.72_0.18_80)]">Our Mission</span>
            <h2 className="font-display text-5xl text-white tracking-wider mt-3 mb-6 leading-none">HARTFORD'S<br />BARBERS</h2>
            <div className="gold-line w-16 mb-8" />
            <p className="font-body text-[oklch(0.65_0.005_270)] leading-relaxed mb-6 text-lg">
              We provide top-tier barbering services for kids, teens, adults, and seniors. From quick cleanups to full grooming packages, our barbers have the expertise to execute any style.
            </p>
            <p className="font-body text-[oklch(0.65_0.005_270)] leading-relaxed mb-8">
              Walk-ins are welcome, or you can book an appointment to secure your spot.
            </p>
            <a href="https://getsquire.com/booking/book/kokutz-hartford/barber/kokutz-rochester/services" target="_blank" rel="noopener noreferrer">
              <button className="btn-gold font-condensed text-sm tracking-widest flex items-center gap-2">
                Book An Appointment <ArrowRight size={16} />
              </button>
            </a>
          </FadeIn>
          <FadeIn>
            <img
              src={BARBER1}
              alt="Expert barber at Kokutz Hartford"
              className="w-full aspect-square object-cover"
            />
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default About;
