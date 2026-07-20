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
    <section id={id} className={`scroll-mt-24 py-24 sm:py-32 ${className}`}>
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 max-w-2xl"
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {eyebrow}
            </span>
          )}
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            <span className="text-gradient">{title}</span>
          </h2>
          {description && (
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>
          )}
        </motion.div>
        {children}
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
      className={`glass flex min-h-40 flex-col items-center justify-center rounded-2xl border-dashed p-6 text-center ${className}`}
    >
      <span className="text-xs uppercase tracking-widest text-muted-foreground">Placeholder</span>
      <p className="mt-2 font-display text-lg font-semibold">{label}</p>
      {hint && <p className="mt-1 text-sm text-muted-foreground">{hint}</p>}
    </div>
  );
}
