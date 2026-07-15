import React from 'react';
import { Settings, BarChart2, CalendarCheck } from 'lucide-react';

const benefits = [
  {
    icon: Settings,
    number: '01',
    title: 'Gestão de Ponta a Ponta',
    text: 'Cuidamos de tudo. Da compatibilização de projetos à compra de materiais direto da fábrica.',
  },
  {
    icon: BarChart2,
    number: '02',
    title: 'Transparência Financeira',
    text: 'Você não paga pelo "achismo". Usamos ERP de engenharia para controle rigoroso de cada centavo.',
  },
  {
    icon: CalendarCheck,
    number: '03',
    title: 'Cronograma Blindado',
    text: 'Trabalhamos fora do horário comercial (inclusive madrugadas) se necessário para garantir a data da sua inauguração.',
  },
];

const SolucaoSection: React.FC = () => {
  return (
    <section id="solucao" className="py-20 sm:py-28 px-6" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="separator-gold mb-6 mx-auto" />
          <h2 className="font-roboto font-bold text-black text-3xl sm:text-4xl md:text-5xl leading-tight mb-5">
            Conheça o{' '}
            <span style={{ color: '#DDAD46' }}>Padrão Zara</span> de Engenharia.
          </h2>
          <p className="font-montserrat text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Nós assumimos o risco da gestão para que a sua{' '}
            <strong className="text-black">única preocupação</strong> seja o sucesso do seu negócio.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="card-hover bg-white rounded-sm p-8 sm:p-10 flex flex-col gap-5 relative overflow-hidden"
                style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.08)' }}
              >
                {/* Number watermark */}
                <span
                  className="absolute top-4 right-5 font-roboto font-bold text-5xl leading-none select-none"
                  style={{ color: 'rgba(221,173,70,0.12)' }}
                >
                  {benefit.number}
                </span>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-sm flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(221,173,70,0.1)', border: '1px solid rgba(221,173,70,0.3)' }}
                >
                  <Icon size={26} style={{ color: '#DDAD46' }} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-roboto font-bold text-black text-xl mb-3">
                    {benefit.title}
                  </h3>
                  <p className="font-montserrat text-gray-600 text-sm leading-relaxed">
                    {benefit.text}
                  </p>
                </div>

                {/* Gold bottom accent */}
                <div
                  className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-500"
                  style={{ backgroundColor: '#DDAD46', width: '100%' }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolucaoSection;
