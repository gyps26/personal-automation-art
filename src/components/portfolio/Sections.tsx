import { useMemo, useState } from "react";
import {
  caseStudies,
  funnels,
  platformColor,
  techStack,
  workflows,
  type Platform,
} from "@/data/portfolio";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Funnels", href: "#funnels" },
  { label: "Workflows", href: "#workflows" },
  { label: "Results", href: "#results" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-lg border border-primary/40 text-primary">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2 21 7v10l-9 5-9-5V7z" />
            </svg>
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg font-bold">
              MARIO<span className="text-primary">.</span>
            </span>
            <span className="block text-[10px] tracking-[0.25em] text-muted-foreground">AUTOMATION</span>
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {i.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="glow rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
}

export function Hero() {
  const stats = [
    { value: "30+", label: "Automations shipped" },
    { value: "100+", label: "Hours saved weekly" },
    { value: "4", label: "Core platforms" },
    { value: "2.4k+", label: "Tasks automated" },
  ];

  return (
    <section id="top" className="relative overflow-hidden px-5 pb-20 pt-24">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
          <span className="size-1.5 rounded-full bg-primary" />
          AI & Workflow Automation Specialist
        </span>
        <h1 className="mt-6 text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
          I build automations that <span className="text-gradient">run your business</span> while you sleep
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Real-world AI agents, funnels, and multi-step workflows built with n8n, Zapier, Make.com and
          GoHighLevel — engineered for reliability, monitoring, and measurable hours saved.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="#workflows"
            className="glow rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border bg-secondary px-7 py-3 font-semibold text-secondary-foreground transition-colors hover:bg-muted"
          >
            Book a Call
          </a>
        </div>
        <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="panel px-4 py-5">
              <dt className="font-display text-3xl font-bold text-primary">{s.value}</dt>
              <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function TechStack() {
  const row = [...techStack, ...techStack];
  return (
    <section id="about" className="border-y border-border py-14">
      <div className="mx-auto max-w-6xl px-5 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">
          My <span className="text-gradient">Tech Stack</span>
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">Tools & technologies powering the automations</p>
      </div>
      <div className="relative mt-8 overflow-hidden">
        <div className="flex w-max animate-marquee gap-3">
          {row.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Funnels() {
  return (
    <section id="funnels" className="mx-auto max-w-6xl px-5 py-20">
      <div className="text-center">
        <span className="rounded-full border border-ghl/40 bg-ghl/10 px-3 py-1 text-xs font-medium text-ghl">
          GoHighLevel
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Funnel <span className="text-gradient">Portfolio</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Conversion-focused funnels built in GoHighLevel with pipeline stages, automation, calendar and payment
          integration, and email & SMS marketing — from local service businesses to premium e-commerce launches.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {funnels.map((f) => (
          <article
            key={f.name}
            className="panel group flex flex-col p-6 transition-colors hover:border-primary/50"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold">{f.name}</h3>
              <span className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground">
                {f.tag}
              </span>
            </div>
            <p className="mt-1 text-sm text-primary">{f.niche}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {f.sections.map((s) => (
                <span key={s} className="rounded-md bg-secondary px-2 py-1 text-[11px] text-secondary-foreground">
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const platforms: Platform[] = ["Zapier", "Make.com", "n8n", "GoHighLevel"];

export function Workflows() {
  const [filter, setFilter] = useState<Platform | "All">("All");
  const list = useMemo(
    () => (filter === "All" ? workflows : workflows.filter((w) => w.platform === filter)),
    [filter],
  );

  return (
    <section id="workflows" className="border-y border-border bg-card/30 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Sample <span className="text-gradient">Workflows</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Real automation workflows built for clients, showcasing complex integrations and multi-step processes.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {(["All", ...platforms] as const).map((p) => {
            const active = filter === p;
            const count = p === "All" ? workflows.length : workflows.filter((w) => w.platform === p).length;
            return (
              <button
                key={p}
                onClick={() => setFilter(p)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  active
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-border bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {p} <span className="opacity-60">({count})</span>
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((w) => (
            <article key={w.title} className="panel flex flex-col p-6 transition-colors hover:border-primary/50">
              <span
                className="w-fit rounded-full border px-2.5 py-1 text-[11px] font-medium"
                style={{ color: platformColor[w.platform], borderColor: platformColor[w.platform] }}
              >
                {w.platform}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{w.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{w.description}</p>
              <p className="mt-4 text-[11px] uppercase tracking-widest text-muted-foreground">Workflow steps</p>
              <ol className="mt-2 flex flex-wrap items-center gap-1.5">
                {w.steps.map((s, i) => (
                  <li key={s} className="flex items-center gap-1.5">
                    <span className="rounded-md border border-border bg-secondary px-2 py-1 text-[11px]">{s}</span>
                    {i < w.steps.length - 1 && <span className="text-primary/60">→</span>}
                  </li>
                ))}
              </ol>
              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-border pt-4">
                {w.tags.map((t) => (
                  <span key={t} className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] text-primary">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Results() {
  return (
    <section id="results" className="mx-auto max-w-6xl px-5 py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Client <span className="text-gradient">Results</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Automation systems delivered end-to-end, with the hours and task volume they take off the team.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((c) => (
          <article key={c.title} className="panel flex flex-col p-6 transition-colors hover:border-primary/50">
            <span className="text-xs uppercase tracking-widest text-primary">{c.category}</span>
            <h3 className="mt-2 text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {c.platforms.map((p) => (
                <span
                  key={p}
                  className="rounded-full border px-2.5 py-1 text-[11px]"
                  style={{ color: platformColor[p], borderColor: platformColor[p] }}
                >
                  {p}
                </span>
              ))}
            </div>
            <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-border pt-4 text-center">
              <div>
                <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">Time saved</dt>
                <dd className="mt-1 text-sm font-semibold text-primary">{c.timeSaved}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">Tasks</dt>
                <dd className="mt-1 text-sm font-semibold">{c.tasks}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">Integrations</dt>
                <dd className="mt-1 text-sm font-semibold">{c.integrations}</dd>
              </div>
            </dl>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {c.tags.map((t) => (
                <span key={t} className="rounded-md bg-secondary px-2 py-1 text-[11px] text-secondary-foreground">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="px-5 pb-24">
      <div className="panel glow mx-auto max-w-4xl px-6 py-14 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Let's automate <span className="text-gradient">what slows you down</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Tell me about the process eating your team's time — I'll map it, build it, and monitor it end-to-end.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:hello@automationhub.me"
            className="rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Email me
          </a>
          <a
            href="https://automation-watch.onrender.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border bg-secondary px-7 py-3 font-semibold text-secondary-foreground transition-colors hover:bg-muted"
          >
            Open Dashboard
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Mario — AI & Workflow Automation Specialist
    </footer>
  );
}
