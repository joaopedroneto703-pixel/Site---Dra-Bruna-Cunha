import React from 'react';
import { DOCTOR_DATA } from '../../data/medicalData';
import { DoctorPortraitFrame } from './DoctorPortraitFrame';
import { WhatsAppIcon } from '../icons/CustomIcons';
import { UltrasoundMonitorDecor } from '../ui/UltrasoundMonitorDecor';
import { ArrowDown, Sparkles, ShieldCheck, Activity } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex items-center"
    >
      {/* Subtle ultrasound acoustic background grids and ambient aura */}
      <UltrasoundMonitorDecor variant="subtle-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small label */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B1837F]/25 bg-white/80 px-4 py-1.5 shadow-xs backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#FF8F85] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#241817] uppercase">
                {DOCTOR_DATA.specialtyTagline}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 font-serif text-3xl sm:text-5xl lg:text-[54px] font-semibold tracking-tight text-[#241817] leading-[1.15]">
              Cuidado médico com <span className="text-[#FF8F85] italic font-normal">precisão</span>, tecnologia e acolhimento.
            </h1>

            {/* Supporting Text */}
            <div className="mt-6 border-l-2 border-[#FF8F85] pl-4 space-y-1">
              <p className="font-serif text-lg sm:text-xl font-medium text-[#241817]">
                {DOCTOR_DATA.name}
              </p>
              <p className="text-sm sm:text-base font-medium text-[#6B5755]">
                {DOCTOR_DATA.specialtyTitle}
              </p>
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#B1837F]">
                {DOCTOR_DATA.crm}
              </p>
            </div>

            <p className="mt-4 text-sm sm:text-base text-[#6B5755] max-w-xl leading-relaxed">
              Atendimento médico humanizado e diagnóstico por imagem de alta definição com equipamentos modernos em diferentes municípios de Goiás.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              {/* Primary CTA */}
              <a
                id="hero-primary-cta"
                href="#onde-atendo"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#241817] px-8 py-4 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#B1837F] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-98 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8F85]"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#FF8F85] transition-transform group-hover:scale-110" />
                <span>Agendar atendimento</span>
              </a>

              {/* Secondary CTA */}
              <a
                id="hero-secondary-cta"
                href="#exames"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#ECE4DF] bg-white/90 px-7 py-4 text-sm font-medium text-[#241817] shadow-xs backdrop-blur-md transition-all duration-200 hover:border-[#FF8F85] hover:bg-white hover:text-[#FF8F85] hover:-translate-y-0.5 active:translate-y-0 active:scale-98 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8F85]"
              >
                <span>Conheça os exames</span>
                <ArrowDown className="h-4 w-4 text-[#B1837F] transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>

            {/* Subtle trust & technology indicators */}
            <div className="mt-10 pt-8 border-t border-[#ECE4DF] grid grid-cols-3 gap-4 w-full max-w-lg">
              <div>
                <div className="flex items-center gap-1.5 text-[#241817]">
                  <Activity className="h-4 w-4 text-[#FF8F85]" />
                  <span className="font-serif text-lg font-semibold">4</span>
                </div>
                <p className="text-[11px] text-[#6B5755] leading-tight mt-0.5">
                  Unidades de atendimento em GO
                </p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[#241817]">
                  <ShieldCheck className="h-4 w-4 text-[#B1837F]" />
                  <span className="font-serif text-lg font-semibold">CRM</span>
                </div>
                <p className="text-[11px] text-[#6B5755] leading-tight mt-0.5">
                  Registro ativo em Goiás
                </p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[#241817]">
                  <Sparkles className="h-4 w-4 text-[#FF8F85]" />
                  <span className="font-serif text-lg font-semibold">USG</span>
                </div>
                <p className="text-[11px] text-[#6B5755] leading-tight mt-0.5">
                  Exames com precisão digital
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Doctor Image Composition */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <DoctorPortraitFrame />
          </div>
        </div>
      </div>
    </section>
  );
};
