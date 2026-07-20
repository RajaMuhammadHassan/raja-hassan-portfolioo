import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "./SocialIcons";

const socials = [
  { icon: GithubIcon, label: "GitHub", href: "#" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
  { icon: XIcon, label: "X (Twitter)", href: "#" },
  { icon: Mail, label: "Email", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container-page flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Raja Muhammad Hassan. Crafted with care.
        </p>
        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="grid h-10 w-10 place-items-center rounded-full glass transition hover:bg-white/10 hover:text-primary"
            >
              <s.icon width={16} height={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
