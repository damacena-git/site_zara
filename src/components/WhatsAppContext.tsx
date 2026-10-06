import React, { createContext, useContext, useCallback } from 'react';
import { buildWhatsAppUrl, trackWhatsAppClick, DEFAULT_WHATSAPP_MESSAGE } from '../utils/whatsapp';

type WhatsAppContextType = {
  /** Mensagem pré-preenchida da página atual */
  message: string;
  /** Abre o WhatsApp com a mensagem da página (para botões que não são links) */
  openWhatsApp: (location?: string) => void;
};

const WhatsAppContext = createContext<WhatsAppContextType>({
  message: DEFAULT_WHATSAPP_MESSAGE,
  openWhatsApp: () => {},
});

export const useWhatsApp = () => useContext(WhatsAppContext);

export const WhatsAppProvider: React.FC<{ message?: string; children: React.ReactNode }> = ({
  message = DEFAULT_WHATSAPP_MESSAGE,
  children,
}) => {
  const openWhatsApp = useCallback(
    (location: string = 'cta') => {
      trackWhatsAppClick(location, message);
      window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
    },
    [message]
  );

  return (
    <WhatsAppContext.Provider value={{ message, openWhatsApp }}>
      {children}
    </WhatsAppContext.Provider>
  );
};
