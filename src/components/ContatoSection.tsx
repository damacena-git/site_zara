import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const WHATSAPP_NUMBER = '5541984211610';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Vim pelo site e gostaria de agendar uma Triagem Técnica com a Zara Engenharia.'
);

const ContatoSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message with form data
    const msg = encodeURIComponent(
      `Olá! Vim pelo site da Zara Engenharia e gostaria de agendar uma Triagem Técnica.\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Empresa:* ${formData.company}\n` +
      `*Telefone:* ${formData.phone}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Tipo de Projeto:* ${formData.projectType}\n` +
      `*Detalhes:* ${formData.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, '_blank');
  };

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

        {/* Big CTA Button */}
        <div className="text-center mb-14">
          <button
            onClick={openWhatsApp}
            className="pulse-gold btn-gold text-white font-roboto font-bold text-base sm:text-lg px-10 sm:px-14 py-5 sm:py-6 rounded-sm uppercase tracking-wider inline-block"
            style={{ maxWidth: '480px', width: '100%' }}
          >
            Solicitar Minha Triagem Técnica Agora
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-montserrat text-white/60 text-xs uppercase tracking-wider block mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome"
                      className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-white font-montserrat text-sm focus:outline-none focus:border-gold transition-colors placeholder-white/30"
                    />
                  </div>
                  <div>
                    <label className="font-montserrat text-white/60 text-xs uppercase tracking-wider block mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nome da empresa"
                      className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-white font-montserrat text-sm focus:outline-none focus:border-gold transition-colors placeholder-white/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-montserrat text-white/60 text-xs uppercase tracking-wider block mb-2">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(41) 99999-9999"
                      className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-white font-montserrat text-sm focus:outline-none focus:border-gold transition-colors placeholder-white/30"
                    />
                  </div>
                  <div>
                    <label className="font-montserrat text-white/60 text-xs uppercase tracking-wider block mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-white font-montserrat text-sm focus:outline-none focus:border-gold transition-colors placeholder-white/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-montserrat text-white/60 text-xs uppercase tracking-wider block mb-2">
                    Tipo de Projeto *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-white font-montserrat text-sm focus:outline-none focus:border-gold transition-colors"
                    style={{ backgroundColor: '#0a0a0a' }}
                  >
                    <option value="" disabled style={{ color: 'rgba(255,255,255,0.3)' }}>Selecione o tipo de projeto</option>
                    <option value="Loja / Varejo">Loja / Varejo</option>
                    <option value="Clínica / Saúde">Clínica / Saúde</option>
                    <option value="Escritório Corporativo">Escritório Corporativo</option>
                    <option value="Galpão / Industrial">Galpão / Industrial</option>
                    <option value="Residência Alto Padrão">Residência Alto Padrão</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="font-montserrat text-white/60 text-xs uppercase tracking-wider block mb-2">
                    Descreva seu Projeto
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte um pouco sobre o projeto: tamanho, prazo esperado, localização..."
                    rows={4}
                    className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-white font-montserrat text-sm focus:outline-none focus:border-gold transition-colors placeholder-white/30 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold text-white font-roboto font-bold text-sm sm:text-base px-8 py-4 rounded-sm uppercase tracking-wider flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  <Send size={18} />
                  Enviar via WhatsApp
                </button>
              </form>
            ) : (
              <div
                className="flex flex-col items-center justify-center text-center p-10 rounded-sm h-full"
                style={{ border: '1px solid rgba(221,173,70,0.3)', backgroundColor: 'rgba(221,173,70,0.05)' }}
              >
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-roboto font-bold text-white text-2xl mb-3">
                  Mensagem Enviada!
                </h3>
                <p className="font-montserrat text-white/70 text-sm leading-relaxed">
                  Você foi redirecionado para o WhatsApp. Nossa equipe retornará sua triagem técnica em breve.
                </p>
              </div>
            )}
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
                🔒 Seus dados são confidenciais. Não fazemos spam e não compartilhamos suas informações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
