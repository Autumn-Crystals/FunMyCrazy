import { ArrowRight, Sparkles, Lightbulb, Car, RefreshCw, MessageSquareCode, Layers, CheckCircle2, ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { REGISTER_URL } from "@/lib/fmci";
import { Reveal, Eyebrow } from "./Section";
import adaptiveRoadsImg from "@/assets/adaptive-roads.jpg";

export function ProblemToIdea() {
  return (
    <section id="example-journey" className="relative overflow-hidden py-20 sm:py-32">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-2">
              <Eyebrow>Step-By-Step Example</Eyebrow>
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-black uppercase tracking-widest text-accent-foreground shadow-sm">
                EXAMPLE ONLY
              </span>
            </div>

            <h2 className="mt-4 font-display text-[clamp(2.4rem,7vw,4.8rem)] font-bold leading-[0.95] tracking-tight">
              FROM PROBLEM <br className="hidden sm:block" />
              <span className="text-primary">TO CRAZY IDEA</span> <span className="inline-block animate-bounce">💡</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-muted-foreground">
              See how a simple problem can become a crazy idea.
            </p>

            <p className="mx-auto mt-3 max-w-xl text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
              Your idea can be anything. This is only an example of how you could think through your idea and use Gemini to develop it.
            </p>
          </div>
        </Reveal>

        {/* 6-Step Story Timeline */}
        <div className="mt-16 space-y-12 sm:space-y-16">
          
          {/* STEP 01: IDENTIFY THE PROBLEM */}
          <Reveal>
            <div className="group relative overflow-hidden rounded-[2.5rem] bg-card p-6 shadow-soft ring-1 ring-border sm:p-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                <div className="flex-1 space-y-4">
                  <div className="inline-flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 font-display text-xl font-bold text-primary">
                      01
                    </span>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                      Step One
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
                    IDENTIFY THE PROBLEM
                  </h3>

                  <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                    &ldquo;What am I seeing?&rdquo;
                  </p>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    &ldquo;During peak hours, roads become heavily congested while available road space is not always used efficiently.&rdquo;
                  </p>
                </div>

                {/* Conceptual Visual Placeholder: Congested Road */}
                <div className="w-full lg:w-96 shrink-0 rounded-2xl bg-muted/60 p-6 text-center ring-1 ring-border/80">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
                    <Car className="size-7" />
                  </div>
                  <h4 className="mt-4 font-display text-base font-bold text-foreground">
                    FIXED ROAD LAYOUT
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Heavy gridlock during rush hours &bull; Fixed lane allocation
                  </p>
                  <div className="mt-4 grid grid-cols-4 gap-1.5 opacity-80">
                    <div className="h-2.5 rounded bg-destructive/60 animate-pulse" />
                    <div className="h-2.5 rounded bg-destructive/60 animate-pulse" />
                    <div className="h-2.5 rounded bg-amber-500/60" />
                    <div className="h-2.5 rounded bg-emerald-500/60" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* STEP 02: REDEFINE THE PROBLEM */}
          <Reveal>
            <div className="group relative overflow-hidden rounded-[2.5rem] bg-card p-6 shadow-soft ring-1 ring-border sm:p-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                <div className="flex-1 space-y-4">
                  <div className="inline-flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-2xl bg-accent/20 font-display text-xl font-bold text-accent-foreground">
                      02
                    </span>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                      Step Two
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
                    REDEFINE THE PROBLEM
                  </h3>

                  <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                    &ldquo;What if it could work differently?&rdquo;
                  </p>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    &ldquo;Instead of keeping the road layout fixed all day, what if the available space could adapt according to real-time traffic?&rdquo;
                  </p>
                </div>

                {/* Conceptual Visual Placeholder: Adaptive Concept */}
                <div className="w-full lg:w-96 shrink-0 rounded-2xl bg-accent-soft p-6 text-center ring-1 ring-accent/30">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-accent/30 text-accent-foreground">
                    <RefreshCw className="size-7 animate-spin-slow" />
                  </div>
                  <h4 className="mt-4 font-display text-base font-bold text-foreground">
                    DYNAMIC ADAPTATION
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Reallocating lanes dynamically based on live demand
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-2 text-xs font-bold text-accent-foreground">
                    <span className="rounded bg-accent/30 px-2 py-1">Peak Demand</span>
                    <ArrowRightLeft className="size-4" />
                    <span className="rounded bg-accent/30 px-2 py-1">Low Demand</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* STEP 03: BRAINSTORM WITH GEMINI */}
          <Reveal>
            <div className="group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary-soft via-card to-accent-soft p-6 shadow-soft ring-2 ring-primary/20 sm:p-10">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="inline-flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground font-display text-xl font-bold">
                      03
                    </span>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
                      Step Three
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary ring-1 ring-primary/20">
                    <Sparkles className="size-3.5" /> GEMINI BRAINSTORM
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
                    BRAINSTORM WITH GEMINI <span className="text-gemini-gradient">✦</span>
                  </h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    &ldquo;Ask better questions.&rdquo;
                  </p>
                </div>

                {/* Gemini Brainstorming Container Placeholder */}
                <div className="relative rounded-2xl bg-card/90 p-6 shadow-inner ring-1 ring-primary/20 sm:p-8">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-primary">
                    <MessageSquareCode className="size-4" /> BRAINSTORMING PROMPT CONTAINER
                  </div>
                  <div className="mt-4 rounded-xl border border-dashed border-primary/30 bg-primary-soft/40 p-6 text-center">
                    <p className="font-mono text-sm font-bold uppercase tracking-wider text-primary">
                      YOUR GEMINI BRAINSTORMING PROMPT WILL APPEAR HERE
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      Use Gemini to explore architectural feasibility, sensor integration, and dynamic divider mechanics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* STEP 04: DEVELOP THE IDEA */}
          <Reveal>
            <div className="group relative overflow-hidden rounded-[2.5rem] bg-card p-6 shadow-soft ring-1 ring-border sm:p-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 font-display text-xl font-bold text-primary">
                    04
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                    Step Four
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
                    DEVELOP THE IDEA
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <span className="font-display text-3xl font-extrabold text-primary sm:text-4xl">
                      ADAPTIVE ROADS 🚦
                    </span>
                    <span className="rounded-full bg-secondary px-4 py-1 text-xs font-bold text-secondary-foreground">
                      &ldquo;A road that responds to the city.&rdquo;
                    </span>
                  </div>
                </div>

                <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
                  &ldquo;Movable dividers and intelligent lane systems could dynamically adjust the allocation of road space according to traffic conditions while maintaining safe pedestrian space.&rdquo;
                </p>

                {/* Concept Display: Shift from Problem to Solution */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center justify-between rounded-2xl bg-primary-soft/60 p-5 ring-1 ring-primary/20">
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-primary">HEAVY TRAFFIC</p>
                      <p className="mt-1 text-sm font-bold text-foreground">Max Vehicle Lanes</p>
                    </div>
                    <ArrowRight className="size-5 text-primary" />
                    <span className="rounded-xl bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground">
                      MORE VEHICLE CAPACITY
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl bg-accent-soft/80 p-5 ring-1 ring-accent/30">
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-accent-foreground">LOW TRAFFIC</p>
                      <p className="mt-1 text-sm font-bold text-foreground">Wide Walkways</p>
                    </div>
                    <ArrowRight className="size-5 text-accent-foreground" />
                    <span className="rounded-xl bg-accent px-3 py-1.5 text-xs font-bold text-accent-foreground">
                      MORE PEDESTRIAN SPACE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* STEP 05: BUILD THE VISUAL WITH GEMINI */}
          <Reveal>
            <div className="group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-card via-card to-accent-soft/40 p-6 shadow-soft ring-2 ring-accent/40 sm:p-10">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="inline-flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-2xl bg-accent text-accent-foreground font-display text-xl font-bold">
                      05
                    </span>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-muted-foreground">
                      Step Five
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-3.5 py-1 text-xs font-bold text-accent-foreground ring-1 ring-accent/30">
                    <Sparkles className="size-3.5" /> BUILT WITH GOOGLE GEMINI
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
                    BUILD THE VISUAL WITH GEMINI <span className="text-gemini-gradient">✦</span>
                  </h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    &ldquo;Turn the idea into a visual.&rdquo;
                  </p>
                </div>

                {/* Gemini Image Prompt Container */}
                <div className="rounded-2xl bg-foreground p-6 text-background shadow-lift sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-accent">
                      THE PROMPT I USED
                    </span>
                    <span className="rounded bg-background/20 px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-background">
                      IMAGE GENERATION
                    </span>
                  </div>

                  <blockquote className="mt-4 font-mono text-sm leading-relaxed text-background/90 bg-background/10 p-5 rounded-xl border border-background/20">
                    &ldquo;Reimagine a busy Indian urban road with adaptive lanes using movable blue/yellow dividers and smart lane markings that dynamically adjust vehicle and pedestrian space based on real-time traffic. Show peak-traffic and low-traffic configurations in one realistic, achievable architectural visualization, with safe pedestrians, vehicles, and traffic sensors.&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
          </Reveal>

          {/* STEP 06: SHOW THE FUTURE */}
          <Reveal>
            <div className="group relative overflow-hidden rounded-[2.5rem] bg-card p-6 shadow-lift ring-2 ring-primary/30 sm:p-10">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="inline-flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground font-display text-xl font-bold">
                      06
                    </span>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
                      Step Six &bull; Final Vision
                    </span>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                    FINAL VISUALIZATION
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
                    SHOW THE FUTURE
                  </h3>
                  <div className="mt-1 flex items-baseline gap-3">
                    <span className="font-display text-3xl font-extrabold text-primary sm:text-4xl">
                      ADAPTIVE ROADS
                    </span>
                    <span className="text-sm font-semibold text-muted-foreground">
                      &ldquo;Space that changes with the city.&rdquo;
                    </span>
                  </div>
                </div>

                {/* Final Gemini Visual Frame */}
                <div className="relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-muted shadow-lift">
                  <img
                    src={adaptiveRoadsImg}
                    alt="Adaptive Roads — Space that responds to traffic"
                    className="w-full object-cover max-h-[500px]"
                  />
                  <div className="absolute bottom-3 right-3 rounded-lg bg-background/90 backdrop-blur-md px-3 py-1.5 text-xs font-bold text-foreground shadow-sm">
                    Generated with Google Gemini ✦
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Section Footer / CTA Banner */}
        <Reveal>
          <div className="mt-20 overflow-hidden rounded-[2.5rem] bg-accent-gradient px-6 py-12 text-center text-accent-foreground shadow-lift sm:px-12 sm:py-16">
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight sm:text-4xl">
              YOUR IDEA DOESN&apos;T HAVE TO BE ABOUT ROADS.
            </h3>
            
            <p className="mx-auto mt-4 max-w-2xl text-base font-semibold opacity-90 sm:text-lg">
              It can be healthcare, education, communities, markets, transportation — or something completely unexpected.
            </p>

            <div className="mx-auto mt-8 max-w-xl rounded-2xl bg-accent-foreground/15 p-6 font-display text-lg font-black uppercase tracking-wider sm:text-xl ring-1 ring-accent-foreground/20">
              START WITH A PROBLEM.<br />
              RETHINK IT.<br />
              BRAINSTORM WITH GEMINI.<br />
              BUILD YOUR VISION.<br />
              SHOW US THE FUTURE.
            </div>

            <Button
              asChild
              size="xxl"
              className="mt-8 bg-foreground text-background font-extrabold shadow-lift transition-all duration-200 hover:-translate-y-1 hover:bg-foreground/90 [&_.arrow]:transition-transform hover:[&_.arrow]:translate-x-1"
            >
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                START YOUR IDEA <ArrowRight className="arrow size-5" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
