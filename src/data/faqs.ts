export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'hvac' | 'electrical';
}

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How quickly can I schedule HVAC service?',
    answer: 'For standard service and preventative maintenance, appointments are generally available same-day or next-day. For urgent cooling failures, heating loss during freezing weather, or active electrical hazards, our emergency team provides expedited dispatch 24/7.',
    category: 'general'
  },
  {
    id: 'faq-2',
    question: 'Do you provide AC maintenance?',
    answer: 'Yes. We offer comprehensive multi-point maintenance tune-ups for central AC, mini-splits, and heat pumps. Our service includes testing electrical capacitors, cleaning drainage pans, checking refrigerant charge, inspecting coils, tightening terminals, and verifying thermostat calibration.',
    category: 'hvac'
  },
  {
    id: 'faq-3',
    question: 'Do you repair different types of AC systems?',
    answer: 'We service all major cooling configurations, including central ducted systems, ductless multi-zone mini-splits, inverter heat pumps, packaged rooftop units, and commercial VRF systems across all standard industry manufacturers.',
    category: 'hvac'
  },
  {
    id: 'faq-4',
    question: 'Do you provide electrical wiring?',
    answer: 'Yes. Our qualified electricians handle complete residential and commercial wiring. This includes new construction branch circuits, rewiring older properties, dedicated 240V circuits for appliances and EV chargers, subpanel feeds, and whole-building wiring overhauls.',
    category: 'electrical'
  },
  {
    id: 'faq-5',
    question: 'Do you provide commercial HVAC services?',
    answer: 'Yes. We support light commercial and industrial facilities, retail storefronts, office complexes, and restaurants. Services include rooftop packaged unit maintenance, economizer inspection, ventilation ductwork balancing, three-phase disconnects, and emergency commercial cooling.',
    category: 'hvac'
  },
  {
    id: 'faq-6',
    question: 'Do you provide electrical troubleshooting?',
    answer: 'Yes. We specialize in diagnostic electrical troubleshooting using digital thermal scanners, circuit tracers, and insulation resistance testers to safely locate short circuits, failing breakers, ground faults, flickering lights, and hot outlets.',
    category: 'electrical'
  },
  {
    id: 'faq-7',
    question: 'How often should an AC system be maintained?',
    answer: 'We recommend professional maintenance at least once per year—ideally in the spring before heavy cooling demand begins. For combined heating and cooling heat pump systems, bi-annual inspections (spring and autumn) deliver optimal efficiency and equipment longevity.',
    category: 'hvac'
  },
  {
    id: 'faq-8',
    question: 'Can you inspect electrical wiring?',
    answer: 'Yes. We conduct thorough electrical safety inspections for home buyers, property managers, insurance underwriters, and after severe storm events. We verify grounding integrity, AFCI/GFCI compliance, panel load calculations, and service mast connections.',
    category: 'electrical'
  },
  {
    id: 'faq-9',
    question: 'Do you provide installation and replacement?',
    answer: 'Yes. When repair is no longer cost-effective or an existing system is nearing the end of its useful service life, we provide turn-key installation for high-efficiency heat pumps, modern air handlers, ductless splits, and high-capacity electrical panels with municipal permitting included.',
    category: 'general'
  }
];
