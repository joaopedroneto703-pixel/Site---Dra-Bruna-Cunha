import React from 'react';
import { LOCATIONS_DATA } from '../../data/medicalData';
import { LocationCard } from './LocationCard';
import { MapPin, MessageSquareText } from 'lucide-react';

export const Locations: React.FC = () => {
  return (
    <section id="onde-atendo" className="relative py-20 lg:py-28 bg-[#F7F4F1]/70 border-t border-[#ECE4DF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B1837F]/25 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#B1837F] shadow-xs">
            <MapPin className="h-3.5 w-3.5 text-[#FF8F85]" />
            Locais de Atendimento
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-[#241817]">
            Onde Atendo
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#6B5755] leading-relaxed">
            Escolha a unidade mais conveniente para você.
          </p>
        </div>

        {/* 4 Location Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LOCATIONS_DATA.map((location, idx) => (
            <LocationCard key={location.id} location={location} index={idx} />
          ))}
        </div>

        {/* Informative Guidance Box */}
        <div className="mt-12 rounded-2xl bg-white p-6 border border-[#ECE4DF] max-w-2xl mx-auto flex items-center gap-4 text-left shadow-xs">
          <div className="h-10 w-10 rounded-xl bg-[#FFEAE8] text-[#FF8F85] flex items-center justify-center shrink-0">
            <MessageSquareText className="h-5 w-5" />
          </div>
          <p className="text-xs text-[#6B5755] leading-relaxed">
            Cada botão acima conecta diretamente ao canal oficial de agendamentos no WhatsApp da respectiva clínica para agilizar a marcação do seu exame ou consulta.
          </p>
        </div>
      </div>
    </section>
  );
};
