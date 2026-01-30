import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
}

export interface Founder {
  name: string;
  role: string;
  description: string[];
  imageUrl: string;
  skills: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Value {
  title: string;
  description: string;
  icon: LucideIcon;
}