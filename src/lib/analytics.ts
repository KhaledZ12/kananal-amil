// Analytics.ts

// Declare global gtag and dataLayer
declare global {
  interface Window {
    gtag?: (...args: [string, string, Record<string, unknown>?]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

// Utility to safely call gtag
const gtagSafe = (...args: [string, string, Record<string, unknown>?]) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag(...args);
  }
};

// Track button clicks (Call / WhatsApp)
export const trackButtonClick = (
  buttonType: "call" | "whatsapp",
  phoneNumber: string,
  location: string
) => {
  // Google Analytics 4 Event
  gtagSafe("event", "click", {
    event_category: "Contact",
    event_label: `${buttonType}_${phoneNumber}`,
    value: 1,
    button_type: buttonType,
    phone_number: phoneNumber,
    location,
  });

  // Google Ads Conversion Tracking
  gtagSafe("event", "conversion", {
    send_to: "AW-CONVERSION_ID/CONVERSION_LABEL", // TODO: Replace with actual conversion ID
    event_category: "Contact",
    event_label: `${buttonType}_${phoneNumber}`,
    value: 1,
  });

  // DataLayer push for GTM
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: "button_click",
      button_type: buttonType,
      phone_number: phoneNumber,
      location,
      timestamp: new Date().toISOString(),
    });
  }
};

// Track page views
export const trackPageView = (pageName: string, pagePath: string) => {
  gtagSafe("config", "GA_MEASUREMENT_ID", {
    page_title: pageName,
    page_location: `https://kanan-alamil.com${pagePath}`,
    custom_map: {
      dimension1: "domestic_worker_transfer",
      dimension2: "saudi_arabia",
    },
  });
};

// Track form submissions
export const trackFormSubmission = (formType: string, success: boolean) => {
  gtagSafe("event", "form_submit", {
    event_category: "Lead",
    event_label: formType,
    value: success ? 1 : 0,
  });
};

// Track service interest
export const trackServiceInterest = (serviceType: string) => {
  gtagSafe("event", "service_interest", {
    event_category: "Engagement",
    event_label: serviceType,
    value: 1,
  });
};
