import React from 'react';

interface UltrasoundDecorProps {
  className?: string;
  variant?: 'compact' | 'full' | 'subtle-background';
}

export const UltrasoundMonitorDecor: React.FC<UltrasoundDecorProps> = ({
  className = '',
  variant = 'compact',
}) => {
  if (variant === 'subtle-background') {
    return (
      <div
        className={`pointer-events-none absolute inset-0 overflow-hidden select-none opacity-40 ${className}`}
        aria-hidden="true"
      >
        {/* Soft radial ambient glow in brand colors */}
        <div className="absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-[#FF8F85]/12 blur-3xl" />
        <div className="absolute top-1/2 -left-20 h-96 w-96 rounded-full bg-[#B1837F]/10 blur-3xl" />

        {/* Subtle acoustic grid vector */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.07]"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Depth concentric acoustic arcs */}
          <path
            d="M 100 0 A 400 400 0 0 0 900 0"
            stroke="#241817"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          <path
            d="M 200 0 A 300 300 0 0 0 800 0"
            stroke="#241817"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          <path
            d="M 300 0 A 200 200 0 0 0 700 0"
            stroke="#241817"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          {/* Acoustic sector ray guides */}
          <line x1="500" y1="0" x2="100" y2="600" stroke="#241817" strokeWidth="1" strokeDasharray="3 7" />
          <line x1="500" y1="0" x2="300" y2="600" stroke="#241817" strokeWidth="1" strokeDasharray="3 7" />
          <line x1="500" y1="0" x2="500" y2="600" stroke="#241817" strokeWidth="1" strokeDasharray="2 6" />
          <line x1="500" y1="0" x2="700" y2="600" stroke="#241817" strokeWidth="1" strokeDasharray="3 7" />
          <line x1="500" y1="0" x2="900" y2="600" stroke="#241817" strokeWidth="1" strokeDasharray="3 7" />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-[#ECE4DF] bg-gradient-to-b from-[#241817]/95 to-[#1D1413] text-[#FAF8F6] shadow-xl ${className}`}
      aria-hidden="true"
    >
      {/* Top telemetry bar inspired by modern digital ultrasound monitor */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[10px] tracking-wider text-[#FAF8F6]/75 uppercase">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-[#FF8F85] animate-pulse" />
          <span className="font-semibold text-white">MODO B • 2D / DOPPLER</span>
          <span className="hidden sm:inline text-white/40">|</span>
          <span className="hidden sm:inline">ALTA DEFINIÇÃO</span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[9px] text-[#FAF8F6]/60">
          <span>FREQ: 3.5-12.0 MHz</span>
          <span>PROF: 12.4 cm</span>
          <span className="text-[#FF8F85]">PRECISÃO ATIVA</span>
        </div>
      </div>

      {/* Viewport canvas with acoustic sector grid and scanline */}
      <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-black/40">
        {/* Subtle moving scanline beam */}
        <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF8F85] to-transparent animate-scanline" />

        {/* Acoustic sector cone */}
        <svg
          viewBox="0 0 400 200"
          className="absolute inset-0 h-full w-full opacity-60"
          fill="none"
        >
          {/* Depth scale ticks on left */}
          <line x1="20" y1="20" x2="28" y2="20" stroke="white" strokeWidth="1" opacity="0.4" />
          <line x1="20" y1="50" x2="28" y2="50" stroke="white" strokeWidth="1" opacity="0.4" />
          <line x1="20" y1="80" x2="32" y2="80" stroke="white" strokeWidth="1.5" opacity="0.7" />
          <line x1="20" y1="110" x2="28" y2="110" stroke="white" strokeWidth="1" opacity="0.4" />
          <line x1="20" y1="140" x2="32" y2="140" stroke="white" strokeWidth="1.5" opacity="0.7" />
          <line x1="20" y1="170" x2="28" y2="170" stroke="white" strokeWidth="1" opacity="0.4" />

          {/* Curved acoustic sector */}
          <path
            d="M 90 190 A 180 180 0 0 1 310 190"
            stroke="rgba(255, 143, 133, 0.4)"
            strokeWidth="1.2"
            strokeDasharray="3 4"
          />
          <path
            d="M 120 140 A 130 130 0 0 1 280 140"
            stroke="rgba(255, 143, 133, 0.3)"
            strokeWidth="1"
            strokeDasharray="2 4"
          />
          <path
            d="M 150 90 A 80 80 0 0 1 250 90"
            stroke="rgba(255, 143, 133, 0.25)"
            strokeWidth="1"
            strokeDasharray="2 3"
          />

          {/* Acoustic apex point */}
          <circle cx="200" cy="20" r="3" fill="#FF8F85" />
          <line x1="200" y1="20" x2="80" y2="190" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
          <line x1="200" y1="20" x2="320" y2="190" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />

          {/* Precision diagnostic calipers marker */}
          <g opacity="0.85">
            <line x1="180" y1="100" x2="190" y2="100" stroke="#FF8F85" strokeWidth="1.5" />
            <line x1="185" y1="95" x2="185" y2="105" stroke="#FF8F85" strokeWidth="1.5" />
            <line x1="230" y1="120" x2="240" y2="120" stroke="#FF8F85" strokeWidth="1.5" />
            <line x1="235" y1="115" x2="235" y2="125" stroke="#FF8F85" strokeWidth="1.5" />
            <line
              x1="185"
              y1="100"
              x2="235"
              y2="120"
              stroke="#FF8F85"
              strokeWidth="1"
              strokeDasharray="3 3"
              opacity="0.7"
            />
            <text x="205" y="105" fill="#FF8F85" fontSize="8" fontFamily="monospace">
              D1: 24.3 mm
            </text>
          </g>
        </svg>

        {/* Real-time stylized Doppler audio waveform strip at bottom */}
        <div className="absolute bottom-2 left-4 right-4 flex items-end justify-between gap-1 h-6 px-2 py-1 rounded bg-black/60 border border-white/10">
          <span className="text-[8px] font-mono text-[#FF8F85] uppercase tracking-wider">Doppler Spectral</span>
          <div className="flex items-end gap-[3px] h-full">
            {[40, 65, 85, 95, 75, 45, 30, 80, 100, 70, 50, 90, 60, 40, 75, 90, 55, 35].map(
              (h, idx) => (
                <div
                  key={idx}
                  className="w-[3px] rounded-t-sm bg-gradient-to-t from-[#B1837F] to-[#FF8F85] animate-doppler"
                  style={{
                    height: `${h}%`,
                    animationDelay: `${(idx % 6) * 0.25}s`,
                  }}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
