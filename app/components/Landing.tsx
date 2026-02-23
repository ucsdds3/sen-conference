import Header from "./Header";
import Footer from "./Footer";
import Countdown from "./hero/Countdown";
import Hero from "./hero/Hero";
import AboutConferenceSection from "./about_conference/AboutConferenceSection";
import BenefitsSection from "./benefits/BenefitsSection";
import PricingSection from "./pricing/PricingSection";
import RegisterButton from "./RegisterButton";

export default function Landing() {
  return (
    <>
      <Header />
      <Countdown />
      <Hero />
      <AboutConferenceSection />
      <BenefitsSection />

      <div className="self-center my-8">
        <RegisterButton classes="text-[clamp(1rem,2vw,1.6rem)]"/>
      </div>

      <PricingSection />
      <Footer />
    </>
  );
}