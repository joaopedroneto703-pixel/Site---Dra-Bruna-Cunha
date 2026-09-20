import React from 'react';
import { LocationInfo } from '../../types';
import { WhatsAppIcon } from '../icons/CustomIcons';
import { MapPin, Phone, Clock, ArrowUpRight, CheckCircle } from 'lucide-react';

interface LocationCardProps {
  location: LocationInfo;
  index: number;
}

export const LocationCard: React.FC<LocationCardProps> = ({ location, index }) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-3xl border border-[#ECE4DF] bg-white p-6 sm:p-8 shadow-xs transition-all duration-300 hover:border-[#FF8F85] hover:shadow-xl hover:-translate-y-1">
      {/* Top Header */}
      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FAF8F6] to-[#F1EAE5] border border-[#ECE4DF] text-[#241817] group-hover:bg-[#FF8F85] group-hover:text-white transition-colors duration-300">
            <MapPin className="h-6 w-6 transition-transform group-hover:scale-110" />
          </div>

          <span className="rounded-full bg-[#FAF8F6] border border-[#ECE4DF] px-3 py-1 text-[11px] font-semibold text-[#6B5755]">
            Unidade {index + 1}
          </span>
        </div>

        {/* Location Title & City */}
        <h3 className="mt-5 font-serif text-2xl font-semibold text-[#241817] group-hover:text-[#B1837F] transition-colors">
          {location.name}
        </h3>

        {location.city ? (
          <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF8F85]">
            <MapPin className="h-3.5 w-3.5" />
            <span>{location.city}</span>
          </div>
        ) : (
          <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[#B1837F]">
            <span>Goiás</span>
          </div>
        )}

        {/* Phone display */}
        <div className="mt-6 rounded-2xl bg-[#FAF8F6] p-4 border border-[#ECE4DF]">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[#6B5755]">
            WhatsApp da Unidade
          </p>
          <div className="mt-1 flex items-center gap-2">
            <WhatsAppIcon className="h-4 w-4 text-[#25D366] shrink-0" />
            <span className="font-mono text-base font-semibold text-[#241817]">
              {location.formattedPhone}
            </span>
          </div>
        </div>

        <ul className="mt-4 space-y-1.5 text-xs text-[#6B5755]">
          <li className="flex items-center gap-2">
            <CheckCircle className="h-3.5 w-3.5 text-[#FF8F85]" />
            <span>Agendamento direto para consultas e ultrassonografia</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="h-3.5 w-3.5 text-[#FF8F85]" />
            <span>Informações sobre preparo e laudos</span>
          </li>
        </ul>
      </div>

      {/* Direct WhatsApp Call to Action Button */}
      <div className="mt-8 pt-4 border-t border-[#ECE4DF]">
        <a
          id={`btn-agendar-${location.id}`}
          href={location.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#241817] py-4 px-6 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#25D366] hover:shadow-lg active:scale-98 min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
          aria-label={`Agendar atendimento na unidade ${location.name} pelo WhatsApp`}
        >
          <WhatsAppIcon className="h-5 w-5 transition-transform group-hover/btn:scale-110" />
          <span>Agendar atendimento</span>
          <ArrowUpRight className="h-4 w-4 opacity-70 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
};
