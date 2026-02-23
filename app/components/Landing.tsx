import Header from "./Header";
import Footer from "./Footer";
import Countdown from "./hero/Countdown";
import Hero from "./hero/Hero";
import AboutConferenceSection from "./about_conference/AboutConferenceSection";
import BenefitsSection from "./benefits/BenefitsSection";
import PricingSection from "./pricing/PricingSection";

export default function Landing() {
  return (
    <>
      <Header />
      <Countdown />
      <Hero />
      <AboutConferenceSection />
      <BenefitsSection />
      <PricingSection />
      <Footer />
    </>
  );
}