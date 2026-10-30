import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Instagram, Facebook, Star } from "lucide-react";
import { services } from "../data/services";

const Footer = () => {
  return (
    <footer className="bg-[oklch(0.06_0.005_270)] border-t border-[oklch(0.18_0.005_270)]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="font-display text-4xl text-white tracking-widest mb-4">KOKUTZ</h2>
            <div className="gold-line w-16 mb-4" />
            <p className="font-body text-sm text-[oklch(0.55_0.008_270)] leading-relaxed mb-6">
              Hartford's premier barbershop. Precision cuts, expert shaves, and an atmosphere that keeps you coming back.
            </p>
            <div className="flex items-center gap-1 mb-2">
              {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="oklch(0.72 0.18 80)" className="text-[oklch(0.72_0.18_80)]" />)}
              <span className="font-condensed text-xs text-[oklch(0.55_0.008_270)] ml-2">5.0 (65 reviews)</span>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-[oklch(0.22_0.005_270)] flex items-center justify-center text-[oklch(0.55_0.008_270)] hover:border-[oklch(0.72_0.18_80)] hover:text-[oklch(0.72_0.18_80)] transition-colors">
                <Instagram size={15} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-[oklch(0.22_0.005_270)] flex items-center justify-center text-[oklch(0.55_0.008_270)] hover:border-[oklch(0.72_0.18_80)] hover:text-[oklch(0.72_0.18_80)] transition-colors">
                <Facebook size={15} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-condensed text-xs tracking-widest uppercase text-[oklch(0.72_0.18_80)] mb-4">Services</h4>
            <div className="gold-line w-8 mb-4" />
            <ul className="flex flex-col gap-2">
              {services.slice(0, 6).map(s => (
                <li key={s.id}>
                  <Link to={`/services/${s.slug}`} className="font-body text-sm text-[oklch(0.55_0.008_270)] hover:text-[oklch(0.72_0.18_80)] transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="font-condensed text-xs tracking-widest uppercase text-[oklch(0.72_0.18_80)] hover:text-[oklch(0.82_0.15_80)] transition-colors">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-condensed text-xs tracking-widest uppercase text-[oklch(0.72_0.18_80)] mb-4">Navigation</h4>
            <div className="gold-line w-8 mb-4" />
            <ul className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "All Services" },
                { to: "/blog", label: "Blog" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="font-body text-sm text-[oklch(0.55_0.008_270)] hover:text-[oklch(0.72_0.18_80)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-condensed text-xs tracking-widest uppercase text-[oklch(0.72_0.18_80)] mb-4">Find Us</h4>
            <div className="gold-line w-8 mb-4" />
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[oklch(0.72_0.18_80)] mt-0.5 shrink-0" />
                <span className="font-body text-sm text-[oklch(0.55_0.008_270)]">90 Gillett St, Hartford, CT 06105</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[oklch(0.72_0.18_80)] shrink-0" />
                <a href="tel:8607615751" className="font-body text-sm text-[oklch(0.55_0.008_270)] hover:text-[oklch(0.72_0.18_80)] transition-colors">(860) 761-5751</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-[oklch(0.72_0.18_80)] mt-0.5 shrink-0" />
                <div className="font-body text-sm text-[oklch(0.55_0.008_270)]">
                  <p>Mon - Sat: 9am - 7:30pm</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
            <Link to="/contact" className="mt-6 block">
              <button className="btn-gold w-full text-center font-condensed text-xs tracking-widest">Book Appointment</button>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[oklch(0.18_0.005_270)] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="font-body text-xs text-[oklch(0.35_0.005_270)]">
            &copy; {new Date().getFullYear()} Kokutz Barbershop. All rights reserved.
          </p>
          <p className="font-body text-xs text-[oklch(0.35_0.005_270)]">
            Website Designed by Sowa Marketing Agency
          </p>
          <p className="font-body text-xs text-[oklch(0.35_0.005_270)] hidden md:block">
            90 Gillett St, Hartford, CT 06105 | (860) 761-5751
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
