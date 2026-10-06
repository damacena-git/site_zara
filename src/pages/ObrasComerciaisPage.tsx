import React from 'react';
import Navbar from '../components/Navbar';
import LandingHero, { LandingHeroConfig } from '../components/LandingHero';
import ServiceDetailSection, { ServiceDetailConfig } from '../components/ServiceDetailSection';
import DorasSection from '../components/DorasSection';
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
import {
  Store,
  Stethoscope,
  Briefcase,
  Factory,
  UtensilsCrossed,
  CalendarCheck,
  Moon,
  ClipboardCheck,
  ShieldCheck,
  Ruler,
  Warehouse,
  HardHat,
  LayoutGrid,
} from 'lucide-react';

type Segment = 'geral' | 'lojas' | 'clinicas' | 'escritorios' | 'industrial' | 'restaurantes';

type SegmentContent = {
  label: string;
  hero: LandingHeroConfig;
  detail: ServiceDetailConfig;
};

const MIN_TICKET = 'Obras a partir de R$ 50 mil em Curitiba e Região Metropolitana';

const SEGMENTS: Record<Segment, SegmentContent> = {
  geral: {
    label: 'Todos',
    hero: {
      tagline: 'Obras e Reformas Comerciais em Curitiba',
      headline: (
        <>
          Sua <span className="text-gold">obra comercial</span> entregue no prazo,
          sem pagar 50% adiantado.
        </>
      ),
      description: (
        <>
          Construção e reforma de lojas, clínicas, escritórios, restaurantes e galpões
          com gestão técnica de ponta a ponta e{' '}
          <strong className="text-white">pagamento apenas pelo que foi executado</strong>,
          com medições semanais.
        </>
      ),
      ctaText: 'Solicitar Orçamento da Minha Obra',
      ctaSubtext: MIN_TICKET,
    },
    detail: {
      sectionTitle: (
        <>
          Obras comerciais com <span className="text-gold">cronograma blindado</span>.
        </>
      ),
      sectionSubtitle:
        'Seu negócio não pode ficar parado. Planejamos cada etapa para você abrir, reabrir ou ampliar na data combinada.',
      highlights: [
        {
          icon: CalendarCheck,
          title: 'Data de Inauguração Garantida',
          text: 'Cronograma físico-financeiro atualizado semanalmente e equipes extras quando necessário para manter a data.',
        },
        {
          icon: Moon,
          title: 'Obra Fora do Horário Comercial',
          text: 'Executamos à noite e nos fins de semana quando o seu ponto precisa continuar atendendo durante a reforma.',
        },
        {
          icon: ClipboardCheck,
          title: 'ART, NRs e Documentação',
          text: 'Responsabilidade técnica, segurança do trabalho e todas as etapas documentadas em contrato.',
        },
      ],
      extraContent: (
        <>
          Atendemos empresas, redes, franquias e investidores que precisam de{' '}
          <strong className="text-white">previsibilidade de prazo e de caixa</strong>. Com o
          pagamento por medição semanal, você{' '}
          <strong className="text-gold">só paga pelo que foi efetivamente construído</strong>.
        </>
      ),
      ctaText: 'Quero um Orçamento para Minha Obra',
    },
  },
  lojas: {
    label: 'Lojas e Franquias',
    hero: {
      tagline: 'Reforma e Montagem de Lojas em Curitiba',
      headline: (
        <>
          Reforma de loja com <span className="text-gold">inauguração na data marcada</span>.
        </>
      ),
      description: (
        <>
          Obras de lojas de rua, lojas em shopping e unidades de franquia, seguindo o
          caderno técnico da rede e as regras do shopping. Você{' '}
          <strong className="text-white">paga apenas pelo que foi executado</strong>.
        </>
      ),
      ctaText: 'Solicitar Orçamento da Minha Loja',
      ctaSubtext: MIN_TICKET,
    },
    detail: {
      sectionTitle: (
        <>
          Loja fechada é <span className="text-gold">faturamento perdido</span>.
        </>
      ),
      sectionSubtitle:
        'Cada dia de atraso é um dia sem vender. Nossa gestão é pensada para abrir as portas no dia combinado.',
      highlights: [
        {
          icon: Store,
          title: 'Lojas de Rua e Shopping',
          text: 'Experiência com as exigências de administração de shopping: horários de obra, projetos aprovados e vistoria de entrega.',
        },
        {
          icon: LayoutGrid,
          title: 'Padrão de Franquia',
          text: 'Executamos conforme o manual de arquitetura da rede, com o mesmo padrão em cada nova unidade.',
        },
        {
          icon: Moon,
          title: 'Reforma sem Fechar a Loja',
          text: 'Trabalhamos à noite e em etapas para a sua loja continuar vendendo durante a reforma.',
        },
      ],
      extraContent: (
        <>
          Do fechamento do tapume à entrega para a montagem do mobiliário, um único
          responsável técnico cuida de{' '}
          <strong className="text-white">obra civil, elétrica, hidráulica, forro e acabamento</strong>.
          Você acompanha tudo por relatório semanal.
        </>
      ),
      ctaText: 'Quero Inaugurar no Prazo',
    },
  },
  clinicas: {
    label: 'Clínicas e Consultórios',
    hero: {
      tagline: 'Reforma e Construção de Clínicas em Curitiba',
      headline: (
        <>
          Reforma de clínica <span className="text-gold">pronta para a Vigilância Sanitária</span>,
          entregue no prazo.
        </>
      ),
      description: (
        <>
          Obras de clínicas médicas, odontológicas, estéticas e consultórios executadas
          conforme o projeto aprovado, com{' '}
          <strong className="text-white">pagamento apenas pelo que foi executado</strong>.
        </>
      ),
      ctaText: 'Solicitar Orçamento da Minha Clínica',
      ctaSubtext: MIN_TICKET,
    },
    detail: {
      sectionTitle: (
        <>
          Obra de saúde exige <span className="text-gold">engenharia, não improviso</span>.
        </>
      ),
      sectionSubtitle:
        'Áreas críticas, instalações especiais e acabamentos laváveis precisam ser executados exatamente como o projeto pede.',
      highlights: [
        {
          icon: Stethoscope,
          title: 'Clínicas e Consultórios',
          text: 'Clínicas médicas, odontológicas, estéticas, laboratórios e consultórios, do zero ou em reforma.',
        },
        {
          icon: ClipboardCheck,
          title: 'Execução Conforme o Projeto',
          text: 'Seguimos o projeto aprovado e as exigências sanitárias aplicáveis (como a RDC 50) para a sua licença sair sem retrabalho.',
        },
        {
          icon: ShieldCheck,
          title: 'Instalações Especiais',
          text: 'Elétrica dimensionada para equipamentos, hidráulica, climatização e acabamentos adequados a ambientes de saúde.',
        },
      ],
      extraContent: (
        <>
          Sabemos que a clínica só começa a faturar depois da liberação. Por isso
          planejamos a obra de trás para frente, a partir da{' '}
          <strong className="text-gold">data de abertura</strong>, com{' '}
          <strong className="text-white">relatórios fotográficos semanais</strong>.
        </>
      ),
      ctaText: 'Quero Abrir Minha Clínica no Prazo',
    },
  },
  escritorios: {
    label: 'Escritórios Corporativos',
    hero: {
      tagline: 'Reforma de Escritórios e Obras Corporativas em Curitiba',
      headline: (
        <>
          Reforma de escritório corporativo <span className="text-gold">sem parar a sua operação</span>.
        </>
      ),
      description: (
        <>
          Adequação de layout, retrofit e implantação de escritórios com gestão técnica de
          ponta a ponta e{' '}
          <strong className="text-white">pagamento apenas pelo que foi executado</strong>.
        </>
      ),
      ctaText: 'Solicitar Orçamento do Meu Escritório',
      ctaSubtext: MIN_TICKET,
    },
    detail: {
      sectionTitle: (
        <>
          Seu time trabalhando, <span className="text-gold">a obra andando</span>.
        </>
      ),
      sectionSubtitle:
        'Planejamos a obra em etapas e fora do expediente para a sua empresa não parar.',
      highlights: [
        {
          icon: Briefcase,
          title: 'Escritórios e Sedes',
          text: 'Implantação de novas sedes, salas comerciais, andares corporativos e coworkings.',
        },
        {
          icon: Ruler,
          title: 'Layout e Retrofit',
          text: 'Divisórias, drywall, forro, piso elevado, iluminação, climatização e infraestrutura de rede.',
        },
        {
          icon: Moon,
          title: 'Obra Fora do Expediente',
          text: 'Executamos à noite e nos fins de semana, com canteiro organizado e limpo a cada manhã.',
        },
      ],
      extraContent: (
        <>
          Um único interlocutor técnico para{' '}
          <strong className="text-white">facilities, arquitetura e fornecedores</strong>,
          cronograma atualizado semanalmente e{' '}
          <strong className="text-gold">medição do que foi executado</strong> antes de cada pagamento.
        </>
      ),
      ctaText: 'Quero Reformar Meu Escritório',
    },
  },
  industrial: {
    label: 'Galpões e Indústria',
    hero: {
      tagline: 'Construção de Galpões e Obras Industriais em Curitiba',
      headline: (
        <>
          Construção e reforma de galpões <span className="text-gold">com prazo e custo sob controle</span>.
        </>
      ),
      description: (
        <>
          Galpões, ampliações de fábrica, centros de distribuição e manutenção industrial
          com engenharia de ponta a ponta e{' '}
          <strong className="text-white">pagamento apenas pelo que foi executado</strong>.
        </>
      ),
      ctaText: 'Solicitar Orçamento da Minha Obra Industrial',
      ctaSubtext: MIN_TICKET,
    },
    detail: {
      sectionTitle: (
        <>
          Obras industriais com <span className="text-gold">segurança e previsibilidade</span>.
        </>
      ),
      sectionSubtitle:
        'Ampliar ou adequar sua planta sem comprometer a produção exige planejamento e rigor técnico.',
      highlights: [
        {
          icon: Warehouse,
          title: 'Galpões e Centros Logísticos',
          text: 'Construção de galpões novos, ampliações, mezaninos e adequações de área.',
        },
        {
          icon: Factory,
          title: 'Reforma com a Fábrica Operando',
          text: 'Etapas planejadas junto com a sua produção para reduzir paradas ao mínimo.',
        },
        {
          icon: HardHat,
          title: 'NRs e Segurança do Trabalho',
          text: 'Cumprimento rigoroso das Normas Regulamentadoras e ART emitida em toda obra.',
        },
      ],
      extraContent: (
        <>
          Cronograma físico-financeiro com previsão de desembolso mês a mês e{' '}
          <strong className="text-gold">medições do que foi executado</strong>, para o seu
          investimento seguir exatamente o que foi aprovado.
        </>
      ),
      ctaText: 'Quero um Orçamento Industrial',
    },
  },
  restaurantes: {
    label: 'Restaurantes',
    hero: {
      tagline: 'Reforma e Montagem de Restaurantes em Curitiba',
      headline: (
        <>
          Reforma de restaurante <span className="text-gold">pronta para abrir na data marcada</span>.
        </>
      ),
      description: (
        <>
          Obras de restaurantes, bares, cafeterias e padarias, com cozinha industrial,
          exaustão e acabamentos adequados, e{' '}
          <strong className="text-white">pagamento apenas pelo que foi executado</strong>.
        </>
      ),
      ctaText: 'Solicitar Orçamento do Meu Restaurante',
      ctaSubtext: MIN_TICKET,
    },
    detail: {
      sectionTitle: (
        <>
          Cozinha e salão <span className="text-gold">prontos para operar</span>.
        </>
      ),
      sectionSubtitle:
        'Restaurante exige infraestrutura específica. Executamos cada detalhe para a operação começar sem improviso.',
      highlights: [
        {
          icon: UtensilsCrossed,
          title: 'Cozinha Industrial',
          text: 'Infraestrutura elétrica, hidráulica, gás e exaustão dimensionadas para os seus equipamentos.',
        },
        {
          icon: ClipboardCheck,
          title: 'Execução Conforme o Projeto',
          text: 'Acabamentos e instalações conforme o projeto aprovado e as exigências sanitárias aplicáveis.',
        },
        {
          icon: CalendarCheck,
          title: 'Abertura na Data Combinada',
          text: 'Cronograma pensado a partir da data de inauguração, com acompanhamento semanal.',
        },
      ],
      extraContent: (
        <>
          Do salão à cozinha, um único responsável técnico coordena{' '}
          <strong className="text-white">obra civil, instalações e acabamento</strong>, e você
          paga <strong className="text-gold">apenas pelo que foi medido</strong>.
        </>
      ),
      ctaText: 'Quero Abrir Meu Restaurante no Prazo',
    },
  },
};

