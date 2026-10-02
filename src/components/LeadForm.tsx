import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { trackLeadConversion, trackDisqualifiedLead } from '../utils/analytics';

const WHATSAPP_NUMBER = '5541984211610';
const CAREERS_EMAIL = 'contato@zaraengenharia.com.br';
const JOB_SEEKER_OPTION = 'Procuro emprego / enviar currículo';
const BELOW_MINIMUM_OPTION = 'Abaixo de R$ 50 mil';

export type LeadFormData = {
  name: string;
  phone: string;
  email: string;
  workType: string;
  otherWorkSpec: string;
  budget: string;
  message: string;
};

interface LeadFormProps {
  formLocation: 'popup' | 'contato_section' | 'landing_page';
  buttonText?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

const LeadForm: React.FC<LeadFormProps> = ({
  formLocation,
  buttonText = 'Enviar via WhatsApp',
  onSuccess,
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    email: '',
    workType: '',
    otherWorkSpec: '',
    budget: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const isJobSeeker = formData.workType === JOB_SEEKER_OPTION;
  const isBelowMinimum = formData.budget === BELOW_MINIMUM_OPTION;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Candidatos a vaga não são leads: não registra conversão nem abre o WhatsApp comercial
    if (isJobSeeker) return;

    // 1. Dispara tracking no Google Tag Manager / Google Ads antes de redirecionar.
    // Obras abaixo do mínimo não contam como conversão, para o Google Ads não otimizar para esse perfil.
    if (isBelowMinimum) {
      trackDisqualifiedLead(formLocation, formData.budget);
    } else {
      trackLeadConversion({
        ...formData,
        formLocation,
      });
    }

    // 2. Monta mensagem formatada para o WhatsApp
    const msg = encodeURIComponent(
      `Olá! Vim pelo site da Zara Engenharia e gostaria de agendar uma Triagem Técnica.\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Telefone:* ${formData.phone}\n` +
      (formData.email ? `*E-mail:* ${formData.email}\n` : '') +
      `*Tipo de Obra:* ${formData.workType}${formData.workType === 'Outros' && formData.otherWorkSpec ? ` - ${formData.otherWorkSpec}` : ''}\n` +
      `*Investimento:* ${formData.budget}\n` +
      (formData.message ? `*Detalhes:* ${formData.message}` : '')
    );

    // 3. Abre WhatsApp
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    setSubmitted(true);

    if (onSuccess) {
      setTimeout(() => {
        onSuccess();
      }, 2500);
    }
  };

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center justify-center text-center p-8 sm:p-10 rounded-sm"
        style={{
          border: '1px solid rgba(221,173,70,0.4)',
          backgroundColor: 'rgba(221,173,70,0.06)',
        }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
          style={{ backgroundColor: 'rgba(221,173,70,0.15)' }}
        >
          <CheckCircle2 size={32} style={{ color: '#DDAD46' }} />
        </div>
        <h3 className="font-roboto font-bold text-white text-xl sm:text-2xl mb-2">
          Solicitação Enviada com Sucesso!
        </h3>
        <p className="font-montserrat text-white/80 text-sm max-w-md mx-auto leading-relaxed mb-4">
          Você foi direcionado ao WhatsApp da nossa equipe de engenharia para dar andamento à sua triagem técnica.
        </p>
        <span className="text-gold text-xs font-mono">
          ✓ Conversão registrada com sucesso
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5 text-left">
      {/* Nome */}
      <div>
        <label className="font-montserrat text-white/70 text-xs uppercase tracking-wider block mb-1.5 font-medium">
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

      {/* WhatsApp & E-mail */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="font-montserrat text-white/70 text-xs uppercase tracking-wider block mb-1.5 font-medium">
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
          <label className="font-montserrat text-white/70 text-xs uppercase tracking-wider block mb-1.5 font-medium">
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
        <label className="font-montserrat text-white/70 text-xs uppercase tracking-wider block mb-1.5 font-medium">
          Qual é o tipo de obra que você planeja executar? *
        </label>
        <select
          name="workType"
          value={formData.workType}
          onChange={handleChange}
          required
          className="w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-white font-montserrat text-sm focus:outline-none focus:border-gold transition-colors"
          style={{ backgroundColor: '#0a0a0a' }}
        >
          <option value="" disabled style={{ color: 'rgba(255,255,255,0.3)' }}>
            Selecione o tipo de obra
          </option>
          <option value="Reforma completa">Reforma completa</option>
          <option value="Reforma parcial">Reforma parcial</option>
          <option value="Construção">Construção</option>
          <option value="Manutenção">Manutenção</option>
          <option value="Ampliação de área">Ampliação de área</option>
          <option value="Outros">Outros</option>
          <option value={JOB_SEEKER_OPTION}>{JOB_SEEKER_OPTION}</option>
        </select>
        {formData.workType === 'Outros' && (
          <input
            type="text"
            name="otherWorkSpec"
            value={formData.otherWorkSpec}
            onChange={handleChange}
            placeholder="Especifique brevemente:"
            className="mt-2.5 w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-white font-montserrat text-sm focus:outline-none focus:border-gold transition-colors placeholder-white/30"
          />
        )}
      </div>

      {isJobSeeker ? (
        <div
          className="rounded-sm p-5 text-center"
          style={{ border: '1px solid rgba(221,173,70,0.4)', backgroundColor: 'rgba(221,173,70,0.06)' }}
        >
          <p className="font-montserrat text-white/85 text-sm leading-relaxed">
            Este canal é exclusivo para orçamentos de obras. Para vagas, envie seu currículo para{' '}
            <a href={`mailto:${CAREERS_EMAIL}?subject=Currículo`} className="text-gold font-semibold break-all">
              {CAREERS_EMAIL}
            </a>{' '}
            com o assunto <strong className="text-white">"Currículo"</strong>.
          </p>
        </div>
      ) : (
      <>
      {/* Investimento */}
      <div>
        <label className="font-montserrat text-white/70 text-xs uppercase tracking-wider block mb-1.5 font-medium">
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
          <option value="" disabled style={{ color: 'rgba(255,255,255,0.3)' }}>
            Selecione a faixa de investimento
          </option>
          <option value={BELOW_MINIMUM_OPTION}>{BELOW_MINIMUM_OPTION}</option>
          <option value="R$ 50 mil a R$ 150 mil">R$ 50 mil a R$ 150 mil</option>
          <option value="R$ 150 mil a R$ 500 mil">R$ 150 mil a R$ 500 mil</option>
          <option value="Acima de R$ 500 mil">Acima de R$ 500 mil</option>
        </select>
        {isBelowMinimum && (
          <p className="font-montserrat text-gold text-xs leading-relaxed mt-2">
            Nosso atendimento é focado em obras a partir de R$ 50 mil. Você pode enviar mesmo
            assim, mas talvez não consigamos atender o seu projeto.
          </p>
        )}
      </div>

      {/* Observações */}
      <div>
        <label className="font-montserrat text-white/70 text-xs uppercase tracking-wider block mb-1.5 font-medium">
          Observações (opcional)
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
        className="btn-gold text-white font-roboto font-bold text-sm sm:text-base px-8 py-4 rounded-sm uppercase tracking-wider flex items-center justify-center gap-3 w-full transition-transform active:scale-[0.99] mt-2 cursor-pointer"
      >
        <Send size={18} />
        {buttonText}
      </button>
      </>
      )}
    </form>
  );
};

export default LeadForm;
