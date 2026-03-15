import { HeroSection } from "./components/hero-section";
import BarSection from "./components/bar-section";
import { AboutBidangSection } from "./components/about-bidang-section";
import { CountdownSection } from "./components/countdown-section";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between w-full overflow-hidden bg-background">

      {/* ── MAIN CONTENT LAYER ────────────────────────────────────────────────── */}
      {/* Ensuring the sections sit alongside the elements cleanly */}
      <div className="w-full relative z-20">
        <HeroSection />
        <BarSection />
        <AboutBidangSection />
        <CountdownSection />
      </div>
    </main>
  );
}
