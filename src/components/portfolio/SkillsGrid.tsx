import { motion } from "framer-motion";
import { skills } from "@/config/portfolio";

export function SkillsGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((g, i) => (
        <motion.div
          key={g.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="group relative overflow-hidden rounded-2xl glass p-6 transition duration-500 hover:-translate-y-1 hover:border-amber-500/30"
        >
          {/* Radial Gold Hover Glow */}
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `radial-gradient(400px 200px at 30% 0%, rgba(245, 158, 11, 0.25), transparent 60%)`,
            }}
          />
          <div className="relative flex items-start justify-between">
            {/* ICON CONTAINER - Fixed Amber Gold Theme */}
            <div
              className="grid h-11 w-11 place-items-center rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shadow-[0_0_15px_-3px_rgba(245,158,11,0.3)] transition group-hover:scale-105 group-hover:border-amber-500/50"
            >
              <g.icon size={18} className="text-amber-400" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="relative mt-5 font-display text-lg font-semibold">{g.title}</h3>
          <p className="relative mt-1 text-xs text-muted-foreground">{g.hint}</p>
          {g.items.length > 0 ? (
            <ul className="relative mt-5 flex flex-wrap gap-1.5">
              {g.items.map((it) => (
                <li
                  key={it}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-foreground/80 transition group-hover:border-amber-500/30 group-hover:text-amber-300"
                >
                  {it}
                </li>
              ))}
            </ul>
          ) : (
            <p className="relative mt-5 text-[11px] italic text-muted-foreground/70">
              Add items to this skill group in <code className="font-mono">src/config/portfolio.ts</code>.
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
}