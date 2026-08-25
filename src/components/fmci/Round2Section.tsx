import { Calendar, Video, Mic, CreditCard, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, Eyebrow } from "./Section";

const DETAILS = [
  { icon: Calendar, label: "Date", value: "2 SEPTEMBER 2026" },
  { icon: Video, label: "Format", value: "ONLINE MEETING" },
  { icon: Mic, label: "Pitch Duration", value: "60 SECONDS" },
  { icon: CreditCard, label: "Participation Fee", value: "₹50 (Shortlisted only)" },
];

export function Round2Section() {
  return (
    <section id="round2" className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-28 lg:rounded-[4rem]">
      <div className="grid-bg-light pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-accent/15 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow tone="light">Round 2</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,7vw,5rem)] font-bold leading-[0.92] text-accent">
            MAKE US
            <br />
            BELIEVE.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg font-semibold text-primary-foreground/85">
            Shortlisted from Round 1? Now it's your time to pitch.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DETAILS.map((d, i) => {
            const Icon = d.icon;
            return (
              <Reveal key={d.label} delay={i * 80}>
                <div className="h-full rounded-3xl bg-primary-foreground/10 p-6 ring-1 ring-primary-foreground/20 transition-transform duration-300 hover:-translate-y-1.5">
                  <Icon className="size-8 text-accent" aria-hidden />
                  <p className="mt-3 text-[11px] font-extrabold uppercase tracking-[0.25em] text-primary-foreground/60">
                    {d.label}
                  </p>
                  <p className="mt-1.5 font-display text-xl font-bold leading-tight">{d.value}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* 60 Seconds highlight */}
        <Reveal delay={100}>
          <div className="mt-10 overflow-hidden rounded-[2.5rem] bg-accent px-6 py-10 text-center text-accent-foreground shadow-lift sm:py-14">
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] opacity-70">
              Your entire pitch is
            </p>
            <p className="font-display text-[clamp(5rem,22vw,13rem)] font-bold leading-[0.82]">
              60
            </p>
            <p className="font-display text-3xl font-bold uppercase tracking-tight sm:text-5xl">
              SECOND PITCH
            </p>
            <p className="mt-3 text-sm font-semibold opacity-75">
              One crazy idea. One chance. Make every second count.
            </p>
          </div>
        </Reveal>

        {/* Fee clarity notice */}
        <Reveal delay={120}>
          <div className="mt-8 rounded-[2rem] bg-primary-foreground/10 p-7 ring-1 ring-primary-foreground/20">
            <Star className="size-6 text-accent" aria-hidden />
            <h3 className="mt-3 font-display text-xl font-bold">About the ₹50 Fee</h3>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-primary-foreground/80">
              Only participants who are <strong className="text-accent">shortlisted after Round 1</strong> will
              proceed to Round 2. The <strong className="text-accent">₹50 participation fee applies only at
              this stage</strong> — after you've been selected.
            </p>
            <p className="mt-3 text-sm font-semibold text-primary-foreground/60">
              Round 1 is completely FREE. You pay nothing to submit your idea.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
