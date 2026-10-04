import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Search, CheckCircle2, Clock, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { SERVICE_AREAS, ServiceArea } from '../data/serviceAreas';
import { ServiceAreaLandingModal } from './ServiceAreaLandingModal';

interface ServiceAreasProps {
  onOpenBooking: (preselectedArea?: string) => void;
}

export const ServiceAreas: React.FC<ServiceAreasProps> = ({ onOpenBooking }) => {
  const [zipInput, setZipInput] = useState('');
  const [zipResult, setZipResult] = useState<{
    found: boolean;
    areaName?: string;
    message: string;
  } | null>(null);
  const [selectedArea, setSelectedArea] = useState<ServiceArea | null>(null);

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const query = zipInput.trim().toLowerCase();
    if (!query) return;

    const matched = SERVICE_AREAS.find((area) =>
      area.zipCodes.includes(query) ||
      area.name.toLowerCase().includes(query) ||
      area.description.toLowerCase().includes(query)
    );

    if (matched) {
      setZipResult({
        found: true,
        areaName: matched.name,
        message: `Great news! "${zipInput}" is covered in our ${matched.name} territory (${matched.dispatchTime} average response from our Walton Road hub).`
      });
    } else {
      // General Lahore service verification
      setZipResult({
        found: true,
        areaName: 'Lahore Greater Metropolitan Dispatch',
        message: `Your location "${zipInput}" is eligible for Eagle Eye technician dispatch across Lahore. Please request service or call 0328 6771816 for immediate booking.`
      });
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-slate-900/40 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            REGIONAL COVERAGE
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Serving Homes & Businesses In Your Area
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Strategically positioned dispatch units ensure rapid response for residential repairs, high-demand commercial HVAC, and emergency electrical troubleshooting.
          </p>
        </div>

        {/* Interactive Zip Code Coverage Checker */}
        <div className="max-w-xl mx-auto mb-12 sm:mb-16">
          <form
            onSubmit={handleZipCheck}
            className="flex flex-col sm:flex-row items-stretch gap-2.5 p-2 bg-slate-950 rounded-2xl border border-slate-800 shadow-xl"
          >
            <div className="relative flex-1">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={zipInput}
                onChange={(e) => {
                  setZipInput(e.target.value);
                  if (zipResult) setZipResult(null);
                }}
                placeholder="Enter your postal code or area (e.g. 54792, Walton Road, DHA, Gulberg)"
                maxLength={10}
                className="w-full pl-10 pr-4 py-3 bg-transparent text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-400 rounded-xl"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-2 min-h-[44px]"
            >
              <Search className="w-4 h-4" />
              <span>Check Coverage</span>
            </button>
          </form>

          {/* Result Alert */}
          {zipResult && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3 text-xs sm:text-sm text-left"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="flex-1 text-slate-300">
                <span>{zipResult.message}</span>
              </div>
              <button
                type="button"
                onClick={() => onOpenBooking(`Zip Code: ${zipInput}`)}
                className="text-amber-400 font-semibold hover:underline shrink-0 text-xs"
              >
                Book Dispatch
              </button>
            </motion.div>
          )}
        </div>

        {/* 4 Service Area Hub Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_AREAS.map((area) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all text-left shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-semibold text-amber-400 uppercase tracking-wider">
                    {area.countyOrZone}
                  </span>
                  <span className="font-mono text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-blue-400" />
                    {area.dispatchTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {area.name}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {area.tagline}
                </p>

                {/* Popular Services preview */}
                <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-900">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Common Requests:
                  </div>
                  {area.popularServices.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Area Landing Page Action */}
              <div className="pt-4 border-t border-slate-850 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedArea(area)}
                  className="flex-1 py-2.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-xs font-semibold text-slate-200 hover:text-white transition-colors min-h-[44px] flex items-center justify-center gap-1.5"
                >
                  <span>View Area Hub</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Area Dedicated Landing View Modal */}
      <ServiceAreaLandingModal
        area={selectedArea}
        onClose={() => setSelectedArea(null)}
        onBookInArea={(areaTitle) => onOpenBooking(`Service Area: ${areaTitle}`)}
      />
    </section>
  );
};
