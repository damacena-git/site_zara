import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DorasSection from './components/DorasSection';
import SolucaoSection from './components/SolucaoSection';
import MetodologiaSection from './components/MetodologiaSection';
import ProvaSection from './components/ProvaSection';
import QuemSomosSection from './components/QuemSomosSection';
import ComparacaoSection from './components/ComparacaoSection';
import GarantiaSection from './components/GarantiaSection';
import FAQSection from './components/FAQSection';
import ContatoSection from './components/ContatoSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      {/* Sticky Navigation */}
      <Navbar />

      {/* Section 1 — Hero */}
      <HeroSection />

      {/* Section 2 — Dores (Pain Points) */}
      <DorasSection />

      {/* Section 3 — Solução (Benefits) */}
      <SolucaoSection />

      {/* Section 4 — Metodologia */}
      <MetodologiaSection />

      {/* Section 5 — Prova Social */}
      <ProvaSection />

      {/* Section 6 — Quem Somos */}
      <QuemSomosSection />

      {/* Section 7 — Comparação */}
      <ComparacaoSection />

      {/* Section 8 — Garantia */}
      <GarantiaSection />

      {/* Section 9 — FAQ */}
      <FAQSection />

      {/* Section 10 — Contato / CTA Final */}
      <ContatoSection />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppFloat />
    </div>
  );
};

export default App;
