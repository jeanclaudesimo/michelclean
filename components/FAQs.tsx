'use client';

import { useEffect, useState } from 'react';
import type { FAQ } from '@/types';

export default function FAQs() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [openId, setOpenId] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/faqs')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setFaqs(data.faqs); // Backend-Format: data.faqs statt data.data
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Fehler beim Laden der FAQs:', err);
        setLoading(false);
      });
  }, []);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  if (loading) {
    return (
      <section id="faqs" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Überschrift */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg text-gray-600">
            Hier finden Sie Antworten auf die wichtigsten Fragen rund um unsere Dienstleistungen
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-primary transition-colors"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-primary text-lg pr-4">
                  {faq.question}
                </span>
                <span
                  className={`text-2xl text-primary transition-transform flex-shrink-0 ${
                    openId === faq.id ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Zusätzlicher CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Haben Sie weitere Fragen? Kontaktieren Sie uns!
          </p>
          <a
            href="#contact"
            className="inline-block bg-accent-green text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-all font-semibold"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </section>
  );
}
