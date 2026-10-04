export interface ServiceArea {
  id: string;
  name: string;
  countyOrZone: string;
  tagline: string;
  dispatchTime: string;
  zipCodes: string[];
  popularServices: string[];
  propertyTypes: string[];
  emergencyAvailable: boolean;
  localOffice: string;
  description: string;
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    id: 'walton-model-colony',
    name: 'Walton Road & Model Colony',
    countyOrZone: 'Central Core',
    tagline: 'Residential communities, commercial markets, and Walton Road surroundings.',
    dispatchTime: '20–30 mins',
    zipCodes: ['54792', '54000', '54810', '54700'],
    popularServices: [
      'Emergency Split AC Repair',
      'Inverter AC Installation & Gas Refill',
      'Main Breaker Panel Upgrade & Wiring',
      'Short Circuit Diagnosis & Repair'
    ],
    propertyTypes: ['Single Family Homes', 'Commercial Shops', 'Plazas', 'Apartments'],
    emergencyAvailable: true,
    localOffice: 'Model Colony, Walton Road, Lahore',
    description: 'Our primary headquarters and main dispatch unit are located right on Walton Road in Model Colony. We provide the fastest turnaround for emergency AC breakdown calls, capacitor replacements, and urgent circuit repairs.'
  },
  {
    id: 'dha-cantt',
    name: 'DHA Phases & Lahore Cantt',
    countyOrZone: 'East Region',
    tagline: 'Modern residential houses, luxury bungalows, and upscale commercial sectors.',
    dispatchTime: '25–40 mins',
    zipCodes: ['54792', '54810', '54000', '54800'],
    popularServices: [
      'Multi-Zone Inverter AC Servicing',
      'Deep Coil Steam Cleaning & Chemical Wash',
      'Generator ATS Automatic Transfer Switch Wiring',
      'Architectural LED Lighting Installation'
    ],
    propertyTypes: ['Luxury Bungalows', 'Corporate Offices', 'Residential Villas'],
    emergencyAvailable: true,
    localOffice: 'DHA Phase 5 & Cantt Mobile Unit',
    description: 'Serving all phases of DHA and Lahore Cantt with certified technicians, specialized coil cleaning equipment, and high-efficiency inverter heat pump maintenance.'
  },
  {
    id: 'gulberg-commercial',
    name: 'Gulberg & Main Boulevard',
    countyOrZone: 'Commercial Hub',
    tagline: 'Commercial towers, retail shopping malls, restaurants, and medical centers.',
    dispatchTime: '25–40 mins',
    zipCodes: ['54660', '54600', '54000'],
    popularServices: [
      'Commercial Packaged AC Units & Chillers',
      'Three-Phase Industrial Electrical Distribution',
      'Exhaust & Kitchen Ventilation Systems',
      'Preventative Corporate Maintenance Contracts'
    ],
    propertyTypes: ['Corporate Towers', 'Retail Storefronts', 'Hospitals', 'Restaurants'],
    emergencyAvailable: true,
    localOffice: 'Gulberg Main Boulevard Technical Desk',
    description: 'Providing commercial-grade heating, cooling, and three-phase electrical maintenance for business establishments, offices, and restaurants across Gulberg.'
  },
  {
    id: 'ferozepur-industrial',
    name: 'Ferozepur Road & Industrial Estates',
    countyOrZone: 'Industrial & South Zone',
    tagline: 'Manufacturing workshops, logistics warehouses, and residential colonies.',
    dispatchTime: '30–45 mins',
    zipCodes: ['54700', '54760', '54780'],
    popularServices: [
      'High-Power Industrial Conduit & Wiring',
      'Heavy Equipment Disconnects & Panels',
      'Rooftop HVAC Servicing & Maintenance',
      'Phase Failure & Surge Protection'
    ],
    propertyTypes: ['Industrial Plants', 'Warehouses', 'Workshops', 'Commercial Complexes'],
    emergencyAvailable: true,
    localOffice: 'Ferozepur Road Industrial Logistics Depot',
    description: 'Equipped for heavy-duty commercial voltage lines, transformer connections, industrial ventilation, and large capacity AC servicing across Ferozepur Road.'
  }
];
