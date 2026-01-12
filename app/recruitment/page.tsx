import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  HeroSection,
  StatsSection,
  BenefitsSection,
  DivisiSection,
  GallerySection,
  TimelineSection,
  RequirementsSection,
  FAQSection,
  CTASection,
} from "./sections";

export default function RecruitmentPage() {
  return (
    <main className="min-h-screen bg-background bg-noise">
      <Header />
      <HeroSection />
      <div className="bg-gradient-content">
        <StatsSection />
        <BenefitsSection />
        <DivisiSection />
        <GallerySection />
        <TimelineSection />
        <RequirementsSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
