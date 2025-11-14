# API-Integration Guide

## Überblick

Die Website ist vorbereitet für die Integration mit dem Backend-Portal unter `http://portal.digitalssolutions.de`.

Aktuell werden **simulierte APIs** verwendet. Dieser Guide zeigt, wie Sie zur echten API wechseln.

## Aktuelles API-Format

### Services API

**Aktuell (Simulation):** `GET /api/services`

**Zukünftig (Echt):** `GET http://portal.digitalssolutions.de/api/services?tenant_key=YOUR_KEY`

**Response-Format:**
```json
{
  "services": [
    {
      "id": 1,
      "name": "Web Development",
      "description": "Complete web development services...",
      "short_description": "Professional websites",
      "price": 1500.00,
      "duration": "2-4 weeks",
      "image": "http://localhost:9000/tenant-1/services/web-dev.jpg",
      "features": ["Responsive Design", "SEO Optimized"],
      "sort_order": 1,
      "active": true
    }
  ]
}
```

### FAQ API

**Aktuell (Simulation):** `GET /api/faqs`

**Zukünftig (Echt):** `GET http://portal.digitalssolutions.de/api/faq?tenant_key=YOUR_KEY`

**Optional: Mit Suche:** `GET http://portal.digitalssolutions.de/api/faq?tenant_key=YOUR_KEY&search=shipping`

**Response-Format:**
```json
{
  "success": true,
  "faqs": [
    {
      "id": 1,
      "question": "What are your shipping policies?",
      "answer": "We offer free shipping on orders over €50...",
      "sort_order": 1,
      "active": true,
      "created_at": "2025-01-30 20:00:00"
    }
  ],
  "total": 1
}
```

### Company Info API

**Aktuell (Simulation):** `GET /api/company-info`

**Zukünftig (Echt):** `GET http://portal.digitalssolutions.de/api/config`

**Authentifizierung:** Bearer Token (JWT)

**Request Header:**
```
Authorization: Bearer YOUR_JWT_TOKEN
```

**Response-Format:**
```json
{
  "contact": {
    "company_name": "Demo Company",
    "address_line1": "123 Main Street",
    "address_line2": "Building A",
    "postal_code": "75001",
    "city": "Paris",
    "country": "France",
    "phone": "+33 1 23 45 67 89",
    "email": "contact@demo.com",
    "support_email": "support@demo.com",
    "website": "https://www.demo.com",
    "opening_hours": {
      "monday": "09:00-18:00",
      "tuesday": "09:00-18:00"
    },
    "social_links": {
      "facebook": "https://facebook.com/demo"
    }
  },
  "smtp": { ... },
  "tenant": { ... }
}
```

### Contact API

**Aktuell (Simulation):** `POST /api/contact`

**Zukünftig (Echt):** `POST http://portal.digitalssolutions.de/api/contact/submit`

**Request-Format:**
```json
{
  "tenant_key": "YOUR_TENANT_API_KEY",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+49 123 456789",
  "subject": "Anfrage für Büroreinigung",
  "message": "Guten Tag, ich hätte gerne ein Angebot..."
}
```

**Response-Format:**
```json
{
  "success": true,
  "message": "Ihre Nachricht wurde erfolgreich versendet"
}
```

## Migration zur echten API

### Schritt 1: Umgebungsvariablen einrichten

```bash
# Kopiere .env.example zu .env.local
cp .env.example .env.local

# Bearbeite .env.local und füge deine Werte ein
API_URL=http://portal.digitalssolutions.de
TENANT_API_KEY=dein_tenant_api_key
```

### Schritt 2: API Route anpassen

**Datei:** `app/api/services/route.ts`

**Vorher (Simulation):**
```typescript
const services: Service[] = [
  // Mock-Daten...
];

export async function GET() {
  return NextResponse.json({ success: true, data: services });
}
```

**Nachher (Echt):**
```typescript
import { fetchServices } from '@/lib/api-client';

export async function GET() {
  try {
    const services = await fetchServices();

    // Nur aktive Services zurückgeben
    const activeServices = services
      .filter(s => s.active)
      .sort((a, b) => a.sort_order - b.sort_order);

    return NextResponse.json({
      success: true,
      data: activeServices
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Fehler beim Laden der Services' },
      { status: 500 }
    );
  }
}
```

