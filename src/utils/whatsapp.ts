export const WHATSAPP_NUMBER = '5541984211610';

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Vim pelo site da Zara Engenharia e gostaria de realizar um orçamento para uma obra.';

export const buildWhatsAppUrl = (message: string = DEFAULT_WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/**
 * Registra o clique no WhatsApp no dataLayer.
 * Evento separado de `generate_lead`: clique no WhatsApp não é lead qualificado.
 */
export const trackWhatsAppClick = (location: 'hero' | 'float', message: string) => {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'whatsapp_click',
      click_location: location,
      page_path: window.location.pathname + window.location.search,
      whatsapp_message: message,
    });
  } catch (err) {
    console.error('[Analytics] Erro ao registrar clique no WhatsApp:', err);
  }
};
