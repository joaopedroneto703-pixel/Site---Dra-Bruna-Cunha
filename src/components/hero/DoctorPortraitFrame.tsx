import React, { useState } from 'react';
import { UltrasoundTransducerIcon } from '../icons/CustomIcons';
import { Sparkles, HeartHandshake, CheckCircle2, Camera, Upload } from 'lucide-react';

interface DoctorPortraitFrameProps {
  customImage?: string;
  onImageChange?: (url: string) => void;
}

export const DoctorPortraitFrame: React.FC<DoctorPortraitFrameProps> = ({
  customImage,
  onImageChange,
}) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(customImage || null);
  const [showUploader, setShowUploader] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhotoUrl(url);
      if (onImageChange) onImageChange(url);
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-lg select-none">
      {/* Ambient background aura in brand colors */}
      <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-[#FF8F85]/20 via-[#B1837F]/15 to-transparent blur-2xl -z-10 opacity-70" />

      {/* Main framed portrait container */}
      <div className="relative overflow-hidden rounded-[32px] border border-[#ECE4DF] bg-gradient-to-b from-[#FFFDFD] via-[#F8F4F1] to-[#F1EAE5] p-3 shadow-[0_20px_50px_rgba(36,24,23,0.08)]">
        {/* Inner frame with liquid glass border */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[26px] bg-gradient-to-b from-[#FAF7F5] to-[#EDE5E0] flex flex-col items-center justify-between border border-white/60">
          {photoUrl ? (
            <img
              src={photoUrl}
              alt="Dra. Bruna Cunha - Médica Clínico Geral e Ultrassonografista"
              className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
            />
          ) : (
            /* Sophisticated, intentional medical editorial placeholder */
            <div className="relative h-full w-full flex flex-col items-center justify-between p-6 sm:p-8 text-center">
              {/* Subtle background tech lines */}
              <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#241817_1px,transparent_1px)] [background-size:16px_16px]" />

              {/* Top registration indicator */}
              <div className="relative z-10 inline-flex items-center gap-2 rounded-full border border-[#B1837F]/20 bg-white/80 px-3.5 py-1.5 text-[11px] font-semibold tracking-wider text-[#241817] shadow-xs backdrop-blur-md uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF8F85]" />
                Dra. Bruna Cunha • CRM-GO 27405
              </div>

              {/* Elegant Doctor Silhouette Artwork */}
              <div className="relative my-auto flex flex-col items-center">
                <div className="relative h-32 w-32 sm:h-40 sm:w-40 rounded-full border border-[#B1837F]/25 bg-gradient-to-b from-white to-[#F6ECE8] p-3 shadow-inner flex items-center justify-center">
                  <div className="h-full w-full rounded-full border border-white/80 bg-gradient-to-br from-[#FF8F85]/10 via-[#B1837F]/10 to-[#FAF8F6] flex flex-col items-center justify-center text-[#B1837F]">
                    {/* Stylized Doctor Icon */}
                    <svg
                      viewBox="0 0 100 100"
                      className="h-20 w-20 text-[#B1837F] opacity-85"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {/* Doctor head */}
                      <circle cx="50" cy="32" r="15" strokeWidth="2.5" />
                      {/* Stethoscope around neck */}
                      <path
                        d="M 38 46 C 36 60 40 68 50 68 C 60 68 64 60 62 46"
                        stroke="#FF8F85"
                        strokeWidth="2.2"
                      />
                      <line x1="50" y1="68" x2="50" y2="76" stroke="#FF8F85" strokeWidth="2" />
                      <circle cx="50" cy="78" r="4" fill="#FF8F85" />
                      {/* Shoulders & lab coat */}
                      <path
                        d="M 22 88 C 22 66 36 58 50 58 C 64 58 78 66 78 88"
                        strokeWidth="2.5"
                      />
                      {/* Lab coat lapels */}
                      <path d="M 42 60 L 46 80 L 50 88" strokeWidth="1.5" opacity="0.6" />
                      <path d="M 58 60 L 54 80 L 50 88" strokeWidth="1.5" opacity="0.6" />
                    </svg>
                  </div>

                  {/* Gentle pulsing focus ring */}
                  <div className="absolute -inset-1.5 rounded-full border border-[#FF8F85]/30 animate-pulse" />
                </div>

                <p className="mt-4 font-serif text-lg font-medium text-[#241817]">
                  Retrato Oficial
                </p>
                <p className="mt-1 text-xs text-[#6B5755] max-w-[220px] leading-relaxed">
                  Espaço reservado para a fotografia profissional da Dra. Bruna Cunha
                </p>
              </div>

              {/* Bottom replacement trigger bar */}
              <div className="relative z-10 w-full pt-2">
                <label className="group inline-flex items-center justify-center gap-2 w-full cursor-pointer rounded-xl border border-dashed border-[#B1837F]/40 bg-white/70 px-4 py-2.5 text-xs font-medium text-[#241817] shadow-xs backdrop-blur-md transition-all hover:border-[#FF8F85] hover:bg-white hover:text-[#241817]">
                  <Camera className="h-4 w-4 text-[#FF8F85] transition-transform group-hover:scale-110" />
                  <span>Substituir por foto real</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                </label>
              </div>
            </div>
          )}

          {/* Subtle scanning light effect line passing vertically */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#FF8F85]/40 to-transparent animate-scanline" />
        </div>

        {/* Doctor Identity Plaque at the base of the frame */}
        <div className="mt-3 flex items-center justify-between rounded-2xl bg-white/90 px-4 py-3 border border-[#ECE4DF] shadow-xs">
          <div>
            <h2 className="font-serif text-base font-semibold text-[#241817]">
              Dra. Bruna Cunha
            </h2>
            <p className="text-xs text-[#6B5755]">
              Clínica Geral &bull; CRM-GO 27405
            </p>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-[#FF8F85]/10 px-3 py-1 text-[11px] font-medium text-[#241817]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF8F85] animate-ping" />
            <span>Goiás</span>
          </div>
        </div>
      </div>

      {/* Floating Glassmorphic Cards around image */}
      {/* 1. Floating Card: Ultrassonografia */}
      <div
        className="absolute -top-4 -left-4 sm:-left-8 z-20 animate-float-slow rounded-2xl border border-white/80 bg-white/85 p-3.5 shadow-lg backdrop-blur-md transition-all hover:scale-105"
        role="presentation"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF8F85] to-[#B1837F] text-white shadow-sm">
            <UltrasoundTransducerIcon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[10px] uppercase font-semibold tracking-wider text-[#6B5755]">
              Especialidade
            </p>
            <p className="text-xs sm:text-sm font-semibold text-[#241817]">
              Ultrassonografia
            </p>
          </div>
        </div>
      </div>

      {/* 2. Floating Card: Atendimento humanizado */}
      <div
        className="absolute top-1/2 -right-3 sm:-right-8 z-20 animate-float-delayed rounded-2xl border border-white/80 bg-white/85 p-3.5 shadow-lg backdrop-blur-md transition-all hover:scale-105"
        role="presentation"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFEAE8] to-white text-[#FF8F85] border border-[#FF8F85]/20 shadow-xs">
            <HeartHandshake className="h-5 w-5 text-[#FF8F85]" />
          </div>
          <div>
            <p className="text-[10px] uppercase font-semibold tracking-wider text-[#6B5755]">
              Cuidado
            </p>
            <p className="text-xs sm:text-sm font-semibold text-[#241817]">
              Atendimento humanizado
            </p>
          </div>
        </div>
      </div>

      {/* 3. Floating Card: Precisão diagnóstica */}
      <div
        className="absolute -bottom-4 left-4 sm:left-6 z-20 animate-float-slow rounded-2xl border border-white/80 bg-white/85 p-3.5 shadow-lg backdrop-blur-md transition-all hover:scale-105"
        role="presentation"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#241817] text-white shadow-sm">
            <CheckCircle2 className="h-5 w-5 text-[#FF8F85]" />
          </div>
          <div>
            <p className="text-[10px] uppercase font-semibold tracking-wider text-[#6B5755]">
              Rigor Técnico
            </p>
            <p className="text-xs sm:text-sm font-semibold text-[#241817]">
              Precisão diagnóstica
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
