export type LeadData = {
  name: string;
  company?: string;
  phone: string;
  email?: string;
  workType: string;
  otherWorkSpec?: string;
  hasProject: string;
  size: string;
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
      lead_has_project: lead.hasProject,
      lead_size: lead.size,
      lead_budget: lead.budget,
      lead_has_company: !!lead.company,
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
