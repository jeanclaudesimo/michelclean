'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import type { Service } from '@/types';

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setServices(data.data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Fehler beim Laden der Services:', err);
        setLoading(false);
      });
  }, []);

  // Service-Icons mapping (Fallback wenn kein Image)
  const getServiceIcon = (name: string) => {
    const icons: { [key: string]: string } = {
      'Gastronomie': '🍽️',
      'Event': '🎉',
      'Büro': '🏢',
      'Hotel': '🏨',
      'Industrie': '🏭',
      'Wohnung': '🏠',
      'Bau': '🔨',
      'Sport': '⚽',
      'Fahrzeug': '🚗',
      'Arzt': '🏥',
      'Hausmeister': '🔧',
      'Tag': '🌙'
    };

    for (const [key, icon] of Object.entries(icons)) {
      if (name.includes(key)) return icon;
    }
    return '✨';
  };

  if (loading) {
    return (
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Überschrift */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Unsere Leistungen
          </h2>
          <p className="text-lg text-gray-600">
            Von der Büroreinigung bis zur Spezialreinigung - wir bieten Ihnen
            maßgeschneiderte Lösungen für alle Reinigungsanforderungen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 group cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {getServiceIcon(service.name)}
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {service.short_description}
              </p>
              <div className="text-xs text-gray-500 mb-3">
                ⏱️ {service.duration}
              </div>
              <button className="text-accent-green text-sm font-medium hover:underline">
                Mehr erfahren →
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-all hover:scale-105 font-semibold shadow-lg"
          >
            Jetzt Angebot anfragen
          </a>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-5xl mb-4">{getServiceIcon(selectedService.name)}</div>
                  <h3 className="text-3xl font-bold text-primary mb-2">
                    {selectedService.name}
                  </h3>
                  <p className="text-gray-600">{selectedService.short_description}</p>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600 text-3xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-primary mb-2">Beschreibung</h4>
                  <p className="text-gray-600">{selectedService.description}</p>
                </div>

                <div>
                  <h4 className="font-bold text-primary mb-2">Dauer</h4>
                  <p className="text-gray-600">⏱️ {selectedService.duration}</p>
                </div>

                {selectedService.features.length > 0 && (
                  <div>
                    <h4 className="font-bold text-primary mb-3">Leistungen</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <span className="text-accent-green mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedService.price > 0 && (
                  <div>
                    <h4 className="font-bold text-primary mb-2">Preis</h4>
                    <p className="text-2xl font-bold text-accent-green">
                      ab {selectedService.price.toFixed(2)} €
                    </p>
                  </div>
                )}

                <div className="pt-4 border-t">
                  <a
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                    className="block w-full bg-accent-green text-white text-center px-8 py-4 rounded-lg hover:bg-green-600 transition-all font-semibold"
                  >
                    Jetzt anfragen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
