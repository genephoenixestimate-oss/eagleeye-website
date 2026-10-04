import heroThumb from '../assets/images/hero_technician_service_1790541850397_thumb.webp';
import aboutThumb from '../assets/images/about_team_van_1790541867632_thumb.webp';
import acCleaningThumb from '../assets/images/ac_cleaning_service_1790541897816_thumb.webp';
import electricalThumb from '../assets/images/electrical_panel_showcase_1790541884014_thumb.webp';

export interface ServiceItem {
  id: string;
  category: 'hvac' | 'electrical';
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  badge?: string;
  features: string[];
  specs: { label: string; value: string }[];
  image?: string;
}

export const HVAC_SERVICES: ServiceItem[] = [
  {
    id: 'ac-installation',
    category: 'hvac',
    title: 'AC Installation',
    shortDesc: 'Precision sizing, split AC systems, central cooling, and complete commercial HVAC setups.',
    fullDesc: 'We provide engineered cooling solutions tailored to your square footage, insulation, and airflow requirements. We install high-SEER2 systems that reduce monthly operating costs.',
    icon: 'Snowflake',
    badge: 'High Efficiency',
    features: [
      'Split AC installation',
      'Central AC installation',
      'Commercial systems',
      'New system setup'
    ],
    specs: [
      { label: 'System Types', value: 'Ductless, Central, VRF' },
      { label: 'Efficiency Range', value: 'Up to 24+ SEER2' },
      { label: 'Turnaround', value: '1–2 business days' }
    ]
  },
  {
    id: 'ac-repair',
    category: 'hvac',
    title: 'AC Repair',
    shortDesc: 'Rapid troubleshooting for refrigerant leaks, compressor failures, faulty wiring, and weak cooling.',
    fullDesc: 'When your air conditioner fails in peak heat, our service vans arrive stocked with certified diagnostic gauges and replacement parts to restore cooling fast.',
    icon: 'Wrench',
    badge: 'Same-Day Dispatch',
    features: [
      'Cooling problems',
      'Refrigerant issues',
      'Compressor problems',
      'Thermostat issues',
      'Electrical faults'
    ],
    specs: [
      { label: 'Diagnostics', value: 'Digital manifold & thermography' },
      { label: 'Response', value: 'Priority rapid dispatch' },
      { label: 'Warranty', value: 'Standard parts & labor' }
    ]
  },
  {
    id: 'ac-maintenance',
    category: 'hvac',
    title: 'AC Maintenance',
    shortDesc: 'Preventive tune-ups, capacitor testing, airflow measurement, and system efficiency verification.',
    fullDesc: 'Annual maintenance prolongs compressor lifespan, prevents unexpected mid-summer breakdowns, and ensures your air filtration operates at peak cleanliness.',
    icon: 'ShieldCheck',
    badge: 'Seasonal Tune-Up',
    features: [
      'Preventive maintenance',
      'System inspection',
      'Performance testing',
      'Filter replacement',
      'Efficiency checks'
    ],
    specs: [
      { label: 'Checklist', value: '26-point comprehensive check' },
      { label: 'Frequency', value: 'Bi-annual recommended' },
      { label: 'Savings', value: 'Restores baseline efficiency' }
    ]
  },
  {
    id: 'ac-cleaning',
    category: 'hvac',
    title: 'AC Cleaning',
    shortDesc: 'Deep coil steam cleaning, sanitization, drain line flushing, and blower wheel decontamination.',
    fullDesc: 'Over time, evaporator and condenser coils accumulate heavy grime and mold that restrict airflow and spike energy usage. Our specialized wash restores thermal transfer.',
    icon: 'Sparkles',
    badge: 'Deep Sanitize',
    features: [
      'Indoor unit cleaning',
      'Outdoor unit cleaning',
      'Coil cleaning',
      'Filter cleaning',
      'Drain cleaning'
    ],
    specs: [
      { label: 'Method', value: 'Biodegradable low-pressure wash' },
      { label: 'Coil Care', value: 'Fin straightening included' },
      { label: 'Air Quality', value: 'Anti-microbial treatment' }
    ]
  },
  {
    id: 'heating-services',
    category: 'hvac',
    title: 'Heating Services',
    shortDesc: 'Heat pump repair, electric furnace maintenance, emergency heating restoration, and safety checks.',
    fullDesc: 'Reliable heating keeps your property safe when temperatures plunge. We service heat pumps, ducted air handlers, dual-fuel systems, and commercial heating units.',
    icon: 'Flame',
    features: [
      'Heating installation',
      'Heating repair',
      'Heating maintenance',
      'System inspection'
    ],
    specs: [
      { label: 'Coverage', value: 'Heat pumps, furnaces & hydronics' },
      { label: 'Safety Check', value: 'Carbon monoxide & limit switch' },
      { label: 'Emergency', value: 'Winter priority response' }
    ]
  },
  {
    id: 'hvac-replacement',
    category: 'hvac',
    title: 'HVAC Replacement',
    shortDesc: 'Seamless replacement of aging, noisy, or inefficient equipment with modern inverter heat pumps.',
    fullDesc: 'If your existing system is older than 10–12 years or requires recurring costly refrigerant, our engineered replacement upgrades comfort while reducing noise.',
    icon: 'RefreshCw',
    badge: 'Eco Upgrade',
    features: [
      'Old system replacement',
      'System upgrades',
      'Energy-efficient equipment',
      'Equipment replacement'
    ],
    specs: [
      { label: 'Rebates', value: 'Eligible for clean energy credits' },
      { label: 'Disposal', value: 'Eco-certified refrigerant recovery' },
      { label: 'Custom Sizing', value: 'Manual J load calculation' }
    ]
  },
  {
    id: 'ductwork',
    category: 'hvac',
    title: 'Ductwork',
    shortDesc: 'Custom sheet metal fabrication, duct sealing, leak detection, and airflow balancing.',
    fullDesc: 'Leaking ducts lose up to 30% of conditioned air into unconditioned attics and crawlspaces. We repair damaged flex duct, seal sheet metal seams, and balance static pressure.',
    icon: 'Wind',
    features: [
      'Duct installation',
      'Duct repair',
      'Duct cleaning',
      'Airflow improvement'
    ],
    specs: [
      { label: 'Pressure Test', value: 'Blower door / duct blaster' },
      { label: 'Insulation', value: 'R-8 acoustic flex & wrap' },
      { label: 'Balance', value: 'CFM register balancing' }
    ]
  },
  {
    id: 'ventilation',
    category: 'hvac',
    title: 'Ventilation',
    shortDesc: 'Whole-house ventilation, attic exhaust fans, HRVs/ERVs, and commercial air exchange systems.',
    fullDesc: 'Modern tight homes require dedicated fresh air introduction to expel indoor VOCs, excess moisture, and allergens while preserving conditioned indoor temperatures.',
    icon: 'Fan',
    features: [
      'Exhaust systems',
      'Fresh-air systems',
      'Ventilation installation',
      'Airflow solutions'
    ],
    specs: [
      { label: 'Technology', value: 'HRV / ERV energy recovery' },
      { label: 'Controls', value: 'Automated humidity sensors' },
      { label: 'Building Code', value: 'ASHRAE 62.2 compliant' }
    ]
  }
];

