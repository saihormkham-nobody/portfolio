export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface TechItem {
  name: string;
  icon: string; // path to SVG in public/icons/
}

export interface TechCategory {
  category: string;
  items: TechItem[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  status?: string;
  achievements?: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
