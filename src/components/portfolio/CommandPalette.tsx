import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, ArrowRight, Command } from "lucide-react";

const items = [
  { label: "Home", href: "#home", hint: "Hero section" },
  { label: "About", href: "#about", hint: "Biography" },
  { label: "Skills", href: "#skills", hint: "Toolbox" },
  { label: "Projects", href: "#projects", hint: "Selected work" },
  { label: "Certificates", href: "#certificates", hint: "Credentials" },
  { label: "Education", href: "#education", hint: "NUML" },
  { label: "GitHub", href: "#github", hint: "Stats & repos" },
  { label: "Resume", href: "#resume", hint: "Download CV" },
  { label: "Contact", href: "#contact", hint: "Get in touch" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return items;
    return items.filter(
      (i) => i.label.toLowerCase().includes(t) || i.hint.toLowerCase().includes(t)
    );
  }, [q]);

  const go = (href: string) => {
    setOpen(false);
    setQ("");
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] grid place-items-start justify-center bg-black/50 backdrop-blur-sm p-4 pt-[15vh]"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong w-full max-w-xl overflow-hidden rounded-2xl"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
              <Search size={16} className="text-muted-foreground" />
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Jump to a section…"
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              />
              <span className="hidden items-center gap-1 rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline-flex">
                ESC
              </span>
            </div>
            <ul className="max-h-72 overflow-auto p-2">
              {results.length === 0 && (
                <li className="px-3 py-6 text-center text-sm text-muted-foreground">
                  No matches.
                </li>
              )}
              {results.map((r) => (
                <li key={r.href}>
                  <button
                    onClick={() => go(r.href)}
                    className="group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition hover:bg-white/5"
                  >
                    <span>
                      <span className="text-sm font-medium">{r.label}</span>
                      <span className="ml-2 text-xs text-muted-foreground">{r.hint}</span>
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground"
                    />
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between border-t border-white/10 px-4 py-2.5 text-[11px] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Command size={12} /> Command palette
              </span>
              <span className="font-mono">Ctrl + K</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
