import { motion } from "framer-motion";
import { Target, Rocket, BookOpen, Compass } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Career objective",
    text: "Grow into a well-rounded software engineer building products people love — with an emphasis on quality, performance, and thoughtful design.",
  },
  {
    icon: BookOpen,
    title: "Learning mindset",
    text: "Curious by default. I move quickly from unknown to shipped by combining fundamentals, focused practice, and modern AI-augmented workflows.",
  },
  {
    icon: Rocket,
    title: "What I enjoy",
    text: "Turning ideas into polished, production-grade interfaces — end-to-end. From architecture and DSA to motion, micro-interactions, and the last 5% of polish.",
  },
  {
    icon: Compass,
    title: "Future goals",
    text: "Contribute to meaningful software teams, ship open-source, and continually raise the craft bar for every project I touch.",
  },
];

export function AboutSection() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="glass-strong relative overflow-hidden rounded-2xl p-8"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[oklch(0.68_0.22_258/0.18)] blur-3xl" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Biography
        </span>
        <h3 className="mt-3 font-display text-2xl font-semibold leading-snug sm:text-3xl">
          Software Engineering student on a mission to build{" "}
          <span className="text-gradient">refined digital products</span>.
        </h3>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
          I&apos;m Raja Muhammad Hassan, pursuing a Bachelor of Science in Software
          Engineering at the National University of Modern Languages (NUML), Pakistan.
          My focus is on writing clean, maintainable code, understanding systems from the
          ground up, and crafting interfaces that feel effortless.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          I care deeply about the details — typography, motion, performance, and
          accessibility — and I&apos;m constantly sharpening both fundamentals and modern
          tooling so I can ship work that stands out.
        </p>

        <div className="mt-8 grid grid-cols-3 divide-x divide-white/10 rounded-xl glass py-4 text-center">
          {[
            { k: "University", v: "NUML" },
            { k: "Degree", v: "BS SE" },
            { k: "Status", v: "Student" },
          ].map((m) => (
            <div key={m.k} className="px-3">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {m.k}
              </div>
              <div className="mt-1 font-display text-sm font-semibold">{m.v}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-2xl glass p-5 transition duration-500 hover:-translate-y-1 hover:bg-white/[0.06]"
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