const getSegment = (): Segment => {
  const seg = new URLSearchParams(window.location.search).get('seg');
  return seg && seg in SEGMENTS ? (seg as Segment) : 'geral';
};

const SEGMENT_ICONS: Record<Exclude<Segment, 'geral'>, typeof Store> = {
  lojas: Store,
  clinicas: Stethoscope,
  escritorios: Briefcase,
  industrial: Factory,
  restaurantes: UtensilsCrossed,
};

const SegmentosSection: React.FC<{ active: Segment }> = ({ active }) => (
  <section className="py-10 sm:py-14 px-5 sm:px-6" style={{ backgroundColor: '#0a0a0a' }}>
    <div className="max-w-5xl mx-auto text-center">
      <p className="font-roboto font-bold text-white text-lg sm:text-2xl mb-6 sm:mb-8">
        Obras comerciais que <span className="text-gold">executamos</span>
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
        {(Object.keys(SEGMENT_ICONS) as Exclude<Segment, 'geral'>[]).map((seg) => {
          const Icon = SEGMENT_ICONS[seg];
          const isActive = seg === active;
          return (
            <a
              key={seg}
              href={`?seg=${seg}`}
              className="flex flex-col items-center gap-2 rounded-sm p-4 border transition-colors hover:border-gold"
              style={{
                borderColor: isActive ? '#DDAD46' : 'rgba(255,255,255,0.1)',
                backgroundColor: isActive ? 'rgba(221,173,70,0.08)' : 'transparent',
              }}
            >
              <Icon className="text-gold" size={24} />
              <span className="font-montserrat text-white/80 text-xs sm:text-sm">
                {SEGMENTS[seg].label}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  </section>
);

const ObrasComerciaisPage: React.FC = () => {
  const segment = getSegment();
  const content = SEGMENTS[segment];

  return (
    <FormPopupProvider>
      <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
        <Navbar />

        <LandingHero
          config={{
            ...content.hero,
            videoSrc:
              'https://videos.pexels.com/video-files/8964731/8964731-uhd_3840_2160_25fps.mp4',
          }}
        />

        <SegmentosSection active={segment} />
        <ServiceDetailSection config={content.detail} />
        <DorasSection />
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

export default ObrasComerciaisPage;
