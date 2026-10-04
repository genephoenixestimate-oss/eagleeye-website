import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/gallery';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = [
    'All',
    'HVAC',
    'AC Installation',
    'AC Cleaning',
    'Electrical',
    'Commercial',
    'Residential'
  ];

  const filteredItems =
    activeFilter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) =>
          item.tags.some((tag) => tag.toLowerCase() === activeFilter.toLowerCase())
        );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-slate-900/40 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
            PROJECT PORTFOLIO
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Recent Service & Installation Work
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Explore our completed HVAC installations, panel replacements, electrical wiring, and preventative cleaning jobs.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors min-h-[40px] ${
                activeFilter === filter
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'bg-slate-950/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid: 3-4 columns desktop, 2-3 tablet, 1-2 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 cursor-pointer shadow-md hover:border-slate-700 transition-all"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-slate-900 w-full">
                <img
                  src={item.thumb || item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300 will-change-transform"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-200" />

                {/* Hover overlay hint */}
                <div className="absolute top-3 right-3 p-2 rounded-lg bg-slate-950/80 text-slate-300 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Maximize2 className="w-4 h-4 text-amber-400" />
                </div>

                {/* Overlaid details */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                  <div className="flex items-center gap-2 text-[11px] text-amber-400 font-semibold mb-1">
                    <span>{item.subcategory}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-slate-400">{item.location}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800">
                <div>
                  <div className="text-xs font-semibold text-amber-400">
                    {filteredItems[lightboxIndex].subcategory}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {filteredItems[lightboxIndex].title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
                  aria-label="Close image lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image with Nav Buttons */}
              <div className="relative aspect-[16/10] bg-slate-950 flex items-center justify-center overflow-hidden">
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />

                <button
                  type="button"
                  onClick={prevLightbox}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/80 text-white hover:bg-slate-900 border border-slate-800 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
                  aria-label="Previous gallery image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextLightbox}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/80 text-white hover:bg-slate-900 border border-slate-800 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
                  aria-label="Next gallery image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Caption Footer */}
              <div className="p-4 sm:p-5 bg-slate-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-slate-300">
                <p className="max-w-xl text-left">
                  {filteredItems[lightboxIndex].description}
                </p>
                <div className="flex items-center gap-4 text-slate-400 shrink-0">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    {filteredItems[lightboxIndex].location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    {filteredItems[lightboxIndex].completedDate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
