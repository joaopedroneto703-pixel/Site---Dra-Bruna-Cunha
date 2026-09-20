import React, { useEffect, useState } from 'react';
import { DOCTOR_DATA, NAV_ITEMS } from '../../data/medicalData';
import { WhatsAppIcon } from '../icons/CustomIcons';
import { Menu, X, Calendar, ChevronRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on anchor click
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#FAF8F6]/90 backdrop-blur-md border-b border-[#ECE4DF] shadow-xs'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Doctor Brand Identity */}
          <a
            href="#inicio"
            className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8F85] rounded-lg"
          >
            <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#241817] transition-colors group-hover:text-[#B1837F]">
              {DOCTOR_DATA.name}
            </span>
            <span className="text-[11px] font-medium tracking-widest text-[#6B5755] uppercase">
              {DOCTOR_DATA.crm} • Ultrassonografia
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação Principal">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-[#6B5755] transition-colors hover:text-[#241817] py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#FF8F85] after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Primary Action Button (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              id="header-cta-button"
              href="#onde-atendo"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#241817] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#B1837F] hover:shadow-md active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8F85]"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#FF8F85]" />
              <span>Agendar atendimento</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#onde-atendo"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#241817] px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 text-[#FF8F85]" />
              <span>Agendar</span>
            </a>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-xl p-2 text-[#241817] hover:bg-[#ECE4DF]/60 focus:outline-none focus:ring-2 focus:ring-[#FF8F85]"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden border-b border-[#ECE4DF] bg-[#FAF8F6]/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl transition-all"
        >
          <div className="flex flex-col gap-1 border-b border-[#ECE4DF] pb-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-[#241817] hover:bg-white/70 active:bg-white"
              >
                <span>{item.label}</span>
                <ChevronRight className="h-4 w-4 text-[#B1837F]" />
              </a>
            ))}
          </div>

          <div className="pt-4 space-y-3">
            <div className="px-2">
              <p className="text-xs font-medium text-[#6B5755]">
                Dra. Bruna Cunha &bull; {DOCTOR_DATA.crm}
              </p>
              <p className="text-[11px] text-[#998381]">
                Atendimento em Fazenda Nova, Jussara e Montes Claros de Goiás
              </p>
            </div>

            <a
              id="mobile-cta-agendar"
              href="#onde-atendo"
              onClick={handleNavClick}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#241817] py-3.5 text-center text-sm font-semibold text-white shadow-md hover:bg-[#B1837F] active:scale-95"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#FF8F85]" />
              <span>Agendar atendimento</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
