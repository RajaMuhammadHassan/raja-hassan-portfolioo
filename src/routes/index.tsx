import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Section, PlaceholderCard } from "@/components/portfolio/Section";
import { Footer } from "@/components/portfolio/Footer";
import { PageLoader } from "@/components/portfolio/PageLoader";
import { Mail, MapPin, Download, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/portfolio/SocialIcons";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="relative min-h-screen">
      <PageLoader />
      <Navbar />
      <main>
        <Hero />

        <Section
          id="about"
          eyebrow="About"
          title="A brief introduction"
          description="Detailed bio will be added soon. This section is reserved for a personal introduction, background, and areas of focus."
        >
          <div className="grid gap-6 md:grid-cols-3">
            <PlaceholderCard label="Bio" hint="Personal introduction goes here" className="md:col-span-2" />
            <PlaceholderCard label="Highlights" hint="Focus areas & interests" />
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow="Skills"
          title="Toolbox & expertise"
          description="Technologies, frameworks, and tools will be listed here."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Languages", "Frameworks", "Tools", "Concepts"].map((label) => (
              <PlaceholderCard key={label} label={label} />
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Projects"
          title="Selected work"
          description="Featured projects will appear here with descriptions, tech stacks, and live links."
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <article
                key={i}
                className="glow-border group relative overflow-hidden rounded-2xl transition duration-500 hover:-translate-y-1"
              >
                <div className="glow-border-inner glass-strong rounded-2xl p-6">
                  <div className="relative mb-4 aspect-video overflow-hidden rounded-xl ring-1 ring-white/10">
                    <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_0%,oklch(0.82_0.16_210/0.35),transparent_60%),radial-gradient(500px_200px_at_100%_100%,oklch(0.62_0.24_300/0.35),transparent_60%)]" />
                    <div className="absolute inset-0 bg-grid opacity-40" />
                    <div className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      /project-{i.toString().padStart(2, "0")}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-semibold">Project {i}</h3>
                    <ExternalLink
                      size={16}
                      className="text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[oklch(0.82_0.16_210)]"
                    />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Placeholder description. Project details to be added.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {["TypeScript", "React", "—"].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="certificates"
          eyebrow="Certificates"
          title="Credentials & achievements"
          description="Certifications and course completions will be showcased here."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <PlaceholderCard key={i} label={`Certificate ${i}`} hint="Title, issuer, date" />
            ))}
          </div>
        </Section>

        <Section
          id="education"
          eyebrow="Education"
          title="Academic journey"
        >
          <div className="glass relative overflow-hidden rounded-2xl p-8">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[oklch(0.72_0.22_265/0.15)] blur-3xl" />
            <div className="relative">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                In progress
              </span>
              <h3 className="mt-2 font-display text-2xl font-semibold">
                Bachelor of Science in Software Engineering
              </h3>
              <p className="mt-2 text-muted-foreground">
                National University of Modern Languages (NUML), Pakistan
              </p>
            </div>
          </div>
        </Section>

        <Section
          id="resume"
          eyebrow="Resume"
          title="Full CV"
          description="A downloadable resume will be available here."
        >
          <div className="glass flex flex-col items-start gap-6 rounded-2xl p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-xl font-semibold">Resume — coming soon</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                PDF will be linked here once provided.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.72_0.22_265)] to-[oklch(0.62_0.24_300)] px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-95"
            >
              <Download size={16} />
              Download PDF
            </a>
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Let's build something"
          description="Reach out for collaborations, roles, or a friendly conversation."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass rounded-2xl p-8">
              <h3 className="font-display text-lg font-semibold">Get in touch</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="grid h-9 w-9 place-items-center rounded-lg glass">
                    <Mail size={15} />
                  </span>
                  Email — to be added
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="grid h-9 w-9 place-items-center rounded-lg glass">
                    <MapPin size={15} />
                  </span>
                  Pakistan
                </li>
              </ul>
              <div className="mt-6 flex gap-2">
                <a href="#" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-full glass hover:text-primary">
                  <GithubIcon width={16} height={16} />
                </a>
                <a href="#" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full glass hover:text-primary">
                  <LinkedinIcon width={16} height={16} />
                </a>
              </div>
            </div>
            <PlaceholderCard label="Contact form" hint="Form fields to be added" className="min-h-full" />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
