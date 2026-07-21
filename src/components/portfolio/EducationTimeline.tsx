import { motion } from "framer-motion";
import { GraduationCap, BookOpen, School } from "lucide-react";

type Milestone = {
  icon: typeof GraduationCap;
  status: string;
  title: string;
  place: string;
  detail: string;
};

const milestones: Milestone[] = [
  {
    icon: GraduationCap,
    status: "In progress",
    title: "Bachelor of Science in Software Engineering",
    place: "National University of Modern Languages (NUML), Pakistan",
    detail:
      "Focused on software architecture, data structures, algorithms, and modern web engineering.",
  },
  {
    icon: BookOpen,
    status: "Placeholder",
    title: "Intermediate / Pre-Engineering",
    place: "Institution — to be added",
    detail: "Details will be added.",
  },
  {
    icon: School,
    status: "Placeholder",
    title: "Secondary School Certificate",
    place: "Institution — to be added",
    detail: "Details will be added.",
  },
];

export function EducationTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-[oklch(0.82_0.16_210/0.6)] via-[oklch(0.68_0.22_258/0.4)] to-transparent md:left-6" />
      <ul className="space-y-6">
        {milestones.map((m, i) => (
          <motion.li
            key={m.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className="relative pl-14 md:pl-16"
          >
            <span className="absolute left-0 top-0 grid h-11 w-11 place-items-center rounded-full glass-strong md:h-12 md:w-12">
              <m.icon size={18} className="text-[oklch(0.82_0.16_210)]" />
              <span className="absolute inset-0 rounded-full ring-1 ring-[oklch(0.68_0.22_258/0.4)]" />
            </span>
            <div className="glass rounded-2xl p-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {m.status}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold">{m.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{m.place}</p>
              <p className="mt-3 text-sm text-foreground/80">{m.detail}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
