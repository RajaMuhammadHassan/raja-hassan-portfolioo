import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Section } from "@/components/portfolio/Section";
import { Footer } from "@/components/portfolio/Footer";
import { PageLoader } from "@/components/portfolio/PageLoader";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { BackToTop } from "@/components/portfolio/BackToTop";
import { CommandPalette } from "@/components/portfolio/CommandPalette";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { SkillsGrid } from "@/components/portfolio/SkillsGrid";
import { ProjectsGrid } from "@/components/portfolio/ProjectsGrid";
import { CertificatesGrid } from "@/components/portfolio/CertificatesGrid";
import { EducationTimeline } from "@/components/portfolio/EducationTimeline";
import { GithubSection } from "@/components/portfolio/GithubSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Download, FileText } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="relative min-h-screen">
      <PageLoader />
      <ScrollProgress />
      <CommandPalette />
      <Navbar />
      <main>
        <Hero />

        <Section
          id="about"
          eyebrow="About"
          title="A brief introduction"
          description="Who I am, how I work, and what drives me forward."
        >
          <AboutSection />
        </Section>

        <Section
          id="skills"
          eyebrow="Skills"
          title="Toolbox & expertise"
          description="A curated stack across languages, frontend, backend, databases, tools, and AI-augmented workflows."
        >
          <SkillsGrid />
        </Section>

        <Section
          id="projects"
          eyebrow="Projects"
          title="Selected work"
          description="A showcase of engineering projects. Real titles, descriptions, and links will replace these placeholders."
        >
          <ProjectsGrid />
        </Section>

        <Section
          id="certificates"
          eyebrow="Certificates"
          title="Credentials & achievements"
          description="Certifications and course completions. Click any card to preview."
        >
          <CertificatesGrid />
        </Section>

        <Section
          id="education"
          eyebrow="Education"
          title="Academic journey"
          description="From foundational studies to a Bachelor of Science in Software Engineering."
        >
          <EducationTimeline />
        </Section>

        <Section
          id="github"
          eyebrow="GitHub"
          title="Code, commits & repositories"
          description="Live GitHub stats, contribution graph, and pinned repositories will be wired up here."
        >
          <GithubSection />
        </Section>

        <Section
          id="resume"
          eyebrow="Resume"
          title="Full CV"
          description="A downloadable PDF resume will be available here."
        >
          <div className="glass-strong relative overflow-hidden rounded-2xl p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[oklch(0.68_0.22_258/0.18)] blur-3xl" />
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Resume
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold">
                  A concise, engineering-first CV
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  The full PDF will be linked here once ready. Expect a clean,
                  one-page overview covering education, skills, projects, and contact.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.82_0.16_210)] via-[oklch(0.68_0.22_258)] to-[oklch(0.62_0.24_300)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_20px_50px_-15px_oklch(0.68_0.22_258/0.65)] transition hover:-translate-y-0.5"
                  >
                    <Download size={15} />
                    Download PDF
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-semibold text-foreground/90 transition hover:-translate-y-0.5 hover:text-foreground"
                  >
                    <FileText size={15} />
                    View online
                  </a>
                </div>
              </div>
              <div className="relative aspect-[8.5/11] max-h-[420px] overflow-hidden rounded-2xl ring-1 ring-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(600px_240px_at_20%_0%,oklch(0.82_0.16_210/0.25),transparent_60%),radial-gradient(600px_240px_at_100%_100%,oklch(0.62_0.24_300/0.25),transparent_60%)]" />
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div className="relative h-full w-full p-6">
                  <div className="h-3 w-40 rounded bg-white/20" />
                  <div className="mt-2 h-2 w-56 rounded bg-white/10" />
                  <div className="mt-6 space-y-2">
                    {[90, 75, 82, 68, 88, 70, 78].map((w, i) => (
                      <div
                        key={i}
                        className="h-2 rounded bg-white/10"
                        style={{ width: `${w}%` }}
                      />
                    ))}
                  </div>
                  <div className="mt-6 h-3 w-32 rounded bg-white/20" />
                  <div className="mt-2 space-y-2">
                    {[86, 72, 90, 65].map((w, i) => (
                      <div
                        key={i}
                        className="h-2 rounded bg-white/10"
                        style={{ width: `${w}%` }}
                      />
                    ))}
                  </div>
                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    <span>resume.pdf</span>
                    <span>preview</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Let's build something"
          description="Reach out for internships, collaborations, or a friendly conversation."
        >
          <ContactSection />
        </Section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
