import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, X } from "lucide-react";

type Cert = { title: string; issuer: string; date: string };

const certs: Cert[] = [
  { title: "Certificate title — TBA", issuer: "Issuer", date: "Year" },
  { title: "Certificate title — TBA", issuer: "Issuer", date: "Year" },
  { title: "Certificate title — TBA", issuer: "Issuer", date: "Year" },
  { title: "Certificate title — TBA", issuer: "Issuer", date: "Year" },
  { title: "Certificate title — TBA", issuer: "Issuer", date: "Year" },
  { title: "Certificate title — TBA", issuer: "Issuer", date: "Year" },
];

export function CertificatesGrid() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <motion.button
            key={i}
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl glass p-5 text-left transition duration-500 hover:-translate-y-1 hover:bg-white/[0.06]"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(500px_200px_at_20%_0%,oklch(0.82_0.16_210/0.3),transparent_60%),radial-gradient(500px_200px_at_100%_100%,oklch(0.62_0.24_300/0.3),transparent_60%)]" />
              <div className="absolute inset-0 bg-grid opacity-40" />
              <div className="absolute inset-0 grid place-items-center">
                <Award size={30} className="text-foreground/60" />
              </div>
              <span className="absolute left-3 top-3 rounded-full glass px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Certificate
              </span>
            </div>
            <div className="mt-4">
              <h3 className="font-display text-base font-semibold">{c.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {c.issuer} • {c.date}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] grid place-items-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong relative w-full max-w-2xl overflow-hidden rounded-2xl p-6"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10"
                aria-label="Close"
              >
                <X size={16} />
              </button>
              <div className="aspect-video overflow-hidden rounded-xl ring-1 ring-white/10">
                <div className="relative h-full w-full bg-[radial-gradient(600px_240px_at_20%_0%,oklch(0.82_0.16_210/0.3),transparent_60%),radial-gradient(600px_240px_at_100%_100%,oklch(0.62_0.24_300/0.3),transparent_60%)]">
                  <div className="absolute inset-0 bg-grid opacity-40" />
                  <div className="absolute inset-0 grid place-items-center">
                    <Award size={48} className="text-foreground/70" />
                  </div>
                </div>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">
                {certs[active].title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {certs[active].issuer} • {certs[active].date}
              </p>
              <p className="mt-4 text-sm text-foreground/80">
                Certificate details will be added here.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
