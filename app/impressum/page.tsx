import Link from 'next/link';

export const metadata = {
  title: 'Impressum - MichelClean',
  description: 'Impressum und rechtliche Informationen von MichelClean',
};

export default function Impressum() {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-md">
          <Link
            href="/"
            className="inline-flex items-center text-primary hover:text-accent-green mb-6 transition-colors"
          >
            ← Zurück zur Startseite
          </Link>

          <h1 className="text-4xl font-bold text-primary mb-8">Impressum</h1>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">Angaben gemäß § 5 TMG</h2>
              <p>
                MichelClean<br />
                Bonhoefferstraße 20<br />
                51061 Köln
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">Kontakt</h2>
              <p>
                Telefon: 0221 32022993<br />
                E-Mail: team@michelclean.de
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">Vertreten durch</h2>
              <p>Geschäftsführung: [Name des Geschäftsführers]</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">Handelsregister</h2>
              <p>
                Registergericht: [Registergericht]<br />
                Registernummer: [Nummer]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:<br />
                [USt-IdNr.]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">Haftungsausschluss</h2>

              <h3 className="text-xl font-semibold text-primary mb-2 mt-4">Haftung für Inhalte</h3>
              <p className="mb-4">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-2 mt-4">Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
