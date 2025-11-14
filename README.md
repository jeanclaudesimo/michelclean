# MichelClean - Professionelle Reinigungsdienste

Eine moderne, professionelle Website für MichelClean, gebaut mit Next.js 15, TypeScript und Tailwind CSS.

## Features

### ✨ Hauptfunktionen

- **Moderne UI/UX**: Responsive Design mit Tailwind CSS
- **API-Integration**: Simulierte REST APIs für alle dynamischen Inhalte
- **TypeScript**: Vollständige Type-Safety für bessere Code-Qualität
- **Server Components**: Optimierte Performance mit Next.js 15 App Router
- **SEO-optimiert**: Metadata und semantisches HTML

### 📱 Komponenten

- **Hero Section**: Eindrucksvoller Landing-Bereich mit Gradient und CTAs
- **Services**: Dynamische Service-Karten mit Filter-Funktion
- **FAQ Accordion**: Interaktive FAQ-Sektion mit API-Integration
- **Kontaktformular**: Vollständiges Formular mit Validierung und API-Submission
- **Cookie Banner**: DSGVO-konformes Cookie-Management
- **Navigation**: Sticky Navigation mit Mobile Menu
- **Footer**: Umfassende Footer-Komponente mit Firmendaten

### 🔌 API-Endpunkte

Alle API-Endpunkte sind simuliert und können später einfach durch echte Backend-Calls ersetzt werden:

- `GET /api/services` - Lädt alle Reinigungsservices
- `GET /api/faqs` - Lädt häufig gestellte Fragen
- `GET /api/company-info` - Lädt Firmendaten
- `POST /api/contact` - Sendet Kontaktformular-Daten

## 🚀 Installation & Start

### Voraussetzungen

- Node.js 18+
- npm oder yarn

### Installation

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build erstellen
npm run build

# Production Server starten
npm start
```

Die Website ist dann unter `http://localhost:3000` erreichbar.

## 📁 Projektstruktur

```
michelclean/
├── app/
│   ├── api/              # API Routes (simuliert)
│   │   ├── services/
│   │   ├── faqs/
│   │   ├── contact/
│   │   └── company-info/
│   ├── impressum/        # Impressum-Seite
│   ├── datenschutz/      # Datenschutz-Seite
│   ├── layout.tsx        # Root Layout
│   ├── page.tsx          # Homepage
│   └── globals.css       # Globale Styles
├── components/           # React Komponenten
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Testimonials.tsx
│   ├── FAQs.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   └── CookieBanner.tsx
├── types/               # TypeScript Definitionen
│   └── index.ts
└── public/              # Statische Assets

```

## 🔧 Anpassungen für Production

### API-Integration

Die Website ist vorbereitet für das Backend unter `http://portal.digitalssolutions.de`.

**Schnellstart:**

1. **Umgebungsvariablen einrichten:**
   ```bash
   cp .env.example .env.local
   ```

   Bearbeite `.env.local`:
   ```env
   API_URL=http://portal.digitalssolutions.de
   TENANT_API_KEY=dein_tenant_api_key
   ```

2. **API-Format ist bereits angepasst:**
   - Types in `types/index.ts` entsprechen dem Backend-Format
   - Mock-APIs in `app/api/*` verwenden die gleiche Struktur
   - API-Client in `lib/api-client.ts` ist fertig

3. **Zur echten API wechseln:**
   ```typescript
   // In app/api/services/route.ts
   import { fetchServices } from '@/lib/api-client';

   export async function GET() {
     const services = await fetchServices();
     return NextResponse.json({ success: true, data: services });
   }
   ```

**Detaillierte Anleitung:** Siehe `API-INTEGRATION.md`

### Rechtliche Seiten

Die Impressum- und Datenschutz-Seiten enthalten Platzhalter-Texte:
- Ergänze die korrekten Firmendaten
- Passe die Datenschutzerklärung an deine tatsächliche Datenverarbeitung an
- Lass die Texte ggf. von einem Anwalt prüfen

### Analytics

Füge Google Analytics oder andere Tracking-Tools hinzu:
```typescript
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
      </body>
    </html>
  )
}
```

## 🎨 Styling

Das Projekt verwendet Tailwind CSS mit einer angepassten Konfiguration:

**Farben:**
- Primary: `#3a4b7c` (Navy Blue)
- Primary Dark: `#111827` (Dark Charcoal)
- Accent Green: `#10b981` (Success Green)

Anpassungen können in `tailwind.config.ts` vorgenommen werden.

## 📝 License

© 2024 MichelClean. Alle Rechte vorbehalten.

## 🤝 Support

Bei Fragen oder Problemen:
- Email: team@michelclean.de
- Telefon: 0221 32022993
