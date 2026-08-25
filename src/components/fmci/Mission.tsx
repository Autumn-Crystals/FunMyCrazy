import { Reveal, Eyebrow } from "./Section";

const STEPS = [
  {
    n: "01",
    t: "PICK YOUR DOMAIN",
    d: "Choose one of the six domains and identify the element of the city you want to reimagine.",
    round: 1,
  },
  {
    n: "02",
    t: "BUILD WITH GEMINI",
    d: "Brainstorm, develop and visualize your crazy idea using Google Gemini.",
    round: 1,
  },
  {
    n: "03",
    t: "SUBMIT FOR ROUND 1",
    d: "Submit your idea and Gemini visual through the Google Form before 30 August.",
    round: 1,
  },
  {
    n: "04",
    t: "GET SHORTLISTED",
    d: "The strongest submissions move forward to Round 2.",
    round: 1,
  },
  {
    n: "05",
    t: "60-SECOND PITCH",
    d: "Shortlisted participants pitch their idea during the online Round 2 meeting on 2 September.",
    round: 2,
  },
];

const FLOW = ["IDEA", "GEMINI", "SUBMIT", "SHORTLIST", "PITCH"];

export function Mission() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-secondary py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow>Your journey</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-4xl font-display text-[clamp(2.2rem,7vw,5rem)] font-bold leading-[0.92]">
            FIVE STEPS.
            <br />
            <span className="text-primary">ONE CRAZY IDEA.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Round 1 is free. Submit your idea by 30 August. If shortlisted, move to Round 2 and pitch it in 60 seconds on 2 September.
          </p>
        </Reveal>

        {/* Flow path */}
        <Reveal delay={60}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {FLOW.map((label, i) => (
              <div key={label} className="flex items-center gap-2 sm:gap-3">
                <span
                  className={`rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-widest ${
                    i === 4
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent text-accent-foreground"
                  }`}
                >
                  {label}
                </span>
                {i < FLOW.length - 1 && (
                  <span className="font-bold text-muted-foreground">→</span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <article
                className={`group card-surface relative h-full p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${
                  s.round === 2 ? "border-primary/40 ring-2 ring-primary/30" : ""
                }`}
              >
                {s.round === 2 && (
                  <span className="absolute right-3 top-3 rounded-full bg-primary px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-primary-foreground">
                    Round 2
                  </span>
                )}
                {s.round === 1 && i === 0 && (
                  <span className="absolute right-3 top-3 rounded-full bg-accent px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-accent-foreground">
                    Round 1
                  </span>
                )}
                <span className="inline-grid size-14 place-items-center rounded-2xl bg-accent font-display text-2xl font-bold text-accent-foreground transition-transform duration-300 group-hover:scale-110">
                  {s.n}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold leading-tight">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-12 overflow-hidden rounded-[2.5rem] bg-primary px-6 py-10 text-center text-primary-foreground sm:py-14">
            <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-primary-foreground/70">
              Round 2 — you get exactly
            </p>
            <p className="font-display text-[clamp(4rem,18vw,11rem)] font-bold leading-[0.85] text-accent">
              60
            </p>
            <p className="font-display text-2xl font-bold uppercase tracking-tight sm:text-4xl">
              Seconds
            </p>
            <p className="mt-3 text-sm font-semibold text-primary-foreground/70">
              Only shortlisted participants from Round 1 reach this stage
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
