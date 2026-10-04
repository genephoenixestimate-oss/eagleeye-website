import heroImg from '../assets/images/hero_technician_service_1790541850397.webp';
import heroThumbImg from '../assets/images/hero_technician_service_1790541850397_thumb.webp';
import aboutImg from '../assets/images/about_team_van_1790541867632.webp';
import aboutThumbImg from '../assets/images/about_team_van_1790541867632_thumb.webp';
import electricalImg from '../assets/images/electrical_panel_showcase_1790541884014.webp';
import electricalThumbImg from '../assets/images/electrical_panel_showcase_1790541884014_thumb.webp';
import acCleaningImg from '../assets/images/ac_cleaning_service_1790541897816.webp';
import acCleaningThumbImg from '../assets/images/ac_cleaning_service_1790541897816_thumb.webp';

export interface CompanyConfig {
  name: string;
  shortName: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  emergencyPhone: string;
  emergencyPhoneDisplay: string;
  email: string;
  address: string;
  cityStateZip: string;
  hoursWeekday: string;
  hoursWeekend: string;
  hoursEmergency: string;
  whatsappUrl: string;
  trust: {
    licenses: string[];
    certifications: string[];
    insurance: string;
    brandsServed: string[];
    guarantees: string[];
    warranty: string;
  };
  stats: {
    value: string;
    number: number;
    suffix: string;
    label: string;
    description: string;
  }[];
  images: {
    hero: string;
    heroThumb?: string;
    about: string;
    aboutThumb?: string;
    electrical: string;
    electricalThumb?: string;
    acCleaning: string;
    acCleaningThumb?: string;
  };
}

export const COMPANY_CONFIG: CompanyConfig = {
  name: "Eagle Eye",
  shortName: "Eagle Eye",
  tagline: "Comfort, Cooling & Electrical Solutions You Can Rely On",
  phone: "+923286771816",
  phoneDisplay: "0328 6771816",
  emergencyPhone: "+923286771816",
  emergencyPhoneDisplay: "0328 6771816",
  email: "hamid.eagleeyehvac@gmail.com",
  address: "Model Colony, Walton Road",
  cityStateZip: "Lahore, Pakistan",
  hoursWeekday: "Mon – Sat: 8:00 AM – 8:00 PM",
  hoursWeekend: "Sunday: 9:00 AM – 6:00 PM",
  hoursEmergency: "24/7 Rapid Emergency Dispatch",
  whatsappUrl: "https://wa.me/923286771816?text=Hello%20Eagle%20Eye%20HVAC%2C%20I%20would%20like%20to%20inquire%20about%20HVAC%20or%20Electrical%20service.",
  trust: {
    licenses: ["HVAC Contractor Certified", "Master Electrician Certified"],
    certifications: ["Refrigerant Recovery Compliance", "High-Voltage Safety Certified"],
    insurance: "Fully Licensed & Insured Field Technicians",
    brandsServed: ["Gree", "Dawlance", "Haier", "Kenwood", "Pel", "Orient", "Mitsubishi", "TCL"],
    guarantees: ["100% Satisfaction Guarantee", "Transparent Upfront Estimates", "Clean Workspace Guarantee"],
    warranty: "90-Day Labor & Service Warranty on all repairs"
  },
  stats: [
    {
      value: "15+",
      number: 15,
      suffix: "+",
      label: "Years Experience",
      description: "Dedicated residential and commercial trade experience"
    },
    {
      value: "5,000+",
      number: 5000,
      suffix: "+",
      label: "Services Completed",
      description: "System installations, rapid repairs, and seasonal tune-ups"
    },
    {
      value: "98%",
      number: 98,
      suffix: "%",
      label: "Customer Satisfaction",
      description: "Consistently rated 5-stars by local property owners"
    },
    {
      value: "24/7",
      number: 24,
      suffix: "/7",
      label: "Service Availability",
      description: "Rapid technician dispatch for urgent HVAC and electrical calls"
    }
  ],
  images: {
    hero: heroImg,
    heroThumb: heroThumbImg,
    about: aboutImg,
    aboutThumb: aboutThumbImg,
    electrical: electricalImg,
    electricalThumb: electricalThumbImg,
    acCleaning: acCleaningImg,
    acCleaningThumb: acCleaningThumbImg
  }
};
