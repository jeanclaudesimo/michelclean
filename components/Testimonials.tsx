export default function Testimonials() {
  const testimonials = [
    {
      id: '1',
      name: 'Anna Schmidt',
      role: 'Geschäftsführerin, Restaurant Mediterrano',
      content: 'MichelClean reinigt unser Restaurant seit über 2 Jahren. Absolute Zuverlässigkeit und Top-Qualität! Das Team ist immer pünktlich und arbeitet sehr gründlich.',
      rating: 5
    },
    {
      id: '2',
      name: 'Thomas Müller',
      role: 'Facility Manager, TechCorp GmbH',
      content: 'Für unsere Büroräume genau der richtige Partner. Flexible Termine, faire Preise und immer freundlich. Wir sind sehr zufrieden mit der Zusammenarbeit.',
      rating: 5
    },
    {
      id: '3',
      name: 'Sarah Wagner',
      role: 'Privatkundin',
      content: 'Nach unserem Umzug hat MichelClean unsere neue Wohnung perfekt gereinigt. Sehr professionell und zu einem fairen Preis. Absolut empfehlenswert!',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Überschrift */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Das sagen unsere Kunden
          </h2>
          <p className="text-lg text-gray-600">
            Überzeugen Sie sich von den Erfahrungen unserer zufriedenen Kunden
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-gray-100 pt-4">
                <div className="font-bold text-primary">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
