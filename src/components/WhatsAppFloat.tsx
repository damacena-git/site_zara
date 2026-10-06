import React, { useState } from 'react';
import { buildWhatsAppUrl, trackWhatsAppClick } from '../utils/whatsapp';
import { useWhatsApp } from './WhatsAppContext';

const WhatsAppFloat: React.FC = () => {
  const { message } = useWhatsApp();
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-7 right-7 z-[9990] flex items-center">
      {/* Tooltip elegante */}
      <span
        className={`mr-3 bg-[#0a0a0a] text-white font-montserrat text-xs font-semibold px-3.5 py-2 rounded-sm whitespace-nowrap border border-white/15 transition-all duration-300 pointer-events-none hidden sm:inline-block ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
        style={{
          boxShadow: '0 10px 25px rgba(0,0,0,0.6)',
        }}
      >
        <span className="text-gold font-bold mr-1.5">WhatsApp:</span>
        Solicitar Orçamento
      </span>

      <a
        href={buildWhatsAppUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick('float', message)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="whatsapp-float cursor-pointer relative"
        aria-label="Solicitar Orçamento via WhatsApp"
      >
        {/* WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 32 32"
          fill="white"
          width="32"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.002 3C9.374 3 4 8.373 4 15.002c0 2.167.581 4.2 1.594 5.95L4 29l8.277-1.567A11.98 11.98 0 0016.002 28C22.628 28 28 22.627 28 16.002 28 9.373 22.628 3 16.002 3zm0 21.828a9.822 9.822 0 01-5.013-1.376l-.36-.214-3.73.706.74-3.638-.234-.373A9.823 9.823 0 016.172 15c0-5.427 4.403-9.828 9.83-9.828 5.425 0 9.826 4.401 9.826 9.828 0 5.427-4.401 9.828-9.826 9.828zm5.388-7.364c-.295-.148-1.745-.861-2.016-.958-.27-.099-.466-.148-.663.148-.197.295-.762.958-.935 1.156-.173.197-.345.222-.64.074-.295-.148-1.243-.458-2.368-1.46-.875-.78-1.466-1.744-1.637-2.04-.172-.296-.019-.456.13-.603.133-.133.296-.345.444-.518.148-.173.197-.296.296-.493.099-.197.05-.37-.025-.518-.074-.148-.663-1.6-.909-2.19-.239-.574-.483-.496-.663-.505l-.566-.01c-.197 0-.518.074-.789.37-.27.296-1.035 1.01-1.035 2.463 0 1.453 1.06 2.857 1.207 3.054.148.197 2.083 3.18 5.048 4.461.706.305 1.257.487 1.686.624.708.225 1.353.193 1.863.117.568-.085 1.745-.713 1.992-1.402.246-.69.246-1.28.172-1.403-.073-.123-.27-.197-.566-.345z"/>
        </svg>

        {/* Notificação dourada sutil */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#DDAD46] border-2 border-black"></span>
        </span>
      </a>
    </div>
  );
};

export default WhatsAppFloat;
