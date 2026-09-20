import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const WhatsAppIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.301-.15-1.781-.879-2.056-.98-.275-.1-.475-.15-.675.15-.2.301-.775.98-.95 1.18-.175.2-.35.225-.651.075-.301-.15-1.27-.468-2.42-1.494-.894-.798-1.498-1.784-1.673-2.085-.175-.3-.019-.462.132-.612.135-.135.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.626-.925-2.227-.243-.584-.49-.505-.675-.514-.175-.009-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.026-1.05 2.502s1.075 2.898 1.225 3.1c.15.2 2.115 3.23 5.124 4.53 3.01 1.299 3.01.866 3.56.812.55-.054 1.78-.727 2.03-1.428.25-.7.25-1.301.175-1.428-.075-.127-.275-.202-.576-.352z" />
    <path d="M12.004 2c-5.518 0-9.996 4.477-9.996 9.995 0 1.761.459 3.479 1.332 4.992l-1.417 5.176 5.305-1.391c1.455.795 3.097 1.218 4.776 1.218 5.517 0 9.995-4.477 9.995-9.995 0-5.518-4.478-9.995-9.995-9.995zm0 18.293c-1.498 0-2.966-.403-4.246-1.164l-.304-.181-3.153.827.842-3.075-.199-.316c-.836-1.33-1.278-2.875-1.278-4.469 0-4.577 3.722-8.299 8.3-8.299 4.577 0 8.299 3.722 8.299 8.299 0 4.577-3.722 8.299-8.264 8.299z" />
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

// Transducer & Ultrasound Sonar Wave custom icon
export const UltrasoundTransducerIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Transducer probe handle */}
    <rect x="8" y="2" width="8" height="9" rx="2" />
    <line x1="12" y1="1" x2="12" y2="2" />
    <line x1="10" y1="6" x2="14" y2="6" strokeWidth="1.2" strokeDasharray="1 1" />
    {/* Curved acoustic lens head */}
    <path d="M7 11c0 2.5 2.2 4 5 4s5-1.5 5-4" />
    {/* Sound waves emitted into tissue */}
    <path d="M5 16c2.2 2 4.5 2.5 7 2.5s4.8-.5 7-2.5" opacity="0.85" />
    <path d="M3 19c2.8 2.5 5.8 3 9 3s6.2-.5 9-3" opacity="0.5" />
  </svg>
);

// Category: Mamas e região
export const BreastIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 14c0 4 3 7 7 7 3 0 5-2 6-4" />
    <path d="M12 14c0 4 3 7 7 7 2.8 0 5-3.1 5-7 0-4.4-3.6-8-8-8-3 0-5.5 1.7-6.8 4.2" />
    <circle cx="9" cy="15" r="1" fill="currentColor" />
    <circle cx="17" cy="15" r="1" fill="currentColor" />
  </svg>
);

// Category: Ginecológicos
export const GynecologyIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Uterus & fallopian tubes simplified elegant contour */}
    <path d="M12 21c-2.5 0-4-3-4-7 0-3 1.5-6 4-6s4 3 4 6c0 4-1.5 7-4 7z" />
    <path d="M8 9C6.5 8 4 6.5 4 4.5 4 3.5 5 3 6.5 4c2 1.3 3.5 3 4 4" />
    <path d="M16 9c1.5-1 4-2.5 4-4.5 0-1-1-1.5-2.5-.5-2 1.3-3.5 3-4 4" />
    <circle cx="5" cy="4" r="1.5" />
    <circle cx="19" cy="4" r="1.5" />
  </svg>
);

// Category: Abdome e aparelho urinário
export const AbdomenIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="4" y="4" width="16" height="16" rx="4" />
    {/* Kidneys / abdominal organs schematic */}
    <path d="M8 8c1.5 0 2.5 1.5 2.5 3s-1 3-2.5 3c-1 0-1.5-1-1.5-3s.5-3 1.5-3z" />
    <path d="M16 8c-1.5 0-2.5 1.5-2.5 3s1 3 2.5 3c1 0 1.5-1 1.5-3s-.5-3-1.5-3z" />
    <path d="M10.5 11h3" strokeDasharray="1.5 1.5" />
    <path d="M12 14v4" />
    <path d="M10 18h4" />
  </svg>
);

// Category: Próstata
export const ProstateIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Bladder & prostate gland */}
    <path d="M6 6c0-2 2.5-3 6-3s6 1 6 3c0 4-3 7-6 7s-6-3-6-7z" />
    <path d="M9 13c-1.8.8-3 2.3-3 4.2 0 2.2 2 3.8 6 3.8s6-1.6 6-3.8c0-1.9-1.2-3.4-3-4.2" />
    <line x1="12" y1="13" x2="12" y2="21" strokeDasharray="2 1.5" />
  </svg>
);

// Category: Tireoide
export const ThyroidIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Butterfly thyroid lobes & isthmus */}
    <path d="M5 8c0 4 2 8 5 9 1 .3 2-.2 2-1V7c0-.8-1-1.3-1.8-1-1.5.5-5 0-5 2z" />
    <path d="M19 8c0 4-2 8-5 9-1 .3-2-.2-2-1V7c0-.8 1-1.3 1.8-1 1.5.5 5 0 5 2z" />
    {/* Subtle Doppler blood flow wave */}
    <path d="M8 12c1 .5 2 .5 3 0s2-.5 3 0" strokeWidth="1.2" strokeDasharray="1.5 1" />
  </svg>
);

// Category: Obstetrícia
export const ObstetricsIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Pregnant silhouette & heart beat */}
    <path d="M9 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
    <path d="M9 10c-2.5 0-4 2-4 5v5" />
    <path d="M10 12c3 0 7 2 7 6 0 2-2 3-5 3" />
    <path d="M13 15c.5-.7 1.5-.7 2 0 .5.7 0 1.5-1 2.2-1-.7-1.5-1.5-1-2.2z" fill="currentColor" />
  </svg>
);
