import React from 'react';
import { X, MapPin, Clock, ShieldAlert, CheckCircle2, ArrowRight, Phone, Building } from 'lucide-react';
import { ServiceArea } from '../data/serviceAreas';
import { COMPANY_CONFIG } from '../data/companyConfig';

interface ServiceAreaLandingModalProps {
  area: ServiceArea | null;
  onClose: () => void;
  onBookInArea: (areaName: string) => void;
}

export const ServiceAreaLandingModal: React.FC<ServiceAreaLandingModalProps> = ({
  area,
  onClose,
  onBookInArea
}) => {
  if (!area) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="area-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className="relative bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner with Map pin */}
        <div className="bg-gradient-to-r from-blue-900/60 to-slate-900 p-6 sm:p-8 border-b border-slate-800 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg bg-slate-950/60 text-slate-300 hover:text-white min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
            aria-label="Close service area view"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            <MapPin className="w-4 h-4" />
            <span>Dedicated Service Zone · {area.countyOrZone}</span>
          </div>

          <h3 id="area-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            {area.name}
          </h3>

          <p className="text-sm text-slate-300 max-w-lg">
            {area.tagline}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-200">
            <div className="flex items-center gap-1.5 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-700/60">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Typical Dispatch: <strong className="text-white font-mono">{area.dispatchTime}</strong></span>
            </div>
            {area.emergencyAvailable && (
              <div className="flex items-center gap-1.5 bg-emerald-950/60 text-emerald-300 px-3 py-1.5 rounded-lg border border-emerald-800/50">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>24/7 Rapid Emergency Response Active</span>
              </div>
            )}
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto text-left">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Regional Trade Profile & Capabilities
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {area.description}
            </p>
          </div>

          {/* Popular local services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Most Requested Local Services
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {area.popularServices.map((service, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950/50 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-xs font-medium text-slate-200">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Postal codes serviced */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Primary Covered Zip Codes
            </h4>
            <div className="flex flex-wrap gap-2">
              {area.zipCodes.map((zip) => (
                <span
                  key={zip}
                  className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-xs font-mono font-semibold text-amber-300"
                >
                  {zip}
                </span>
              ))}
              <span className="px-2.5 py-1 text-xs text-slate-400">
                + surrounding adjacent neighborhoods
              </span>
            </div>
          </div>

          {/* Local Dispatch Office */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
            <div>
              <div className="font-semibold text-white">Local Field Hub</div>
              <div className="text-slate-400">{area.localOffice}</div>
            </div>
            <a
              href={`tel:${COMPANY_CONFIG.phone}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-amber-400 hover:bg-slate-700 font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Hub</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800 text-xs font-semibold min-h-[44px]"
          >
            Back to Areas
          </button>
          <button
            type="button"
            onClick={() => {
              onBookInArea(area.name);
              onClose();
            }}
            className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all min-h-[44px]"
          >
            <span>Book Service for {area.name}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
