import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Home/HeroSection";
import PartnersAndFeatures from './components/PartnersAndFeatures/PartnersAndFeatures' 
import AwardsAgencySection from "./components/AwardsAgencySection/AwardsAgencySection";
import BusinessFeaturesSection from "./components/BusinessFeaturesSection/BusinessFeaturesSection";
import CompletedProjectsSection from "./components/CompletedProjectsSection/CompletedProjectsSection";
import SeoSection from "./components/SeoSection/SeoSection";
import FactsSection from "./components/FactsSection/FactsSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import ContactWorkTogetherSection from "./components/ContactWorkTogetherSection/ContactWorkTogetherSection";
import Footer from "./components/Footer/Footer";


export default function Home() {
  return (
   <main className="relative min-h-screen">
      <div className="relative bg-[#081420] min-h-screen">
        <Navbar />
        <HeroSection />
        <PartnersAndFeatures />
        <AwardsAgencySection />
        <BusinessFeaturesSection />
        <CompletedProjectsSection />
        <SeoSection />
        <FactsSection />
        <TestimonialsSection />
        <ContactWorkTogetherSection />
        <Footer />
      </div>
    </main>
  );
}