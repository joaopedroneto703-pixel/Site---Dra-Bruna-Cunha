import React, { useState, useEffect } from 'react';
import { LOCATIONS_DATA } from '../../data/medicalData';
import { WhatsAppIcon } from '../icons/CustomIcons';
import { MapPin, X, ArrowUpRight } from 'lucide-react';

export const MobileQuickAction: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bottom bar after user scrolls 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Bottom Bar on Mobile */}
      <div
        className={`fixed bottom-4 inset-x-4 z-40 md:hidden transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
        }`}
      >
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="flex w-full items-center justify-between gap-3 rounded-2xl bg-[#241817] p-3.5 text-white shadow-2xl border border-white/20 active:scale-98"
          aria-label="Abrir opções de agendamento por unidade no WhatsApp"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-xs">
              <WhatsAppIcon className="h-5 w-5" />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold text-white">
                Agendar Atendimento
              </p>
              <p className="text-[10px] text-white/70">
                Escolha uma das 4 unidades em Goiás
              </p>
            </div>
          </div>
          <span className="rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-[#FF8F85]">
            Selecionar
          </span>
        </button>
      </div>

      {/* Modal / Bottom Sheet to pick location */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-agendar-title"
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div
            className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl border border-[#ECE4DF]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#ECE4DF]">
              <div>
                <h3 id="modal-agendar-title" className="font-serif text-lg font-semibold text-[#241817]">
                  Escolha a Unidade
                </h3>
                <p className="text-xs text-[#6B5755]">
                  Dra. Bruna Cunha &bull; Ultrassonografia
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-full p-2 text-[#6B5755] hover:bg-[#FAF8F6] hover:text-[#241817]"
                aria-label="Fechar janela de escolha de unidade"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 space-y-3">
              {LOCATIONS_DATA.map((loc) => (
                <a
                  key={loc.id}
                  href={loc.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsModalOpen(false)}
                  className="flex items-center justify-between rounded-2xl border border-[#ECE4DF] bg-[#FAF8F6] p-4 text-left transition-all hover:border-[#25D366] hover:bg-white active:bg-[#FFEAE8]"
                >
                  <div>
                    <p className="font-semibold text-sm text-[#241817]">
                      {loc.name}
                    </p>
                    {loc.city && (
                      <p className="text-xs text-[#6B5755] flex items-center gap-1 mt-0.5">
                        <MapPin className="h-3 w-3 text-[#FF8F85]" />
                        <span>{loc.city}</span>
                      </p>
                    )}
                    <p className="text-[11px] font-mono text-[#25D366] mt-1">
                      {loc.formattedPhone}
                    </p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#25D366] text-white">
                    <WhatsAppIcon className="h-4 w-4" />
                  </div>
                </a>
              ))}
            </div>

            <p className="mt-4 text-center text-[11px] text-[#998381]">
              Você será redirecionado para o WhatsApp oficial da clínica escolhida.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
