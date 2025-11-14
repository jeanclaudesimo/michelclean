import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import FAQs from '@/components/FAQs';
import ContactForm from '@/components/ContactForm';
import CookieBanner from '@/components/CookieBanner';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <FAQs />
      <ContactForm />
      <CookieBanner />
    </main>
  );
}
