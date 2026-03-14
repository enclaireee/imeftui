import { HeroSection } from "./components/hero-section";
import BarSection from "./components/bar-section";
import { AboutBidangSection } from "./components/about-bidang-section";
import { CountdownSection } from "./components/countdown-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <div className="w-full">
        <HeroSection />
        <BarSection />
        <AboutBidangSection />
        <CountdownSection />
      </div>
    </main>
  );
}
