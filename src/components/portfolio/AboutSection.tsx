import { motion } from "framer-motion";
import { about } from "@/config/portfolio";

export function AboutSection() {
  // Split headline around the accent phrase so we can gradient-highlight it.
  const [before, after] = about.headline.split(about.headlineAccent);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-10"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[oklch(0.68_0.22_258/0.18)] blur-3xl" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {about.eyebrow}
        </span>
        <h3 className="mt-3 font-display text-2xl font-semibold leading-snug sm:text-3xl">
          {before}
          <span className="text-gradient">{about.headlineAccent}</span>
          {after}
        </h3>

        {about.paragraphs.map((p, i) => (
          <p
            key={i}
            className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            {p}
          </p>
        ))}

        {about.stats.length > 0 && (
          <div
            className="mt-8 grid divide-x divide-white/10 rounded-2xl glass py-4 text-center"
            style={{ gridTemplateColumns: `repeat(${about.stats.length}, minmax(0, 1fr))` }}
          >
            {about.stats.map((m) => (
              <div key={m.k} className="px-3">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {m.k}
                </div>
                <div className="mt-1 font-display text-sm font-semibold">{m.v}</div>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2">
        {about.pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-2xl glass p-6 transition duration-500 hover:-translate-y-1 hover:bg-white/[0.06]"
          >
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.68_0.22_258/0.25)] to-[oklch(0.62_0.24_300/0.25)] ring-1 ring-white/10">
              <p.icon size={16} className="text-[oklch(0.82_0.16_210)]" />
            </div>
            <h4 className="mt-4 font-display text-sm font-semibold">{p.title}</h4>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              {p.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
