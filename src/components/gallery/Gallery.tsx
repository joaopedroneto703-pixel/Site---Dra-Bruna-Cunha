import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../../data/medicalData';
import { Camera, Sparkles, Image as ImageIcon } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [images, setImages] = useState<Record<string, string>>({});

  const handleUpload = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImages((prev) => ({
        ...prev,
        [id]: URL.createObjectURL(file),
      }));
    }
  };

  return (
    <section id="galeria" className="relative py-20 lg:py-28 bg-[#FAF8F6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B1837F]/25 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#B1837F] shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF8F85]" />
            Galeria Editorial
          </div>

          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-[#241817]">
            Conheça a Dra. Bruna
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#6B5755] leading-relaxed">
            Ambiente acolhedor, tecnologia diagnóstica e compromisso com o bem-estar de cada paciente.
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="mt-14 grid grid-cols-12 gap-6">
          {GALLERY_ITEMS.map((item, index) => {
            const hasCustomImage = images[item.id];

            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-3xl border border-[#ECE4DF] bg-white p-2.5 shadow-xs transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${item.colSpanClass}`}
              >
                <div
                  className={`relative ${item.aspectClass} w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#FAF7F5] via-[#F3ECE8] to-[#EAE0D9] flex flex-col justify-between p-6`}
                >
                  {hasCustomImage ? (
                    <img
                      src={hasCustomImage}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      {/* Top slot index indicator */}
                      <div className="relative z-10 flex items-center justify-between text-[10px] font-semibold text-[#6B5755] uppercase tracking-wider">
                        <span className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-2.5 py-1 rounded-full border border-[#ECE4DF]">
                          <ImageIcon className="h-3 w-3 text-[#FF8F85]" />
                          Foto {index + 1}
                        </span>
                        <span className="font-mono text-[#B1837F]">Espaço Reservado</span>
                      </div>

                      {/* Center Content Placeholder */}
                      <div className="relative z-10 my-auto text-center px-4 flex flex-col items-center">
                        <div className="h-12 w-12 rounded-2xl bg-white/90 border border-[#B1837F]/20 flex items-center justify-center text-[#FF8F85] shadow-xs mb-3 transition-transform group-hover:scale-110">
                          <Camera className="h-5 w-5" />
                        </div>
                        <h3 className="font-serif text-lg font-semibold text-[#241817]">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#6B5755] mt-1 line-clamp-2 max-w-xs">
                          {item.subtitle}
                        </p>
                      </div>

                      {/* Bottom replacement control */}
                      <div className="relative z-10 flex justify-center">
                        <label className="cursor-pointer inline-flex items-center gap-1.5 rounded-xl border border-[#ECE4DF] bg-white/90 px-3.5 py-1.5 text-xs font-medium text-[#241817] shadow-xs transition-all hover:bg-white hover:border-[#FF8F85] hover:text-[#241817]">
                          <Camera className="h-3.5 w-3.5 text-[#FF8F85]" />
                          <span>Inserir fotografia</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleUpload(item.id, e)}
                          />
                        </label>
                      </div>
                    </>
                  )}

                  {/* Gradient overlay for text contrast on hover if image is uploaded */}
                  {hasCustomImage && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white">
                      <h3 className="font-serif text-lg font-semibold">{item.title}</h3>
                      <p className="text-xs text-white/80">{item.subtitle}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
