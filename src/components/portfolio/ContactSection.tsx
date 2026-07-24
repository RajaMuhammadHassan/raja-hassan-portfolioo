import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { contact, socials } from "@/config/portfolio";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // ⚠️ Replace YOUR_FORMSPREE_ID with your actual Formspree endpoint ID
      const response = await fetch("https://formspree.io/f/mlgqpvwp", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
      <div className="glass-strong relative overflow-hidden rounded-3xl p-8">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
        <h3 className="font-display text-xl font-semibold">{contact.headline}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{contact.subhead}</p>

        <ul className="mt-6 space-y-3">
          {contact.channels.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3 transition hover:-translate-y-0.5 hover:bg-white/[0.05]"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg glass text-amber-400">
                  <c.icon size={15} />
                </span>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="truncate text-sm text-foreground/90">{c.value}</div>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Socials
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
                className="grid h-10 w-10 place-items-center rounded-full glass text-muted-foreground transition hover:-translate-y-0.5 hover:text-amber-400"
              >
                <s.icon width={16} height={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        className="glass rounded-3xl p-8"
      >
        <h3 className="font-display text-xl font-semibold">Send a message</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Feel free to reach out for collaborations or project inquiries.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Name
            </span>
            <input
              required
              name="name"
              type="text"
              placeholder="Your name"
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-amber-500/60 focus:bg-white/[0.05]"
            />
          </label>
          <label className="block">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Email
            </span>
            <input
              required
              name="email"
              type="email"
              placeholder="you@domain.com"
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-amber-500/60 focus:bg-white/[0.05]"
            />
          </label>
        </div>

        <label className="mt-4 block">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Subject
          </span>
          <input
            name="subject"
            type="text"
            placeholder="How can I help?"
            className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-amber-500/60 focus:bg-white/[0.05]"
          />
        </label>

        <label className="mt-4 block">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Message
          </span>
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Tell me a little about the project or role…"
            className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-amber-500/60 focus:bg-white/[0.05]"
          />
        </label>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            {status === "sent" && "Thanks — I'll get back to you soon!"}
            {status === "error" && "Something went wrong. Please try again."}
            {status === "idle" && contact.responseTime}
            {status === "submitting" && "Sending your message..."}
          </p>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-[0_20px_50px_-15px_rgba(245,158,11,0.5)] transition hover:-translate-y-0.5 disabled:opacity-50"
          >
            {status === "submitting" ? (
              <Loader2 size={15} className="animate-spin" />
            ) : (
              <Send size={15} className="transition group-hover:translate-x-0.5" />
            )}
            {status === "submitting" ? "Sending..." : "Send message"}
          </button>
        </div>
      </motion.form>
    </div>
  );
}