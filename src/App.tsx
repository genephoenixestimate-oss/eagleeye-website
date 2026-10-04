import React, { useState, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { About } from './components/About';

// Code-split below-the-fold sections to minimize initial bundle size
const Services = lazy(() => import('./components/Services').then(m => ({ default: m.Services })));
const HVACCarousel = lazy(() => import('./components/HVACCarousel').then(m => ({ default: m.HVACCarousel })));
const ElectricalServices = lazy(() => import('./components/ElectricalServices').then(m => ({ default: m.ElectricalServices })));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs').then(m => ({ default: m.WhyChooseUs })));
const Process = lazy(() => import('./components/Process').then(m => ({ default: m.Process })));
const Results = lazy(() => import('./components/Results').then(m => ({ default: m.Results })));
const Gallery = lazy(() => import('./components/Gallery').then(m => ({ default: m.Gallery })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const ServiceAreas = lazy(() => import('./components/ServiceAreas').then(m => ({ default: m.ServiceAreas })));
const CTA = lazy(() => import('./components/CTA').then(m => ({ default: m.CTA })));
const ServiceForm = lazy(() => import('./components/ServiceForm').then(m => ({ default: m.ServiceForm })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const FinalCTA = lazy(() => import('./components/FinalCTA').then(m => ({ default: m.FinalCTA })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const FloatingButtons = lazy(() => import('./components/FloatingButtons').then(m => ({ default: m.FloatingButtons })));

// Lightweight CLS-preventing skeleton fallback
const SectionFallback: React.FC<{ minHeight?: string }> = ({ minHeight = 'min-h-[300px]' }) => (
  <div className={`w-full ${minHeight} bg-slate-950 flex items-center justify-center`} aria-hidden="true">
    <div className="w-5 h-5 rounded-full border-2 border-slate-800 border-t-amber-400 animate-spin opacity-50" />
  </div>
);

export default function App() {
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  // Background idle preloader: preload all lazy components so scrolling is 100% instant
  React.useEffect(() => {
    const preloader = () => {
      import('./components/Services');
      import('./components/HVACCarousel');
      import('./components/ElectricalServices');
      import('./components/WhyChooseUs');
      import('./components/Process');
      import('./components/Results');
      import('./components/Gallery');
      import('./components/Testimonials');
      import('./components/ServiceAreas');
      import('./components/CTA');
      import('./components/ServiceForm');
      import('./components/FAQ');
      import('./components/FinalCTA');
      import('./components/Footer');
      import('./components/FloatingButtons');
    };

    if ('requestIdleCallback' in window) {
      (window as Window).requestIdleCallback(preloader, { timeout: 1200 });
    } else {
      setTimeout(preloader, 200);
    }
  }, []);

  const handleOpenBooking = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPreselectedService(serviceTitle);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const input = document.getElementById('fullName');
        if (input) {
          input.focus();
        }
      }, 400);
    }
  };

  const handleClearPreselected = () => {
    setPreselectedService(undefined);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-400 selection:text-slate-950 overflow-x-hidden">
      {/* 1. Sticky Navigation (Above the fold) */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* 2. Hero Section (Above the fold - prioritized critical rendering) */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Statistics & Trust Bar (Above the fold) */}
        <TrustBar />

        {/* 4. About Our Company Section */}
        <About onOpenBooking={() => handleOpenBooking()} />

        {/* 5. Complete Services Section (HVAC + Electrical) */}
        <div id="services">
          <Suspense fallback={<SectionFallback minHeight="min-h-[600px]" />}>
            <Services onOpenBooking={handleOpenBooking} />
          </Suspense>
        </div>

        {/* 6. Visual HVAC Carousel */}
        <Suspense fallback={<SectionFallback minHeight="min-h-[450px]" />}>
          <HVACCarousel onOpenBooking={handleOpenBooking} />
        </Suspense>

        {/* 7. Dedicated Electrical Services Feature Section */}
        <Suspense fallback={<SectionFallback minHeight="min-h-[450px]" />}>
          <ElectricalServices onOpenBooking={handleOpenBooking} />
        </Suspense>

        {/* 8. Why Customers Choose Us */}
        <div id="why-us" className="cv-auto">
          <Suspense fallback={<SectionFallback minHeight="min-h-[400px]" />}>
            <WhyChooseUs />
          </Suspense>
        </div>

        {/* 9. Service Workflow Process */}
        <div className="cv-auto">
          <Suspense fallback={<SectionFallback minHeight="min-h-[350px]" />}>
            <Process />
          </Suspense>
        </div>

        {/* 10. Interactive Before/After Results */}
        <div id="results" className="cv-auto">
          <Suspense fallback={<SectionFallback minHeight="min-h-[500px]" />}>
            <Results />
          </Suspense>
        </div>

        {/* 11. Project & Service Gallery with Lightbox */}
        <div className="cv-auto">
          <Suspense fallback={<SectionFallback minHeight="min-h-[500px]" />}>
            <Gallery />
          </Suspense>
        </div>

        {/* 12. Testimonials Carousel */}
        <div id="reviews" className="cv-auto">
          <Suspense fallback={<SectionFallback minHeight="min-h-[400px]" />}>
            <Testimonials />
          </Suspense>
        </div>

        {/* 13. Service Areas & Coverage Checker + Dedicated Area Landing Views */}
        <div className="cv-auto">
          <Suspense fallback={<SectionFallback minHeight="min-h-[450px]" />}>
            <ServiceAreas onOpenBooking={handleOpenBooking} />
          </Suspense>
        </div>

        {/* 14. Emergency & Quick CTA Banner */}
        <div className="cv-auto">
          <Suspense fallback={<SectionFallback minHeight="min-h-[300px]" />}>
            <CTA onOpenBooking={() => handleOpenBooking()} />
          </Suspense>
        </div>

        {/* 15. Dynamic Service Booking Form */}
        <div id="contact" className="cv-auto">
          <Suspense fallback={<SectionFallback minHeight="min-h-[600px]" />}>
            <ServiceForm
              preselectedService={preselectedService}
              onClearPreselected={handleClearPreselected}
            />
          </Suspense>
        </div>

        {/* 16. Frequently Asked Questions Accordion */}
        <div id="faq" className="cv-auto">
          <Suspense fallback={<SectionFallback minHeight="min-h-[400px]" />}>
            <FAQ />
          </Suspense>
        </div>

        {/* 17. Final High-Conversion CTA */}
        <div className="cv-auto">
          <Suspense fallback={<SectionFallback minHeight="min-h-[350px]" />}>
            <FinalCTA onOpenBooking={() => handleOpenBooking()} />
          </Suspense>
        </div>
      </main>

      {/* 18. Footer */}
      <div className="cv-auto">
        <Suspense fallback={<SectionFallback minHeight="min-h-[250px]" />}>
          <Footer onOpenBooking={handleOpenBooking} />
        </Suspense>
      </div>

      {/* 19. Floating Quick-Action Buttons (Desktop Dock + Mobile Bottom Bar) */}
      <Suspense fallback={null}>
        <FloatingButtons onOpenBooking={() => handleOpenBooking()} />
      </Suspense>
    </div>
  );
}
