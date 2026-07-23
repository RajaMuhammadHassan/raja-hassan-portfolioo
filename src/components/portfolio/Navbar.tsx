import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/config/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(navLinks[0]?.href ?? "#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navLinks
        .map((l) => document.querySelector(l.href) as HTMLElement | null)
        .filter(Boolean) as HTMLElement[];
      const y = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= y) {
          setActive(`#${sections[i].id}`);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="container-page pt-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300 sm:px-4 sm:py-3 ${
            scrolled ? "glass-strong shadow-luxury border-amber-500/20" : "glass"
          }`}
        >
          {/* Logo / RH Badge (Gold/Amber Theme) */}
          <a href="#home" className="group flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-amber-500/10 border border-amber-500/40 font-display text-sm font-bold text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)] transition group-hover:scale-105 group-hover:border-amber-400">
              {site.initials}
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-wide sm:block text-foreground group-hover:text-amber-300 transition">
              {site.shortName}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                    active === l.href
                      ? "text-amber-300 font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active === l.href && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-amber-500/10 border border-amber-500/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            {/* "Let's talk" Button (Gold/Amber Theme) */}
            <a
              href="#contact"
              className="hidden rounded-full bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 px-5 py-2 text-sm font-bold text-zinc-950 shadow-[0_0_20px_rgba(245,158,11,0.4)] transition hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] md:inline-block"
            >
              Let's talk
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full glass lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {open ? <X size={18} /> : <Menu size={18} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="glass-strong mt-2 overflow-hidden rounded-2xl p-2 lg:hidden border border-amber-500/20"
            >
              <ul className="flex flex-col">
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm transition ${
                        active === l.href
                          ? "bg-amber-500/10 text-amber-300 font-medium"
                          : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                      }`}
                    >
                      <span>{l.label}</span>
                      {l.hint && (
                        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">
                          {l.hint}
                        </span>
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}