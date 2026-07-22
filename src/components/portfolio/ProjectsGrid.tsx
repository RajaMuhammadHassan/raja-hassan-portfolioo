import { motion } from "framer-motion";
import { ExternalLink, FileText, ArrowUpRight, Star } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { projects } from "@/config/portfolio";

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
              {p.image ? (
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_0%,oklch(0.82_0.16_210/0.35),transparent_60%),radial-gradient(500px_200px_at_100%_100%,oklch(0.62_0.24_300/0.35),transparent_60%)]" />
                  <div className="absolute inset-0 bg-grid opacity-40" />
                  <div className="absolute inset-0 grid place-items-center opacity-40 transition-opacity duration-500 group-hover:opacity-80">
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      Preview
                    </span>
                  </div>
                </>
              )}
              <div className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                /{p.slug}
              </div>
              {p.featured && (
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[oklch(0.82_0.16_210)] to-[oklch(0.62_0.24_300)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.68_0.22_258/0.7)]">
                  <Star size={10} strokeWidth={2.5} />
                  Featured
                </span>
              )}
              <ArrowUpRight
                size={16}
                className="absolute right-3 top-3 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[oklch(0.82_0.16_210)]"
              />
            </div>

            <h3 className="font-display text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>

            {p.stack.length > 0 && (
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
            )}

            <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-white/5 pt-4">
              {p.links?.github && (
                <a
                  href={p.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs text-foreground/80 transition hover:-translate-y-0.5 hover:text-foreground"
                >
                  <GithubIcon width={13} height={13} /> Code
                </a>
              )}
              {p.links?.live && (
                <a
                  href={p.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs text-foreground/80 transition hover:-translate-y-0.5 hover:text-foreground"
                >
                  <ExternalLink size={13} /> Live
                </a>
              )}
              {p.links?.caseStudy && (
                <a
                  href={p.links.caseStudy}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs text-foreground/80 transition hover:-translate-y-0.5 hover:text-foreground"
                >
                  <FileText size={13} /> Case Study
                </a>
              )}
              {!p.links?.github && !p.links?.live && !p.links?.caseStudy && (
                <span className="text-[11px] italic text-muted-foreground/70">
                  Links coming soon
                </span>
              )}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
