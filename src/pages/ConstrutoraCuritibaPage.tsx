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
import { Building, MapPin, Award } from 'lucide-react';

const WHATSAPP_MESSAGE = 'Olá! Gostaria de realizar um orçamento com a construtora para a minha obra em Curitiba.';

const ConstrutoraCuritibaPage: React.FC = () => {
  return (
    <FormPopupProvider>
      <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
        <Navbar />

        <LandingHero
          config={{
            whatsappMessage: WHATSAPP_MESSAGE,
            tagline: 'Construtora e Empresa de Engenharia Civil em Curitiba',
            headline: (
              <>
                <span className="text-gold">Construtora em Curitiba</span> para obras de
                alto padrão: você paga só pelo que foi executado.
              </>
            ),
            description: (
              <>
                Somos uma construtora com mais de 10 anos de experiência em Curitiba e
                Região Metropolitana. Construção, reforma e manutenção com{' '}
                <strong className="text-white">
                  gestão técnica de ponta a ponta
                </strong>{' '}
                e pagamento por medição.
              </>
            ),
            ctaText: 'Solicitar Orçamento da Minha Obra',
            ctaSubtext: 'Obras comerciais, industriais e residenciais a partir de R$ 50 mil',
            videoSrc:
              'https://videos.pexels.com/video-files/8598742/8598742-uhd_3840_2160_30fps.mp4',
          }}
        />

        <ServiceDetailSection
          config={{
            sectionTitle: (
              <>
                Por que escolher a Zara como sua{' '}
                <span className="text-gold">construtora em Curitiba</span>?
              </>
            ),
            sectionSubtitle:
              'Somos uma empresa de engenharia civil com sede em Curitiba, especializados em projetos que exigem excelência técnica e cumprimento rigoroso de prazos.',
            highlights: [
              {
                icon: Building,
                title: 'Projetos Comerciais e Industriais',
                text: 'Construção e reforma de lojas, clínicas, escritórios, galpões e espaços industriais em toda Curitiba e Região Metropolitana.',
              },
              {
                icon: MapPin,
                title: 'Presente em Curitiba há +10 Anos',
                text: 'Conhecemos cada fornecedor, cada regulamentação e cada desafio da construção civil em Curitiba. Experiência local que faz diferença.',
              },
              {
                icon: Award,
                title: '+100 Projetos Entregues',
                text: 'Mais de 5.000m² entre galpões, clínicas e lojas. Cada projeto entregue com ART, dentro do prazo e do orçamento previsto.',
              },
            ],
            extraContent: (
              <>
                Diferente de construtoras tradicionais, na Zara você{' '}
                <strong className="text-gold">não paga 50% adiantado</strong>. Nosso
                modelo de pagamento por medição semanal garante que você paga apenas
                pelo que foi construído. Isso é{' '}
                <strong className="text-white">
                  transparência financeira de verdade
                </strong>
                .
              </>
            ),
            ctaText: 'Solicitar Orçamento em Curitiba',
          }}
        />

        <MetodologiaSection />
        <ProvaSection />
        <ComparacaoSection />
        <GarantiaSection />
        <FAQSection />
        <ContatoSection />
        <Footer />
        <WhatsAppFloat message={WHATSAPP_MESSAGE} />
        <FormPopup />
      </div>
    </FormPopupProvider>
  );
};

export default ConstrutoraCuritibaPage;
