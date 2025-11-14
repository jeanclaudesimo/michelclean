'use client';

import { useState, FormEvent } from 'react';
import type { ContactFormData } from '@/types';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Wird gesendet...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: 'success',
          message: data.data.message
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Ein Fehler ist aufgetreten'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Verbindungsfehler. Bitte versuchen Sie es später erneut.'
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary via-primary-dark to-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Überschrift */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Kontaktieren Sie uns
            </h2>
            <p className="text-xl text-gray-200">
              Fordern Sie jetzt Ihr kostenloses Angebot an oder stellen Sie uns Ihre Fragen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kontaktinfo */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h3 className="text-xl font-bold mb-4">Kontaktdaten</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📞</span>
                    <div>
                      <div className="font-semibold">Telefon</div>
                      <a href="tel:022132022993" className="text-accent-green hover:underline">
                        0221 32022993
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <div className="font-semibold">E-Mail</div>
                      <a href="mailto:team@michelclean.de" className="text-accent-green hover:underline">
                        team@michelclean.de
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <div className="font-semibold">Adresse</div>
                      <div className="text-gray-200">
                        Bonhoefferstraße 20<br />
                        51061 Köln
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🕐</span>
                    <div>
                      <div className="font-semibold">Öffnungszeiten</div>
                      <div className="text-gray-200">Mo-So 00:00-24:00 (24/7)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formular */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-accent-green focus:outline-none focus:ring-2 focus:ring-accent-green/50 text-white placeholder-gray-400"
                    placeholder="Ihr Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-accent-green focus:outline-none focus:ring-2 focus:ring-accent-green/50 text-white placeholder-gray-400"
                    placeholder="ihre@email.de"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-accent-green focus:outline-none focus:ring-2 focus:ring-accent-green/50 text-white placeholder-gray-400"
                    placeholder="Ihre Telefonnummer"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium">
                    Betreff *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-accent-green focus:outline-none focus:ring-2 focus:ring-accent-green/50 text-white placeholder-gray-400"
                    placeholder="z.B. Anfrage für Büroreinigung"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-accent-green focus:outline-none focus:ring-2 focus:ring-accent-green/50 text-white placeholder-gray-400 resize-none"
                    placeholder="Ihre Nachricht an uns..."
                  />
                </div>

                {/* Status Message */}
                {status.type !== 'idle' && (
                  <div
                    className={`p-4 rounded-lg ${
                      status.type === 'success'
                        ? 'bg-accent-green/20 border border-accent-green text-accent-green'
                        : status.type === 'error'
                        ? 'bg-red-500/20 border border-red-500 text-red-300'
                        : 'bg-white/10 border border-white/20'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="w-full bg-accent-green text-white py-4 rounded-lg hover:bg-green-600 transition-all font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.type === 'loading' ? 'Wird gesendet...' : 'Nachricht senden'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
