import heroImg from '../assets/images/hero_technician_service_1790541850397.webp';
import heroThumb from '../assets/images/hero_technician_service_1790541850397_thumb.webp';
import aboutImg from '../assets/images/about_team_van_1790541867632.webp';
import aboutThumb from '../assets/images/about_team_van_1790541867632_thumb.webp';
import acCleaningImg from '../assets/images/ac_cleaning_service_1790541897816.webp';
import acCleaningThumb from '../assets/images/ac_cleaning_service_1790541897816_thumb.webp';
import electricalImg from '../assets/images/electrical_panel_showcase_1790541884014.webp';
import electricalThumb from '../assets/images/electrical_panel_showcase_1790541884014_thumb.webp';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hvac' | 'electrical';
  subcategory: 'AC Installation' | 'AC Cleaning' | 'Commercial' | 'Residential' | 'Electrical';
  tags: string[];
  description: string;
  image: string;
  thumb: string;
  location: string;
  completedDate: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Multi-Zone Inverter Split AC Installation',
    category: 'hvac',
    subcategory: 'AC Installation',
    tags: ['HVAC', 'AC Installation', 'Residential'],
    description: 'Precision four-head ductless heat pump system installed in a modern residence with concealed architectural refrigerant trunking.',
    image: heroImg,
    thumb: heroThumb,
    location: 'Model Colony, Lahore',
    completedDate: 'Completed Aug 2026'
  },
  {
    id: 'g-2',
    title: 'Main Service Panel Overhaul & Surge Protection',
    category: 'electrical',
    subcategory: 'Electrical',
    tags: ['Electrical', 'Residential'],
    description: 'Complete replacement of obsolete breaker box with modern distribution panel, breaker protection, and dedicated AC circuits.',
    image: electricalImg,
    thumb: electricalThumb,
    location: 'Walton Road, Lahore',
    completedDate: 'Completed Jul 2026'
  },
  {
    id: 'g-3',
    title: 'Commercial Office Packaged Rooftop Unit Service',
    category: 'hvac',
    subcategory: 'Commercial',
    tags: ['HVAC', 'Commercial'],
    description: 'Seasonal multi-unit economizer testing, motor belt alignment, and digital airflow commissioning on a 25-ton rooftop unit.',
    image: aboutImg,
    thumb: aboutThumb,
    location: 'Gulberg III, Lahore',
    completedDate: 'Completed Sep 2026'
  },
  {
    id: 'g-4',
    title: 'Precision Evaporator Hydro-Cleaning & Sanitize',
    category: 'hvac',
    subcategory: 'AC Cleaning',
    tags: ['HVAC', 'AC Cleaning', 'Residential'],
    description: 'Deep pressurized coil wash eliminating dust, pet hair, and microbial mold spores from indoor air handler assembly.',
    image: acCleaningImg,
    thumb: acCleaningThumb,
    location: 'DHA Phase 5, Lahore',
    completedDate: 'Completed Aug 2026'
  },
  {
    id: 'g-5',
    title: 'Commercial Warehouse Three-Phase Distribution',
    category: 'electrical',
    subcategory: 'Commercial',
    tags: ['Electrical', 'Commercial'],
    description: '400V 3-phase conduit runs, step-down transformers, and heavy equipment disconnects for a distribution warehouse.',
    image: electricalImg,
    thumb: electricalThumb,
    location: 'Ferozepur Road, Lahore',
    completedDate: 'Completed Jun 2026'
  },
  {
    id: 'g-6',
    title: 'Residential High-Efficiency Variable Speed Heat Pump',
    category: 'hvac',
    subcategory: 'AC Installation',
    tags: ['HVAC', 'AC Installation', 'Residential'],
    description: 'Ultra-quiet energy-saving inverter dual-fuel split system replacement with smart modulating thermostat integration.',
    image: heroImg,
    thumb: heroThumb,
    location: 'Lahore Cantt',
    completedDate: 'Completed May 2026'
  }
];
