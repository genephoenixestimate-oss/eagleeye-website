import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Award, Shield, Users } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyConfig';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const features = [
    'Experienced technicians',
    'Quality workmanship',
    'Reliable service',
    'Transparent pricing',
    'Residential & commercial support',
    'Maintenance solutions'
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column (Desktop) / Top (Mobile): Image with overlay */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 order-1 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl">
              <div className="aspect-[4/3] relative w-full overflow-hidden">
                <img
                  src={COMPANY_CONFIG.images.about}
                  alt="Eagle Eye service team and technician fleet vehicle in Lahore"
                  className="w-full h-full object-cover object-center"
                  width={640}
                  height={480}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Micro badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-sm p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Full-Service Trade Provider</div>
                      <div className="text-[11px] text-slate-400">Heating, ventilation, air conditioning & electrical</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Desktop) / Below (Mobile): Content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 order-2 lg:order-2 text-left"
          >
            {/* Small label */}
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
              ABOUT OUR COMPANY
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-6">
              Complete HVAC & Electrical Solutions Under One Roof
            </h2>

            <p className="text-base text-slate-300 leading-relaxed mb-4">
              {COMPANY_CONFIG.name} provides integrated HVAC and electrical solutions for residential and commercial properties. Rather than juggling separate contractors for heating, cooling, and electrical panels, our unified team ensures seamless coordination, strict code adherence, and superior system efficiency.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              From sizing and installing variable-speed inverter air conditioners to upgrading 200A service panels and running dedicated EV charging lines, we take pride in clean installations, tidy job sites, and transparent communication.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-medium text-slate-200">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-amber-400 hover:bg-amber-300 hover:scale-[1.02] text-slate-950 font-bold text-sm shadow-md shadow-amber-500/10 transition-transform duration-200 min-h-[44px]"
              >
                <span>Request Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
