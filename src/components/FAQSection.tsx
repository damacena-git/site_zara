import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Vocês fazem pequenas reformas residenciais?',
    answer:
      'Sim. Nosso foco é exclusivamente voltado para reformas de alto padrão residenciais, lojas, clínicas, escritórios, manutenções industriais e construções/reformas residenciais de alto padrão.',
  },
  {
    question: 'Eu preciso comprar os materiais?',
    answer:
      'Trabalhamos de forma flexível. Podemos operar no modelo de "Empreitada Global" (nós compramos e gerenciamos tudo) ou "Administração", onde auxiliamos você a comprar direto da fábrica com nosso CNPJ para conseguir descontos exclusivos.',
  },
  {
    question: 'Como funciona a Triagem Técnica?',
    answer:
      'É uma reunião consultiva rápida com o nosso engenheiro comercial. Entenderemos a viabilidade do seu projeto, prazos e expectativas financeiras. Se formos o perfil ideal para a sua obra, emitimos a proposta técnica detalhada.',
  },
  {
    question: 'Vocês atuam em quais cidades?',
    answer:
      'Atendemos prioritariamente Curitiba e Região Metropolitana (PR). Para projetos de grande porte, avaliamos deslocamento para outras cidades do Paraná. Entre em contato para verificar disponibilidade para sua região.',
  },
  {
    question: 'Qual o valor mínimo de projeto para trabalhar com a Zara?',
    answer:
      'Atendemos projetos corporativos, industriais e reformas de alto padrão. Nosso modelo de gestão é desenhado para obras a partir de R$50.000. Para projetos menores, avaliamos caso a caso na Triagem Técnica.',
  },
  {
    question: 'Quais garantias tenho de que a obra vai ser entregue no prazo?',
    answer:
      'Além do compromisso contratual com datas, utilizamos cronograma físico-financeiro detalhado atualizado semanalmente, com previsão de atrasos e ações corretivas imediatas. Trabalhamos inclusive fora do horário comercial para manter o prazo.',
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 px-6" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="separator-gold mb-6 mx-auto" />
          <h2 className="font-roboto font-bold text-black text-3xl sm:text-4xl md:text-5xl leading-tight">
            Dúvidas{' '}
            <span style={{ color: '#DDAD46' }}>Frequentes</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border rounded-sm overflow-hidden transition-all"
              style={{ borderColor: openIndex === i ? '#DDAD46' : 'rgba(0,0,0,0.12)' }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                style={{ backgroundColor: openIndex === i ? '#000000' : '#ffffff' }}
              >
                <span
                  className="font-roboto font-bold text-sm sm:text-base leading-snug"
                  style={{ color: openIndex === i ? '#ffffff' : '#000000' }}
                >
                  {faq.question}
                </span>
                <span className="flex-shrink-0">
                  {openIndex === i ? (
                    <Minus size={18} style={{ color: '#DDAD46' }} />
                  ) : (
                    <Plus size={18} style={{ color: '#DDAD46' }} />
                  )}
                </span>
              </button>

              <div
                className="accordion-content"
                style={{
                  maxHeight: openIndex === i ? '400px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease',
                }}
              >
                <div
                  className="p-5 sm:p-6 pt-0"
                  style={{ backgroundColor: '#000000' }}
                >
                  <p className="font-montserrat text-white/70 text-sm leading-relaxed border-t border-white/10 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
