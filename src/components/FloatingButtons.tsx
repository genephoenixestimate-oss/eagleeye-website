import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, ArrowUpRight } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyConfig';

interface FloatingButtonsProps {
  onOpenBooking: () => void;
}

export const FloatingButtons: React.FC<FloatingButtonsProps> = ({ onOpenBooking }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let currentVisible = false;
    const handleScroll = () => {
      const visible = window.scrollY > 250;
      if (visible !== currentVisible) {
        currentVisible = visible;
        setIsVisible(visible);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Floating Action Dock (Right Side) */}
      <div
        className={`hidden sm:flex fixed bottom-6 right-6 z-40 flex-col gap-2.5 items-end transition-all duration-300 ease-out will-change-transform ${
          isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Phone Button */}
        <a
          href={`tel:${COMPANY_CONFIG.phone}`}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-slate-900/95 hover:bg-slate-800 text-white text-xs font-semibold shadow-xl border border-slate-700/80 transition-all hover:scale-105 min-h-[44px]"
          aria-label="Call Dispatch"
        >
          <div className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
            <Phone className="w-3.5 h-3.5" />
          </div>
          <span className="font-mono tabular-nums">{COMPANY_CONFIG.phoneDisplay}</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={COMPANY_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-slate-900/95 hover:bg-slate-800 text-white text-xs font-semibold shadow-xl border border-slate-700/80 transition-all hover:scale-105 min-h-[44px]"
          aria-label="Message on WhatsApp"
        >
          <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
            <MessageCircle className="w-3.5 h-3.5" />
          </div>
          <span>WhatsApp Chat</span>
        </a>

        {/* Book Service Floating CTA */}
        <button
          type="button"
          onClick={onOpenBooking}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold shadow-xl shadow-amber-500/20 transition-all hover:scale-105 min-h-[44px]"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Service</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Mobile Fixed Bottom Action Bar (Fixed ≤15% viewport height, safe area compatible) */}
      <div
        className={`sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800/90 px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-2xl transition-transform duration-300 ease-out will-change-transform ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="grid grid-cols-3 gap-2">
          {/* Call button */}
          <a
            href={`tel:${COMPANY_CONFIG.phone}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 active:bg-slate-800 min-h-[46px]"
            aria-label="Call Now"
          >
            <Phone className="w-4 h-4 text-amber-400 mb-0.5" />
            <span className="text-[11px] font-bold">Call</span>
          </a>

          {/* WhatsApp button */}
          <a
            href={COMPANY_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 active:bg-slate-800 min-h-[46px]"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 mb-0.5" />
            <span className="text-[11px] font-bold">WhatsApp</span>
          </a>

          {/* Book Service button */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-amber-400 text-slate-950 font-black active:bg-amber-300 min-h-[46px] shadow-sm"
          >
            <Calendar className="w-4 h-4 mb-0.5" />
            <span className="text-[11px] font-bold">Book Service</span>
          </button>
        </div>
      </div>
    </>
  );
};
