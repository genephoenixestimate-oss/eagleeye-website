import acCleaningImg from '../assets/images/ac_cleaning_service_1790541897816.webp';
import heroImg from '../assets/images/hero_technician_service_1790541850397.webp';
import aboutImg from '../assets/images/about_team_van_1790541867632.webp';
import electricalImg from '../assets/images/electrical_panel_showcase_1790541884014.webp';

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeLabel: string;
  afterLabel: string;
  beforeDetails: string;
  afterDetails: string;
  metric: string;
  metricLabel: string;
  beforeImage: string;
  afterImage: string;
}

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: 'ac-cleaning',
    title: 'AC Evaporator & Condenser Coil Deep Clean',
    category: 'HVAC Maintenance',
    description: 'Years of dust, pet dander, and oxidized residue choked the aluminum cooling fins, driving up compressor amperage and reducing cooling capacity.',
    beforeLabel: 'Before: Heavy Microbial & Grime Buildup',
    afterLabel: 'After: Restored Airflow & Sanitized Fins',
    beforeDetails: 'Restricted airflow (310 CFM), 24°F temperature split variance, musty indoor odor.',
    afterDetails: 'Unrestricted airflow (440 CFM), pristine metallic fins, fresh odor-free delivery.',
    metric: '+35%',
    metricLabel: 'Airflow Restoration',
    beforeImage: acCleaningImg,
    afterImage: heroImg
  },
  {
    id: 'ac-repair',
    title: 'Central AC Compressor & Refrigerant Restoration',
    category: 'HVAC Repair',
    description: 'Compressor thermal overload switch kept shutting down due to low refrigerant pressure and a blown 45/5 MFD dual run capacitor.',
    beforeLabel: 'Before: System Lockout & Warm Air Blow',
    afterLabel: 'After: Balanced Pressures & Crisp 56°F Supply',
    beforeDetails: 'System cycling every 4 minutes, drawing 28 Amps, indoor temperature hovering at 82°F.',
    afterDetails: 'Smooth steady run at 13.8 Amps, subcooling within manufacturer target, rapid 68°F pull-down.',
    metric: '100%',
    metricLabel: 'Operational Recovery',
    beforeImage: aboutImg,
    afterImage: heroImg
  },
  {
    id: 'electrical-repair',
    title: 'Electrical Service Panel & Circuit Rewiring',
    category: 'Electrical Safety',
    description: 'A crowded 1980s 100A panel with double-tapped breakers and overheated neutral bars was upgraded to an organized 200A service with whole-home surge protection.',
    beforeLabel: 'Before: Hazardous Crowded 100A Panel',
    afterLabel: 'After: Code-Compliant 200A Clean Distribution',
    beforeDetails: 'Charred breaker tabs, nuisance trips during stove/dryer simultaneous use, no surge suppressor.',
    afterDetails: 'Evenly balanced phase distribution, clean labeled arc-fault AFCI breakers, Type 2 SPD surge protection.',
    metric: '200A',
    metricLabel: 'Full Modernized Capacity',
    beforeImage: electricalImg,
    afterImage: electricalImg
  },
  {
    id: 'lighting-upgrade',
    title: 'Commercial Facility LED Architectural Retrofit',
    category: 'Commercial Electrical',
    description: 'Replaced buzzing, yellow fluorescent T12 troffers with sleek dimmable 4000K architectural LED panels with occupancy sensing.',
    beforeLabel: 'Before: Uneven 3000K Fluorescent Fixtures',
    afterLabel: 'After: High-CRI 4000K Uniform LED Illumination',
    beforeDetails: 'Flickering ballasts, hot ceiling voids, poor color rendering index (65 CRI).',
    afterDetails: 'Daylight-balanced 92 CRI output, automated step-dimming, zero ballast hum.',
    metric: '92 CRI',
    metricLabel: 'High Visual Clarity',
    beforeImage: heroImg,
    afterImage: electricalImg
  }
];
