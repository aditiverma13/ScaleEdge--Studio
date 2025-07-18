// App.jsx
import './App.css';

// === Component Imports ===
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompanyLogo from './components/CompanyLogo';
import PurposeSection from './components/PurposeSection';
import FeatureSection from './components/FeatureSection';
import ScheduleSection from './components/ScheduleSection';
import MonitorSection from './components/MonitorSection';
import PricingSection from './components/PricingSection';
import ServicesSection from './components/ServicesSection';
import TestimonialSection from './components/TestimonialSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden font-sans">

      {/* === Decorative Background Blur Circle === */}
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] 
                      bg-gradient-to-tr from-indigo-400/10 to-pink-300/10 
                      rounded-full blur-[100px] -z-10">
      </div>

      {/* === Main Website Content === */}
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <FeatureSection />
        <ScheduleSection />
        <MonitorSection />
        <PricingSection />
        <ServicesSection />
        <TestimonialSection />
        <NewsletterSection />
        <Footer />
      </div>
    </main>
  );
}

export default App;
















