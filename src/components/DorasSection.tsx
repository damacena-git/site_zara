import React from 'react';
import { DollarSign, AlertTriangle, Clock } from 'lucide-react';

const pains = [
  {
    icon: DollarSign,
    title: 'O "Barato que sai Caro"',
    text: 'Empreiteiros sem gestão que dão o menor preço, mas geram desperdício de material e retrabalho.',
  },
  {
    icon: AlertTriangle,
    title: 'O Risco Financeiro',
    text: 'O medo de pagar grandes quantias adiantadas e o profissional simplesmente abandonar a obra.',
  },
  {
    icon: Clock,
    title: 'Loja Fechada é Prejuízo',
    text: 'Cada dia de atraso na entrega é um dia a menos faturando no seu negócio.',
  },
];

const DorasSection: React.FC = () => {
  return (
    <section id="dores" className="py-20 sm:py-28 px-6" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="separator-gold mb-6 mx-auto" />
          <h2 className="font-roboto font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
            Você não deveria ser o{' '}
            <span className="text-gold">"babá"</span> da sua própria obra.
          </h2>
          <p className="font-montserrat text-white/75 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Sabemos que você é um empresário ou gestor ocupado. E sabemos{' '}
            <strong className="text-white">exatamente o que tira o seu sono</strong> quando o
            assunto é reforma:
          </p>
        </div>

        {/* Pain Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {pains.map((pain, index) => {
            const Icon = pain.icon;
            return (
              <div
                key={index}
                className="card-hover border border-white/10 rounded-sm p-7 sm:p-8 flex flex-col gap-4"
                style={{ backgroundColor: '#0a0a0a' }}
              >
                <div
                  className="w-14 h-14 rounded-sm flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(221, 173, 70, 0.12)', border: '1px solid rgba(221,173,70,0.3)' }}
                >
                  <Icon className="text-gold" size={26} />
                </div>
                <h3 className="font-roboto font-bold text-white text-lg leading-snug">
                  {pain.title}
                </h3>
                <p className="font-montserrat text-white/65 text-sm leading-relaxed">
                  {pain.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Sub-headline */}
        <div
          className="border-l-4 rounded-sm p-6 sm:p-8 max-w-3xl mx-auto text-center"
          style={{ borderColor: '#DDAD46', backgroundColor: 'rgba(221, 173, 70, 0.07)' }}
        >
          <p className="font-montserrat text-white/90 text-base sm:text-lg leading-relaxed">
            Se você busca o{' '}
            <strong className="text-white">"menor preço a qualquer custo"</strong>, nós não somos para você.
            Mas se você busca{' '}
            <strong className="text-gold">segurança, prazo e excelência técnica</strong>,
            você está no lugar certo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DorasSection;
