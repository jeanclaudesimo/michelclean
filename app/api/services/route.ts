import { NextResponse } from 'next/server';
import type { Service } from '@/types';

// Simulierte Services im neuen API-Format
const services: Service[] = [
  {
    id: 1,
    name: 'Gastronomie Reinigung',
    description: 'Professionelle Reinigung für Restaurants, Cafés und Bars. Wir sorgen für hygienische Sauberkeit in allen Bereichen Ihrer gastronomischen Einrichtung - von der Küche bis zum Gästebereich.',
    short_description: 'Restaurants, Cafés und Bars',
    price: 0, // Preis auf Anfrage
    duration: 'Nach Vereinbarung',
    image: '/assets/services/gastro.jpg',
    features: ['Küchenreinigung', 'Sanitärbereiche', 'Gästebereiche', 'Fettentfernung'],
    sort_order: 1,
    active: true
  },
  {
    id: 2,
    name: 'Event & Club Reinigung',
    description: 'Schnelle und gründliche Reinigung nach Veranstaltungen. Wir sind auch nachts und am Wochenende für Sie da, damit Ihre Location am nächsten Tag wieder perfekt aussieht.',
    short_description: 'Nach Veranstaltungen',
    price: 0,
    duration: 'Flexible Zeiten',
    image: '/assets/services/event.jpg',
    features: ['24/7 verfügbar', 'Schnelleinsatz', 'Großflächenreinigung', 'Abfallentsorgung'],
    sort_order: 2,
    active: true
  },
  {
    id: 3,
    name: 'Büroreinigung',
    description: 'Saubere Arbeitsumgebung für produktives Arbeiten. Regelmäßige oder einmalige Reinigung Ihrer Büroräume - diskret und außerhalb Ihrer Geschäftszeiten.',
    short_description: 'Büros und Geschäftsräume',
    price: 0,
    duration: 'Täglich, wöchentlich oder monatlich',
    image: '/assets/services/office.jpg',
    features: ['Schreibtischreinigung', 'Böden', 'Fenster', 'Sanitäranlagen'],
    sort_order: 3,
    active: true
  },
  {
    id: 4,
    name: 'Hotel Reinigung',
    description: 'Hotelzimmer und öffentliche Bereiche perfekt gereinigt. Schnell, diskret und nach höchsten Hygienestandards für Ihre Gäste.',
    short_description: 'Zimmer und öffentliche Bereiche',
    price: 0,
    duration: 'Täglich',
    image: '/assets/services/hotel.jpg',
    features: ['Zimmerreinigung', 'Bettwäsche', 'Badezimmer', 'Lobby & Flure'],
    sort_order: 4,
    active: true
  },
  {
    id: 5,
    name: 'Industriereinigung',
    description: 'Reinigung von Produktionshallen und Lagerflächen. Professionelle Reinigung auch unter anspruchsvollen Bedingungen.',
    short_description: 'Produktionshallen und Lager',
    price: 0,
    duration: 'Nach Absprache',
    image: '/assets/services/industrial.jpg',
    features: ['Hallenflächen', 'Maschinen', 'Hochdruckreinigung', 'Ölentfernung'],
    sort_order: 5,
    active: true
  },
  {
    id: 6,
    name: 'Wohnungsreinigung',
    description: 'Grundreinigung und regelmäßige Pflege Ihrer Wohnung oder Ihres Hauses. Von der Einzelreinigung bis zum regelmäßigen Service.',
    short_description: 'Privathaushalte',
    price: 0,
    duration: 'Einmalig oder regelmäßig',
    image: '/assets/services/apartment.jpg',
    features: ['Grundreinigung', 'Fenster', 'Küche & Bad', 'Staubsaugen & Wischen'],
    sort_order: 6,
    active: true
  },
  {
    id: 7,
    name: 'Baureinigung',
    description: 'Endreinigung nach Bau- und Renovierungsarbeiten. Wir entfernen Baustaub, Farbreste und sorgen für bezugsfertige Sauberkeit.',
    short_description: 'Nach Bau/Renovierung',
    price: 0,
    duration: '1-3 Tage',
    image: '/assets/services/construction.jpg',
    features: ['Baustaub-Entfernung', 'Fensterreinigung', 'Feinreinigung', 'Entsorgung'],
    sort_order: 7,
    active: true
  },
  {
    id: 8,
    name: 'Sportstätten Reinigung',
    description: 'Fitnessstudios, Sporthallen und Umkleiden hygienisch sauber. Spezielle Reinigung für stark frequentierte Sportbereiche.',
    short_description: 'Fitness & Sport',
    price: 0,
    duration: 'Täglich oder nach Bedarf',
    image: '/assets/services/sports.jpg',
    features: ['Trainingsgeräte', 'Umkleiden', 'Duschen', 'Böden'],
    sort_order: 8,
    active: true
  },
  {
    id: 9,
    name: 'Fahrzeug Reinigung',
    description: 'Innen- und Außenreinigung von Fahrzeugen. Für Privat-PKW, Firmenwagen oder ganze Fuhrparks.',
    short_description: 'Auto-Innen & Außen',
    price: 0,
    duration: '2-4 Stunden pro Fahrzeug',
    image: '/assets/services/vehicle.jpg',
    features: ['Innenraumreinigung', 'Polsterreinigung', 'Außenwäsche', 'Aufbereitung'],
    sort_order: 9,
    active: true
  },
  {
    id: 10,
    name: 'Arztpraxen Reinigung',
    description: 'Hygienische Reinigung medizinischer Einrichtungen nach höchsten Standards. Zertifiziert und erfahren im Gesundheitswesen.',
    short_description: 'Medizinische Einrichtungen',
    price: 0,
    duration: 'Täglich',
    image: '/assets/services/medical.jpg',
    features: ['Desinfektionsreinigung', 'Wartezimmer', 'Behandlungsräume', 'Sanitär'],
    sort_order: 10,
    active: true
  },
  {
    id: 11,
    name: 'Hausmeisterservice',
    description: 'Umfassende Betreuung Ihrer Immobilie. Von Kleinreparaturen bis zur Objektbetreuung - Ihr verlässlicher Partner.',
    short_description: 'Immobilienbetreuung',
    price: 0,
    duration: 'Dauerhaft',
    image: '/assets/services/facility.jpg',
    features: ['Objektbetreuung', 'Kleinreparaturen', 'Gartenpflege', 'Winterdienst'],
    sort_order: 11,
    active: true
  },
  {
    id: 12,
    name: 'Tag- & Nachtdienste',
    description: 'Flexible Reinigungszeiten nach Ihrem Bedarf. Wir arbeiten dann, wenn es für Sie am besten passt - auch nachts und am Wochenende.',
    short_description: '24/7 Verfügbarkeit',
    price: 0,
    duration: 'Flexible Zeiten',
    image: '/assets/services/247.jpg',
    features: ['Nachtschicht', 'Wochenende', 'Feiertage', 'Notfallreinigung'],
    sort_order: 12,
    active: true
  }
];

export async function GET(request: Request) {
  // Simuliere API-Verzögerung
  await new Promise(resolve => setTimeout(resolve, 300));

  // Parse URL für tenant_key (vorbereitet für echte API)
  const { searchParams } = new URL(request.url);
  const tenantKey = searchParams.get('tenant_key');

  // In Production würde hier die echte API abgefragt:
  // const response = await fetch(`${process.env.API_URL}/api/services?tenant_key=${process.env.TENANT_API_KEY}`);

  // Nur aktive Services zurückgeben, sortiert nach sort_order
  const activeServices = services
    .filter(s => s.active)
    .sort((a, b) => a.sort_order - b.sort_order);

  return NextResponse.json({
    success: true,
    data: activeServices
  });
}