export const ELECTRICAL_SERVICES: ServiceItem[] = [
  {
    id: 'electrical-wiring',
    category: 'electrical',
    title: 'Electrical Wiring',
    shortDesc: 'New construction circuits, complete copper rewiring, knob-and-tube abatement, and commercial runs.',
    fullDesc: 'Our licensed electrical specialists route safe, code-compliant branch circuits, dedicated appliance lines, and modern grounded wiring systems for home and facility.',
    icon: 'Zap',
    badge: 'Code Compliant',
    features: [
      'New wiring',
      'Rewiring',
      'Residential wiring',
      'Commercial wiring'
    ],
    specs: [
      { label: 'Conductors', value: '100% Solid/Stranded Copper' },
      { label: 'Compliance', value: 'NEC 2023/2026 local codes' },
      { label: 'Protection', value: 'AFCI / GFCI integration' }
    ]
  },
  {
    id: 'electrical-repair',
    category: 'electrical',
    title: 'Electrical Repair',
    shortDesc: 'Rapid troubleshooting for tripped breakers, flickering lights, dead outlets, and short circuits.',
    fullDesc: 'Electrical faults present genuine safety hazards. We arrive with thermal imaging and circuit analyzers to locate hidden shorts, loose neutral connections, and faulty switches.',
    icon: 'Activity',
    badge: 'Emergency Diagnostics',
    features: [
      'Fault diagnosis',
      'Short-circuit troubleshooting',
      'Power issues',
      'Electrical troubleshooting'
    ],
    specs: [
      { label: 'Testing Tools', value: 'FLIR thermal & circuit tracers' },
      { label: 'Safety', value: 'Lockout/tagout protocol' },
      { label: 'Response', value: 'Immediate urgent dispatch' }
    ]
  },
  {
    id: 'lighting-installation',
    category: 'electrical',
    title: 'Lighting Installation',
    shortDesc: 'Architectural recessed LED pots, security floods, landscape accents, and high-bay commercial fixtures.',
    fullDesc: 'Elevate functionality and curb appeal with tailored lighting designs. We install dimmable LED arrays, smart lighting controllers, outdoor timer switches, and motion floodlights.',
    icon: 'Sun',
    features: [
      'Indoor lighting',
      'Outdoor lighting',
      'LED lighting',
      'Commercial lighting'
    ],
    specs: [
      { label: 'Lumen Output', value: 'Precision CRI 90+ LEDs' },
      { label: 'Automation', value: 'Smart hub / Lutron compatible' },
      { label: 'Outdoor Rating', value: 'IP65 waterproof standards' }
    ]
  },
  {
    id: 'electrical-panel-services',
    category: 'electrical',
    title: 'Electrical Panel Services',
    shortDesc: '100A to 200A/400A service upgrades, subpanel installation, breaker replacements, and surge protectors.',
    fullDesc: 'Modern EV chargers, heat pumps, and induction ranges demand robust power. We upgrade outdated fuse boxes and split-bus panels to clean, high-capacity breaker panels.',
    icon: 'Cpu',
    badge: 'Heavy Duty',
    features: [
      'Panel installation',
      'Panel upgrades',
      'Breaker replacement',
      'Electrical inspections'
    ],
    specs: [
      { label: 'Busbar Capacity', value: '200A – 400A commercial grade' },
      { label: 'Surge Protection', value: 'Whole-home Type 2 SPD' },
      { label: 'Permitting', value: 'Municipal permits handled' }
    ]
  },
  {
    id: 'outlets-switches',
    category: 'electrical',
    title: 'Outlets & Switches',
    shortDesc: 'GFCI wet-area outlets, USB-C smart receptacles, 240V dryer/EV plugs, and decorative rocker switches.',
    fullDesc: 'Replace worn, loose, or ungrounded outlets with tamper-resistant GFCI and AFCI receptacles to ensure safety around water and prevent electrical arching.',
    icon: 'Power',
    features: [
      'Outlet installation',
      'Outlet replacement',
      'Switch replacement',
      'GFCI services'
    ],
    specs: [
      { label: 'Standards', value: 'Tamper-resistant TR rated' },
      { label: 'Specialty Plugs', value: 'NEMA 14-50 240V for EV' },
      { label: 'Dimmers', value: 'Zero-hum magnetic low voltage' }
    ]
  },
  {
    id: 'generator-backup',
    category: 'electrical',
    title: 'Generator & Backup Power',
    shortDesc: 'Whole-house standby generators, manual transfer switch wiring, and battery storage integration.',
    fullDesc: 'Never lose climate control, medical equipment, or refrigerated food during grid blackouts. We wire automatic transfer switches (ATS) that turn on power in seconds.',
    icon: 'Radio',
    badge: 'Storm Ready',
    features: [
      'Generator wiring',
      'Backup power',
      'Transfer switches',
      'Electrical connections'
    ],
    specs: [
      { label: 'Capacity', value: '12kW – 26kW whole home' },
      { label: 'Switching', value: 'Automatic transfer within 10s' },
      { label: 'Fuel Options', value: 'Natural gas or propane lines' }
    ]
  },
  {
    id: 'safety-inspection',
    category: 'electrical',
    title: 'Electrical Safety Inspection',
    shortDesc: 'Comprehensive real estate checks, panel load calculations, grounding verification, and code reviews.',
    fullDesc: 'Whether purchasing a new property or preparing for a major remodel, our multi-point inspection identifies hidden fire hazards, overloaded neutrals, and grounding deficits.',
    icon: 'CheckCircle2',
    features: [
      'Wiring inspection',
      'Panel inspection',
      'Electrical safety checks',
      'Preventive maintenance'
    ],
    specs: [
      { label: 'Report', value: 'Detailed digital inspection PDF' },
      { label: 'Grounding', value: 'Earth resistance testing' },
      { label: 'Insurance', value: 'Meets underwriter criteria' }
    ]
  },
  {
    id: 'commercial-electrical',
    category: 'electrical',
    title: 'Commercial Electrical',
    shortDesc: 'Three-phase electrical distribution, RTU rooftop disconnects, transformers, and tenant fit-outs.',
    fullDesc: 'We keep businesses running without disruption. From retail lighting and restaurant kitchen power to warehouse conduit runs and backup generators, our team handles commercial scale.',
    icon: 'Layers',
    badge: 'Commercial Grade',
    features: [
      'Commercial wiring',
      'Lighting',
      'HVAC electrical connections',
      'Maintenance',
      'Troubleshooting'
    ],
    specs: [
      { label: 'Voltage Support', value: '120/208V & 277/480V 3-Phase' },
      { label: 'Conduit', value: 'EMT, IMC & Rigid Steel' },
      { label: 'SLA', value: 'Dedicated commercial service' }
    ]
  }
];

