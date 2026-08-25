import { useState } from "react";
import {
  ArrowRight,
  TrainFront,
  Home,
  Stethoscope,
  GraduationCap,
  ShoppingBag,
  Sparkles,
  X,
  Lightbulb,
} from "lucide-react";
import { THEMES } from "@/lib/fmci";
import { Reveal, Eyebrow } from "./Section";
import { Button } from "@/components/ui/button";

const ICONS = {
  transport: TrainFront,
  community: Home,
  health: Stethoscope,
  education: GraduationCap,
  markets: ShoppingBag,
  surprise: Sparkles,
} as const;

type Theme = (typeof THEMES)[number];

function ThemeModal({ theme, onClose }: { theme: Theme; onClose: () => void }) {
  const Icon = ICONS[theme.icon as keyof typeof ICONS];
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={theme.title}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" aria-hidden />

      {/* Panel */}
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] border-2 border-border bg-card shadow-lift"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header stripe */}
        <div className="bg-primary px-8 py-7 text-primary-foreground">
          <div className="flex items-start justify-between gap-4">
            <span className="grid size-14 place-items-center rounded-2xl bg-accent text-accent-foreground shadow-soft">
              <Icon className="size-7" />
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="grid size-10 place-items-center rounded-xl bg-primary-foreground/15 text-primary-foreground/80 transition-colors hover:bg-primary-foreground/25"
            >
              <X className="size-5" />
            </button>
          </div>
          <h2 className="mt-5 font-display text-2xl font-bold leading-tight sm:text-3xl">
            {theme.title}
          </h2>
          <p className="mt-2 text-sm font-semibold text-primary-foreground/80 sm:text-base">
            {theme.desc}
          </p>
        </div>

        {/* Body */}
        <div className="px-8 py-7">
          <div className="flex items-start gap-3 rounded-2xl bg-accent/10 p-5 ring-1 ring-accent/20">
            <Lightbulb className="mt-0.5 size-5 shrink-0 text-accent" />
            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-primary">
                Example Idea
              </p>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-foreground sm:text-base">
                {theme.example}
              </p>
            </div>
          </div>

          <Button asChild variant="hero" size="pill" className="mt-6 w-full justify-center">
            <a href="#round1">
              SUBMIT YOUR IDEA <ArrowRight className="arrow size-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function Themes() {
  const [active, setActive] = useState<Theme | null>(null);

  return (
    <>
      <section id="themes" className="relative overflow-hidden py-20 sm:py-28">
        <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <Eyebrow>Six domains</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,3.75rem)] font-bold leading-[0.96]">
              SIX WAYS TO REIMAGINE YOUR CITY. <span className="text-primary">PICK ONE.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">
              Choose your domain, build your idea with Gemini, and submit it for Round 1.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {THEMES.map((t, i) => {
              const Icon = ICONS[t.icon as keyof typeof ICONS];
              return (
                <Reveal key={t.id} delay={i * 80}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:scale-[1.015] hover:border-accent hover:shadow-lift">
                    <div
                      className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-primary-soft transition-transform duration-500 group-hover:scale-150"
                      aria-hidden
                    />
                    <span className="relative grid size-16 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-soft transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                      <Icon className="size-8" />
                    </span>
                    <h3 className="relative mt-6 font-display text-xl font-bold leading-tight sm:text-2xl">
                      {t.title}
                    </h3>
                    <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {t.desc}
                    </p>
                    <button
                      type="button"
                      onClick={() => setActive(t)}
                      className="relative mt-6 inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-xs font-extrabold uppercase tracking-widest text-primary-foreground shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lift"
                    >
                      READ MORE <ArrowRight className="size-3.5" />
                    </button>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {active && <ThemeModal theme={active} onClose={() => setActive(null)} />}
    </>
  );
}
