import React from 'react';
import { DOCTOR_DATA, LOCATIONS_DATA } from '../../data/medicalData';
import { WhatsAppIcon, InstagramIcon } from '../icons/CustomIcons';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="border-t border-[#ECE4DF] bg-white pt-16 pb-12 text-[#241817]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#ECE4DF]">
          {/* Column 1: Doctor Identity */}
          <div className="md:col-span-4 flex flex-col items-start">
            <a href="#inicio" className="font-serif text-2xl font-semibold text-[#241817]">
              {DOCTOR_DATA.name}
            </a>
            <p className="mt-1 text-xs font-semibold tracking-wider text-[#FF8F85] uppercase">
              {DOCTOR_DATA.crm}
            </p>
            <p className="mt-2 text-sm text-[#6B5755]">
              Clínica Geral &bull; Ultrassonografia
            </p>
            <p className="mt-4 text-xs text-[#6B5755] leading-relaxed max-w-xs">
              Atendimento com precisão diagnóstica, tecnologia e acolhimento em diferentes municípios de Goiás.
            </p>

            {/* Instagram Link */}
            <div className="mt-6">
              <a
                href={DOCTOR_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#ECE4DF] bg-[#FAF8F6] px-4 py-2 text-xs font-semibold text-[#241817] transition-colors hover:border-[#FF8F85] hover:text-[#FF8F85]"
              >
                <InstagramIcon className="h-4 w-4 text-[#FF8F85]" />
                <span>{DOCTOR_DATA.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation in Portuguese */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#998381]">
              Navegação
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#inicio" className="text-[#6B5755] hover:text-[#241817] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-[#6B5755] hover:text-[#241817] transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#exames" className="text-[#6B5755] hover:text-[#241817] transition-colors">
                  Exames
                </a>
              </li>
              <li>
                <a href="#onde-atendo" className="text-[#6B5755] hover:text-[#241817] transition-colors">
                  Onde Atendo
                </a>
              </li>
              <li>
                <a
                  href={DOCTOR_DATA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6B5755] hover:text-[#241817] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: The 4 WhatsApp Appointment Options */}
          <div className="md:col-span-5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#998381]">
              Agendamentos por Unidade (WhatsApp)
            </h4>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {LOCATIONS_DATA.map((loc) => (
                <a
                  key={loc.id}
                  href={loc.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-xl border border-[#ECE4DF] bg-[#FAF8F6] p-3 text-xs transition-all hover:border-[#25D366] hover:bg-white shadow-2xs"
                >
                  <span className="font-semibold text-[#241817] group-hover:text-[#25D366] transition-colors">
                    {loc.name}
                  </span>
                  {loc.city && <span className="text-[11px] text-[#6B5755]">{loc.city}</span>}
                  <span className="mt-1 font-mono text-[11px] text-[#25D366] flex items-center gap-1">
                    <WhatsAppIcon className="h-3 w-3" />
                    {loc.formattedPhone}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright & back to top */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B5755]">
          <p>{DOCTOR_DATA.copyright}</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-medium text-[#6B5755] hover:text-[#241817] transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="h-3.5 w-3.5 text-[#FF8F85]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
