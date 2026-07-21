import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageCircle, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon, InstagramIcon, DiscordIcon } from "./SocialIcons";

const channels = [
  { icon: Mail, label: "Email", value: "email@placeholder.dev" },
  { icon: Phone, label: "Phone", value: "+92 — — — — —" },
  { icon: MessageCircle, label: "WhatsApp", value: "Handle to be added" },
  { icon: MapPin, label: "Location", value: "Pakistan" },
];

const socials = [
  { icon: GithubIcon, label: "GitHub" },
  { icon: LinkedinIcon, label: "LinkedIn" },
  { icon: XIcon, label: "X" },
  { icon: InstagramIcon, label: "Instagram" },
  { icon: DiscordIcon, label: "Discord" },
];

export function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
      <div className="glass-strong relative overflow-hidden rounded-2xl p-8">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[oklch(0.62_0.24_300/0.18)] blur-3xl" />
        <h3 className="font-display text-xl font-semibold">Get in touch</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Open to internships, collaborations, and thoughtful conversations.
        </p>

        <ul className="mt-6 space-y-3">
          {channels.map((c) => (
            <li
              key={c.label}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg glass">
                <c.icon size={15} />
              </span>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {c.label}
                </div>
                <div className="truncate text-sm text-foreground/90">{c.value}</div>
              </div>
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
                href="#"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full glass transition hover:-translate-y-0.5 hover:text-foreground"
              >
                <s.icon size={16} width={16} height={16} />
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
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
          setTimeout(() => setSent(false), 3500);
        }}
        className="glass rounded-2xl p-8"
      >
        <h3 className="font-display text-xl font-semibold">Send a message</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Form is a placeholder — wire it up to your inbox when ready.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Name
            </span>
            <input
              required
              type="text"
              placeholder="Your name"
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-[oklch(0.68_0.22_258/0.6)] focus:bg-white/[0.05]"
            />
          </label>
          <label className="block">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Email
            </span>
            <input
              required
              type="email"
              placeholder="you@domain.com"
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-[oklch(0.68_0.22_258/0.6)] focus:bg-white/[0.05]"
            />
          </label>
        </div>

        <label className="mt-4 block">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Subject
          </span>
          <input
            type="text"
            placeholder="How can I help?"
            className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-[oklch(0.68_0.22_258/0.6)] focus:bg-white/[0.05]"
          />
        </label>

        <label className="mt-4 block">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Message
          </span>
          <textarea
            required
            rows={5}
            placeholder="Tell me a little about the project or role…"
            className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-[oklch(0.68_0.22_258/0.6)] focus:bg-white/[0.05]"
          />
        </label>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            {sent ? "Thanks — I'll get back to you soon." : "Response time: ~24–48h"}
          </p>
          <button
            type="submit"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.82_0.16_210)] via-[oklch(0.68_0.22_258)] to-[oklch(0.62_0.24_300)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_20px_50px_-15px_oklch(0.68_0.22_258/0.65)] transition hover:-translate-y-0.5"
          >
            <Send size={15} className="transition group-hover:translate-x-0.5" />
            Send message
          </button>
        </div>
      </motion.form>
    </div>
  );
}