### Schritt 3: Weitere Endpoints anpassen

Wiederholen Sie Schritt 2 für:

- `app/api/faqs/route.ts` → `fetchFAQs()`
- `app/api/company-info/route.ts` → `fetchCompanyInfo()`
- `app/api/contact/route.ts` → `submitContactForm()`

## Verfügbare API-Client-Funktionen

Die Datei `lib/api-client.ts` enthält fertige Funktionen:

```typescript
import {
  fetchServices,
  fetchFAQs,
  fetchCompanyInfo,
  submitContactForm
} from '@/lib/api-client';

// Beispiel-Verwendung
const services = await fetchServices();
const faqs = await fetchFAQs();
const info = await fetchCompanyInfo();
await submitContactForm({ name, email, message });
```

## TypeScript Types

Die Types in `types/index.ts` sind bereits auf das echte API-Format angepasst:

```typescript
export interface Service {
  id: number;              // Backend verwendet numbers
  name: string;            // Statt "title"
  description: string;
  short_description: string; // Neu
  price: number;           // Neu
  duration: string;        // Neu
  image: string;           // URL zum Bild
  features: string[];      // Neu
  sort_order: number;      // Neu
  active: boolean;         // Neu
}
```

## Testing

### 1. Lokales Testing mit Simulation

```bash
npm run dev
# Öffne http://localhost:3000
```

Die Mock-Daten werden geladen.

### 2. Testing mit echter API

Nach dem Einrichten der `.env.local` und Anpassen der Routes:

```bash
npm run dev
# Die Daten werden vom Backend geladen
```

### 3. API-Calls testen

```bash
# Teste Company Info (mit JWT Token)
curl -X GET "http://portal.digitalssolutions.de/api/config" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Teste Service-Endpoint
curl -X GET "http://portal.digitalssolutions.de/api/services?tenant_key=YOUR_KEY"

# Teste FAQs
curl -X GET "http://portal.digitalssolutions.de/api/faq?tenant_key=YOUR_KEY"

# Teste FAQs mit Suche
curl -X GET "http://portal.digitalssolutions.de/api/faq?tenant_key=YOUR_KEY&search=reinigung"

# Teste Kontaktformular
curl -X POST "http://portal.digitalssolutions.de/api/contact/submit" \
  -H "Content-Type: application/json" \
  -d '{
    "tenant_key": "YOUR_KEY",
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+49 123 456789",
    "subject": "Test Anfrage",
    "message": "Dies ist eine Test-Nachricht"
  }'
```

## Error Handling

Der API-Client beinhaltet bereits Error Handling:

```typescript
try {
  const services = await fetchServices();
  // Erfolg
} catch (error) {
  console.error('API Fehler:', error);
  // Fallback oder Fehlermeldung anzeigen
}
```

## Checklist für Production

- [ ] `.env.local` mit echten Werten erstellt
- [ ] `TENANT_API_KEY` vom Backend erhalten
- [ ] Alle API-Routes angepasst (`/api/services`, `/api/faqs`, etc.)
- [ ] API-Calls getestet
- [ ] Error Handling überprüft
- [ ] Loading-States funktionieren
- [ ] Images von Backend werden korrekt geladen
- [ ] `.env.local` ist in `.gitignore` (bereits vorhanden)

## Troubleshooting

### Problem: "TENANT_API_KEY is undefined"

**Lösung:** `.env.local` erstellen und API-Key eintragen

### Problem: CORS-Fehler

**Lösung:** Backend muss CORS für deine Domain erlauben

### Problem: Images werden nicht angezeigt

**Lösung:** Next.js `next.config.ts` anpassen:

```typescript
const nextConfig: NextConfig = {
  images: {
    domains: ['localhost', 'portal.digitalssolutions.de'],
  },
};
```

### Problem: 401 Unauthorized

**Lösung:** Überprüfe deinen `TENANT_API_KEY`

## Support

Bei Fragen zur API-Integration:
- Backend-Dokumentation: `http://portal.digitalssolutions.de/docs`
- E-Mail: team@michelclean.de
