export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-dark to-gray-900 text-white overflow-hidden"
    >
      {/* Dekorative Elemente */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-green rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="bg-accent-green/20 text-accent-green px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              ⭐ 24/7 verfügbar - Köln & Umgebung
            </span>
          </div>

          {/* Hauptüberschrift */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Professionelle Reinigung
            <span className="block text-accent-green mt-2">
              für Ihr Unternehmen
            </span>
          </h1>

          {/* Unterüberschrift */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Zuverlässig, gründlich und preiswert. Ihr Partner für alle Reinigungsarbeiten in Köln.
          </p>

          {/* Vorteile */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              '✓ Pünktlich & zuverlässig',
              '✓ Erfahrenes Team',
              '✓ Faire Preise',
              '✓ Flexible Termine'
            ].map((benefit, index) => (
              <span
                key={index}
                className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium"
              >
                {benefit}
              </span>
            ))}
          </div>

          {/* Call-to-Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-accent-green text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-all hover:scale-105 font-semibold text-lg shadow-lg"
            >
              Kostenloses Angebot
            </a>
            <a
              href="tel:022132022993"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all border border-white/30 font-semibold text-lg"
            >
              📞 Jetzt anrufen
            </a>
          </div>

          {/* Scroll-Indikator */}
          <div className="mt-16 animate-bounce">
            <a href="#about" className="inline-block">
              <svg
                className="w-6 h-6 text-white/60"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
