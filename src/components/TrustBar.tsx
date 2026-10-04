import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { COMPANY_CONFIG } from '../data/companyConfig';

interface StatCounterProps {
  end: number;
  suffix: string;
  duration?: number;
}

const StatCounter: React.FC<StatCounterProps> = ({ end, suffix, duration = 1.2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out quad
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="font-mono tabular-nums tracking-tight">
      {count}
      {suffix}
    </span>
  );
};

export const TrustBar: React.FC = () => {
  const stats = COMPANY_CONFIG.stats;

  return (
    <section className="relative z-20 -mt-2 bg-slate-900 border-y border-slate-800 py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/80">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`flex flex-col text-left ${idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6 lg:pl-8' : ''}`}
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-1 flex items-baseline gap-0.5">
                <StatCounter end={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-semibold text-amber-400 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 leading-relaxed">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
