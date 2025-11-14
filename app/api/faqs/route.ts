import { NextResponse } from 'next/server';
import type { FAQ } from '@/types';

// Simulierte FAQs im Backend-Format
const faqs: FAQ[] = [
  {
    id: 1,
    question: 'Wie schnell können Sie mit der Reinigung beginnen?',
    answer: 'Wir sind 24/7 verfügbar und können in den meisten Fällen innerhalb von 24 Stunden mit der Reinigung beginnen. Bei Notfällen sind wir noch schneller vor Ort.',
    sort_order: 1,
    active: true,
    created_at: '2024-01-01 10:00:00'
  },
  {
    id: 2,
    question: 'Welche Reinigungsmittel verwenden Sie?',
    answer: 'Wir verwenden ausschließlich professionelle, umweltfreundliche Reinigungsmittel, die effektiv und gleichzeitig schonend für Mensch und Umwelt sind. Alle Mittel sind zertifiziert und gesundheitlich unbedenklich.',
    sort_order: 2,
    active: true,
    created_at: '2024-01-01 10:00:00'
  },
  {
    id: 3,
    question: 'Bieten Sie auch regelmäßige Reinigungsverträge an?',
    answer: 'Ja, wir bieten flexible Verträge für regelmäßige Reinigungen an - täglich, wöchentlich oder monatlich. Dabei profitieren Sie von attraktiven Konditionen und einer festen Ansprechperson.',
    sort_order: 3,
    active: true,
    created_at: '2024-01-01 10:00:00'
  },
  {
    id: 4,
    question: 'Sind Ihre Mitarbeiter versichert?',
    answer: 'Selbstverständlich. Alle unsere Mitarbeiter sind vollständig versichert und verfügen über langjährige Erfahrung im Reinigungsbereich. Zudem führen wir regelmäßige Schulungen durch.',
    sort_order: 4,
    active: true,
    created_at: '2024-01-01 10:00:00'
  },
  {
    id: 5,
    question: 'Wie erfolgt die Abrechnung?',
    answer: 'Die Abrechnung erfolgt transparent nach tatsächlichem Aufwand oder nach Pauschalpreis - je nach Vereinbarung. Sie erhalten immer vorab ein detailliertes Angebot ohne versteckte Kosten.',
    sort_order: 5,
    active: true,
    created_at: '2024-01-01 10:00:00'
  },
  {
    id: 6,
    question: 'Können Sie auch außerhalb der Geschäftszeiten reinigen?',
    answer: 'Ja, wir bieten Tag- und Nachtdienste an. Gerade für Büros, Geschäfte oder Restaurants ist die Reinigung außerhalb der Öffnungszeiten oft die beste Lösung.',
    sort_order: 6,
    active: true,
    created_at: '2024-01-01 10:00:00'
  },
  {
    id: 7,
    question: 'Muss ich bei der Reinigung anwesend sein?',
    answer: 'Nein, das ist nicht erforderlich. Unsere Mitarbeiter sind vertrauenswürdig und arbeiten selbstständig. Sie können uns einen Schlüssel anvertrauen oder eine andere Zugangslösung vereinbaren.',
    sort_order: 7,
    active: true,
    created_at: '2024-01-01 10:00:00'
  },
  {
    id: 8,
    question: 'Was passiert bei Schäden?',
    answer: 'In dem unwahrscheinlichen Fall eines Schadens greift unsere Betriebshaftpflichtversicherung. Wir arbeiten jedoch äußerst sorgfältig, und Schäden sind bei uns eine absolute Seltenheit.',
    sort_order: 8,
    active: true,
    created_at: '2024-01-01 10:00:00'
  }
];

export async function GET(request: Request) {
  // Simuliere API-Verzögerung
  await new Promise(resolve => setTimeout(resolve, 200));

  // Parse URL für tenant_key und optional search
  const { searchParams } = new URL(request.url);
  const tenantKey = searchParams.get('tenant_key');
  const search = searchParams.get('search');

  // In Production würde hier die echte API abgefragt:
  // const response = await fetch(`${process.env.API_URL}/api/faq?tenant_key=${process.env.TENANT_API_KEY}&search=${search || ''}`);

  // Nur aktive FAQs zurückgeben, sortiert nach sort_order
  let activeFAQs = faqs
    .filter(f => f.active)
    .sort((a, b) => a.sort_order - b.sort_order);

  // Optional: Suche implementieren
  if (search) {
    const searchLower = search.toLowerCase();
    activeFAQs = activeFAQs.filter(
      f =>
        f.question.toLowerCase().includes(searchLower) ||
        f.answer.toLowerCase().includes(searchLower)
    );
  }

  return NextResponse.json({
    success: true,
    faqs: activeFAQs,
    total: activeFAQs.length
  });
}
