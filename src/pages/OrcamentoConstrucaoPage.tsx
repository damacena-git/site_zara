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
import WhatsAppFloat from '../components/WhatsAppFloat';
import { WhatsAppProvider } from '../components/WhatsAppContext';
import { Calculator, BarChart2, FileText } from 'lucide-react';

const WHATSAPP_MESSAGE = 'Olá! Gostaria de realizar um orçamento detalhado de construção civil.';

const OrcamentoConstrucaoPage: React.FC = () => {
  return (
    <WhatsAppProvider message={WHATSAPP_MESSAGE}>
      <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
        <Navbar />

        <LandingHero
          config={{
            tagline: 'Orçamento de Construção Civil em Curitiba',
            headline: (
              <>
                Orçamento de construção civil{' '}
                <span className="text-gold">transparente do primeiro ao último centavo</span>.
              </>
            ),
            description: (
              <>
                Solicite seu orçamento detalhado para construção civil em Curitiba.
                Trabalhamos com{' '}
                <strong className="text-white">ERP de engenharia</strong> para
                controle rigoroso de custos — incluindo construção a seco, alvenaria
                convencional e sistemas industrializados.
              </>
            ),
            ctaText: 'Solicitar Orçamento Gratuito',
            ctaSubtext: 'Orçamento detalhado em até 48h para obras a partir de R$ 50 mil em Curitiba',
            backgroundImage: '/images/hero-orcamento-construcao.jpg',
          }}
        />

        <ServiceDetailSection
          config={{
            sectionTitle: (
              <>
                Orçamento de obra com{' '}
                <span className="text-gold">transparência total</span>.
              </>
            ),
            sectionSubtitle:
              'Na Zara Engenharia, cada centavo é rastreado. Nosso orçamento detalha materiais, mão de obra e prazos com precisão de engenharia.',
            highlights: [
              {
                icon: Calculator,
                title: 'Orçamento Detalhado e Preciso',
                text: 'Cada item discriminado: materiais, mão de obra, equipamentos e taxas. Sem surpresas. Você sabe exatamente quanto vai investir em cada etapa.',
              },
              {
                icon: BarChart2,
                title: 'Controle via ERP de Engenharia',
                text: 'Usamos sistema de gestão integrada para controlar custos em tempo real. Cada compra, cada medição e cada pagamento registrados com transparência.',
              },
              {
                icon: FileText,
                title: 'Construção a Seco e Convencional',
                text: 'Orçamos projetos em steel frame, drywall, alvenaria convencional e sistemas híbridos. A melhor solução técnica e financeira para o seu projeto.',
              },
            ],
            extraContent: (
              <>
                Diferente de orçamentos genéricos do mercado, nosso levantamento
                inclui{' '}
                <strong className="text-gold">
                  cronograma físico-financeiro detalhado
                </strong>
                , com previsão de desembolso mês a mês. Você planeja seu caixa
                antes mesmo de começar a obra. E o melhor:{' '}
                <strong className="text-white">
                  você só paga pelo que foi realmente executado
                </strong>{' '}
                através de medições semanais.
              </>
            ),
            ctaText: 'Quero Meu Orçamento Detalhado',
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
      </div>
    </WhatsAppProvider>
  );
};

export default OrcamentoConstrucaoPage;
