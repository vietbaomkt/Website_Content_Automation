import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

