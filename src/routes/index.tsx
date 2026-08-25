import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/fmci/Nav";
import { Hero } from "@/components/fmci/Hero";
import { About } from "@/components/fmci/About";
import { Countdown } from "@/components/fmci/Countdown";
import { Mission } from "@/components/fmci/Mission";
import { Themes } from "@/components/fmci/Themes";
import { Gemini } from "@/components/fmci/Gemini";
import { Round1Section } from "@/components/fmci/Round1Section";
import { Round2Section } from "@/components/fmci/Round2Section";
import { Prizes, BestPitches } from "@/components/fmci/Prizes";
import { Scoring } from "@/components/fmci/Scoring";
import { EventDetails } from "@/components/fmci/EventDetails";
import { FinalCta } from "@/components/fmci/FinalCta";
import { Faq } from "@/components/fmci/Faq";
import { Footer } from "@/components/fmci/Footer";
import { StickyRegister } from "@/components/fmci/StickyRegister";


const TITLE = "Fund My Crazy Idea — Two-Round Campus Innovation Challenge";
const DESCRIPTION =
  "Round 1 is FREE. Submit your idea by 30 August 2026. If shortlisted, pitch it in 60 seconds at the Round 2 online meeting on 2 September 2026. Build with Google Gemini and win big.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Countdown />
        <Mission />
        <Themes />
        <Gemini />
        <Round1Section />
        <Round2Section />
        <BestPitches />
        <Prizes />
        <Scoring />
        <EventDetails />
        <FinalCta />
        <Faq />
      </main>
      <Footer />
      <StickyRegister />
    </div>
  );
}
