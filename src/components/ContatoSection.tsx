import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import LeadForm from './LeadForm';

const WHATSAPP_NUMBER = '5541984211610';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Vim pelo site e gostaria de agendar uma Triagem Técnica com a Zara Engenharia.'
);

const ContatoSection: React.FC = () => {
  return (
    <section id="contato" className="py-20 sm:py-28 px-6" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="separator-gold mb-6 mx-auto" />
          <h2 className="font-roboto font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-5">
            Não deixe o futuro da sua empresa nas{' '}
            <span className="text-gold">mãos de amadores</span>.
          </h2>
          <p className="font-montserrat text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Preencha o formulário rápido abaixo ou chame no WhatsApp.{' '}
            <strong className="text-white">Nossa equipe fará sua Triagem Técnica em poucas horas.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <LeadForm formLocation="contato_section" buttonText="Enviar via WhatsApp" />
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div
              className="p-6 sm:p-7 rounded-sm"
              style={{ backgroundColor: '#0a0a0a', border: '1px solid rgba(221,173,70,0.2)' }}
            >
              <h3 className="font-roboto font-bold text-white text-lg mb-6">
                Fale Diretamente
              </h3>
              <div className="flex flex-col gap-5">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#25D366' }}
                  >
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-montserrat text-white/50 text-xs uppercase tracking-wider mb-1">WhatsApp</p>
                    <p className="font-roboto font-bold text-white text-sm group-hover:text-gold transition-colors">
                      (41) 98421-1610
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:contato@zaraengenharia.com.br"
                  className="flex items-start gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(221,173,70,0.15)', border: '1px solid rgba(221,173,70,0.3)' }}
                  >
                    <Mail size={18} style={{ color: '#DDAD46' }} />
                  </div>
                  <div>
                    <p className="font-montserrat text-white/50 text-xs uppercase tracking-wider mb-1">E-mail</p>
                    <p className="font-roboto font-bold text-white text-sm group-hover:text-gold transition-colors break-all">
                      contato@zaraengenharia.com.br
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(221,173,70,0.15)', border: '1px solid rgba(221,173,70,0.3)' }}
                  >
                    <MapPin size={18} style={{ color: '#DDAD46' }} />
                  </div>
                  <div>
                    <p className="font-montserrat text-white/50 text-xs uppercase tracking-wider mb-1">Localização</p>
                    <p className="font-roboto font-bold text-white text-sm">
                      Curitiba — PR
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust badge */}
            <div
              className="p-5 rounded-sm text-center"
              style={{ backgroundColor: 'rgba(221,173,70,0.08)', border: '1px solid rgba(221,173,70,0.25)' }}
            >
              <p className="font-montserrat text-white/60 text-xs leading-relaxed">
                Seus dados são confidenciais. Não fazemos spam e não compartilhamos suas informações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
