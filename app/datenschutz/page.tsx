import Link from 'next/link';

export const metadata = {
  title: 'Datenschutzerklärung - MichelClean',
  description: 'Datenschutzerklärung von MichelClean',
};

export default function Datenschutz() {
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

          <h1 className="text-4xl font-bold text-primary mb-8">Datenschutzerklärung</h1>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">1. Datenschutz auf einen Blick</h2>

              <h3 className="text-xl font-semibold text-primary mb-2 mt-4">Allgemeine Hinweise</h3>
              <p className="mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-2 mt-4">Datenerfassung auf dieser Website</h3>
              <p className="mb-4">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>

              <p className="mb-4">
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann
                es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">2. Hosting</h2>
              <p>
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website
                erfasst werden, werden auf den Servern des Hosters gespeichert.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">3. Allgemeine Hinweise und Pflichtinformationen</h2>

              <h3 className="text-xl font-semibold text-primary mb-2 mt-4">Datenschutz</h3>
              <p className="mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
                behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-2 mt-4">Hinweis zur verantwortlichen Stelle</h3>
              <p className="mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                MichelClean<br />
                Bonhoefferstraße 20<br />
                51061 Köln<br />
                Telefon: 0221 32022993<br />
                E-Mail: team@michelclean.de
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">4. Datenerfassung auf dieser Website</h2>

              <h3 className="text-xl font-semibold text-primary mb-2 mt-4">Cookies</h3>
              <p className="mb-4">
                Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät
                gespeichert werden und die Ihr Browser speichert. Cookies richten auf Ihrem Rechner
                keinen Schaden an und enthalten keine Viren.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-2 mt-4">Kontaktformular</h3>
              <p className="mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-3">5. Ihre Rechte</h2>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
                Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu
                weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum
                angegebenen Adresse an uns wenden.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
