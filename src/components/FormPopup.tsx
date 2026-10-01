import React, { useState, useEffect } from 'react';
import { X, Send, Shield } from 'lucide-react';
import { useFormPopup } from './FormPopupContext';
import LeadForm from './LeadForm';

const FormPopup: React.FC = () => {
  const { isOpen, closePopup } = useFormPopup();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => setIsAnimating(true));
    } else {
      document.body.style.overflow = '';
      setIsAnimating(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePopup();
    };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, closePopup]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6"
      onClick={handleOverlayClick}
      style={{
        backgroundColor: isAnimating ? 'rgba(0,0,0,0.85)' : 'rgba(0,0,0,0)',
        backdropFilter: isAnimating ? 'blur(8px)' : 'blur(0px)',
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
      }}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-2xl max-h-[92vh] flex flex-col rounded-sm overflow-hidden"
        style={{
          backgroundColor: '#0a0a0a',
          border: '1px solid rgba(221,173,70,0.35)',
          boxShadow: '0 25px 80px rgba(0,0,0,0.9), 0 0 60px rgba(221,173,70,0.12)',
          transform: isAnimating ? 'scale(1) translateY(0)' : 'scale(0.96) translateY(16px)',
          opacity: isAnimating ? 1 : 0,
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease',
        }}
      >
        {/* Top Gold Accent Line */}
        <div className="h-1 w-full flex-shrink-0" style={{ backgroundColor: '#DDAD46' }} />

        {/* Modal Header */}
        <div className="relative px-6 pt-6 pb-4 sm:px-8 sm:pt-7 sm:pb-5 border-b border-white/10 flex-shrink-0 flex items-start justify-between">
          <div>
            <span className="text-gold text-xs font-montserrat uppercase tracking-wider font-semibold block mb-1">
              Triagem Técnica Especializada
            </span>
            <h3 className="font-roboto font-bold text-white text-xl sm:text-2xl">
              Solicitar <span className="text-gold">Orçamento de Obra</span>
            </h3>
            <p className="font-montserrat text-white/60 text-xs sm:text-sm mt-1">
              Preencha os campos abaixo. Avaliaremos seu projeto e entraremos em contato via WhatsApp.
            </p>
          </div>

          <button
            onClick={closePopup}
            className="text-white/50 hover:text-white transition-colors p-1.5 rounded-sm hover:bg-white/10 ml-4 cursor-pointer flex-shrink-0"
            aria-label="Fechar modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Modal Body with Custom Scrollbar */}
        <div className="overflow-y-auto px-6 py-6 sm:px-8 sm:py-7 flex-1">
          <LeadForm
            formLocation="popup"
            buttonText="Enviar Solicitação de Orçamento"
            onSuccess={closePopup}
          />

          {/* Privacy badge */}
          <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-white/40 text-xs font-montserrat">
            <Shield size={14} style={{ color: '#DDAD46' }} />
            <span>Seus dados são 100% seguros e utilizados exclusivamente para esta triagem técnica.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPopup;
