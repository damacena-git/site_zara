import React from 'react';
import { useWhatsApp } from './WhatsAppContext';
import { LucideIcon } from 'lucide-react';

export type ServiceHighlight = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export type ServiceDetailConfig = {
  sectionTitle: React.ReactNode;
  sectionSubtitle: string;
  highlights: ServiceHighlight[];
  ctaText?: string;
  /** Additional paragraph of rich content below highlights */
  extraContent?: React.ReactNode;
};

const ServiceDetailSection: React.FC<{ config: ServiceDetailConfig }> = ({ config }) => {
  const { openWhatsApp } = useWhatsApp();

  return (
    <section className="py-12 sm:py-24 px-5 sm:px-6" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="separator-gold mb-4 sm:mb-6 mx-auto" />
          <h2 className="font-roboto font-bold text-white text-2xl sm:text-4xl md:text-5xl leading-tight mb-4 sm:mb-5">
            {config.sectionTitle}
          </h2>
          <p className="font-montserrat text-white/70 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {config.sectionSubtitle}
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 mb-10 sm:mb-14">
          {config.highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="card-hover border border-white/10 rounded-sm p-7 sm:p-8 flex flex-col gap-4"
                style={{ backgroundColor: '#0a0a0a' }}
              >
                <div
                  className="w-14 h-14 rounded-sm flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(221, 173, 70, 0.12)', border: '1px solid rgba(221,173,70,0.3)' }}
                >
                  <Icon className="text-gold" size={26} />
                </div>
                <h3 className="font-roboto font-bold text-white text-lg leading-snug">
                  {item.title}
                </h3>
                <p className="font-montserrat text-white/65 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Extra Content */}
        {config.extraContent && (
          <div
            className="border-l-4 rounded-sm p-6 sm:p-8 max-w-3xl mx-auto mb-14"
            style={{ borderColor: '#DDAD46', backgroundColor: 'rgba(221, 173, 70, 0.07)' }}
          >
            <div className="font-montserrat text-white/90 text-base sm:text-lg leading-relaxed">
              {config.extraContent}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => openWhatsApp('servico')}
            className="btn-gold text-white font-roboto font-bold text-sm sm:text-base px-8 sm:px-12 py-4 sm:py-5 rounded-sm uppercase tracking-wider"
          >
            {config.ctaText || 'Solicitar Orçamento Gratuito'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailSection;
