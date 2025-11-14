import { NextResponse } from 'next/server';
import type { ContactFormData, ApiResponse } from '@/types';

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    // Validierung
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'Bitte füllen Sie alle Pflichtfelder aus.'
      }, { status: 400 });
    }

    // Email-Validierung
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
      }, { status: 400 });
    }

    // Simuliere API-Verzögerung
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simuliere erfolgreiche Nachricht
    console.log('Kontaktformular eingegangen:', data);

    // In Production: Sende an echtes Backend
    /*
    const response = await fetch('http://portal.digitalssolutions.de/api/contact/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tenant_key: process.env.TENANT_API_KEY,
        name: data.name,
        email: data.email,
        phone: data.phone || '',
        subject: data.subject,
        message: data.message,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Fehler beim Senden der Nachricht');
    }

    return NextResponse.json<ApiResponse<{ message: string }>>({
      success: true,
      data: {
        message: result.message || 'Vielen Dank! Wir haben Ihre Nachricht erhalten und melden uns in Kürze bei Ihnen.'
      }
    });
    */

    // Simulierte Antwort
    return NextResponse.json<ApiResponse<{ message: string }>>({
      success: true,
      data: {
        message: 'Vielen Dank! Wir haben Ihre Nachricht erhalten und melden uns in Kürze bei Ihnen.'
      }
    });

  } catch (error) {
    console.error('Fehler beim Verarbeiten der Kontaktanfrage:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'
    }, { status: 500 });
  }
}
