import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Sliders, Sparkles, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { BEFORE_AFTER_ITEMS, BeforeAfterItem } from '../data/resultsData';

export const Results: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentItem: BeforeAfterItem = BEFORE_AFTER_ITEMS[selectedIdx];

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            MEASURABLE CRAFTSMANSHIP
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Results That Make a Difference
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Compare actual before-and-after conditions to see how precision cleaning, diagnostics, and modern electrical wiring restore comfort and safety.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {BEFORE_AFTER_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setSelectedIdx(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl border transition-all min-h-[44px] ${
                selectedIdx === idx
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/20'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {item.title.split(' ')[0]} {item.title.split(' ')[1]}
            </button>
          ))}
        </div>

        {/* Main Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/60 border border-slate-800 rounded-3xl p-4 sm:p-8">
          {/* Left: Interactive Before/After Visual Slider */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerUp}
              className="relative aspect-[16/10] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-slate-800 bg-slate-950 touch-none shadow-2xl"
            >
              {/* After Image (Background Layer) */}
              <img
                src={currentItem.afterImage}
                alt={currentItem.afterLabel}
                className="absolute inset-0 w-full h-full object-cover"
                width={640}
                height={400}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 right-3 px-3 py-1 rounded-md bg-emerald-950/85 backdrop-blur-sm border border-emerald-700/60 text-xs font-bold text-emerald-300 pointer-events-none">
                AFTER
              </div>

              {/* Before Image (Clipped Overlay Layer) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={currentItem.beforeImage}
                  alt={currentItem.beforeLabel}
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    height: '100%',
                  }}
                  width={640}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/30" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-amber-950/85 backdrop-blur-sm border border-amber-700/60 text-xs font-bold text-amber-300 pointer-events-none">
                  BEFORE
                </div>
              </div>

              {/* Draggable Divider Line & Knob with hover animation */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.8)] will-change-transform"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-2xl border-2 border-slate-900 pointer-events-auto hover:scale-110 active:scale-95 transition-transform duration-150">
                  <div className="flex items-center gap-0.5">
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Mobile Drag Helper Hint */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-sm text-[11px] text-slate-300 pointer-events-none border border-slate-800">
                Drag slider to compare
              </div>
            </div>
          </div>

          {/* Right: Technical Notes & Outcomes */}
          <div className="lg:col-span-5 text-left space-y-5">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
                {currentItem.category}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {currentItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentItem.description}
              </p>
            </div>

            {/* Before vs After details */}
            <div className="space-y-3 pt-2">
              <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-800/30 text-xs">
                <span className="font-bold text-amber-300 block mb-1">{currentItem.beforeLabel}</span>
                <span className="text-slate-300">{currentItem.beforeDetails}</span>
              </div>
              <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-800/30 text-xs">
                <span className="font-bold text-emerald-300 block mb-1">{currentItem.afterLabel}</span>
                <span className="text-slate-300">{currentItem.afterDetails}</span>
              </div>
            </div>

            {/* Metric pill */}
            <div className="pt-2 flex items-center gap-3">
              <div className="font-mono text-2xl sm:text-3xl font-extrabold text-amber-400">
                {currentItem.metric}
              </div>
              <div className="text-xs text-slate-400 leading-tight">
                {currentItem.metricLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
