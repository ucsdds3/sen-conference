import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import TopCountdownSection from "./landing/components/countdowns/top_countdown/TopCountdownSection";
import Hero from "./landing/components/hero/Hero";
import AboutConferenceSection from "./landing/components/about_conference/AboutConferenceSection";
import BenefitsSection from "./landing/components/benefits/BenefitsSection";
import PricingSection from "./landing/components/pricing/PricingSection";
import SocialProof from "./landing/components/social_proof/SocialProof";
import FAQSection from "./landing/components/faq/FAQSection";
import BottomCountdownSection from "./landing/components/countdowns/bottom_countdown/BottomCountdownSection";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <div className="flex flex-col h-dvh">
        <Header />
        <TopCountdownSection />
        <Hero />
      </div>
      <SocialProof />
      <BenefitsSection />
      <AboutConferenceSection />
      <PricingSection />
      <FAQSection />
      <BottomCountdownSection />
      <Footer />
    </main>
  );
}
