import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: '#0B0B0F' }}>
      <Navbar />
      <Hero />
      <Features />
      <CtaSection />
      <Footer />
    </main>
  );
}
