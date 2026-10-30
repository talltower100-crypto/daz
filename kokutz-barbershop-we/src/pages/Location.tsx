import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import AnimatedPaths from "../components/AnimatedPaths";
import Tilt3DCard from "../components/Tilt3DCard";

const Location = () => {
  return (
    <main className="pt-20 bg-[oklch(0.08_0.005_270)] min-h-screen">
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <AnimatedPaths />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="font-condensed text-xs tracking-[0.3em] uppercase text-[oklch(0.72_0.18_80)]">Find Us</span>
            <h1 className="font-display text-5xl md:text-7xl text-white tracking-wider mt-3 mb-6 leading-none">
              OUR LOCATION
            </h1>
            <div className="gold-line w-16 mx-auto mb-6" />
            <p className="font-body text-[oklch(0.65_0.005_270)] max-w-xl mx-auto text-lg">
              Visit us at our Hartford location for premium haircuts, fades, and shaves.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-1 space-y-6">
              <Tilt3DCard intensity={10}>
                <div className="bg-[oklch(0.11_0.005_270)] border border-[oklch(0.18_0.005_270)] p-8">
                  <h3 className="font-display text-3xl text-white mb-6">Contact Info</h3>
                  
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[oklch(0.72_0.18_80)]/10 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-[oklch(0.72_0.18_80)]" />
                    </div>
                    <div>
                      <p className="font-condensed text-xs tracking-widest uppercase text-[oklch(0.55_0.008_270)] mb-1">Address</p>
                      <p className="font-body text-white">90 Gillett St<br />Hartford, CT 06105</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[oklch(0.72_0.18_80)]/10 flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-[oklch(0.72_0.18_80)]" />
                    </div>
                    <div>
                      <p className="font-condensed text-xs tracking-widest uppercase text-[oklch(0.55_0.008_270)] mb-1">Phone</p>
                      <a href="tel:8607615751" className="font-body text-white hover:text-[oklch(0.72_0.18_80)] transition-colors">(860) 761-5751</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[oklch(0.72_0.18_80)]/10 flex items-center justify-center shrink-0">
                      <Clock size={20} className="text-[oklch(0.72_0.18_80)]" />
                    </div>
                    <div>
                      <p className="font-condensed text-xs tracking-widest uppercase text-[oklch(0.55_0.008_270)] mb-1">Hours</p>
                      <ul className="font-body text-white space-y-1">
                        <li className="flex justify-between gap-4"><span>Mon - Sat</span> <span>9:00 AM - 7:30 PM</span></li>
                        <li className="flex justify-between gap-4 text-[oklch(0.55_0.008_270)]"><span>Sunday</span> <span>Closed</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Tilt3DCard>
            </div>

            <div className="lg:col-span-2">
              <Tilt3DCard intensity={5} className="h-full">
                <div className="bg-[oklch(0.11_0.005_270)] border border-[oklch(0.18_0.005_270)] p-2 h-full min-h-[500px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.718610515672!2d-72.69742512349887!3d41.76562097125381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6530048680dfb%3A0x5da74e30467edbb0!2sKokutz%20Barbershop!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, minHeight: '500px' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                  ></iframe>
                </div>
              </Tilt3DCard>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Location;
