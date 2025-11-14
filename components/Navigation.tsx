'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Über uns' },
    { href: '#services', label: 'Leistungen' },
    { href: '#faqs', label: 'FAQs' },
    { href: '#contact', label: 'Kontakt' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center transition-opacity hover:opacity-80"
          >
            <Image
              src="/logo.svg"
              alt="MichelClean Logo"
              width={160}
              height={48}
              className={`transition-all duration-300 ${
                isScrolled ? 'brightness-100' : 'brightness-0 invert'
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-accent-green ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:022132022993"
              className="bg-accent-green text-white px-6 py-2.5 rounded-lg hover:bg-green-600 transition-colors font-medium"
            >
              Jetzt anrufen
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden flex flex-col gap-1.5 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-current transition-transform ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`} />
            <span className={`block w-6 h-0.5 bg-current transition-opacity ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`} />
            <span className={`block w-6 h-0.5 bg-current transition-transform ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-xl">
            <div className="flex flex-col gap-2 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 font-medium py-2 px-4 rounded hover:bg-gray-100 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:022132022993"
                className="bg-accent-green text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors font-medium text-center mt-2"
              >
                Jetzt anrufen
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
