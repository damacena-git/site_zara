export type LeadData = {
  name: string;
  phone: string;
  email?: string;
  workType: string;
  otherWorkSpec?: string;
  budget: string;
  message?: string;
  formLocation: 'popup' | 'contato_section' | 'landing_page';
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Dispara eventos de conversão no Google Tag Manager (dataLayer) e Google Ads / GA4
 */
export const trackLeadConversion = (lead: LeadData) => {
  try {
    window.dataLayer = window.dataLayer || [];

    // 1. Evento recomendado oficial do Google (GA4 / Google Ads)
    window.dataLayer.push({
      event: 'generate_lead',
      event_category: 'form',
      event_action: 'submit',
      event_label: lead.formLocation,
      currency: 'BRL',
      form_location: lead.formLocation,
      page_path: window.location.pathname,
      page_title: document.title,
      lead_work_type: lead.workType,
      lead_budget: lead.budget,
    });

    // 2. Evento personalizado padrão para acionadores do GTM
    window.dataLayer.push({
      event: 'lead_form_submitted',
      form_location: lead.formLocation,
      page_path: window.location.pathname,
      work_type: lead.workType,
      budget: lead.budget,
    });

    // 3. Evento genérico de conversão
    window.dataLayer.push({
      event: 'conversion',
      conversion_type: 'lead',
      form_location: lead.formLocation,
    });

    // 4. Suporte a gtag direto se presente na janela
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', {
        event_category: 'Lead',
        event_label: lead.formLocation,
      });
    }

    console.log('[Analytics] Lead enviado para dataLayer com sucesso:', {
      events: ['generate_lead', 'lead_form_submitted', 'conversion'],
      form_location: lead.formLocation,
      page: window.location.pathname,
    });
  } catch (err) {
    console.error('[Analytics] Erro ao registrar tracking de lead:', err);
  }
};

/**
 * Registra envios fora do perfil (obra abaixo do valor mínimo) sem disparar eventos de conversão
 */
export const trackDisqualifiedLead = (
  formLocation: LeadData['formLocation'],
  budget: string
) => {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'lead_below_minimum',
      form_location: formLocation,
      page_path: window.location.pathname,
      budget,
    });
  } catch (err) {
    console.error('[Analytics] Erro ao registrar lead fora do perfil:', err);
  }
};
