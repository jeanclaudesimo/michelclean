export default function About() {
  const benefits = [
    {
      icon: '⏰',
      title: 'Pünktlichkeit',
      description: 'Wir erscheinen immer zur vereinbarten Zeit und halten unsere Termine zuverlässig ein.'
    },
    {
      icon: '✨',
      title: 'Gründlichkeit',
      description: 'Professionelle Reinigung bis ins kleinste Detail mit modernen Geräten und Methoden.'
    },
    {
      icon: '🔄',
      title: 'Flexibilität',
      description: '24/7 verfügbar - wir passen uns Ihren Bedürfnissen und Zeitplänen an.'
    },
    {
      icon: '💰',
      title: 'Faire Preise',
      description: 'Transparente Preisgestaltung ohne versteckte Kosten. Qualität zum fairen Preis.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Überschrift */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Warum MichelClean?
          </h2>
          <p className="text-lg text-gray-600">
            Seit Jahren Ihr zuverlässiger Partner für professionelle Reinigungsdienstleistungen
            in Köln und Umgebung. Unsere Erfahrung und Leidenschaft für Sauberkeit sprechen für sich.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Zusätzliche Info */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary-dark text-white p-8 md:p-12 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-gray-200">Zufriedene Kunden</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-gray-200">Erreichbarkeit</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-gray-200">Kundenzufriedenheit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
