import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  HeroSection,
  StatsSection,
  BenefitsSection,
  DivisiSection,
  GallerySection,
  TestimonialsSection,
  TimelineSection,
  RequirementsSection,
  FAQSection,
  CTASection,
} from "@/app/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-background bg-noise">
      <Header />
      <HeroSection />
      <StatsSection />
      <BenefitsSection />
      <DivisiSection />
      <GallerySection />
      <TestimonialsSection />
      <TimelineSection />
      <RequirementsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
