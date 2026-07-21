import { motion } from "framer-motion";
import { ExternalLink, FileText, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

type Project = {
  title: string;
  description: string;
  stack: string[];
  slug: string;
};

const projects: Project[] = [
  {
    title: "Project title — TBA",
    description: "Concise description of the problem, approach, and impact.",
    stack: ["React", "TypeScript", "Tailwind"],
    slug: "project-01",
  },
  {
    title: "Project title — TBA",
    description: "Concise description of the problem, approach, and impact.",
    stack: ["Next.js", "Node.js", "SQL"],
    slug: "project-02",
  },
  {
    title: "Project title — TBA",
    description: "Concise description of the problem, approach, and impact.",
    stack: ["Java", "OOP", "JavaFX"],
    slug: "project-03",
  },
  {
    title: "Project title — TBA",
    description: "Concise description of the problem, approach, and impact.",
    stack: ["Python", "ML", "Pandas"],
    slug: "project-04",
  },
  {
    title: "Project title — TBA",
    description: "Concise description of the problem, approach, and impact.",
    stack: ["C++", "DSA", "CLI"],
    slug: "project-05",
  },
  {
    title: "Project title — TBA",
    description: "Concise description of the problem, approach, and impact.",
    stack: ["React", "Framer Motion", "UI/UX"],
    slug: "project-06",
  },
];

export function ProjectsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (
        <motion.article
          key={p.slug}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: i * 0.06 }}
          className="glow-border group relative overflow-hidden rounded-2xl transition duration-500 hover:-translate-y-1"
        >
          <div className="glow-border-inner glass-strong flex h-full flex-col rounded-2xl p-6">
            <div className="relative mb-4 aspect-video overflow-hidden rounded-xl ring-1 ring-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_0%,oklch(0.82_0.16_210/0.35),transparent_60%),radial-gradient(500px_200px_at_100%_100%,oklch(0.62_0.24_300/0.35),transparent_60%)]" />
              <div className="absolute inset-0 bg-grid opacity-40" />
              <div className="absolute inset-0 grid place-items-center opacity-40 transition-opacity duration-500 group-hover:opacity-80">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Preview
                </span>
              </div>
              <div className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                /{p.slug}
              </div>
              <ArrowUpRight
                size={16}
                className="absolute right-3 top-3 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[oklch(0.82_0.16_210)]"
              />
            </div>

            <h3 className="font-display text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2 pt-4 border-t border-white/5">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs text-foreground/80 transition hover:text-foreground"
              >
                <GithubIcon width={13} height={13} /> Code
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs text-foreground/80 transition hover:text-foreground"
              >
                <ExternalLink size={13} /> Live
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs text-foreground/80 transition hover:text-foreground"
              >
                <FileText size={13} /> Case Study
              </a>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
