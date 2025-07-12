import CryptoUpdates from "@/components/home/Crypto Updates/CryptoUpdates";
import CTASection from "@/components/home/CTA/CTA";
import Hero from "@/components/home/Hero";
import EffortlessIntegrations from "@/components/home/intregration/EffortlessIntegrations";
import JoinNowBanner from "@/components/home/join now/JoinNowBanner";
import TrendingSection from "@/components/home/trending pairs/TrendingSection";
import Containter from "@/components/ui/Containter";

export default function Home() {
  return (
    <>
    <Containter>
      <Hero />
      <TrendingSection />
      <EffortlessIntegrations />
      <CryptoUpdates />
      <CTASection />
      <JoinNowBanner />
    </Containter>
    </>
  );
}
