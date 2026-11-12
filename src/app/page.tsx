import type { Metadata } from "next";
import HeroSection      from "@/components/home/HeroSection";
import ServicesSection  from "@/components/home/ServicesSection";
import WhyChooseUs      from "@/components/home/WhyChooseUs";
import ReviewsSection   from "@/components/home/ReviewsSection";
import CtaBanner        from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Sandy Taxi Service Goa — 24x7 Cab Service in Candolim",
  description:
    "Sandy Taxi Service offers reliable 24x7 cab service in Goa. Airport transfers, sightseeing, outstation & corporate taxi from Candolim, North Goa. Call +91 8793680513.",
  alternates: {
    canonical: "https://www.sandytaxiservice.com",
  },
  openGraph: {
    title: "Sandy Taxi Service Goa — 24x7 Cab Service in Candolim",
    description:
      "Reliable 24x7 taxi in Goa. Airport transfers, sightseeing, outstation & more. Based in Candolim, North Goa.",
    url: "https://www.sandytaxiservice.com",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <ReviewsSection />
      <CtaBanner />
    </>
  );
}