// Types compartidos para toda la aplicación

export interface Result {
  name: string;
  age: number;
  goal: string;
  time: string;
  beforeImage: string;
  afterImage: string;
  quote: string;
  metrics: Record<string, string>;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string | null;
  result: string;
}

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  icon: React.ReactNode;
  features: string[];
  highlight: boolean;
}

export interface Guarantee {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Credential {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

