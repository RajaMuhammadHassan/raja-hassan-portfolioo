import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown, Sparkles } from "lucide-react";
import { Particles } from "./Particles";
import { hero, site } from "@/config/portfolio";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32"
    >
      {/* Layered ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Particles count={70} />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-float absolute left-[10%] top-[18%] h-80 w-80 rounded-full bg-[oklch(0.68_0.22_258/0.28)] blur-3xl" />
        <div className="animate-float-slower absolute right-[8%] top-[45%] h-96 w-96 rounded-full bg-[oklch(0.62_0.24_300/0.22)] blur-3xl" />
        <div
          className="animate-float absolute bottom-[8%] left-[40%] h-72 w-72 rounded-full bg-[oklch(0.82_0.16_210/0.16)] blur-3xl"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container-page grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        {/* Left — Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Availability badge */}
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.82_0.16_210)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[oklch(0.82_0.16_210)]" />
            </span>
            <span className="text-foreground/90">{site.availability}</span>
          </motion.span>

          <h1 className="mt-7 font-display font-bold leading-[0.98] tracking-[-0.02em] text-[clamp(2.75rem,7.5vw,5.75rem)]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="block"
            >
              {hero.firstName}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="block text-gradient"
            >
              {hero.lastName}
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground"
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <span>{hero.tagline}</span>
            <span className="h-px w-10 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-lg"
          >
            Software Engineering student at{" "}
            <span className="text-foreground">{site.university}</span>. {hero.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={hero.cta.primary.href}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full p-[1px]"
            >
              <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,oklch(0.82_0.16_210),oklch(0.68_0.22_258),oklch(0.62_0.24_300),oklch(0.82_0.16_210))] opacity-90" />
              <span className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.82_0.16_210)] via-[oklch(0.68_0.22_258)] to-[oklch(0.62_0.24_300)] px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_20px_50px_-15px_oklch(0.68_0.22_258/0.75)] transition-transform group-hover:-translate-y-0.5">
                <span className="pointer-events-none absolute inset-0 -translate-x-full overflow-hidden rounded-full">
                  <span className="block h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm transition-transform duration-[900ms] group-hover:translate-x-[300%]" />
                </span>
                <span className="relative">{hero.cta.primary.label}</span>
                <ArrowRight
                  size={16}
                  className="relative transition-transform group-hover:translate-x-1"
                />
              </span>
            </a>

            <a
              href={hero.cta.secondary.href}
              className="group relative inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold text-foreground/90 transition-all hover:-translate-y-0.5 hover:bg-white/[0.08] hover:text-foreground"
            >
              <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
              {hero.cta.secondary.label}
            </a>

            <a
              href={hero.cta.tertiary.href}
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="story-link">{hero.cta.tertiary.label}</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Meta strip */}
          {hero.meta.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 grid max-w-md divide-x divide-white/10 rounded-2xl glass py-4 text-center"
              style={{ gridTemplateColumns: `repeat(${hero.meta.length}, minmax(0, 1fr))` }}
            >
              {hero.meta.map((m) => (
                <div key={m.k} className="px-3">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {m.k}
                  </div>
                  <div className="mt-1 font-display text-sm font-semibold">{m.v}</div>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Right — 3D Avatar placeholder card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Animated coding lines behind card */}
          <div className="pointer-events-none absolute -inset-x-10 inset-y-0 -z-10 hidden overflow-hidden opacity-60 md:block">
            {hero.codeLines.map((ln, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: [0, 0.6, 0.6, 0], x: [-30, 0, 0, 30] }}
                transition={{
                  duration: 6,
                  delay: i * 0.7,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                style={{ top: `${(i * 12 + 6) % 90}%` }}
                className="absolute left-0 right-0 whitespace-nowrap font-mono text-[11px] tracking-tight text-[oklch(0.82_0.16_210/0.65)]"
              >
                <span className="text-muted-foreground/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {"  "}
                <span>{ln}</span>
              </motion.div>
            ))}
          </div>

          {/* Floating tech chips around the card */}
          <div className="pointer-events-none absolute inset-0">
            {hero.techChips.map((chip, i) => (
              <motion.div
                key={chip.label}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: chip.delay, duration: 0.6, ease: "easeOut" }}
                style={{
                  top: chip.top,
                  left: chip.left,
                  right: chip.right,
                  bottom: chip.bottom,
                  animationDelay: `${i * 0.3}s`,
                }}
                className={`${chip.float} pointer-events-auto absolute z-20`}
              >
                <div className="group relative rounded-2xl p-[1px] transition-transform hover:scale-110">
                  <span className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_0deg,oklch(0.82_0.16_210/0.6),oklch(0.68_0.22_258/0.6),oklch(0.62_0.24_300/0.6),oklch(0.82_0.16_210/0.6))] opacity-70" />
                  <div className="relative flex items-center gap-2 rounded-2xl glass-strong px-3.5 py-2 shadow-[0_10px_30px_-10px_oklch(0.68_0.22_258/0.5)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[oklch(0.82_0.16_210)] to-[oklch(0.62_0.24_300)]" />
                    <span className="font-mono text-[11px] font-semibold tracking-wide text-foreground/90">
                      {chip.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Outer glow */}
          <div className="absolute -inset-6 rounded-[2.5rem] bg-[conic-gradient(from_180deg_at_50%_50%,oklch(0.82_0.16_210/0.35),oklch(0.68_0.22_258/0.35),oklch(0.62_0.24_300/0.35),oklch(0.82_0.16_210/0.35))] opacity-70 blur-2xl" />

          {/* Card */}
          <div className="glow-border relative rounded-[2rem]">
            <div className="glow-border-inner glass-strong relative aspect-[4/5] overflow-hidden rounded-[2rem] p-2">
              <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-white/[0.05] to-white/0">
                {/* Glowing animated rings */}
                <div className="pointer-events-none absolute inset-0 grid place-items-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                    className="absolute h-72 w-72 rounded-full border border-[oklch(0.82_0.16_210/0.25)]"
                    style={{
                      maskImage:
                        "conic-gradient(from 0deg, transparent 0deg, black 60deg, black 180deg, transparent 240deg)",
                    }}
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute h-56 w-56 rounded-full border border-[oklch(0.68_0.22_258/0.3)]"
                    style={{
                      maskImage:
                        "conic-gradient(from 90deg, transparent 0deg, black 90deg, black 200deg, transparent 280deg)",
                    }}
                  />
                  <motion.div
                    animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.6, 0.35] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute h-40 w-40 rounded-full border border-[oklch(0.62_0.24_300/0.4)]"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.45, 0.2] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    className="absolute h-64 w-64 rounded-full bg-[radial-gradient(circle,oklch(0.68_0.22_258/0.25),transparent_70%)] blur-2xl"
                  />
                </div>

                {/* Center placeholder content */}
                <div className="relative z-10 flex flex-col items-center px-6 text-center">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    <div className="absolute inset-0 rounded-full bg-[oklch(0.68_0.22_258/0.5)] blur-2xl" />
                    <div className="relative grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.82_0.16_210)] via-[oklch(0.68_0.22_258)] to-[oklch(0.62_0.24_300)] shadow-[0_20px_60px_-10px_oklch(0.68_0.22_258/0.7)]">
                      <Sparkles size={32} className="text-primary-foreground" strokeWidth={1.75} />
                    </div>
                  </motion.div>

                  <p className="mt-6 font-display text-lg font-semibold tracking-tight text-foreground">
                    {hero.avatar.title}
                    <br />
                    <span className="text-gradient">{hero.avatar.accent}</span>
                  </p>
                  <p className="mt-3 max-w-[16rem] text-[11px] leading-relaxed text-muted-foreground">
                    {hero.avatar.caption}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[oklch(0.82_0.16_210)]" />
                    {hero.avatar.badge}
                  </span>
                </div>

                {/* Card chrome */}
                <div className="absolute left-4 top-4 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[oklch(0.82_0.16_210)]" />
                  <span className="h-2 w-2 rounded-full bg-[oklch(0.68_0.22_258)]" />
                  <span className="h-2 w-2 rounded-full bg-[oklch(0.62_0.24_300)]" />
                </div>
                <div className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {hero.avatar.fileLabel}
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  <span>{hero.avatar.statusLabel}</span>
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
          <span className="animate-bounce-soft h-1.5 w-1 rounded-full bg-gradient-to-b from-[oklch(0.82_0.16_210)] to-[oklch(0.62_0.24_300)]" />
        </span>
        <ChevronDown size={14} className="animate-bounce-soft" />
      </motion.a>
    </section>
  );
}
