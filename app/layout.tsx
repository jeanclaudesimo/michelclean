import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MichelClean - Professionelle Reinigungsdienste in Köln",
  description: "Zuverlässig, gründlich und preiswert - Ihr Partner für alle Reinigungsarbeiten. 24/7 verfügbar für Büro-, Wohnungs-, Gastronomie- und Spezialreinigung.",
  keywords: ["Reinigung", "Köln", "Reinigungsfirma", "Gebäudereinigung", "Büroreinigung"],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3a4b7c" />
      </head>
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
