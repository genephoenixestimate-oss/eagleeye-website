/**
 * Clean, privacy-first conversion and event tracking helper.
 * Automatically integrates with Google Analytics (gtag), Google Tag Manager (dataLayer),
 * or custom dispatchers without hardcoded secrets.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type ConversionEvent =
  | 'phone_call_click'
  | 'whatsapp_click'
  | 'service_form_submit'
  | 'cta_button_click'
  | 'service_modal_open'
  | 'service_area_click';

export interface EventParams {
  [key: string]: string | number | boolean | undefined;
}

export const trackEvent = (eventName: ConversionEvent, params?: EventParams) => {
  try {
    if (typeof window === 'undefined') return;

    // 1. Google Analytics gtag support
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }

    // 2. Google Tag Manager dataLayer support
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...params,
        timestamp: new Date().toISOString(),
      });
    }

    // 3. Custom browser event for external listeners
    window.dispatchEvent(
      new CustomEvent('app_analytics_event', {
        detail: { eventName, params },
      })
    );
  } catch {
    // Fail silently in development/test environments
  }
};

export const trackPhoneClick = (source: string) => {
  trackEvent('phone_call_click', { source });
};

export const trackWhatsAppClick = (source: string) => {
  trackEvent('whatsapp_click', { source });
};

export const trackFormSubmit = (serviceType: string, propertyType: string) => {
  trackEvent('service_form_submit', { serviceType, propertyType });
};

export const trackCTAClick = (ctaLabel: string, location: string) => {
  trackEvent('cta_button_click', { ctaLabel, location });
};

export const trackServiceModalView = (serviceName: string) => {
  trackEvent('service_modal_open', { serviceName });
};
