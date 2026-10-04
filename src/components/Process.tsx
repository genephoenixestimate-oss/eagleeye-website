import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Search, Wrench, CheckCircle, ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Request Service',
      desc: 'Submit your request online or give us a quick call. We confirm details and schedule a prompt diagnostic visit.',
      icon: Calendar
    },
    {
      num: '02',
      title: 'Inspection & Diagnosis',
      desc: 'Our technician inspects your system with digital diagnostic tools and presents clear options with upfront pricing.',
      icon: Search
    },
    {
      num: '03',
      title: 'Professional Repair or Installation',
      desc: 'Work is performed cleanly using premium components, protective site drop-cloths, and strict safety protocols.',
      icon: Wrench
    },
    {
      num: '04',
      title: 'Final Testing & Support',
      desc: 'We test airflow, electrical parameters, and thermostat connectivity to ensure complete customer satisfaction.',
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-slate-900/30 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
            STEP-BY-STEP WORKFLOW
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Simple Service. Clear Process.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            From the moment you contact us to final testing, here is how we ensure seamless service.
          </p>
        </motion.div>

        {/* Timeline: Desktop Horizontal / Mobile Vertical */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-blue-600 via-amber-400 to-emerald-500 -translate-y-6 pointer-events-none opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative flex flex-col items-start bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-lg group hover:border-slate-700 hover:-translate-y-1 transition-all duration-200 text-left gpu-layer"
                >
                  {/* Step number badge & icon */}
                  <div className="flex items-center justify-between w-full mb-6">
                    <span className="font-mono text-2xl font-black text-amber-400">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-200">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
