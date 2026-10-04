import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalReviews = TESTIMONIALS.length;

  // Viewport observer
  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Autoplay only when in viewport and document is visible
  useEffect(() => {
    if (isPaused || !isInViewport) return;

    let timer: NodeJS.Timeout | null = null;

    const startTimer = () => {
      if (document.visibilityState === 'visible') {
        timer = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % totalReviews);
        }, 6000);
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        if (timer) clearInterval(timer);
      } else {
        startTimer();
      }
    };

    startTimer();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (timer) clearInterval(timer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPaused, isInViewport, totalReviews]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const current: Testimonial = TESTIMONIALS[currentIndex];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-28 bg-slate-950 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            CLIENT FEEDBACK
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Read candid feedback from local homeowners and commercial facility managers who depend on our climate and electrical services.
          </p>
        </div>

        {/* Testimonials Carousel Card */}
        <div
          className="max-w-3xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-800/80 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="text-left"
              >
                {/* 5-Star Rating Row */}
                <div className="flex items-center gap-1.5 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < current.rating
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-slate-700'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-xs font-semibold text-slate-400">
                    5.0 Verified Review
                  </span>
                </div>

                {/* Review Text */}
                <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-8">
                  "{current.comment}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-800/80 flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-amber-500 p-0.5 shrink-0">
                      <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center text-sm font-bold text-white">
                        {current.initials}
                      </div>
                    </div>
                    <div>
                      <div className="text-base font-bold text-white flex items-center gap-2">
                        <span>{current.name}</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="text-xs text-slate-400">
                        {current.role} · {current.location}
                      </div>
                    </div>
                  </div>

                  <div className="text-right text-xs">
                    <span className="font-semibold text-amber-400 block">{current.service}</span>
                    <span className="text-slate-400">{current.type} Property</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setCurrentIndex(dotIdx)}
                  className="p-1 min-h-[32px] min-w-[32px] flex items-center justify-center"
                  aria-label={`Go to testimonial ${dotIdx + 1}`}
                >
                  <span
                    className={`block h-2 rounded-full transition-all ${
                      currentIndex === dotIdx
                        ? 'w-7 bg-amber-400'
                        : 'w-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
