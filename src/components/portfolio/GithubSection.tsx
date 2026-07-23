import { GithubIcon } from "./SocialIcons";
import { GitFork, Star, GitCommit } from "lucide-react";
import { github } from "@/config/portfolio";

const iconByLabel: Record<string, typeof Star> = {
  Stars: Star,
  Forks: GitFork,
  Commits: GitCommit,
};

export function GithubSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
      <div className="glass-strong relative overflow-hidden rounded-2xl p-6">
        {/* Background Glow - Gold Accent */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl" />
        
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl glass text-amber-400">
              <GithubIcon width={18} height={18} />
            </span>
            <div className="min-w-0">
              <h3 className="truncate font-display text-lg font-semibold">GitHub Activity</h3>
              <p className="truncate text-xs text-muted-foreground">@{github.handle}</p>
            </div>
          </div>
          <a
            href={github.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden shrink-0 rounded-full bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 px-3.5 py-1.5 text-xs font-semibold text-zinc-950 shadow-[0_10px_25px_-5px_rgba(245,158,11,0.4)] transition hover:-translate-y-0.5 sm:inline-flex"
          >
            Visit Profile
          </a>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {github.stats.map((s) => {
            const Icon = iconByLabel[s.label] ?? Star;
            const isCommits = s.label === "Commits";
            return (
              <div 
                key={s.label} 
                className={`rounded-xl p-4 transition ${
                  isCommits 
                    ? "border border-amber-500/30 bg-amber-500/10" 
                    : "glass"
                }`}
              >
                <Icon size={14} className={isCommits ? "text-amber-400" : "text-amber-400/70"} />
                <div className={`mt-2 font-display text-xl font-semibold ${isCommits ? "text-amber-400" : "text-foreground"}`}>
                  {s.value}
                </div>
                <div className={`text-[10px] uppercase tracking-widest ${isCommits ? "text-amber-300/80" : "text-muted-foreground"}`}>
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contribution graph placeholder - Gold Theme Colors */}
        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
            <span>Contributions</span>
            <span>Last year — placeholder</span>
          </div>
          <div className="grid grid-cols-[repeat(52,minmax(0,1fr))] gap-[3px]">
            {Array.from({ length: 52 * 7 }).map((_, i) => {
              const seed = (i * 9301 + 49297) % 233280;
              const lvl = seed % 5;
              const bg =
                lvl === 0
                  ? "rgba(255, 255, 255, 0.05)"
                  : lvl === 1
                    ? "rgba(245, 158, 11, 0.2)"
                    : lvl === 2
                      ? "rgba(245, 158, 11, 0.45)"
                      : lvl === 3
                        ? "rgba(245, 158, 11, 0.7)"
                        : "rgba(251, 191, 36, 0.95)";
              return (
                <span
                  key={i}
                  className="aspect-square rounded-[2px]"
                  style={{ background: bg }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="glass rounded-2xl p-6">
        <h3 className="font-display text-lg font-semibold">Pinned Repositories</h3>
        <p className="mt-1 text-xs text-muted-foreground">Featured repos will appear here.</p>
        <ul className="mt-5 space-y-3">
          {github.pinned.map((r) => (
            <li key={r.name}>
              <a
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:-translate-y-0.5 hover:border-amber-500/30 hover:bg-white/[0.05]"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="truncate font-mono text-sm text-foreground group-hover:text-amber-400 transition">
                      {r.name}
                    </span>
                    <span className="rounded-full border border-white/10 px-1.5 py-0.5 text-[9px] uppercase tracking-widest text-muted-foreground">
                      public
                    </span>
                  </div>
                  <p className="mt-1 truncate text-xs text-muted-foreground">{r.description}</p>
                </div>
                <span className="shrink-0 font-mono text-[10px] text-muted-foreground group-hover:text-amber-400 transition">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}