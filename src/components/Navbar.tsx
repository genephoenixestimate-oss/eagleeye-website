import React, { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X, ArrowUpRight, Snowflake, Zap } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyConfig';

interface NavbarProps {
  onOpenBooking?: (preselectedService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const isScrolledRef = useRef(false);
  const activeSectionRef = useRef('home');
  const scrollTickingRef = useRef(false);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Why Us', href: '#why-us', id: 'why-us' },
    { label: 'Results', href: '#results', id: 'results' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'services',
      'why-us',
      'results',
      'reviews',
      'faq',
      'contact',
    ];

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 140;

      let currentSection = 'home';

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (!section) continue;

        const sectionTop = section.offsetTop;

        if (scrollPosition >= sectionTop) {
          currentSection = id;
        } else {
          break;
        }
      }

      if (activeSectionRef.current !== currentSection) {
        activeSectionRef.current = currentSection;
        setActiveSection(currentSection);
      }
    };

    const checkScroll = () => {
      const scrolled = window.scrollY > 20;

      if (scrolled !== isScrolledRef.current) {
        isScrolledRef.current = scrolled;
        setIsScrolled(scrolled);
      }

      if (!scrollTickingRef.current) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          scrollTickingRef.current = false;
        });

        scrollTickingRef.current = true;
      }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });

    // Set correct active section on initial page load
    updateActiveSection();
    checkScroll();

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    id: string
  ) => {
    e.preventDefault();

    // Immediately move the underline to the clicked item.
    activeSectionRef.current = id;
    setActiveSection(id);

    setMobileMenuOpen(false);

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleBookClick = () => {
    setMobileMenuOpen(false);

    if (onOpenBooking) {
      onOpenBooking();
    } else {
      const contactEl = document.getElementById('contact');

      if (contactEl) {
        contactEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-250 ${
          isScrolled
            ? 'bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-slate-800/80 py-3'
            : 'bg-slate-950/80 backdrop-blur-sm border-b border-slate-800/50 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">

            {/* Zone 1: Brand Wordmark */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home', 'home')}
              className="flex items-center gap-2 group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md"
              aria-label={`${COMPANY_CONFIG.name} - Home`}
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 via-blue-700 to-amber-500 p-0.5 shadow-md flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center relative overflow-hidden">
                  <Snowflake className="w-3.5 h-3.5 text-blue-400 absolute -top-0.5 -left-0.5 opacity-80" />
                  <Zap className="w-4 h-4 text-amber-400 relative z-10" />
                </div>
              </div>

              <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors whitespace-nowrap">
                {COMPANY_CONFIG.name}
              </span>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) =>
                      handleNavClick(e, link.href, link.id)
                    }
                    className={`nav-link text-sm font-medium py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded ${
                      isActive
                        ? 'text-white nav-active'
                        : 'text-slate-300 hover:text-white'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action & Phone */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${COMPANY_CONFIG.phone}`}
                className="flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-amber-400 transition-colors py-2 px-3 rounded-lg border border-slate-700/60 bg-slate-900/60 hover:bg-slate-800/80 min-h-[44px]"
                aria-label={`Call ${COMPANY_CONFIG.phoneDisplay}`}
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-mono tabular-nums">
                  {COMPANY_CONFIG.phoneDisplay}
                </span>
              </a>

              <button
                onClick={handleBookClick}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] transition-all rounded-lg shadow-sm shadow-amber-500/20 whitespace-nowrap min-h-[44px]"
              >
                <span>Book Service</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={`tel:${COMPANY_CONFIG.phone}`}
                className="p-2.5 rounded-lg bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-slate-300 hover:text-white bg-slate-900 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) =>
                    handleNavClick(e, link.href, link.id)
                  }
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors min-h-[44px] flex items-center relative ${
                    activeSection === link.id
                      ? 'bg-blue-900/30 text-amber-400 font-semibold border-l-4 border-amber-400'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2">
              <a
                href={`tel:${COMPANY_CONFIG.phone}`}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-slate-900 text-white font-medium border border-slate-700 hover:bg-slate-800 transition-colors min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {COMPANY_CONFIG.phoneDisplay}</span>
              </a>

              <button
                type="button"
                onClick={handleBookClick}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-amber-400 text-slate-950 font-bold hover:bg-amber-300 transition-colors min-h-[44px]"
              >
                <span>Request Service Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};