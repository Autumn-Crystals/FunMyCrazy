import { ArrowRight, FileText, CheckCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { REGISTER_URL } from "@/lib/fmci";
import { Reveal, Eyebrow } from "./Section";

const STEPS = [
  "Choose one of the six domains.",
  "Develop your crazy idea.",
  "Create your Gemini visual.",
  "Provide proof of your Gemini process.",
  "Submit through the Google Form before 30 August.",
];

export function Round1Section() {
  return (
    <section id="round1" className="relative overflow-hidden py-20 sm:py-28">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[3rem] border-2 border-border bg-card shadow-lift">
          {/* Header */}
          <div className="bg-accent px-8 py-10 text-accent-foreground sm:px-12">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-foreground/15 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.22em] ring-1 ring-accent-foreground/25">
                Round 1
              </span>
              <h2 className="mt-4 font-display text-[clamp(2rem,6vw,4rem)] font-bold leading-[0.95]">
                YOUR IDEA
                <br />
                STARTS HERE.
              </h2>
              <div className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-accent-foreground/20 px-5 py-3 text-sm font-extrabold uppercase tracking-widest ring-1 ring-accent-foreground/30">
                <CheckCircle className="size-5" />
                NO FEE FOR ROUND 1 — FREE TO ENTER
              </div>
            </Reveal>
          </div>

          {/* Body */}
          <div className="grid gap-10 px-8 py-10 sm:px-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="text-base font-semibold leading-relaxed text-muted-foreground">
                Round 1 is completely <span className="font-extrabold text-foreground">FREE</span>.
                Choose one of the six domains, develop your idea, create your Gemini visual, provide
                proof of your Gemini process, and submit through the Google Form.
              </p>

              <ul className="mt-6 space-y-3">
                {STEPS.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary text-[10px] font-extrabold text-primary-foreground">
                      {i + 1}
                    </span>
                    <span className="font-medium leading-relaxed text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={80}>
              <div className="flex h-full flex-col justify-between gap-6">
                <div className="rounded-2xl border border-border bg-secondary p-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="size-6 text-primary" />
                    <div>
                      <p className="text-[11px] font-extrabold uppercase tracking-widest text-muted-foreground">
                        Round 1 Deadline
                      </p>
                      <p className="font-display text-2xl font-bold">30 AUGUST 2026</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-6">
                  <FileText className="size-6 text-primary" />
                  <p className="mt-3 text-sm font-semibold text-muted-foreground">
                    What to submit
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm font-medium text-foreground">
                    <li>✦ Your domain choice</li>
                    <li>✦ Your idea description</li>
                    <li>✦ Your Gemini visual</li>
                    <li>✦ Proof of Gemini usage</li>
                  </ul>
                </div>

                <Button asChild variant="hero" size="xl" className="w-full justify-center">
                  <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                    SUBMIT YOUR IDEA <ArrowRight className="arrow size-5" />
                  </a>
                </Button>
                <p className="text-center text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                  Round 1 is completely free
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
