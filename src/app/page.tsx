import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
// import FeaturedInitiatives from "@/components/home/FeaturedInitiatives"; // hidden until Discovery Days & Expo are ready
import FeaturedDirectory from "@/components/home/FeaturedDirectory";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "MENAMeds — MENA Health & Community at Stanford Medicine",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      {/* <FeaturedInitiatives /> */}
      <FeaturedDirectory />
      <CTASection />
    </>
  );
}
