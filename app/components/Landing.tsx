import Header from "./Header";
import Footer from "./Footer";
import Countdown from "./countdowns/top_countdown/TopCountdownSection";
import Hero from "./hero/Hero";
import AboutConferenceSection from "./about_conference/AboutConferenceSection";
import BenefitsSection from "./benefits/BenefitsSection";
import PricingSection from "./pricing/PricingSection";
import SocialProof from "./social_proof/SocialProof";
import FAQSection from "./faq/FAQSection";
import BottomCountdownSection from "./countdowns/bottom_countdown/BottomCountdownSection";

export default function Landing() {
  return (
    <div className="overflow-x-clip">
      <Header />
      <Countdown />
      <Hero />
      <SocialProof />
      <BenefitsSection />
      <AboutConferenceSection />
      <PricingSection />
      <FAQSection />
      <BottomCountdownSection />
      <Footer />
    </div>
  );
}
