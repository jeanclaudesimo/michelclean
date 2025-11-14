'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      essential: true,
      analytics: true,
      marketing: true
    }));
    setShowBanner(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      essential: true,
      analytics: false,
      marketing: false
    }));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white shadow-2xl border-t border-gray-200">
      <div className="container mx-auto max-w-6xl">
        {!showSettings ? (
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-bold text-lg text-primary mb-2">
                🍪 Wir verwenden Cookies
              </h3>
              <p className="text-gray-600 text-sm">
                Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten.
                Einige sind notwendig, während andere uns helfen, die Website zu verbessern.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setShowSettings(true)}
                className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-medium"
              >
                Einstellungen
              </button>
              <button
                onClick={handleAcceptEssential}
                className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-medium"
              >
                Nur Notwendige
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2.5 rounded-lg bg-accent-green text-white hover:bg-green-600 transition-colors font-medium"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="font-bold text-lg text-primary mb-4">
              Cookie-Einstellungen
            </h3>
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-primary">Notwendige Cookies</div>
                  <div className="text-sm text-gray-600">
                    Erforderlich für die grundlegende Funktionalität
                  </div>
                </div>
                <div className="text-accent-green font-medium">Immer aktiv</div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium text-primary">Analyse-Cookies</div>
                  <div className="text-sm text-gray-600">
                    Helfen uns, die Website zu verbessern
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-green"></div>
                </label>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowSettings(false)}
                className="flex-1 px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-medium"
              >
                Zurück
              </button>
              <button
                onClick={handleAcceptEssential}
                className="flex-1 px-6 py-2.5 rounded-lg bg-accent-green text-white hover:bg-green-600 transition-colors font-medium"
              >
                Speichern
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
