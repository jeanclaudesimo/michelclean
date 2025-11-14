const { Resvg } = require('@resvg/resvg-js');
const fs = require('fs');
const path = require('path');

// Logo SVG für Rechnungen (hochauflösend)
const invoiceLogoSVG = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="400" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- High-resolution logo for invoices -->

  <!-- Sparkle Icon -->
  <circle cx="200" cy="200" r="120" fill="#10b981" opacity="0.15"/>
  <path d="M200 80 L216 160 L296 148 L232 200 L284 268 L200 236 L116 268 L168 200 L104 148 L184 160 Z" fill="#10b981"/>
  <circle cx="200" cy="200" r="20" fill="#ffffff" stroke="#10b981" stroke-width="4"/>

  <!-- Accent sparkles -->
  <circle cx="140" cy="100" r="8" fill="#10b981" opacity="0.4"/>
  <circle cx="260" cy="100" r="8" fill="#10b981" opacity="0.4"/>
  <circle cx="280" cy="220" r="6" fill="#10b981" opacity="0.3"/>

  <!-- Company Name -->
  <text x="360" y="215" font-family="Arial, Helvetica, sans-serif" font-size="120" font-weight="bold" fill="#3a4b7c">Michel</text>
  <text x="760" y="215" font-family="Arial, Helvetica, sans-serif" font-size="120" font-weight="bold" fill="#10b981">Clean</text>

  <!-- Tagline -->
  <text x="368" y="270" font-family="Arial, Helvetica, sans-serif" font-size="36" fill="#6b7280" letter-spacing="3">PROFESSIONELLE REINIGUNGSDIENSTE</text>

  <!-- Contact -->
  <text x="368" y="330" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#9ca3af">Tel: 0221 32022993 • team@michelclean.de • Bonhoefferstraße 20, 51061 Köln</text>
</svg>`;

// Kompaktes Logo
const compactLogoSVG = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1000" height="280" viewBox="0 0 1000 280" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Compact logo -->

  <circle cx="140" cy="140" r="100" fill="#10b981" opacity="0.15"/>
  <path d="M140 60 L152 128 L220 120 L168 140 L208 200 L140 176 L72 200 L112 140 L60 120 L128 128 Z" fill="#10b981"/>
  <circle cx="140" cy="140" r="16" fill="#ffffff" stroke="#10b981" stroke-width="3"/>

  <text x="280" y="168" font-family="Arial, Helvetica, sans-serif" font-size="120" font-weight="bold" fill="#3a4b7c">Michel</text>
  <text x="660" y="168" font-family="Arial, Helvetica, sans-serif" font-size="120" font-weight="bold" fill="#10b981">Clean</text>
</svg>`;

// Icon only
const iconOnlySVG = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="200" cy="200" r="180" fill="#3a4b7c" opacity="0.1"/>
  <circle cx="200" cy="200" r="140" fill="#10b981" opacity="0.2"/>

  <path d="M200 72 L220 152 L300 140 L232 200 L280 272 L200 240 L120 272 L168 200 L100 140 L180 152 Z" fill="#10b981"/>
  <circle cx="200" cy="200" r="24" fill="#ffffff" stroke="#10b981" stroke-width="8"/>

  <circle cx="120" cy="80" r="12" fill="#10b981" opacity="0.5"/>
  <circle cx="280" cy="80" r="12" fill="#10b981" opacity="0.5"/>
  <circle cx="300" cy="240" r="10" fill="#10b981" opacity="0.4"/>
  <circle cx="100" cy="240" r="10" fill="#10b981" opacity="0.4"/>
</svg>`;

const outputDir = path.join(__dirname, '..', 'public', 'assets');

// Erstelle Output-Verzeichnis falls nicht vorhanden
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Konvertiere SVGs zu PNGs
function convertSVGtoPNG(svgContent, outputPath, width, height) {
  try {
    const resvg = new Resvg(svgContent, {
      fitTo: {
        mode: 'width',
        value: width,
      },
    });

    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    fs.writeFileSync(outputPath, pngBuffer);
    console.log(`✅ Erstellt: ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`❌ Fehler bei ${path.basename(outputPath)}:`, error.message);
  }
}

console.log('🎨 Generiere Logo-PNGs...\n');

// Generiere verschiedene Auflösungen
convertSVGtoPNG(invoiceLogoSVG, path.join(outputDir, 'logo-invoice-high.png'), 1200, 400);
convertSVGtoPNG(invoiceLogoSVG, path.join(outputDir, 'logo-invoice.png'), 900, 300);
convertSVGtoPNG(invoiceLogoSVG, path.join(outputDir, 'logo-invoice-medium.png'), 600, 200);

convertSVGtoPNG(compactLogoSVG, path.join(outputDir, 'logo-compact-high.png'), 1000, 280);
convertSVGtoPNG(compactLogoSVG, path.join(outputDir, 'logo-compact.png'), 750, 210);

convertSVGtoPNG(iconOnlySVG, path.join(outputDir, 'logo-icon-high.png'), 400, 400);
convertSVGtoPNG(iconOnlySVG, path.join(outputDir, 'logo-icon.png'), 300, 300);
convertSVGtoPNG(iconOnlySVG, path.join(outputDir, 'logo-icon-small.png'), 200, 200);

console.log('\n✨ Fertig! Alle Logo-PNGs wurden erstellt.');
console.log(`📁 Speicherort: ${outputDir}`);
