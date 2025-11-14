import { NextResponse } from 'next/server';
import type { TenantConfig } from '@/types';

// Simulierte Company Info im Backend-Format
const tenantConfig: TenantConfig = {
  contact: {
    company_name: 'MichelClean',
    address_line1: 'Bonhoefferstraße 20',
    address_line2: '',
    postal_code: '51061',
    city: 'Köln',
    country: 'Deutschland',
    phone: '0221 32022993',
    email: 'team@michelclean.de',
    support_email: 'team@michelclean.de',
    website: 'https://michelclean.de',
    opening_hours: {
      monday: '00:00-24:00',
      tuesday: '00:00-24:00',
      wednesday: '00:00-24:00',
      thursday: '00:00-24:00',
      friday: '00:00-24:00',
      saturday: '00:00-24:00',
      sunday: '00:00-24:00'
    },
    social_links: {
      facebook: 'https://facebook.com/michelclean',
      instagram: 'https://instagram.com/michelclean',
      linkedin: 'https://linkedin.com/company/michelclean'
    }
  },
  tenant: {
    id: 1,
    name: 'MichelClean',
    domain: 'michelclean.de'
  }
};

export async function GET(request: Request) {
  // Simuliere API-Verzögerung
  await new Promise(resolve => setTimeout(resolve, 100));

  // In Production würde hier die echte API mit JWT Token abgefragt:
  /*
  const token = request.headers.get('Authorization')?.replace('Bearer ', '');

  const response = await fetch('http://portal.digitalssolutions.de/api/config', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token || process.env.JWT_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    return NextResponse.json(
      { success: false, error: 'Fehler beim Laden der Firmendaten' },
      { status: response.status }
    );
  }

  const config = await response.json();

  return NextResponse.json({
    success: true,
    data: config.contact
  });
  */

  // Simulierte Antwort
  return NextResponse.json({
    success: true,
    data: tenantConfig.contact
  });
}
