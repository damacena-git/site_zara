import React from 'react';
import Navbar from '../components/Navbar';
import LandingHero from '../components/LandingHero';
import ServiceDetailSection from '../components/ServiceDetailSection';
import MetodologiaSection from '../components/MetodologiaSection';
import ProvaSection from '../components/ProvaSection';
import ComparacaoSection from '../components/ComparacaoSection';
import GarantiaSection from '../components/GarantiaSection';
import FAQSection from '../components/FAQSection';
import ContatoSection from '../components/ContatoSection';
import Footer from '../components/Footer';
import FormPopup from '../components/FormPopup';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { FormPopupProvider } from '../components/FormPopupContext';
import { Home, Paintbrush, ShieldCheck } from 'lucide-react';

const ReformaResidencialPage: React.FC = () => {
  return (
    <FormPopupProvider>
      <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
        <Navbar />

        <LandingHero
          config={{
            tagline: 'Reforma Residencial em Curitiba',
            headline: (
              <>
                Sua casa transformada com{' '}
                <span className="text-gold">segurança e prazo garantido</span>.
              </>
            ),
            description: (
              <>
                Reforma residencial de alto padrão em Curitiba com engenharia
                técnica de verdade. Sem surpresas no orçamento, sem atrasos e com{' '}
                <strong className="text-white">
                  pagamento apenas pelo que foi executado
                </strong>
                .
              </>
            ),
            ctaText: 'Solicitar Orçamento de Reforma',
            ctaSubtext: 'Reformas residenciais de alto padrão em Curitiba e Região',
            backgroundImage:
              'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920',
          }}
        />

        <ServiceDetailSection
          config={{
            sectionTitle: (
              <>
                Reforma residencial com{' '}
                <span className="text-gold">padrão de engenharia</span>.
              </>
            ),
            sectionSubtitle:
              'Sua casa merece mais do que um pedreiro. Merece gestão técnica profissional que garante qualidade, prazo e transparência financeira.',
            highlights: [
              {
                icon: Home,
                title: 'Reforma Completa de Residências',
                text: 'Reformas de casas, apartamentos e sobrados. Da estrutura ao acabamento, com compatibilização de projetos elétrico, hidráulico e arquitetônico.',
              },
              {
                icon: Paintbrush,
                title: 'Acabamento de Alto Padrão',
                text: 'Trabalhamos com os melhores materiais e equipes especializadas para garantir um acabamento impecável em cada detalhe da sua reforma residencial.',
              },
              {
                icon: ShieldCheck,
                title: 'Sem Risco para Você',
                text: 'ART emitida, NRs cumpridas, contrato detalhado. Você paga apenas pelo que foi medido e executado — zero risco para o seu patrimônio.',
              },
            ],
            extraContent: (
              <>
                Sabemos que reformar sua casa é um momento importante. Por isso,
                oferecemos{' '}
                <strong className="text-gold">
                  acompanhamento semanal com relatórios fotográficos
                </strong>{' '}
                e transparência total. Nosso modelo de{' '}
                <strong className="text-white">pagamento por medição</strong> garante
                que você paga apenas pelo que foi realmente executado — sem sustos no
                final.
              </>
            ),
            ctaText: 'Quero Reformar Minha Casa com Segurança',
          }}
        />

        <MetodologiaSection />
        <ProvaSection />
        <ComparacaoSection />
        <GarantiaSection />
        <FAQSection />
        <ContatoSection />
        <Footer />
        <WhatsAppFloat />
        <FormPopup />
      </div>
    </FormPopupProvider>
  );
};

export default ReformaResidencialPage;
