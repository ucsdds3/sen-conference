import Header from "./Header";
import Footer from "./Footer";
import Countdown from "./hero/Countdown";
import Hero from "./hero/Hero";
import AboutConferenceSection from "./about_conference/AboutConferenceSection";
import BenefitsSection from "./benefits/BenefitsSection";
import PricingSection from "./pricing/PricingSection";
import SocialProof from "./social_proof/SocialProof";
import Questions from "./questions/questions";
import FinalCountdown from "./bottom_countdown/BottomCountdownSection";

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
      <Questions />
      <FinalCountdown />
      <Footer />
    </div>
  );
}