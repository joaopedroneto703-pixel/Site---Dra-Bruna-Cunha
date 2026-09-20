import React from 'react';
import { DOCTOR_DATA, LOCATIONS_DATA } from '../../data/medicalData';
import { WhatsAppIcon } from '../icons/CustomIcons';
import { MapPin, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section id="contato" className="relative py-20 lg:py-28 bg-[#FAF8F6]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#241817] via-[#2A1D1C] to-[#1D1413] p-8 sm:p-14 lg:p-16 text-white shadow-2xl border border-[#ECE4DF]/20">
          {/* Subtle ultrasound acoustic waves & ambient glow inside card */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#FF8F85]/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#B1837F]/15 blur-3xl" />

          {/* Acoustic sector subtle lines */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-10"
            viewBox="0 0 800 400"
            fill="none"
          >
            <path
              d="M 400 0 C 250 150 150 250 0 350"
              stroke="#FF8F85"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
            <path
              d="M 400 0 C 550 150 650 250 800 350"
              stroke="#FF8F85"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
            <circle cx="400" cy="0" r="150" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 5" />
            <circle cx="400" cy="0" r="280" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 5" />
          </svg>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold text-[#FF8F85] backdrop-blur-md">
              <Heart className="h-3.5 w-3.5 fill-[#FF8F85]" />
              <span>Agendamento Rápido</span>
            </div>

            {/* Title */}
            <h2 className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
              {DOCTOR_DATA.finalCtaTitle}
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              {DOCTOR_DATA.finalCtaSubtitle}
            </p>

            <p className="mt-2 text-xs sm:text-sm text-white/60">
              Selecione a unidade desejada para iniciar a conversa no WhatsApp:
            </p>

            {/* 4 Individual Location WhatsApp Buttons */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {LOCATIONS_DATA.map((loc) => (
                <a
                  key={loc.id}
                  id={`final-cta-${loc.id}`}
                  href={loc.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 sm:p-5 backdrop-blur-md transition-all duration-200 hover:border-[#25D366] hover:bg-white/15 hover:shadow-lg active:scale-98 min-h-[64px]"
                  aria-label={`${loc.name} — Agendar pelo WhatsApp`}
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-base font-semibold text-white group-hover:text-[#FF8F85] transition-colors">
                        {loc.name}
                      </span>
                    </div>
                    {loc.city ? (
                      <div className="flex items-center gap-1 text-xs text-white/70 mt-0.5">
                        <MapPin className="h-3 w-3 text-[#FF8F85]" />
                        <span>{loc.city}</span>
                      </div>
                    ) : (
                      <span className="text-xs text-white/60 mt-0.5 block">Atendimento Geral</span>
                    )}
                  </div>

                  <div className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold text-white shadow-xs group-hover:bg-[#20b859] transition-all">
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>Agendar</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-80" />
                  </div>
                </a>
              ))}
            </div>

            {/* Verification assurance */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#FF8F85]" />
                {DOCTOR_DATA.name} &bull; {DOCTOR_DATA.crm}
              </span>
              <span>•</span>
              <span>Atendimento em Goiás</span>
              <span>•</span>
              <span>Comunicação direta com a recepção</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
