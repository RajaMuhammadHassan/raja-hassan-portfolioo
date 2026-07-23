import { motion } from "framer-motion";

export function AboutSection() {
  // Provided Text Content
  const aboutData = {
    eyebrow: "ABOUT ME",
    headline: "Software Engineering student passionate about building practical software solutions.",
    headlineAccent: "practical software solutions",
    paragraphs: [
      "I'm Raja Muhammad Hassan, a Bachelor of Science in Software Engineering student at the National University of Modern Languages (NUML), Pakistan. I enjoy learning new technologies, solving programming problems, and building real-world software projects to strengthen my skills.",
      "My current focus is on Java, C++, Python, Artificial Intelligence, and modern web development. I believe in continuous learning, writing clean code, and gaining practical experience through personal and academic projects."
    ],
    stats: [
      { k: "University", v: "NUML" },
      { k: "Degree", v: "BS SE" },
      { k: "Status", v: "Student" }
    ],
    pillars: [
      {
        title: "Career Objective",
        text: "To build a successful career as a Software Engineer by continuously improving my technical skills, contributing to meaningful projects, and gaining industry experience through internships.",
        icon: (
          <svg className="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      },
      {
        title: "Learning Mindset",
        text: "I enjoy learning new technologies, improving my programming skills, and applying theoretical knowledge to practical software development projects.",
        icon: (
          <svg className="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        )
      },
      {
        title: "What I Enjoy",
        text: "Building software projects, exploring Artificial Intelligence, solving programming challenges, and continuously learning modern development tools and technologies.",
        icon: (
          <svg className="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      },
      {
        title: "Future Goals",
        text: "To become a skilled Software Engineer, contribute to innovative software solutions, and grow through continuous learning, teamwork, and real-world development experience.",
        icon: (
          <svg className="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      }
    ]
  };

  const [before, after] = aboutData.headline.split(aboutData.headlineAccent);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
      {/* Left Card: Biography & Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-10 border border-amber-500/20"
      >
        {/* Warm Golden Blur Radial Background */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
        
        {/* Amber/Gold Pill Badge with pulsing dot */}
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[10px] font-mono font-medium uppercase tracking-[0.2em] text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.2)]">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
          {aboutData.eyebrow}
        </div>
        
        <h3 className="mt-4 font-display text-2xl font-semibold leading-snug sm:text-3xl text-foreground">
          {before}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
            {aboutData.headlineAccent}
          </span>
          {after}
        </h3>

        {aboutData.paragraphs.map((p, i) => (
          <p
            key={i}
            className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            {p}
          </p>
        ))}

        {aboutData.stats.length > 0 && (
          <div
            className="mt-8 grid divide-x divide-white/10 rounded-2xl glass py-4 text-center border border-amber-500/20 bg-amber-950/20"
            style={{ gridTemplateColumns: `repeat(${aboutData.stats.length}, minmax(0, 1fr))` }}
          >
            {aboutData.stats.map((m) => (
              <div key={m.k} className="px-3">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {m.k}
                </div>
                <div className="mt-1 font-display text-sm font-semibold text-amber-300">{m.v}</div>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Right Grid: 4 Pillars with Amber/Gold Icons */}
      <div className="grid gap-4 sm:grid-cols-2">
        {aboutData.pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-2xl glass p-6 transition duration-500 hover:-translate-y-1 hover:border-amber-500/40 hover:bg-amber-500/5"
          >
            {/* Icon Box */}
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-500/10 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.25)] transition group-hover:scale-105 group-hover:border-amber-400">
              {p.icon}
            </div>

            <h4 className="mt-4 font-display text-sm font-semibold text-foreground">{p.title}</h4>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              {p.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}