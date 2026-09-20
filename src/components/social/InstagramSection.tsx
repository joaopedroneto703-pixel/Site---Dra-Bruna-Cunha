import React from 'react';
import { DOCTOR_DATA } from '../../data/medicalData';
import { InstagramIcon } from '../icons/CustomIcons';
import { ArrowUpRight, Sparkles, Heart } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="relative py-16 lg:py-24 bg-[#F7F4F1]/60 border-t border-[#ECE4DF]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-[#ECE4DF] bg-white p-8 sm:p-12 shadow-md">
          {/* Ambient decorative glow */}
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gradient-to-br from-[#FF8F85]/20 to-[#B1837F]/15 blur-2xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            {/* Left side info */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FFEAE8] px-3.5 py-1 text-xs font-semibold text-[#FF8F85]">
                <InstagramIcon className="h-3.5 w-3.5" />
                <span>Instagram Oficial</span>
              </div>

              <h2 className="mt-4 font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#241817]">
                {DOCTOR_DATA.instagramSectionTitle}
              </h2>

              <p className="mt-3 text-sm text-[#6B5755] leading-relaxed">
                Conteúdos sobre prevenção, exames de ultrassonografia, rotina de atendimentos e esclarecimento de dúvidas em saúde feminina e geral.
              </p>

              <div className="mt-4 inline-flex items-center gap-2 font-mono text-base font-semibold text-[#241817]">
                <span>{DOCTOR_DATA.instagramHandle}</span>
              </div>
            </div>

            {/* Right side follow button */}
            <div className="shrink-0 flex flex-col items-center gap-3">
              <a
                id="btn-seguir-instagram"
                href={DOCTOR_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#241817] px-8 py-4 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-gradient-to-r hover:from-[#B1837F] hover:to-[#FF8F85] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-98 min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8F85]"
                aria-label="Seguir a Dra. Bruna Cunha no Instagram"
              >
                <InstagramIcon className="h-5 w-5 text-white transition-transform group-hover:scale-110" />
                <span>Seguir no Instagram</span>
                <ArrowUpRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <span className="text-[11px] text-[#998381]">
                Acompanhe postagens e orientações médicas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
