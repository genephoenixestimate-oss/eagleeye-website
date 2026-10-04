import React from 'react';
import { X, ArrowRight, CheckCircle2, Shield, Wrench, Clock, Zap } from 'lucide-react';
import { ServiceItem } from '../data/services';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService
}) => {
  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className="relative bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
              {service.category === 'hvac' ? 'HVAC & Climate Service' : 'Electrical System Service'}
            </div>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white">
              {service.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {service.fullDesc}
          </p>

          {/* Included Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Included Capabilities & Scope
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-950/50 border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications */}
          {service.specs && service.specs.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Technical Specifications & Standards
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {service.specs.map((spec, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                    <div className="text-[11px] text-slate-400 mb-1">{spec.label}</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Service Commitment Note */}
          <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-800/40 flex items-start gap-3">
            <Shield className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <div className="text-xs text-blue-200 leading-relaxed">
              All work is executed according to state safety codes, backed by warranty, and performed by background-checked technicians.
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-lg text-slate-300 hover:text-white bg-slate-900 border border-slate-700/80 text-xs font-semibold min-h-[44px]"
          >
            Close Details
          </button>
          <button
            type="button"
            onClick={() => {
              onBookService(service.title);
              onClose();
            }}
            className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all min-h-[44px]"
          >
            <span>Book This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
