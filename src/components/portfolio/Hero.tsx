import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-32">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-float absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-[oklch(0.72_0.22_265/0.25)] blur-3xl" />
        <div
          className="animate-float absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-[oklch(0.62_0.24_300/0.22)] blur-3xl"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for opportunities
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Raja Muhammad
            <br />
            <span className="text-gradient">Hassan</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Software Engineering student at{" "}
            <span className="text-foreground">National University of Modern Languages (NUML)</span>
            , building refined, high-performance digital products.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.72_0.22_265)] to-[oklch(0.62_0.24_300)] px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-[oklch(0.72_0.22_265/0.35)] transition hover:opacity-95"
            >
              View my work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#resume"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium transition hover:bg-white/10"
            >
              <Download size={16} />
              Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[oklch(0.72_0.22_265/0.4)] to-[oklch(0.62_0.24_300/0.4)] blur-2xl" />
          <div className="glass-strong relative aspect-square overflow-hidden rounded-[2rem] p-2">
            <div className="grid h-full w-full place-items-center rounded-[1.75rem] bg-gradient-to-br from-white/5 to-white/0 text-center">
              <div>
                <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.72_0.22_265)] to-[oklch(0.62_0.24_300)] font-display text-3xl font-bold text-primary-foreground">
                  RH
                </div>
                <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
                  Profile image placeholder
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
