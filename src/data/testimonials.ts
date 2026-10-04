export interface Testimonial {
  id: string;
  name: string;
  role: string;
  type: 'Residential' | 'Commercial';
  location: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  initials: string;
}

// Structured customer reviews (editable placeholder data)
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'David Richardson',
    role: 'Homeowner',
    type: 'Residential',
    location: 'Walton Road, Lahore',
    rating: 5,
    date: 'August 2026',
    service: 'Inverter AC Installation & Circuit Setup',
    comment: 'Our central split AC stopped on a 42-degree Lahore summer afternoon. Eagle Eye dispatched a technician to Model Colony in under an hour. They diagnosed the issue clearly with upfront pricing. Within 24 hours, the crew installed an energy-efficient inverter unit. Outstanding workmanship.',
    initials: 'DR'
  },
  {
    id: 't-2',
    name: 'Elena Rostova',
    role: 'Facility Operations Manager',
    type: 'Commercial',
    location: 'Gulberg III Commercial Plaza, Lahore',
    rating: 5,
    date: 'July 2026',
    service: 'Commercial Rooftop HVAC & Disconnects',
    comment: 'Managing office suites requires strict temperature control and reliable electrical service. The Eagle Eye team manages our quarterly preventative maintenance and emergency electrical service. Their technicians are always in uniform, communicative, and punctual.',
    initials: 'ER'
  },
  {
    id: 't-3',
    name: 'Marcus & Sarah Chen',
    role: 'Homeowners',
    type: 'Residential',
    location: 'DHA Phase 5, Lahore',
    rating: 5,
    date: 'September 2026',
    service: 'Split AC Deep Cleaning & Breaker Wiring',
    comment: 'We booked the full coil deep-cleaning for three inverter split units, plus kitchen breaker rewiring. The technician brought drop cloths, wore shoe covers, and showed us before-and-after photos of the coils. Airflow is noticeably crisper and cooling is much faster.',
    initials: 'MC'
  },
  {
    id: 't-4',
    name: 'Robert Vance',
    role: 'Owner, Vance Logistics & Fleet',
    type: 'Commercial',
    location: 'Ferozepur Road Industrial Hub, Lahore',
    rating: 5,
    date: 'June 2026',
    service: 'Three-Phase Wiring & Exhaust Ventilation',
    comment: 'Eagle Eye wired our workshop bays and installed heavy-duty ventilation fans. Everything was completed on schedule, tested thoroughly, and the pricing was completely transparent from start to finish.',
    initials: 'RV'
  },
  {
    id: 't-5',
    name: 'Patricia Morales',
    role: 'Property Owner',
    type: 'Residential',
    location: 'Cantt & Model Colony, Lahore',
    rating: 5,
    date: 'May 2026',
    service: 'Emergency Electrical Troubleshooting',
    comment: 'Half of our home circuits tripped during a severe thunderstorm and wouldn’t reset. The on-call Eagle Eye electrician found a burnt bus connection and repaired the breaker within hours. Fair pricing and exceptional dedication to safety.',
    initials: 'PM'
  }
];
