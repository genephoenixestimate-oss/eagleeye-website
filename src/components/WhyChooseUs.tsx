import React from 'react';
import { motion } from 'motion/react';
import { Users, Clock, ShieldCheck, DollarSign, Award, Building } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const cards = [
    {
      icon: Users,
      title: 'Experienced Technicians',
      description: 'Dedicated professionals with extensive hands-on experience in complex HVAC systems and modern electrical distribution.',
      color: 'text-blue-400'
    },
    {
      icon: Clock,
      title: 'Fast Response',
      description: 'Prompt communication, transparent appointment scheduling, and rapid dispatch for urgent heating, cooling, or electrical issues.',
      color: 'text-amber-400'
    },
    {
      icon: ShieldCheck,
      title: 'Quality Equipment',
      description: 'We install proven industry components, high-efficiency inverter compressors, durable copper conduit, and dependable circuit breakers.',
      color: 'text-emerald-400'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'Clear upfront service estimates before work commences with straightforward itemized details and no hidden fees.',
      color: 'text-cyan-400'
    },
    {
      icon: Award,
      title: 'Reliable Workmanship',
      description: 'Rigorous attention to detail, clean wire routing, tidy job sites, and double-checked safety testing on every project.',
      color: 'text-indigo-400'
    },
    {
      icon: Building,
      title: 'Residential & Commercial',
      description: 'Equipped to service single-family homes, multi-family condominiums, retail storefronts, and light industrial facilities.',
      color: 'text-rose-400'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            THE EAGLE EYE STANDARD
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Why Customers Choose Us
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            We deliver disciplined tradecraft, clean installations, and dependable support for property owners throughout the region.
          </p>
        </motion.div>

        {/* 6 Cards Grid: 3 columns desktop, 2 columns tablet, 1 column mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.35, delay: Math.min(idx * 0.05, 0.25) }}
                className="bg-slate-900/70 border border-slate-800/90 rounded-2xl p-6 sm:p-7 hover:border-slate-700 hover:bg-slate-900 hover:-translate-y-1 transition-all duration-200 group gpu-layer"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200">
                  <IconComp className={`w-6 h-6 ${card.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-amber-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
