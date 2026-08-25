import { CalendarDays, Video, CreditCard, CheckCircle } from "lucide-react";
import { Reveal, Eyebrow } from "./Section";

const ROUNDS = [
  {
    round: "Round 1",
    label: "IDEA SUBMISSION",
    items: [
      { icon: CalendarDays, label: "Deadline", value: "30 AUGUST 2026" },
      { icon: CheckCircle, label: "Fee", value: "FREE TO ENTER" },
    ],
    accent: false,
  },
  {
    round: "Round 2",
    label: "FINAL PITCH",
    items: [
      { icon: CalendarDays, label: "Date", value: "2 SEPTEMBER 2026" },
      { icon: Video, label: "Format", value: "ONLINE MEETING" },
      { icon: CreditCard, label: "Fee", value: "₹50 (Shortlisted only)" },
    ],
    accent: true,
  },
];

export function EventDetails() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-28 lg:rounded-[4rem]">
      <div className="grid-bg-light pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow tone="light">Event overview</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,8vw,5.5rem)] font-bold leading-[0.92] text-accent">
            TWO ROUNDS.
            <br />
            ONE JOURNEY.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {ROUNDS.map((r, ri) => (
            <Reveal key={r.round} delay={ri * 100}>
              <div
                className={`h-full overflow-hidden rounded-[2.5rem] text-left ${
                  r.accent
                    ? "bg-accent text-accent-foreground"
                    : "bg-primary-foreground/10 ring-1 ring-primary-foreground/20"
                }`}
              >
                <div className={`px-8 py-6 ${r.accent ? "bg-accent-foreground/10" : "bg-primary-foreground/5"}`}>
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest ${
                      r.accent
                        ? "bg-accent-foreground/20 text-accent-foreground"
                        : "bg-primary-foreground/15 text-primary-foreground"
                    }`}
                  >
                    {r.round}
                  </span>
                  <h3 className="mt-3 font-display text-3xl font-bold leading-tight">{r.label}</h3>
                </div>
                <div className="space-y-4 px-8 py-6">
                  {r.items.map((it) => {
                    const Icon = it.icon;
                    return (
                      <div key={it.label} className="flex items-center gap-4">
                        <Icon
                          className={`size-6 shrink-0 ${r.accent ? "text-accent-foreground/70" : "text-accent"}`}
                          aria-hidden
                        />
                        <div>
                          <p
                            className={`text-[10px] font-extrabold uppercase tracking-widest ${
                              r.accent ? "text-accent-foreground/60" : "text-primary-foreground/50"
                            }`}
                          >
                            {it.label}
                          </p>
                          <p className="font-display text-xl font-bold leading-tight">{it.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-8 max-w-2xl rounded-2xl bg-primary-foreground/10 px-6 py-4 text-sm font-semibold text-primary-foreground/80 ring-1 ring-primary-foreground/20">
            Round 1 is completely free. The ₹50 fee applies <strong className="text-accent">only</strong> to participants shortlisted for Round 2.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
