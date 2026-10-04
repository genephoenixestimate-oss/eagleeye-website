import React from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyConfig';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-20 lg:py-28 bg-slate-950 overflow-hidden border-t border-slate-800">
      {/* Background Image & Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={COMPANY_CONFIG.images.hero}
          alt="HVAC and Electrical Field Craft"
          className="w-full h-full object-cover object-center opacity-15"
          width={1280}
          height={600}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/95 to-slate-950/80" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
            YOUR TRUSTED TRADE PARTNERS
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
            Let's Get Your Property Comfortable & Safe
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
            From HVAC maintenance to complete electrical repairs, we're ready to help. Contact our team today for prompt service and clear communication.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 active:scale-[0.98] hover:scale-[1.02] text-slate-950 font-bold text-sm sm:text-base shadow-xl shadow-amber-500/20 transition-transform duration-200 min-h-[48px]"
            >
              <span>Book a Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${COMPANY_CONFIG.phone}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 hover:scale-[1.02] text-white font-semibold text-sm sm:text-base border border-slate-700 transition-transform duration-200 min-h-[48px]"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Now: <span className="font-mono tabular-nums">{COMPANY_CONFIG.phoneDisplay}</span></span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Licensed & Insured
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              Upfront Transparent Pricing
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Emergency Support Available
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
