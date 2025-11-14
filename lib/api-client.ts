/**
 * API Client für die Integration mit dem Backend
 *
 * Verwendung:
 * 1. Kopiere .env.example zu .env.local
 * 2. Füge deine API_URL und TENANT_API_KEY ein
 * 3. Ersetze die Mock-API-Routes mit fetchServices(), fetchFAQs(), etc.
 */

const API_URL = process.env.API_URL || 'http://portal.digitalssolutions.de';
const TENANT_API_KEY = process.env.TENANT_API_KEY;
const API_EMAIL = process.env.API_EMAIL;
const API_PASSWORD = process.env.API_PASSWORD;

interface ApiConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  headers?: Record<string, string>;
}

/**
 * Login und JWT Token abrufen
 *
 * Verwendung:
 * ```
 * const token = await login('info@michelclean.de', 'password');
 * // Token in .env.local speichern oder direkt verwenden
 * ```
 */
export async function login(email?: string, password?: string): Promise<string> {
  const response = await fetch(`${API_URL}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email || API_EMAIL,
      password: password || API_PASSWORD,
    }),
  });

  if (!response.ok) {
    throw new Error('Login fehlgeschlagen. Bitte Credentials überprüfen.');
  }

  const data = await response.json();
  return data.token; // JWT Token zurückgeben
}

/**
 * Basis-API-Call Funktion
 */
async function apiCall<T>(endpoint: string, config: ApiConfig = {}): Promise<T> {
  const url = `${API_URL}${endpoint}${endpoint.includes('?') ? '&' : '?'}tenant_key=${TENANT_API_KEY}`;

  const response = await fetch(url, {
    method: config.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...config.headers,
    },
    body: config.body ? JSON.stringify(config.body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

/**
 * Services von der API laden
 *
 * Beispiel-Integration in app/api/services/route.ts:
 * ```
 * import { fetchServices } from '@/lib/api-client';
 *
 * export async function GET() {
 *   try {
 *     const services = await fetchServices();
 *     return NextResponse.json({ success: true, data: services });
 *   } catch (error) {
 *     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
 *   }
 * }
 * ```
 */
export async function fetchServices() {
  const response = await apiCall<{ services: any[] }>('/api/services');
  return response.services;
}

/**
 * FAQs von der API laden
 *
 * Beispiel-Integration in app/api/faqs/route.ts:
 * ```
 * const response = await fetch(`${process.env.API_URL}/api/faq?tenant_key=${process.env.TENANT_API_KEY}`);
 * const data = await response.json();
 * return NextResponse.json({
 *   success: data.success,
 *   faqs: data.faqs,
 *   total: data.total
 * });
 * ```
 */
export async function fetchFAQs(search?: string) {
  const url = search
    ? `/api/faq?tenant_key=${TENANT_API_KEY}&search=${encodeURIComponent(search)}`
    : `/api/faq?tenant_key=${TENANT_API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Fehler beim Laden der FAQs');
  }

  const data = await response.json();
  return {
    faqs: data.faqs,
    total: data.total
  };
}

/**
 * Company Info von der API laden
 *
 * Beispiel-Integration in app/api/company-info/route.ts:
 * ```
 * const response = await fetch('http://portal.digitalssolutions.de/api/config', {
 *   method: 'GET',
 *   headers: {
 *     'Authorization': `Bearer ${process.env.JWT_TOKEN}`,
 *     'Content-Type': 'application/json',
 *   },
 * });
 * const config = await response.json();
 * return NextResponse.json({
 *   success: true,
 *   data: config.contact
 * });
 * ```
 */
export async function fetchCompanyInfo(token?: string) {
  const response = await fetch('http://portal.digitalssolutions.de/api/config', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token || process.env.JWT_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Fehler beim Laden der Company Info');
  }

  const config = await response.json();
  return config.contact;
}

/**
 * Kontaktformular absenden
 *
 * Beispiel-Integration in app/api/contact/route.ts:
 * ```
 * const response = await fetch('http://portal.digitalssolutions.de/api/contact/submit', {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify({
 *     tenant_key: process.env.TENANT_API_KEY,
 *     name: data.name,
 *     email: data.email,
 *     phone: data.phone || '',
 *     subject: data.subject,
 *     message: data.message,
 *   }),
 * });
 * ```
 */
export async function submitContactForm(data: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  const response = await fetch('http://portal.digitalssolutions.de/api/contact/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      tenant_key: TENANT_API_KEY,
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      subject: data.subject,
      message: data.message,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Fehler beim Senden der Nachricht');
  }

  return response.json();
}

export default {
  fetchServices,
  fetchFAQs,
  fetchCompanyInfo,
  submitContactForm,
};
