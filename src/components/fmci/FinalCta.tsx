import { ArrowRight, Calendar, Video, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Section";

export function FinalCta() {
  return (
    <section id="register" className="relative overflow-hidden py-20 sm:py-28">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[2.5rem] bg-accent-gradient px-6 py-14 text-center text-accent-foreground shadow-lift sm:px-12 sm:py-20">
            <h2 className="mx-auto max-w-3xl font-display text-[clamp(2rem,7vw,4.5rem)] font-bold leading-[0.92]">
              READY TO TAKE YOUR CRAZY IDEA TO THE NEXT ROUND?
            </h2>

            <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-2xl bg-accent-foreground/20 px-6 py-3 text-base font-extrabold uppercase tracking-widest ring-1 ring-accent-foreground/30">
              ROUND 1 IS FREE.
            </div>

            <p className="mx-auto mt-5 max-w-xl text-lg font-semibold leading-snug opacity-85">
              Submit before <strong>30 AUGUST 2026</strong>. If shortlisted, pitch in 60 seconds on 2 September.
            </p>

            <Button
              asChild
              size="xxl"
              className="mt-9 bg-foreground font-extrabold text-background shadow-lift transition-all duration-200 hover:-translate-y-1 hover:bg-foreground/90 [&_.arrow]:transition-transform hover:[&_.arrow]:translate-x-1"
            >
              <a href="#round1">
                SUBMIT YOUR IDEA <ArrowRight className="arrow size-5" />
              </a>
            </Button>

            <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.25em] opacity-75">
              No fee for Round 1
            </p>

            {/* Round 2 preview */}
            <div className="mx-auto mt-10 grid max-w-lg gap-3 sm:grid-cols-3">
              <div className="flex flex-col items-center gap-1.5 rounded-2xl bg-accent-foreground/15 px-4 py-4 ring-1 ring-accent-foreground/20">
                <Calendar className="size-5 opacity-80" />
                <p className="text-xs font-extrabold uppercase tracking-widest opacity-70">Round 2</p>
                <p className="text-sm font-bold leading-tight">2 SEPT 2026</p>
              </div>
              <div className="flex flex-col items-center gap-1.5 rounded-2xl bg-accent-foreground/15 px-4 py-4 ring-1 ring-accent-foreground/20">
                <Video className="size-5 opacity-80" />
                <p className="text-xs font-extrabold uppercase tracking-widest opacity-70">Format</p>
                <p className="text-sm font-bold leading-tight">ONLINE MEETING</p>
              </div>
              <div className="flex flex-col items-center gap-1.5 rounded-2xl bg-accent-foreground/15 px-4 py-4 ring-1 ring-accent-foreground/20">
                <Mic className="size-5 opacity-80" />
                <p className="text-xs font-extrabold uppercase tracking-widest opacity-70">Pitch</p>
                <p className="text-sm font-bold leading-tight">60 SECONDS</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
