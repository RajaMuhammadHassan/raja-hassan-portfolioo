import { motion } from "framer-motion";
import { Code2, Layout, Database, Wrench, Sparkles, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type SkillGroup = {
  icon: LucideIcon;
  title: string;
  hint: string;
  items: string[];
  accent: string; // oklch color
};

const groups: SkillGroup[] = [
  {
    icon: Code2,
    title: "Programming Languages",
    hint: "Core problem-solving stack",
    items: ["Java", "C++", "Python", "JavaScript", "TypeScript"],
    accent: "oklch(0.82 0.16 210)",
  },
  {
    icon: Layout,
    title: "Frontend",
    hint: "Interfaces & experiences",
    items: ["HTML", "CSS", "Tailwind", "React", "Next.js"],
    accent: "oklch(0.68 0.22 258)",
  },
  {
    icon: Server,
    title: "Backend",
    hint: "APIs & services (in progress)",
    items: ["Node.js", "REST APIs", "Express", "—", "—"],
    accent: "oklch(0.62 0.24 300)",
  },
  {
    icon: Database,
    title: "Databases",
    hint: "Data & persistence",
    items: ["SQL", "MySQL", "PostgreSQL", "SQLite", "—"],
    accent: "oklch(0.72 0.20 240)",
  },
  {
    icon: Wrench,
    title: "Tools",
    hint: "Daily workflow",
    items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Figma"],
    accent: "oklch(0.78 0.14 220)",
  },
  {
    icon: Sparkles,
    title: "AI Tools",
    hint: "Augmented engineering",
    items: ["ChatGPT", "Copilot", "Claude", "Cursor", "—"],
    accent: "oklch(0.62 0.24 300)",
  },
];

export function SkillsGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((g, i) => (
        <motion.div
          key={g.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="group relative overflow-hidden rounded-2xl glass p-6 transition duration-500 hover:-translate-y-1"
        >
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `radial-gradient(400px 200px at 30% 0%, ${g.accent.replace(")", " / 0.25)")}, transparent 60%)`,
            }}
          />
          <div className="relative flex items-start justify-between">
            <div
              className="grid h-11 w-11 place-items-center rounded-xl"
              style={{
                background: `linear-gradient(135deg, ${g.accent.replace(")", " / 0.2)")}, transparent)`,
                border: `1px solid ${g.accent.replace(")", " / 0.35)")}`,
              }}
            >
              <g.icon size={18} style={{ color: g.accent }} />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="relative mt-5 font-display text-lg font-semibold">{g.title}</h3>
          <p className="relative mt-1 text-xs text-muted-foreground">{g.hint}</p>
          <ul className="relative mt-5 flex flex-wrap gap-1.5">
            {g.items.map((it) => (
              <li
                key={it}
                className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-foreground/80 transition group-hover:border-white/20"
              >
                {it}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
