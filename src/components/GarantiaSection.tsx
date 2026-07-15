import React from 'react';
import { Shield, FileCheck, HardHat, ClipboardList } from 'lucide-react';

const guarantees = [
  { icon: FileCheck, text: 'ART (Anotação de Responsabilidade Técnica) emitida em todo projeto' },
  { icon: HardHat, text: 'Cumprimento rigoroso das NRs de segurança do trabalho' },
  { icon: ClipboardList, text: 'Todas as etapas documentadas e contratualmente previstas' },
  { icon: Shield, text: 'Risco ZERO para o seu CPF e CNPJ' },
];

const GarantiaSection: React.FC = () => {
  return (
    <section id="garantia" className="py-20 sm:py-28 px-6" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Shield Icon */}
        <div className="flex justify-center mb-8">
          <div
            className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center"
          >
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(221,173,70,0.2) 0%, transparent 70%)',
                animation: 'pulseGold 3s ease-in-out infinite',
              }}
            />
            <Shield
              size={72}
              fill="rgba(221,173,70,0.15)"
              style={{ color: '#DDAD46' }}
              strokeWidth={1.5}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-roboto font-bold text-gold text-xs tracking-wider">
                GARANTIA
              </span>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="separator-gold mb-6 mx-auto" />
        <h2 className="font-roboto font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
          Garantia Contratual e{' '}
          <span className="text-gold">Responsabilidade Técnica</span>.
        </h2>

        <p className="font-montserrat text-white/70 text-base sm:text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
          Sua obra operando{' '}
          <strong className="text-white">100% dentro da lei</strong>. Emitimos ART, seguimos
          rigorosamente as Normas Regulamentadoras (NRs) de segurança do trabalho e documentamos
          todas as etapas em contrato.{' '}
          <strong className="text-gold">Risco ZERO para o seu CPF e CNPJ.</strong>
        </p>

        {/* Guarantee Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left">
          {guarantees.map((g, i) => {
            const Icon = g.icon;
            return (
              <div
                key={i}
                className="flex items-start gap-4 p-5 sm:p-6 rounded-sm"
                style={{ backgroundColor: 'rgba(221,173,70,0.07)', border: '1px solid rgba(221,173,70,0.2)' }}
              >
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(221,173,70,0.15)' }}
                >
                  <Icon size={20} style={{ color: '#DDAD46' }} />
                </div>
                <p className="font-montserrat text-white/80 text-sm leading-relaxed pt-1">
                  {g.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GarantiaSection;
