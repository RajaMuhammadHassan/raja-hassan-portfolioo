import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { Particles } from "./Particles";

const codeSnippets = [
  {
    top: "8%",
    left: "-6%",
    rotate: -8,
    delay: 0.2,
    lines: [
      `const engineer = {`,
      `  name: "Raja Hassan",`,
      `  focus: "web",`,
      `};`,
    ],
  },
  {
    top: "55%",
    left: "-10%",
    rotate: 6,
    delay: 0.5,
    lines: [
      `function build() {`,
      `  return <Elegant />;`,
      `}`,
    ],
  },
  {
    top: "18%",
    right: "-8%",
    rotate: 10,
    delay: 0.4,
    lines: [
      `// shipping quality`,
      `await ship(product);`,
    ],
  },
  {
    top: "62%",
    right: "-4%",
    rotate: -6,
    delay: 0.6,
    lines: [
      `type Craft = {`,
      `  precision: true;`,
      `};`,
    ],
  },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      {/* Layered ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Particles count={70} />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-float absolute left-[10%] top-[18%] h-80 w-80 rounded-full bg-[oklch(0.68_0.22_258/0.28)] blur-3xl" />
        <div
          className="animate-float-slower absolute right-[8%] top-[45%] h-96 w-96 rounded-full bg-[oklch(0.62_0.24_300/0.22)] blur-3xl"
        />
        <div
          className="animate-float absolute left-[40%] bottom-[8%] h-72 w-72 rounded-full bg-[oklch(0.82_0.16_210/0.16)] blur-3xl"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container-page grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.82_0.16_210)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[oklch(0.82_0.16_210)]" />
            </span>
            Available for opportunities
          </motion.span>

          <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[1.02]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="block"
            >
              Raja Muhammad
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="block text-gradient"
            >
              Hassan
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Software Engineering student at{" "}
            <span className="text-foreground">
              National University of Modern Languages (NUML)
            </span>
            . I design and engineer refined, high-performance digital products —
            precise typography, considered motion, production-grade code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[oklch(0.82_0.16_210)] via-[oklch(0.68_0.22_258)] to-[oklch(0.62_0.24_300)] px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.68_0.22_258/0.6)] transition-transform hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">View my work</span>
              <ArrowRight
                size={16}
                className="relative transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#resume"
              className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium transition hover:bg-white/10"
            >
              <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
              Resume
            </a>
          </motion.div>

          {/* Meta strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="mt-12 grid max-w-md grid-cols-3 divide-x divide-white/10 rounded-2xl glass py-4 text-center"
          >
            {[
              { k: "Focus", v: "Full-stack" },
              { k: "Based", v: "Pakistan" },
              { k: "Status", v: "Student" },
            ].map((m) => (
              <div key={m.k} className="px-3">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {m.k}
                </div>
                <div className="mt-1 font-display text-sm font-semibold">{m.v}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Portrait card with floating code */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Floating code snippets behind card */}
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            {codeSnippets.map((s, i) => (
              <motion.pre
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: s.delay, duration: 0.8 }}
                style={{
                  top: s.top,
                  left: s.left,
                  right: s.right,
                  transform: `rotate(${s.rotate}deg)`,
                }}
                className="animate-float absolute rounded-xl glass px-3 py-2 font-mono text-[10px] leading-relaxed text-muted-foreground shadow-lg"
              >
                {s.lines.map((ln, j) => (
                  <div key={j}>
                    <span className="text-[oklch(0.82_0.16_210)]">{ln}</span>
                  </div>
                ))}
              </motion.pre>
            ))}
          </div>

          {/* Glow */}
          <div className="absolute -inset-6 rounded-[2.5rem] bg-[conic-gradient(from_180deg_at_50%_50%,oklch(0.82_0.16_210/0.35),oklch(0.68_0.22_258/0.35),oklch(0.62_0.24_300/0.35),oklch(0.82_0.16_210/0.35))] opacity-70 blur-2xl" />

          {/* Card */}
          <div className="glow-border relative rounded-[2rem]">
            <div className="glow-border-inner glass-strong relative aspect-[4/5] overflow-hidden rounded-[2rem] p-2">
              <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-white/[0.04] to-white/0">
                {/* Decorative rings */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
                  <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />
                </div>

                <div className="relative text-center">
                  <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.82_0.16_210)] via-[oklch(0.68_0.22_258)] to-[oklch(0.62_0.24_300)] font-display text-4xl font-bold text-primary-foreground shadow-[0_20px_60px_-10px_oklch(0.68_0.22_258/0.6)]">
                    RH
                  </div>
                  <p className="mt-5 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
                    Profile image
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground/70">Placeholder — replace later</p>
                </div>

                {/* Card corner meta */}
                <div className="absolute left-4 top-4 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[oklch(0.82_0.16_210)]" />
                  <span className="h-2 w-2 rounded-full bg-[oklch(0.68_0.22_258)]" />
                  <span className="h-2 w-2 rounded-full bg-[oklch(0.62_0.24_300)]" />
                </div>
                <div className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  v1.0
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  <span>NUML • SE</span>
                  <span className="text-[oklch(0.82_0.16_210)]">● online</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground hover:text-foreground sm:flex"
        aria-label="Scroll to about"
      >
        <span className="text-[10px] uppercase tracking-[0.35em]">Scroll</span>
        <span className="relative grid h-9 w-6 place-items-start rounded-full border border-white/15 pt-1.5">
          <span className="h-1.5 w-1 animate-bounce-soft rounded-full bg-gradient-to-b from-[oklch(0.82_0.16_210)] to-[oklch(0.62_0.24_300)]" />
        </span>
        <ChevronDown size={14} className="animate-bounce-soft" />
      </motion.a>
    </section>
  );
}
