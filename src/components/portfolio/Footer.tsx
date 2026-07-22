import { Mail } from "lucide-react";
import { footer, socials, site } from "@/config/portfolio";

export function Footer() {
  const shown = footer.showSocials
    .map((label) =>
      label === "Email"
        ? { label: "Email", href: "#contact", icon: Mail as unknown as (typeof socials)[number]["icon"] }
        : socials.find((s) => s.label === label),
    )
    .filter(Boolean) as { label: string; href: string; icon: (typeof socials)[number]["icon"] }[];

  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container-page flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          {footer.copyright}
          <span className="sr-only"> — {site.name}</span>
        </p>
        <div className="flex items-center gap-2">
          {shown.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              title={s.label}
              className="grid h-10 w-10 place-items-center rounded-full glass text-muted-foreground transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-foreground"
            >
              <s.icon width={16} height={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
