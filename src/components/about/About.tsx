import React, { useState } from 'react';
import { DOCTOR_DATA } from '../../data/medicalData';
import { UltrasoundMonitorDecor } from '../ui/UltrasoundMonitorDecor';
import { Camera, Shield, Check, Heart, Stethoscope } from 'lucide-react';

export const About: React.FC = () => {
  const [photo1, setPhoto1] = useState<string | null>(null);
  const [photo2, setPhoto2] = useState<string | null>(null);

  const handleUpload1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPhoto1(URL.createObjectURL(file));
  };

  const handleUpload2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPhoto2(URL.createObjectURL(file));
  };

  return (
    <section id="sobre" className="relative py-20 lg:py-28 bg-[#F7F4F1]/60 border-y border-[#ECE4DF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Overlapping Image Composition */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              {/* Primary Image Slot */}
              <div className="relative z-10 w-4/5 rounded-3xl overflow-hidden border border-[#ECE4DF] bg-white p-2.5 shadow-lg">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#FAF7F5] to-[#EFE7E2] flex flex-col items-center justify-between p-6 text-center">
                  {photo1 ? (
                    <img
                      src={photo1}
                      alt="Dra. Bruna Cunha - Atendimento e Ultrassonografia"
                      className="h-full w-full object-cover rounded-2xl"
                    />
                  ) : (
                    <>
                      <div className="w-full flex justify-between items-center text-[10px] font-semibold text-[#6B5755] uppercase tracking-wider">
                        <span>Retrato Profissional</span>
                        <span className="text-[#FF8F85] font-mono">01</span>
                      </div>

                      <div className="my-auto flex flex-col items-center">
                        <div className="h-16 w-16 rounded-2xl bg-white border border-[#B1837F]/20 flex items-center justify-center text-[#B1837F] shadow-xs mb-3">
                          <Stethoscope className="h-8 w-8 text-[#FF8F85]" />
                        </div>
                        <p className="font-serif text-base font-medium text-[#241817]">
                          Dra. Bruna Cunha
                        </p>
                        <p className="text-xs text-[#6B5755] mt-1 max-w-[190px]">
                          Espaço para foto profissional no consultório
                        </p>
                      </div>

                      <label className="cursor-pointer text-[11px] font-medium text-[#241817] bg-white/90 hover:bg-white border border-[#ECE4DF] px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5 shadow-xs transition-colors">
                        <Camera className="h-3.5 w-3.5 text-[#FF8F85]" />
                        <span>Substituir foto</span>
                        <input type="file" accept="image/*" className="hidden" onChange={handleUpload1} />
                      </label>
                    </>
                  )}
                </div>
              </div>

              {/* Secondary Overlapping Image Slot */}
              <div className="absolute -bottom-8 right-2 sm:right-6 z-20 w-3/5 rounded-3xl overflow-hidden border border-[#ECE4DF] bg-white p-2 shadow-xl">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#241817] to-[#1D1413] text-white flex flex-col items-center justify-between p-4 text-center">
                  {photo2 ? (
                    <img
                      src={photo2}
                      alt="Exame de ultrassonografia com precisão técnica"
                      className="h-full w-full object-cover rounded-2xl"
                    />
                  ) : (
                    <>
                      <div className="w-full flex justify-between items-center text-[9px] font-semibold text-white/70 uppercase tracking-wider">
                        <span>Procedimento Clínico</span>
                        <span className="text-[#FF8F85] font-mono">02</span>
                      </div>

                      <div className="my-auto flex flex-col items-center">
                        <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-[#FF8F85] mb-1.5">
                          <Heart className="h-5 w-5 text-[#FF8F85]" />
                        </div>
                        <p className="text-xs font-semibold text-white">
                          Exame de Ultrassom
                        </p>
                        <p className="text-[10px] text-white/70">
                          Foto da sala de exames ou transdutor
                        </p>
                      </div>

                      <label className="cursor-pointer text-[10px] font-medium text-white/90 bg-white/10 hover:bg-white/20 border border-white/15 px-2.5 py-1 rounded-lg inline-flex items-center gap-1.5 transition-colors">
                        <Camera className="h-3 w-3 text-[#FF8F85]" />
                        <span>Substituir</span>
                        <input type="file" accept="image/*" className="hidden" onChange={handleUpload2} />
                      </label>
                    </>
                  )}
                </div>
              </div>

              {/* Subtle background decorative accent ring */}
              <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full border border-[#FF8F85]/20 -z-10" />
            </div>
          </div>

          {/* Left / Right Content Column */}
          <div className="lg:col-span-6 flex flex-col items-start order-1 lg:order-2">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B1837F]">
              <span className="h-1.5 w-6 bg-[#FF8F85] rounded-full" />
              Perfil Profissional
            </div>

            {/* Section Title */}
            <h2 className="mt-3 font-serif text-2xl sm:text-4xl font-semibold tracking-tight text-[#241817] leading-snug">
              {DOCTOR_DATA.aboutTitle}
            </h2>

            {/* Strict content required by user prompt */}
            <div className="mt-6 rounded-2xl bg-white p-6 sm:p-8 border border-[#ECE4DF] shadow-xs w-full">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#ECE4DF]">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#241817]">
                    {DOCTOR_DATA.name}
                  </h3>
                  <p className="text-xs font-semibold tracking-wider text-[#FF8F85] uppercase mt-0.5">
                    Clínica Geral &bull; Ultrassonografia
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF8F6] border border-[#ECE4DF] px-3.5 py-1 text-xs font-semibold text-[#241817]">
                  <Shield className="h-3.5 w-3.5 text-[#B1837F]" />
                  <span>{DOCTOR_DATA.crm}</span>
                </div>
              </div>

              <p className="mt-4 text-base text-[#241817] leading-relaxed">
                {DOCTOR_DATA.aboutBio}
              </p>

              {/* Three foundational pillars based purely on the text provided */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#ECE4DF]">
                <div className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-[#FFEAE8] text-[#FF8F85] flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  <span className="text-xs font-semibold text-[#241817]">Tecnologia</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-[#FFEAE8] text-[#FF8F85] flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  <span className="text-xs font-semibold text-[#241817]">Precisão</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-[#FFEAE8] text-[#FF8F85] flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  <span className="text-xs font-semibold text-[#241817]">Atenção Individualizada</span>
                </div>
              </div>
            </div>

            {/* Quick action button to locations */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#onde-atendo"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#241817] hover:text-[#FF8F85] transition-colors"
              >
                <span>Ver cidades de atendimento em Goiás</span>
                <span className="text-lg leading-none">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
