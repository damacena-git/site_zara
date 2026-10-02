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
import { Building2, Wrench, CalendarCheck } from 'lucide-react';

const ConstrucaoReformaPage: React.FC = () => {
  return (
    <FormPopupProvider>
      <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
        <Navbar />

        <LandingHero
          config={{
            tagline: 'Empresa de Construção e Reforma em Curitiba',
            headline: (
              <>
                Sua <span className="text-gold">construção ou reforma</span> entregue
                no prazo, sem pagar 50% adiantado.
              </>
            ),
            description: (
              <>
                Somos uma empresa especializada em construção e reforma comercial,
                industrial e residencial de alto padrão em Curitiba. Gestão técnica de
                ponta a ponta e{' '}
                <strong className="text-white">
                  pagamento apenas pelo que foi executado
                </strong>
                , com medições semanais.
              </>
            ),
            ctaText: 'Solicitar Orçamento de Construção ou Reforma',
            ctaSubtext: 'Obras a partir de R$ 50 mil em Curitiba e Região Metropolitana',
            videoSrc:
              'https://videos.pexels.com/video-files/8964731/8964731-uhd_3840_2160_25fps.mp4',
          }}
        />

        <ServiceDetailSection
          config={{
            sectionTitle: (
              <>
                Construção e reforma com{' '}
                <span className="text-gold">engenharia de verdade</span>.
              </>
            ),
            sectionSubtitle:
              'Da compatibilização de projetos à entrega das chaves — cuidamos de cada etapa da sua obra com controle técnico rigoroso.',
            highlights: [
              {
                icon: Building2,
                title: 'Construção Comercial e Industrial',
                text: 'Lojas, clínicas, escritórios, galpões e espaços industriais. Projetos completos com cronograma blindado e gestão integrada de fornecedores.',
              },
              {
                icon: Wrench,
                title: 'Reforma Completa ou Parcial',
                text: 'Reforma de pontos comerciais, adequação de espaços, retrofit e modernização. Trabalhamos inclusive fora do horário comercial para não atrasar sua inauguração.',
              },
              {
                icon: CalendarCheck,
                title: 'Prazo Garantido em Contrato',
                text: 'Nosso cronograma é blindado. Usamos ERP de engenharia para controle em tempo real e equipes de plantão para manter cada etapa no prazo.',
              },
            ],
            extraContent: (
              <>
                Na Zara Engenharia, você não precisa escolher entre{' '}
                <strong className="text-white">preço justo</strong> e{' '}
                <strong className="text-gold">qualidade técnica</strong>. Nosso
                modelo de pagamento por medição semanal elimina o risco de
                adiantamentos e garante transparência total do início ao fim da sua
                obra.
              </>
            ),
            ctaText: 'Quero um Orçamento para Minha Obra',
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

export default ConstrucaoReformaPage;
