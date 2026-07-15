import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

const badPoints = [
  'Você paga barato na mão de obra, mas gasta 30% a mais com desperdício de material.',
  'Paga 50% adiantado e reza para o profissional não sumir.',
  'Atrasa 2 meses a inauguração da sua loja.',
  'Sem ART, sem controle, sem responsabilidade técnica.',
  'Retrabalho constante que corrói seu orçamento silenciosamente.',
];

const goodPoints = [
  'Você paga o preço justo por uma engenharia técnica com gestão real.',
  'Tem previsibilidade financeira com pagamento por medição semanal.',
  'Inaugura na data certa, recuperando seu investimento meses antes.',
  'ART emitida, NRs seguidas, tudo documentado em contrato.',
  'Compra de materiais otimizada direto da fábrica com o CNPJ da Zara.',
];

const ComparacaoSection: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="comparacao" className="py-20 sm:py-28 px-6" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="separator-gold mb-6 mx-auto" />
          <h2 className="font-roboto font-bold text-black text-3xl sm:text-4xl md:text-5xl leading-tight">
            Por que o orçamento mais barato{' '}
            <span style={{ color: '#DDAD46' }}>sempre custa o dobro</span>?
          </h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Bad Column */}
          <div
            className="comparison-card-bad bg-white rounded-sm p-7 sm:p-8"
            style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.06)' }}
          >
            <div className="flex items-center gap-3 mb-7">
              <XCircle size={26} className="text-red-500 flex-shrink-0" />
              <h3 className="font-roboto font-bold text-black text-xl">
                O Mercado Amador
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              {badPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                  <p className="font-montserrat text-gray-600 text-sm leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Good Column */}
          <div
            className="comparison-card-good bg-black rounded-sm p-7 sm:p-8"
            style={{ boxShadow: '0 4px 30px rgba(221,173,70,0.12)' }}
          >
            <div className="flex items-center gap-3 mb-7">
              <CheckCircle2 size={26} style={{ color: '#DDAD46' }} className="flex-shrink-0" />
              <h3 className="font-roboto font-bold text-white text-xl">
                O Padrão Zara
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              {goodPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: '#DDAD46' }}
                  />
                  <p className="font-montserrat text-white/80 text-sm leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center">
          <p className="font-montserrat text-gray-500 text-sm mb-6 italic">
            A diferença não está no preço. Está em quem vai pagar o preço da irresponsabilidade.
          </p>
          <button
            onClick={scrollToContact}
            className="btn-gold text-white font-roboto font-bold text-sm sm:text-base px-8 sm:px-12 py-4 sm:py-5 rounded-sm uppercase tracking-wider"
          >
            Quero o Padrão Zara no Meu Projeto
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComparacaoSection;
