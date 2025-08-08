export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  description: string;
  captcha: string;
  createdAt: Date;
}

export interface CareerForm {
  name: string;
  email: string;
  phone: string;
  skills: string[];
  experience: string;
  cvUrl: string;
  coverLetter: string;
  createdAt: Date;
}

export interface HomePageContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  aboutTitle: string;
  aboutDescription: string;
  companyAddress: string;
  companyPhone: string;
  companyEmail: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Expertise {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface User {
  uid: string;
  email: string;
  role: 'admin' | 'user';
}