export const HVAC_CAROUSEL_ITEMS = [
  {
    title: 'AC Installation',
    subtitle: 'Split & Central Systems',
    desc: 'High-efficiency cooling systems engineered for quiet operation and lower electricity consumption.',
    image: heroThumb,
    serviceId: 'ac-installation'
  },
  {
    title: 'AC Repair',
    subtitle: 'Urgent Cooling Recovery',
    desc: 'Fast diagnostics for compressors, refrigerant leaks, capacitors, and electronic thermostats.',
    image: aboutThumb,
    serviceId: 'ac-repair'
  },
  {
    title: 'AC Maintenance',
    subtitle: 'Seasonal Efficiency Check',
    desc: '26-point preventive tune-up to prevent mid-summer breakdowns and restore factory cooling performance.',
    image: acCleaningThumb,
    serviceId: 'ac-maintenance'
  },
  {
    title: 'AC Cleaning',
    subtitle: 'Deep Coil & Drain Wash',
    desc: 'Specialized low-pressure antimicrobial wash removing years of grime, debris, and odor from coils.',
    image: acCleaningThumb,
    serviceId: 'ac-cleaning'
  },
  {
    title: 'Heating Services',
    subtitle: 'Heat Pumps & Furnaces',
    desc: 'Dependable heating installations, emergency heating repairs, and annual heat exchanger inspections.',
    image: heroThumb,
    serviceId: 'heating-services'
  },
  {
    title: 'Ductwork Services',
    subtitle: 'Airflow & Sealing',
    desc: 'Custom duct fabrication, leak detection, and airflow balancing for even temperatures in every room.',
    image: aboutThumb,
    serviceId: 'ductwork'
  },
  {
    title: 'Ventilation',
    subtitle: 'Fresh-Air Systems & ERVs',
    desc: 'Balanced mechanical fresh-air ventilation, attic exhaust fans, and indoor air purification systems.',
    image: electricalThumb,
    serviceId: 'ventilation'
  },
  {
    title: 'Commercial HVAC',
    subtitle: 'Rooftop & Facility Units',
    desc: 'Industrial-grade heating and cooling solutions for offices, warehouses, retail stores, and restaurants.',
    image: heroThumb,
    serviceId: 'ac-installation'
  }
];
