export interface Service {
  id: number;
  name: string;
  description: string;
  short_description: string;
  price: number;
  duration: string;
  image: string;
  features: string[];
  sort_order: number;
  active: boolean;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  sort_order: number;
  active: boolean;
  created_at: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface CompanyInfo {
  company_name: string;
  address_line1: string;
  address_line2?: string;
  postal_code: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  support_email?: string;
  website?: string;
  opening_hours?: {
    [key: string]: string; // z.B. "monday": "09:00-18:00"
  };
  social_links?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface TenantConfig {
  contact: CompanyInfo;
  smtp?: {
    host: string;
    port: number;
    username: string;
    encryption: string;
    from_email: string;
    from_name: string;
  };
  tenant?: {
    id: number;
    name: string;
    domain: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
