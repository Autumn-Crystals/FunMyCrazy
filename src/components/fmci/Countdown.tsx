import { useEffect, useState } from "react";
import { Reveal } from "./Section";

const DEADLINE = new Date("2026-08-30T23:59:59+05:30");

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function getTimeLeft() {
  const diff = DEADLINE.getTime() - Date.now();
  if (diff <= 0) return null;
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

function DigitBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative overflow-hidden rounded-2xl border-2 border-accent/30 bg-primary px-4 py-4 text-center shadow-lift sm:px-6 sm:py-5 min-w-[70px] sm:min-w-[90px]">
        <span className="font-display text-[clamp(2rem,8vw,4rem)] font-bold tabular-nums leading-none text-accent">
          {value}
        </span>
        {/* scanline shimmer */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" aria-hidden />
      </div>
      <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-muted-foreground sm:text-xs">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="countdown" className="relative overflow-hidden bg-secondary py-20 sm:py-28">
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-accent-foreground">
            Round 1 Deadline
          </span>
          <h2 className="mt-5 font-display text-[clamp(2rem,6vw,4rem)] font-bold leading-[0.95]">
            30 AUGUST 2026
          </h2>
          <p className="mt-3 text-base font-semibold text-muted-foreground">
            Round 1 submissions close at midnight on 30 August.
          </p>
        </Reveal>

        <Reveal delay={80}>
          {timeLeft ? (
            <div className="mt-10 flex flex-wrap items-end justify-center gap-3 sm:gap-5">
              <DigitBlock value={String(timeLeft.days)} label="Days" />
              <span className="mb-6 font-display text-3xl font-bold text-accent sm:text-5xl">:</span>
              <DigitBlock value={pad(timeLeft.hours)} label="Hours" />
              <span className="mb-6 font-display text-3xl font-bold text-accent sm:text-5xl">:</span>
              <DigitBlock value={pad(timeLeft.minutes)} label="Minutes" />
              <span className="mb-6 font-display text-3xl font-bold text-accent sm:text-5xl">:</span>
              <DigitBlock value={pad(timeLeft.seconds)} label="Seconds" />
            </div>
          ) : (
            <div className="mt-10 rounded-[2rem] bg-primary px-8 py-10 text-center text-primary-foreground shadow-lift">
              <p className="font-display text-[clamp(1.8rem,5vw,3rem)] font-bold text-accent">
                ROUND 1 SUBMISSIONS CLOSED
              </p>
              <p className="mt-3 text-sm font-semibold text-primary-foreground/70">
                The deadline has passed. Stay tuned for Round 2 announcements.
              </p>
            </div>
          )}
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-8 text-sm font-bold uppercase tracking-widest text-primary">
            🟢 ROUND 1 IS FREE — NO REGISTRATION FEE
          </p>
        </Reveal>
      </div>
    </section>
  );
}
