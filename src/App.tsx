import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Services } from './components/services/Services';
import { Locations } from './components/locations/Locations';
import { Gallery } from './components/gallery/Gallery';
import { InstagramSection } from './components/social/InstagramSection';
import { FinalCTA } from './components/cta/FinalCTA';
import { Footer } from './components/layout/Footer';
import { MobileQuickAction } from './components/ui/MobileQuickAction';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F6] text-[#241817] font-sans selection:bg-[#FF8F85]/20 selection:text-[#241817]">
      {/* Header Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main id="conteudo-principal">
        {/* 1. Hero Section with Doctor Frame and Ultrasound Visuals */}
        <Hero />

        {/* 2. About Section (Strict Profile without Inventions) */}
        <About />

        {/* 3. Ultrasound Services Categorized */}
        <Services />

        {/* 4. Locations and Individual WhatsApp Appointment Cards */}
        <Locations />

        {/* 5. Editorial Photo Gallery */}
        <Gallery />

        {/* 6. Instagram Social Section */}
        <InstagramSection />

        {/* 7. Final Call to Action with 4 Location Options */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Quick Appointment Action */}
      <MobileQuickAction />
    </div>
  );
}
