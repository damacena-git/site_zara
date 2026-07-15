import React from 'react';
import { Bookmark, TrendingUp, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Bookmark,
    step: 'Passo 1',
    title: 'Reserva de Agenda',
    text: 'Você investe apenas 5% do valor para garantir nossa equipe exclusiva no seu projeto.',
  },
  {
    icon: TrendingUp,
    step: 'Passo 2',
    title: 'Pagamento por Medição',
    text: 'Diferente do mercado amador, nós não pedimos 50% adiantado. A cada semana (ou quinzena), medimos o que realmente foi executado na obra.',
  },
  {
    icon: CheckCircle,
    step: 'Passo 3',
    title: 'Faturamento Justo',
    text: 'Você paga apenas o que andou. Se a obra andou, você paga. Se não andou, você não paga. Segurança total para o seu caixa.',
  },
];

const MetodologiaSection: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="metodologia" className="py-20 sm:py-28 px-6" style={{ backgroundColor: '#343A40' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="separator-gold mb-6 mx-auto" />
          <h2 className="font-roboto font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-5">
            Como funciona o nosso{' '}
            <span className="text-gold">modelo de pagamento</span>
            <br />
            <span className="text-2xl sm:text-3xl opacity-80">(O Fim do Risco)</span>
          </h2>
          <p className="font-montserrat text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Nós revolucionamos a forma de cobrar na construção civil para{' '}
            <strong className="text-white">proteger o seu patrimônio</strong>.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-0 mb-14 relative">
          {/* Vertical connector line */}
          <div
            className="absolute left-8 md:left-1/2 top-12 bottom-12 w-px hidden sm:block"
            style={{ backgroundColor: 'rgba(221,173,70,0.25)', transform: 'translateX(-50%)' }}
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;
            return (
              <div
                key={index}
                className={`relative flex items-center gap-6 sm:gap-8 mb-8 sm:mb-10 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                {/* Step content */}
                <div
                  className={`flex-1 bg-black/30 border border-white/10 rounded-sm p-6 sm:p-8 card-hover ${isEven ? 'md:text-right' : ''}`}
                >
                  <span className="font-montserrat text-gold text-xs font-medium uppercase tracking-widest block mb-2">
                    {step.step}
                  </span>
                  <h3 className="font-roboto font-bold text-white text-xl mb-3">
                    {step.title}
                  </h3>
                  <p className="font-montserrat text-white/65 text-sm leading-relaxed">
                    {step.text}
                  </p>
                </div>

                {/* Icon circle */}
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center z-10"
                  style={{ backgroundColor: '#DDAD46', border: '3px solid #343A40' }}
                >
                  <Icon className="text-black" size={24} strokeWidth={2} />
                </div>

                {/* Hidden spacer for alignment */}
                <div className="flex-1 hidden md:block" />
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="btn-gold text-white font-roboto font-bold text-sm sm:text-base px-8 sm:px-12 py-4 sm:py-5 rounded-sm uppercase tracking-wider inline-block"
          >
            Quero Blindar Meu Projeto com a Zara
          </button>
        </div>
      </div>
    </section>
  );
};

export default MetodologiaSection;
