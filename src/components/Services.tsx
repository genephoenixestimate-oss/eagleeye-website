import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Snowflake,
  Wrench,
  ShieldCheck,
  Sparkles,
  Flame,
  RefreshCw,
  Wind,
  Fan,
  Zap,
  Activity,
  Sun,
  Cpu,
  Power,
  Radio,
  CheckCircle2,
  Layers,
  ArrowRight,
  Info
} from 'lucide-react';
import { HVAC_SERVICES, ELECTRICAL_SERVICES, ServiceItem } from '../data/services';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesProps {
  onOpenBooking: (preselectedService?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'hvac' | 'electrical'>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const allServices = React.useMemo(() => [...HVAC_SERVICES, ...ELECTRICAL_SERVICES], []);

  const displayedServices = React.useMemo(() => {
    if (activeCategory === 'all') return allServices;
    if (activeCategory === 'hvac') return HVAC_SERVICES;
    return ELECTRICAL_SERVICES;
  }, [activeCategory, allServices]);

  const getServiceIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5' };
    switch (iconName) {
      case 'Snowflake':
        return <Snowflake {...props} className="w-5 h-5 text-blue-400" />;
      case 'Wrench':
        return <Wrench {...props} className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles':
        return <Sparkles {...props} className="w-5 h-5 text-cyan-400" />;
      case 'Flame':
        return <Flame {...props} className="w-5 h-5 text-orange-400" />;
      case 'RefreshCw':
        return <RefreshCw {...props} className="w-5 h-5 text-indigo-400" />;
      case 'Wind':
        return <Wind {...props} className="w-5 h-5 text-teal-400" />;
      case 'Fan':
        return <Fan {...props} className="w-5 h-5 text-sky-400" />;
      case 'Zap':
        return <Zap {...props} className="w-5 h-5 text-amber-400" />;
      case 'Activity':
        return <Activity {...props} className="w-5 h-5 text-rose-400" />;
      case 'Sun':
        return <Sun {...props} className="w-5 h-5 text-amber-300" />;
      case 'Cpu':
        return <Cpu {...props} className="w-5 h-5 text-purple-400" />;
      case 'Power':
        return <Power {...props} className="w-5 h-5 text-blue-400" />;
      case 'Radio':
        return <Radio {...props} className="w-5 h-5 text-emerald-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 {...props} className="w-5 h-5 text-teal-400" />;
      case 'Layers':
        return <Layers {...props} className="w-5 h-5 text-blue-300" />;
      default:
        return <Wrench {...props} className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-slate-900/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            PROVEN EXPERTISE
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            From installation and repairs to routine maintenance, we help keep your property comfortable, efficient, and safe.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="mt-8 flex items-center justify-center gap-2 p-1 bg-slate-950/80 rounded-xl border border-slate-800 inline-flex">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors min-h-[44px] ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Services ({allServices.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('hvac')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors min-h-[44px] ${
                activeCategory === 'hvac'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              HVAC Solutions ({HVAC_SERVICES.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('electrical')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors min-h-[44px] ${
                activeCategory === 'electrical'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Electrical Services ({ELECTRICAL_SERVICES.length})
            </button>
          </div>
        </div>

        {/* Responsive Grid: 4 columns desktop, 2 columns tablet, 1 column mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.35, delay: Math.min(idx * 0.05, 0.3) }}
              className="bg-slate-950 border border-slate-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-200 group hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/20 gpu-layer"
            >
              <div>
                {/* Header row: Icon & quiet category text */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:bg-slate-850 transition-transform duration-200">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    {service.category === 'hvac' ? 'HVAC' : 'Electrical'}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 line-clamp-3">
                  {service.shortDesc}
                </p>

                {/* Feature List (4 items) */}
                <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-900">
                  {service.features.slice(0, 4).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-850 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="flex-1 py-2 px-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-800 transition-colors min-h-[44px] flex items-center justify-center gap-1.5"
                >
                  <Info className="w-3.5 h-3.5 text-slate-400" />
                  <span>Learn More</span>
                </button>
                <button
                  type="button"
                  onClick={() => onOpenBooking(service.title)}
                  className="py-2 px-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-all min-h-[44px] flex items-center justify-center hover:scale-105 active:scale-95"
                  aria-label={`Request ${service.title}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Service Deep Dive */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(title) => onOpenBooking(title)}
      />
    </section>
  );
};
