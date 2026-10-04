import React from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyConfig';

interface CTAProps {
  onOpenBooking: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-slate-950 overflow-hidden border-t border-slate-800">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={COMPANY_CONFIG.images.hero}
          alt="HVAC service equipment background"
          className="w-full h-full object-cover object-center opacity-15"
          width={1280}
          height={600}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/80" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>RAPID DISPATCH SERVICE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Need HVAC or Electrical Service?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
            Tell us what you need and our team will help you find the right solution. Whether dealing with an active cooling failure, tripping breakers, or planned seasonal maintenance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-amber-400 hover:bg-amber-300 active:scale-[0.98] hover:scale-[1.02] text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/20 transition-transform duration-200 min-h-[48px]"
            >
              <span>Request Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${COMPANY_CONFIG.phone}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 hover:scale-[1.02] text-white font-semibold text-sm sm:text-base border border-slate-700 transition-transform duration-200 min-h-[48px]"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Now: <span className="font-mono tabular-nums">{COMPANY_CONFIG.phoneDisplay}</span></span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>No Overtime Charges for Regular Diagnostics</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-blue-400" />
              <span>Direct Phone Support with Field Coordinators</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
