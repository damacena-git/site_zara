import React from 'react';
import { HardHat, Eye, Award } from 'lucide-react';

const QuemSomosSection: React.FC = () => {
  return (
    <section id="quem-somos" className="py-20 sm:py-28 px-6" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div
              className="absolute -top-3 -left-3 w-full h-full rounded-sm"
              style={{ border: '2px solid rgba(221,173,70,0.3)' }}
            />
            <img
              src="https://images.pexels.com/photos/8961031/pexels-photo-8961031.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=700"
              alt="Thiago Romani e Marilucia Silveira — Engenheiros Zara Engenharia"
              className="relative rounded-sm w-full object-cover"
              style={{
                maxHeight: '540px',
                objectPosition: 'center top',
                filter: 'contrast(1.1) brightness(0.95)',
              }}
            />
            {/* Gold overlay gradient */}
            <div
              className="absolute inset-0 rounded-sm"
              style={{
                background: 'linear-gradient(to top, rgba(221,173,70,0.15) 0%, transparent 60%)',
              }}
            />
            {/* Badge */}
            <div
              className="absolute bottom-5 right-5 text-black font-roboto font-bold text-xs px-4 py-2 rounded-sm uppercase tracking-wider"
              style={{ backgroundColor: '#DDAD46' }}
            >
              Engenheiros CREA
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <div className="separator-gold mb-6" style={{ marginLeft: 0 }} />
            <h2 className="font-roboto font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
              Engenheiros de{' '}
              <span className="text-gold">Trincheira</span>,<br />
              não de escritório.
            </h2>
            <p className="font-montserrat text-white/80 text-base sm:text-lg leading-relaxed mb-6">
              Muito prazer, somos{' '}
              <strong className="text-white">Thiago Romani e Marilucia Silveira</strong>, a força
              técnica por trás da Zara Engenharia.
            </p>

            <p className="font-montserrat text-white/65 text-sm sm:text-base leading-relaxed mb-5">
              Nós acreditamos que a verdadeira engenharia acontece no canteiro, com a bota
              suja de terra e o olho nos detalhes. Enquanto grande parte do mercado
              terceiriza a responsabilidade, nós estamos{' '}
              <strong className="text-white">presentes na sua obra</strong>, antecipando
              problemas antes que eles custem dinheiro.
            </p>

            <p className="font-montserrat text-white/65 text-sm sm:text-base leading-relaxed mb-8">
              Com a Zara, você não contrata apenas mão de obra. Você contrata{' '}
              <strong className="text-gold">inteligência, respeito às NRs</strong> e
              compromisso inegociável com a sua entrega.
            </p>

            {/* Differentials */}
            <div className="flex flex-col gap-4">
              {[
                { icon: HardHat, text: 'Presença física diária no canteiro de obras' },
                { icon: Eye, text: 'Antecipação de problemas com visão técnica' },
                { icon: Award, text: 'Compromisso inegociável com prazo e qualidade' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(221,173,70,0.15)', border: '1px solid rgba(221,173,70,0.3)' }}
                    >
                      <Icon size={18} style={{ color: '#DDAD46' }} />
                    </div>
                    <p className="font-montserrat text-white/75 text-sm">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QuemSomosSection;
