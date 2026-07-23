import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export function Hero() {
  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth Movement Settings
  const springConfig = { damping: 30, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Dynamic 3D tilt angles
  const rotateX = useTransform(smoothY, [-200, 200], [10, -10]);
  const rotateY = useTransform(smoothX, [-200, 200], [-10, 10]);

  const handleMouseMove = (event: any) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32 bg-[#0a0907]">
      {/* 1. Background Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Main Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Text Content (Updated Text As Requested) */}
          <div className="flex flex-col items-start text-left relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-amber-300 bg-amber-950/40 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Internship
            </span>

            {/* Heading */}
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-6xl text-foreground">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Raja Hassan</span>
            </h1>

            {/* Subheading */}
            <h2 className="mt-3 text-base sm:text-lg font-semibold text-amber-300/90 tracking-wide">
              Software Engineering Student | Java • C++ • Python | AI & Web Development Enthusiast
            </h2>

            {/* Description */}
            <p className="mt-4 text-base text-muted-foreground max-w-xl leading-relaxed">
              I am a BS Software Engineering student at the National University of Modern Languages (NUML), Pakistan.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg transition hover:-translate-y-0.5 hover:shadow-amber-500/20"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="rounded-full glass border border-amber-500/30 px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Right Side: Design Graphics + Portrait */}
          <div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative flex justify-center items-center py-10 cursor-pointer lg:justify-end lg:pr-20"
          >
            {/* Background Intense Glow */}
            <div className="absolute h-[420px] w-[420px] rounded-full bg-amber-500/20 blur-[90px] pointer-events-none animate-pulse" />

            <motion.div
              style={{ 
                rotateX, 
                rotateY, 
                transformStyle: "preserve-3d",
                perspective: 1000 
              }}
              className="relative z-10 flex items-center justify-center"
            >
              {/* Outer Orbit Rings */}
              <div className="absolute h-[380px] w-[380px] sm:h-[450px] sm:w-[450px] rounded-full border border-amber-500/30 pointer-events-none animate-[spin_40s_linear_infinite]" />
              <div className="absolute h-[360px] w-[360px] sm:h-[420px] sm:w-[420px] rounded-full border border-dashed border-amber-400/20 pointer-events-none" />

              {/* Golden Wings / Brush SVG */}
              <svg
                className="absolute h-[420px] w-[420px] sm:h-[500px] sm:w-[500px] text-amber-400/40 pointer-events-none"
                viewBox="0 0 200 200"
                fill="none"
              >
                <path
                  d="M30,100 Q80,20 170,40 Q120,110 30,100 Z"
                  fill="url(#goldGrad)"
                  opacity="0.6"
                />
                <path
                  d="M170,100 Q120,180 30,160 Q80,90 170,100 Z"
                  fill="url(#goldGrad)"
                  opacity="0.4"
                />
                <defs>
                  <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fef08a" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#b45309" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Sparkles Particles */}
              <div className="absolute inset-0 pointer-events-none">
                <span className="absolute top-10 left-12 h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_8px_#fde047] animate-ping" />
                <span className="absolute top-28 right-8 h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_10px_#f59e0b]" />
                <span className="absolute bottom-12 left-16 h-1 w-1 rounded-full bg-amber-200 shadow-[0_0_6px_#fef08a]" />
                <span className="absolute bottom-20 right-14 h-2.5 w-2.5 rounded-full bg-amber-500 shadow-[0_0_12px_#d97706]" />
              </div>

              {/* Circular Gold Frame */}
              <div className="relative h-80 w-80 sm:h-96 sm:w-96 overflow-hidden rounded-full border-4 border-amber-400/80 shadow-[0_0_50px_10px_rgba(251,191,36,0.3)] bg-zinc-900 flex items-center justify-center">
                
                <div className="absolute inset-0 bg-gradient-to-b from-amber-950/40 via-transparent to-transparent z-10 pointer-events-none" />

                <motion.img
                  src="/profile-transparent.png"
                  alt="Professional Portrait of Raja Hassan"
                  className="h-full w-full object-cover object-center scale-110 pointer-events-none relative z-0"
                />

                <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-amber-500/10 blur-[50px]" />
                <div className="absolute h-4 w-[250px] rounded-full bg-amber-500/5 rotate-[-20deg] blur-sm top-1/4" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}