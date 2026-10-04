import React from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2, Wrench, Zap, Clock } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyConfig';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative pt-24 sm:pt-28 md:pt-32 pb-16 lg:pb-24 overflow-hidden bg-slate-950">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-32 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & Staggered Entrance */}
          <div className="lg:col-span-7 text-left">
            {/* Clean editorial label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-4"
            >
              <span>Licensed HVAC Contractors</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Master Electricians</span>
            </motion.div>

            {/* Heading -> 0.1s delay */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 max-w-2xl"
            >
              Comfort, Cooling & Electrical Solutions You Can Rely On
            </motion.h1>

            {/* Description -> 0.2s delay */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl"
            >
              Professional HVAC installation, maintenance, repair, cleaning, and complete electrical services for homes and businesses.
            </motion.p>

            {/* CTA Buttons -> 0.3s delay with subtle hover scale */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10"
            >
              <button
                type="button"
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-amber-400 hover:bg-amber-300 active:scale-[0.98] hover:scale-[1.02] text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/20 transition-transform duration-200 min-h-[48px]"
              >
                <span>Book a Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_CONFIG.phone}`}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 hover:scale-[1.02] text-white font-semibold text-sm sm:text-base border border-slate-700/80 transition-transform duration-200 min-h-[48px]"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Now <span className="font-mono tabular-nums text-slate-400 sm:inline hidden">({COMPANY_CONFIG.phoneDisplay})</span></span>
              </a>
            </motion.div>

            {/* Trust Badges -> 0.4s delay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
            >
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-medium">Skilled Technicians</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-medium">Residential & Commercial</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-medium">Reliable Service</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Asset with subtle scale-in */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
              <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] relative w-full overflow-hidden">
                <img
                  src={COMPANY_CONFIG.images.hero}
                  alt="HVAC technician servicing outdoor AC inverter unit"
                  className="w-full h-full object-cover object-center"
                  width={640}
                  height={480}
                  loading="eager"
                  decoding="async"
                  // @ts-expect-error fetchpriority attribute
                  fetchpriority="high"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Overlaid operational micro-callouts */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white bg-slate-950/85 backdrop-blur-md rounded-lg p-3 border border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-medium">Direct Dispatch Available</span>
                  </div>
                  <span className="text-slate-400 font-mono tabular-nums">Avg 35m Response</span>
                </div>
              </div>
            </div>

            {/* Technical highlight chip beneath on desktop */}
            <div className="mt-3 flex items-center justify-between text-xs text-slate-400 px-1">
              <span>Dual-Trade Certified: HVAC & Electrical</span>
              <span className="text-amber-400 font-medium">Same-Day Diagnostic Available</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
