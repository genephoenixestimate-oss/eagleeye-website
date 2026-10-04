import React from 'react';
import { motion } from 'motion/react';
import { Zap, CheckCircle2, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyConfig';

interface ElectricalServicesProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const ElectricalServices: React.FC<ElectricalServicesProps> = ({ onOpenBooking }) => {
  const electricalOfferings = [
    'Electrical wiring',
    'Rewiring',
    'Electrical repair',
    'Panel upgrades',
    'Breaker replacement',
    'Lighting installation',
    'Outlet & switch repair',
    'Generator connections',
    'Commercial electrical',
    'Electrical inspections'
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-slate-900/40 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column (Desktop) / Top (Mobile): Image Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 order-1"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl">
              <div className="aspect-[4/3] relative w-full overflow-hidden">
                <img
                  src={COMPANY_CONFIG.images.electrical}
                  alt="Precision circuit breaker panel wiring and safety disconnect"
                  className="w-full h-full object-cover object-center"
                  width={640}
                  height={480}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md rounded-xl p-3.5 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Cpu className="w-5 h-5 text-amber-400" />
                    <div>
                      <div className="text-xs font-bold text-white">200A & 400A Heavy Duty Service</div>
                      <div className="text-[11px] text-slate-400">NEC 2026 code-compliant installations</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold">100% Copper</span>
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
            className="lg:col-span-7 order-2 text-left"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>POWER & INFRASTRUCTURE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-6">
              Complete Electrical Services
            </h2>

            <p className="text-base text-slate-300 leading-relaxed mb-6">
              Safe, modern power is the backbone of your home or facility. Whether installing high-capacity dedicated circuits for heat pumps and EV chargers, upgrading old fuse boxes, or tracing persistent breaker trips, our electricians ensure every circuit is balanced, grounded, and code-verified.
            </p>

            {/* 10 Services List with subtle stagger */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {electricalOfferings.map((offering, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: Math.min(idx * 0.04, 0.3) }}
                  className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-200">{offering}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <button
                type="button"
                onClick={() => onOpenBooking('Electrical Services')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-amber-400 hover:bg-amber-300 hover:scale-[1.02] text-slate-950 font-bold text-sm shadow-md transition-transform duration-200 min-h-[44px]"
              >
                <span>Request Electrical Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
