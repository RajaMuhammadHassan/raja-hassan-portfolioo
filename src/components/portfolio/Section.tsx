import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, description, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-24 sm:py-32 ${className}`}>
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-2xl"
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[oklch(0.82_0.16_210)] to-[oklch(0.62_0.24_300)]" />
              {eyebrow}
            </span>
          )}
          <h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">
            <span className="text-gradient">{title}</span>
          </h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

export function PlaceholderCard({
  label,
  hint,
  className = "",
}: {
  label: string;
  hint?: string;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl glass p-6 transition duration-500 hover:-translate-y-1 hover:bg-white/[0.06] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -inset-px rounded-2xl bg-[conic-gradient(from_var(--angle,0deg),oklch(0.82_0.16_210/0.4),oklch(0.68_0.22_258/0.4),oklch(0.62_0.24_300/0.4),oklch(0.82_0.16_210/0.4))] [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude] [padding:1px]" />
      </div>
      <div className="relative flex min-h-40 flex-col items-center justify-center text-center">
        <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
          Placeholder
        </span>
        <p className="mt-2 font-display text-lg font-semibold">{label}</p>
        {hint && <p className="mt-1 text-sm text-muted-foreground">{hint}</p>}
      </div>
    </div>
  );
}
