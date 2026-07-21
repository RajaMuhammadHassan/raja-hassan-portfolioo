import { GithubIcon } from "./SocialIcons";
import { GitFork, Star, GitCommit } from "lucide-react";

const stats = [
  { icon: Star, label: "Stars", value: "—" },
  { icon: GitFork, label: "Forks", value: "—" },
  { icon: GitCommit, label: "Commits", value: "—" },
];

export function GithubSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
      <div className="glass-strong relative overflow-hidden rounded-2xl p-6">
        <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[oklch(0.68_0.22_258/0.18)] blur-3xl" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl glass">
              <GithubIcon width={18} height={18} />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold">GitHub Activity</h3>
              <p className="text-xs text-muted-foreground">Handle to be added</p>
            </div>
          </div>
          <a
            href="#"
            className="hidden rounded-full glass px-3.5 py-1.5 text-xs text-foreground/80 transition hover:text-foreground sm:inline-flex"
          >
            Visit Profile
          </a>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl glass p-4">
              <s.icon size={14} className="text-muted-foreground" />
              <div className="mt-2 font-display text-xl font-semibold">{s.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Contribution graph placeholder */}
        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
            <span>Contributions</span>
            <span>Last year — placeholder</span>
          </div>
          <div className="grid grid-cols-[repeat(52,minmax(0,1fr))] gap-[3px]">
            {Array.from({ length: 52 * 7 }).map((_, i) => {
              const seed = (i * 9301 + 49297) % 233280;
              const lvl = seed % 5; // 0..4
              const bg =
                lvl === 0
                  ? "oklch(1 0 0 / 0.05)"
                  : lvl === 1
                    ? "oklch(0.82 0.16 210 / 0.25)"
                    : lvl === 2
                      ? "oklch(0.68 0.22 258 / 0.45)"
                      : lvl === 3
                        ? "oklch(0.62 0.24 300 / 0.6)"
                        : "oklch(0.62 0.24 300 / 0.85)";
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
          {[1, 2, 3, 4].map((i) => (
            <li
              key={i}
              className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:-translate-y-0.5 hover:bg-white/[0.05]"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm text-foreground">repo-name-{i}</span>
                  <span className="rounded-full border border-white/10 px-1.5 py-0.5 text-[9px] uppercase tracking-widest text-muted-foreground">
                    public
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Short description placeholder.
                </p>
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">—</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
