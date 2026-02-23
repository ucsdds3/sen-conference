import Header from "./Header";
import Footer from "./Footer";
import Hero from "./hero/Hero";
import AboutConferenceSection from "./about_conference/AboutConferenceSection";
import PricingSection from "./pricing/PricingSection";

export default function Landing() {
  return (
    <>
      <Header />
      <Hero />
      <AboutConferenceSection />
      <PricingSection />
      <Footer />
    </>
  );
}