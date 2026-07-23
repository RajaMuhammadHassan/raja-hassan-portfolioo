import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";
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
import { resume, site } from "@/config/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: site.seo.title },
      { name: "description", content: site.seo.description },
      { property: "og:title", content: site.seo.title },
      { property: "og:description", content: site.seo.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: site.seo.title },
      { name: "twitter:description", content: site.seo.description },
    ],
  }),
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
          <div className="glass-strong relative overflow-hidden rounded-3xl p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Resume
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold">
                  {resume.headline}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {resume.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={resume.downloadUrl}
                    download={resume.fileName}
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-[0_20px_50px_-15px_rgba(245,158,11,0.5)] transition hover:-translate-y-0.5"
                  >
                    <Download size={15} />
                    Download PDF
                  </a>
                  <a
                    href={resume.viewUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-semibold text-foreground/90 transition hover:-translate-y-0.5 hover:text-foreground"
                  >
                    <FileText size={15} />
                    View online
                  </a>
                </div>
              </div>
              <div className="relative flex min-h-[350px] w-full items-center justify-center overflow-hidden rounded-2xl ring-1 ring-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6">
                {/* Background Glow */}
                <div className="absolute h-48 w-48 rounded-full bg-amber-500/20 blur-3xl" />
                
                {/* Center Icon & Badge */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-amber-300 via-amber-500 to-amber-600 shadow-[0_15px_35px_-5px_rgba(245,158,11,0.5)]">
                    <FileText size={40} className="text-zinc-950" />
                  </div>
                  
                  <p className="mt-4 font-display text-base font-semibold text-foreground">
                    Official Curriculum Vitae
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Updated for 2026 • Verified PDF
                  </p>

                  <span className="mt-4 inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    Ready to download
                  </span>
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