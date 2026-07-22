import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

type FormData = {
  name: string;
  company: string;
  phone: string;
  email: string;
  workType: string;
  otherWorkSpec: string;
  hasProject: string;
  size: string;
  budget: string;
  message: string;
};

const WHATSAPP_NUMBER = '5541984211610';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Vim pelo site e gostaria de agendar uma Triagem Técnica com a Zara Engenharia.'
);

const ContatoSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    workType: '',
    otherWorkSpec: '',
    hasProject: '',
    size: '',
    budget: '',
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
      `*Tipo de Obra:* ${formData.workType}${formData.workType === 'Outros' ? ` - ${formData.otherWorkSpec}` : ''}\n` +
      `*Projeto Aprovado:* ${formData.hasProject}\n` +
      `*Tamanho (m²):* ${formData.size}\n` +
      `*Investimento:* ${formData.budget}\n` +
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Nome & Empresa */}
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

                {/* WhatsApp & E-mail */}
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

                {/* Tipo de Obra */}
                <div>
                  <label className="font-montserrat text-white/60 text-xs uppercase tracking-wider block mb-2">
                    Qual e o tipo de obra que voce planeja executar? *
                  </label>
                  <select
                    name="workType"
                    value={formData.workType}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-white font-montserrat text-sm focus:outline-none focus:border-gold transition-colors"
                    style={{ backgroundColor: '#0a0a0a' }}
                  >
                    <option value="" disabled style={{ color: 'rgba(255,255,255,0.3)' }}>Selecione o tipo de obra</option>
                    <option value="Reforma completa">Reforma completa</option>
                    <option value="Reforma parcial">Reforma parcial</option>
                    <option value="Construcao">Construcao</option>
                    <option value="Manutencao">Manutencao</option>
                    <option value="Ampliacao de area">Ampliacao de area</option>
                    <option value="Outros">Outros</option>
                  </select>
                  {formData.workType === 'Outros' && (
                    <input
                      type="text"
                      name="otherWorkSpec"
                      value={formData.otherWorkSpec}
                      onChange={handleChange}
                      placeholder="Especifique brevemente:"
                      className="mt-3 w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-white font-montserrat text-sm focus:outline-none focus:border-gold transition-colors placeholder-white/30"
                    />
                  )}
                </div>

                {/* Projeto Aprovado */}
                <div>
                  <label className="font-montserrat text-white/60 text-xs uppercase tracking-wider block mb-2">
                    Voce ja possui um projeto arquitetonico ou executivo aprovado? *
                  </label>
                  <select
                    name="hasProject"
                    value={formData.hasProject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-white font-montserrat text-sm focus:outline-none focus:border-gold transition-colors"
                    style={{ backgroundColor: '#0a0a0a' }}
                  >
                    <option value="" disabled style={{ color: 'rgba(255,255,255,0.3)' }}>Selecione uma opcao</option>
                    <option value="Sim, ja tenho o projeto em maos.">Sim, ja tenho o projeto em maos.</option>
                    <option value="Nao, ainda preciso de ajuda com o projeto.">Nao, ainda preciso de ajuda com o projeto.</option>
                  </select>
                </div>

                {/* Tamanho m² */}
                <div>
                  <label className="font-montserrat text-white/60 text-xs uppercase tracking-wider block mb-2">
                    Qual e a previsao de tamanho (em metros quadrados) da sua obra? *
                  </label>
                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-white font-montserrat text-sm focus:outline-none focus:border-gold transition-colors"
                    style={{ backgroundColor: '#0a0a0a' }}
                  >
                    <option value="" disabled style={{ color: 'rgba(255,255,255,0.3)' }}>Selecione o tamanho</option>
                    <option value="Ate 100m²">Ate 100m²</option>
                    <option value="De 100m² a 500m²">De 100m² a 500m²</option>
                    <option value="Acima de 500m²">Acima de 500m²</option>
                  </select>
                </div>

                {/* Investimento */}
                <div>
                  <label className="font-montserrat text-white/60 text-xs uppercase tracking-wider block mb-2">
                    Qual a estimativa de investimento para este projeto? *
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-white font-montserrat text-sm focus:outline-none focus:border-gold transition-colors"
                    style={{ backgroundColor: '#0a0a0a' }}
                  >
                    <option value="" disabled style={{ color: 'rgba(255,255,255,0.3)' }}>Selecione a faixa de investimento</option>
                    <option value="Ate R$ 100 mil">Ate R$ 100 mil</option>
                    <option value="R$ 101 mil a R$ 300 mil">R$ 101 mil a R$ 300 mil</option>
                    <option value="Acima de R$ 300 mil">Acima de R$ 300 mil</option>
                  </select>
                </div>

                {/* Observação */}
                <div>
                  <label className="font-montserrat text-white/60 text-xs uppercase tracking-wider block mb-2">
                    Observacoes (opcional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte um pouco mais sobre o projeto..."
                    rows={3}
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
                Seus dados sao confidenciais. Nao fazemos spam e nao compartilhamos suas informacoes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
