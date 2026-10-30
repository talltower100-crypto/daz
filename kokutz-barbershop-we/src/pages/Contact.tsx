import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-28 px-6 bg-[oklch(0.08_0.005_270)]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-condensed text-xs tracking-[0.3em] uppercase text-[oklch(0.72_0.18_80)]">Get In Touch</span>
            <h1 className="font-display text-6xl md:text-8xl text-white tracking-widest mt-3 mb-6 leading-none">CONTACT<br />US</h1>
            <div className="gold-line w-24 mx-auto mb-8" />
            <p className="font-body text-xl text-[oklch(0.65_0.005_270)] max-w-2xl mx-auto">
              Book an appointment, ask a question, or just say hello. We're here for it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 bg-[oklch(0.11_0.005_270)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info Sidebar */}
          <FadeIn className="lg:col-span-2">
            <div>
              <h2 className="font-display text-4xl text-white tracking-wider mb-4">FIND US</h2>
              <div className="gold-line w-12 mb-8" />

              <div className="flex flex-col gap-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[oklch(0.72_0.18_80)] flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-[oklch(0.72_0.18_80)]" />
                  </div>
                  <div>
                    <p className="font-condensed text-xs tracking-widest uppercase text-[oklch(0.72_0.18_80)] mb-1">Address</p>
                    <p className="font-body text-[oklch(0.75_0.005_270)]">90 Gillett St</p>
                    <p className="font-body text-[oklch(0.75_0.005_270)]">Hartford, CT 06105</p>
                    <a
                      href="https://maps.google.com/?q=90+Gillett+St+Hartford+CT+06105"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-condensed text-xs text-[oklch(0.72_0.18_80)] hover:text-[oklch(0.82_0.15_80)] transition-colors mt-1 block"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[oklch(0.72_0.18_80)] flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-[oklch(0.72_0.18_80)]" />
                  </div>
                  <div>
                    <p className="font-condensed text-xs tracking-widest uppercase text-[oklch(0.72_0.18_80)] mb-1">Phone</p>
                    <a href="tel:8607615751" className="font-body text-[oklch(0.75_0.005_270)] hover:text-[oklch(0.72_0.18_80)] transition-colors">
                      (860) 761-5751
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[oklch(0.72_0.18_80)] flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-[oklch(0.72_0.18_80)]" />
                  </div>
                  <div>
                    <p className="font-condensed text-xs tracking-widest uppercase text-[oklch(0.72_0.18_80)] mb-1">Hours</p>
                    <div className="font-body text-[oklch(0.75_0.005_270)] flex flex-col gap-1">
                      <div className="flex justify-between gap-6">
                        <span>Monday - Friday</span>
                        <span>9am - 7:30pm</span>
                      </div>
                      <div className="flex justify-between gap-6">
                        <span>Saturday</span>
                        <span>9am - 7:30pm</span>
                      </div>
                      <div className="flex justify-between gap-6 text-[oklch(0.45_0.005_270)]">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mb-8">
                <p className="font-condensed text-xs tracking-widest uppercase text-[oklch(0.72_0.18_80)] mb-4">Follow Us</p>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-[oklch(0.22_0.005_270)] flex items-center justify-center text-[oklch(0.55_0.008_270)] hover:border-[oklch(0.72_0.18_80)] hover:text-[oklch(0.72_0.18_80)] transition-colors"
                  >
                    <Instagram size={16} />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-[oklch(0.22_0.005_270)] flex items-center justify-center text-[oklch(0.55_0.008_270)] hover:border-[oklch(0.72_0.18_80)] hover:text-[oklch(0.72_0.18_80)] transition-colors"
                  >
                    <Facebook size={16} />
                  </a>
                </div>
              </div>

              {/* Map Embed Placeholder */}
              <div className="w-full h-48 bg-[oklch(0.08_0.005_270)] border border-[oklch(0.18_0.005_270)] flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={24} className="text-[oklch(0.72_0.18_80)] mx-auto mb-2" />
                  <p className="font-condensed text-xs text-[oklch(0.45_0.005_270)] tracking-widest">90 Gillett St, Hartford, CT</p>
                  <a
                    href="https://maps.google.com/?q=90+Gillett+St+Hartford+CT+06105"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-condensed text-xs text-[oklch(0.72_0.18_80)] tracking-widest mt-1 block hover:underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.2} className="lg:col-span-3">
            {submitted ? (
              <div className="bg-[oklch(0.08_0.005_270)] border border-[oklch(0.72_0.18_80)] p-12 text-center h-full flex flex-col items-center justify-center">
                <h2 className="font-display text-4xl text-white tracking-wider mb-4">MESSAGE SENT</h2>
                <p className="font-body text-[oklch(0.65_0.005_270)] mb-2">Thank you for reaching out.</p>
                <p className="font-body text-[oklch(0.65_0.005_270)]">We'll be in touch within 24 hours to confirm your appointment.</p>
                <p className="font-body text-[oklch(0.65_0.005_270)] mt-4">Or call us directly: <a href="tel:8607615751" className="text-[oklch(0.72_0.18_80)]">(860) 761-5751</a></p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[oklch(0.08_0.005_270)] border border-[oklch(0.18_0.005_270)] p-8">
                <h2 className="font-display text-4xl text-white tracking-wider mb-2">BOOK AN<br />APPOINTMENT</h2>
                <div className="gold-line w-12 mb-8" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="font-condensed text-xs tracking-widest uppercase text-[oklch(0.55_0.008_270)] block mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="w-full bg-[oklch(0.11_0.005_270)] border border-[oklch(0.22_0.005_270)] focus:border-[oklch(0.72_0.18_80)] px-4 py-3 text-white font-body text-sm outline-none transition-colors placeholder:text-[oklch(0.35_0.005_270)]"
                    />
                  </div>
                  <div>
                    <label className="font-condensed text-xs tracking-widest uppercase text-[oklch(0.55_0.008_270)] block mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Smith"
                      className="w-full bg-[oklch(0.11_0.005_270)] border border-[oklch(0.22_0.005_270)] focus:border-[oklch(0.72_0.18_80)] px-4 py-3 text-white font-body text-sm outline-none transition-colors placeholder:text-[oklch(0.35_0.005_270)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="font-condensed text-xs tracking-widest uppercase text-[oklch(0.55_0.008_270)] block mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@email.com"
                      className="w-full bg-[oklch(0.11_0.005_270)] border border-[oklch(0.22_0.005_270)] focus:border-[oklch(0.72_0.18_80)] px-4 py-3 text-white font-body text-sm outline-none transition-colors placeholder:text-[oklch(0.35_0.005_270)]"
                    />
                  </div>
                  <div>
                    <label className="font-condensed text-xs tracking-widest uppercase text-[oklch(0.55_0.008_270)] block mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(860) 555-0100"
                      className="w-full bg-[oklch(0.11_0.005_270)] border border-[oklch(0.22_0.005_270)] focus:border-[oklch(0.72_0.18_80)] px-4 py-3 text-white font-body text-sm outline-none transition-colors placeholder:text-[oklch(0.35_0.005_270)]"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="font-condensed text-xs tracking-widest uppercase text-[oklch(0.55_0.008_270)] block mb-2">Service</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-[oklch(0.11_0.005_270)] border border-[oklch(0.22_0.005_270)] focus:border-[oklch(0.72_0.18_80)] px-4 py-3 text-white font-body text-sm outline-none transition-colors appearance-none"
                  >
                    <option value="">Select a Service</option>
                    <option value="kids">Kids Haircut ($20)</option>
                    <option value="yung-adult">Young Adult ($25)</option>
                    <option value="adult">Adult Haircut ($45)</option>
                    <option value="bald-head-beard">Bald Head Beard ($32.50)</option>
                    <option value="basic-shave">Basic Shave ($30)</option>
                    <option value="shape-n-tape">Shape n Tape ($35)</option>
                    <option value="eyebrows">Eyebrows ($15)</option>
                    <option value="cut-n-color">Cut n Color ($80)</option>
                    <option value="haircut-n-beard">Haircut n Beard ($45)</option>
                    <option value="full-service">Full Service ($75)</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label className="font-condensed text-xs tracking-widest uppercase text-[oklch(0.55_0.008_270)] block mb-2">Message / Preferred Time</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us your preferred appointment date and time, or any special requests..."
                    className="w-full bg-[oklch(0.11_0.005_270)] border border-[oklch(0.22_0.005_270)] focus:border-[oklch(0.72_0.18_80)] px-4 py-3 text-white font-body text-sm outline-none transition-colors placeholder:text-[oklch(0.35_0.005_270)] resize-none"
                  />
                </div>

                <button type="submit" className="btn-gold w-full font-condensed text-sm tracking-widest">
                  Send Message
                </button>

                <p className="font-condensed text-xs text-[oklch(0.35_0.005_270)] text-center mt-4">
                  Or call us directly at <a href="tel:8607615751" className="text-[oklch(0.72_0.18_80)]">(860) 761-5751</a>
                </p>
              </form>
            )}
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default Contact;
