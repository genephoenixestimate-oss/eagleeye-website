import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight, Snowflake, Wrench, ShieldCheck, Sparkles, Flame, Wind, Fan, Building2 } from 'lucide-react';
import { HVAC_CAROUSEL_ITEMS } from '../data/services';

interface HVACCarouselProps {
  onOpenBooking: (serviceTitle?: string) => void;
}

export const HVACCarousel: React.FC<HVACCarouselProps> = ({ onOpenBooking }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Responsive itemsPerView
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalCards = HVAC_CAROUSEL_ITEMS.length;
  const maxIndex = Math.max(0, totalCards - itemsPerView);

  // Visibility and in-view awareness to stop autoplay when not visible or tab hidden
  const [isVisibleInViewport, setIsVisibleInViewport] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisibleInViewport(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Autoplay only when in view and document is visible
  useEffect(() => {
    if (isPaused || !isVisibleInViewport) return;

    let timer: NodeJS.Timeout | null = null;

    const startTimer = () => {
      if (document.visibilityState === 'visible') {
        timer = setInterval(() => {
          setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
        }, 4500);
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
  }, [isPaused, maxIndex, isVisibleInViewport]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getItemIcon = (index: number) => {
    const icons = [Snowflake, Wrench, ShieldCheck, Sparkles, Flame, Wind, Fan, Building2];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="w-4 h-4 text-amber-400" />;
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-slate-950 overflow-hidden relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row with arrows */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
              CLIMATE ENGINEERING SPECIALTIES
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Featured HVAC Solutions
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
              aria-label="Previous HVAC slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
              aria-label="Next HVAC slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out will-change-transform"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {HVAC_CAROUSEL_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="shrink-0 px-2 sm:px-3"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg h-full flex flex-col group hover:border-slate-700 transition-all gpu-layer">
                  {/* Image container */}
                  <div className="aspect-[16/10] relative overflow-hidden bg-slate-950 w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={250}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-sm border border-slate-800 text-xs font-semibold text-white">
                      {getItemIcon(idx)}
                      <span>{item.subtitle}</span>
                    </div>
                  </div>

                  {/* Body content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                        {item.desc}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenBooking(item.title)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-800 hover:bg-amber-400 hover:text-slate-950 text-slate-200 font-semibold text-xs transition-colors min-h-[44px]"
                    >
                      <span>Request Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentIndex(dotIdx)}
              className={`h-2 rounded-full transition-all min-w-[20px] min-h-[20px] flex items-center justify-center`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            >
              <span
                className={`block h-1.5 rounded-full transition-all ${
                  currentIndex === dotIdx ? 'w-8 bg-amber-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
