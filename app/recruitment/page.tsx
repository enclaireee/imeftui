import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  HeroSection,
  StatsSection,
  BenefitsSection,
  LogoShowcase,
  DivisiSection,
  GallerySection,
  TimelineSection,
  RequirementsSection,
  FAQSection,
  CTASection,
} from "./sections";

import Image from "next/image";

export default function RecruitmentPage() {
  return (
    <main className="min-h-screen bg-background bg-noise">
      <Header />
      <HeroSection />
      <div className="bg-gradient-content bg-noise relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[80px] opacity-50 dark:opacity-20" />
          <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[80px] opacity-40 dark:opacity-20" />
          <div className="absolute bottom-[20%] left-[10%] w-[700px] h-[700px] bg-primary/30 rounded-full blur-[100px] opacity-40 dark:opacity-20" />

          <div className="absolute top-20 -left-10 md:left-0 opacity-60">
            <Image
              src="/element1.webp"
              alt=""
              width={300}
              height={300}
              loading="lazy"
              className="w-48 md:w-80 object-contain rotate-12"
            />
          </div>
          <div className="absolute top-[10%] -right-10 md:right-[15%] opacity-60">
            <Image
              src="/element3.webp"
              alt=""
              width={300}
              height={300}
              loading="lazy"
              className="w-40 md:w-72 object-contain -rotate-12"
            />
          </div>
          <div className="absolute top-[20%] -right-10 md:right-0 opacity-60 hidden md:block">
            <Image
              src="/element2.webp"
              alt=""
              width={300}
              height={300}
              loading="lazy"
              className="w-40 md:w-72 object-contain -rotate-12"
            />
          </div>
          <div className="absolute top-[35%] -left-12 md:left-[10%] opacity-60">
            <Image
              src="/element4.webp"
              alt=""
              width={300}
              height={300}
              loading="lazy"
              className="w-56 md:w-96 object-contain rotate-6"
            />
          </div>
          <div className="absolute top-[45%] -left-12 md:left-0 opacity-60 hidden md:block">
            <Image
              src="/element3.webp"
              alt=""
              width={300}
              height={300}
              loading="lazy"
              className="w-56 md:w-96 object-contain rotate-6"
            />
          </div>
          <div className="absolute top-[55%] -right-12 md:right-[20%] opacity-60">
            <Image
              src="/element1.webp"
              alt=""
              width={300}
              height={300}
              loading="lazy"
              className="w-48 md:w-80 object-contain -rotate-6"
            />
          </div>
          <div className="absolute top-[65%] -right-12 md:right-0 opacity-60 hidden md:block">
            <Image
              src="/element4.webp"
              alt=""
              width={300}
              height={300}
              loading="lazy"
              className="w-44 md:w-72 object-contain -rotate-6"
            />
          </div>
          <div className="absolute top-[80%] -left-8 md:left-[15%] opacity-60">
            <Image
              src="/element2.webp"
              alt=""
              width={300}
              height={300}
              loading="lazy"
              className="w-44 md:w-72 object-contain rotate-12"
            />
          </div>
          <div className="absolute bottom-40 -left-8 md:left-0 opacity-60 hidden md:block">
            <Image
              src="/element5.webp"
              alt=""
              width={300}
              height={300}
              loading="lazy"
              className="w-36 md:w-64 object-contain rotate-12"
            />
          </div>
          <div className="absolute bottom-20 -right-8 md:right-[10%] opacity-60 hidden md:block">
            <Image
              src="/element5.webp"
              alt=""
              width={300}
              height={300}
              loading="lazy"
              className="w-36 md:w-64 object-contain -rotate-12"
            />
          </div>
        </div>

        <div className="relative z-10">
          <StatsSection />
          <BenefitsSection />
          <LogoShowcase />
          <DivisiSection />
          <GallerySection />
          <TimelineSection />
          <RequirementsSection />
          <FAQSection />
          <CTASection />
          <Footer />
        </div>
      </div>
    </main>
  );
}
