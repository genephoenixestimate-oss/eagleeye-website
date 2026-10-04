import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Snowflake, Zap, ArrowUp, X } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyConfig';

interface FooterProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesList = [
    { label: 'AC Installation', id: 'ac-installation' },
    { label: 'AC Repair', id: 'ac-repair' },
    { label: 'AC Maintenance', id: 'ac-maintenance' },
    { label: 'AC Cleaning', id: 'ac-cleaning' },
    { label: 'Electrical Wiring', id: 'electrical-wiring' },
    { label: 'Electrical Repair', id: 'electrical-repair' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Results', href: '#results' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-left pt-16 pb-24 sm:pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-850">
            {/* Column 1: Logo & Company Description (4 cols) */}
            <div className="lg:col-span-4">
              <a
                href="#home"
                className="flex items-center gap-2 mb-4 group"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 via-blue-700 to-amber-500 p-0.5 shadow-md flex items-center justify-center shrink-0">
                  <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center relative overflow-hidden">
                    <Snowflake className="w-3.5 h-3.5 text-blue-400 absolute -top-0.5 -left-0.5 opacity-80" />
                    <Zap className="w-4 h-4 text-amber-400 relative z-10" />
                  </div>
                </div>
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  {COMPANY_CONFIG.name}
                </span>
              </a>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 max-w-sm">
                Complete residential and commercial HVAC and electrical services. Engineered for reliable indoor comfort, energy efficiency, and safety.
              </p>

              <div className="text-xs text-slate-400 space-y-1">
                <div>Registered HVAC & Electrical Technicians</div>
                <div>Certified Inverter & Heat Pump Specialists</div>
              </div>
            </div>

            {/* Column 2: Services (2-3 cols) */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Services
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {servicesList.map((service) => (
                  <li key={service.id}>
                    <button
                      type="button"
                      onClick={() => onOpenBooking(service.label)}
                      className="hover:text-amber-400 transition-colors text-left"
                    >
                      {service.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Links (2 cols) */}
            <div className="lg:col-span-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-amber-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact & Hours (3 cols) */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Contact & Hours
              </h3>
              <div className="space-y-3 text-xs sm:text-sm">
                <a
                  href={`tel:${COMPANY_CONFIG.phone}`}
                  className="flex items-center gap-2.5 text-white hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-mono tabular-nums">{COMPANY_CONFIG.phoneDisplay}</span>
                </a>

                <a
                  href={`mailto:${COMPANY_CONFIG.email}`}
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{COMPANY_CONFIG.email}</span>
                </a>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    {COMPANY_CONFIG.address}<br />
                    {COMPANY_CONFIG.cityStateZip}
                  </span>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-slate-900">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div className="text-[11px] text-slate-400 leading-relaxed">
                    <div>{COMPANY_CONFIG.hoursWeekday}</div>
                    <div>{COMPANY_CONFIG.hoursWeekend}</div>
                    <div className="text-amber-400 font-semibold">{COMPANY_CONFIG.hoursEmergency}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © 2026 {COMPANY_CONFIG.name}. All Rights Reserved.
            </div>

            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setLegalModal('privacy')}
                className="hover:text-slate-300 transition-colors"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setLegalModal('terms')}
                className="hover:text-slate-300 transition-colors"
              >
                Terms & Conditions
              </button>
              <button
                type="button"
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors flex items-center justify-center min-h-[36px] min-w-[36px]"
                aria-label="Scroll back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy / Terms Modal */}
      {legalModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 text-left shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white">
                {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs text-slate-300 leading-relaxed space-y-3 max-h-60 overflow-y-auto">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    {COMPANY_CONFIG.name} values your privacy. We collect customer contact information (name, phone number, email address, property address) solely for scheduling, executing, and confirming HVAC and electrical service appointments.
                  </p>
                  <p>
                    We never sell, rent, or distribute personal information to third-party marketing companies. Data is protected using encrypted transmission protocols.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    All service appointments, repairs, and installations provided by {COMPANY_CONFIG.name} are subject to diagnostic inspection, code compliance, and written scope authorization.
                  </p>
                  <p>
                    Work is performed in accordance with national safety codes and local municipal jurisdiction standards.
                  </p>
                </>
              )}
            </div>
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
