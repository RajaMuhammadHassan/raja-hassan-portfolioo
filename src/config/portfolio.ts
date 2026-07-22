/**
 * ─────────────────────────────────────────────────────────────
 *  PORTFOLIO CONFIG — single source of truth
 *  Everything on the site (text, links, socials, skills,
 *  projects, certificates, education, resume, contact) is
 *  driven from this file. Edit here, the UI updates.
 *
 *  Rules of thumb:
 *   • Any array item can be added / removed / reordered.
 *   • Empty strings render as elegant placeholders.
 *   • Icons are lucide-react components or the custom SVGs in
 *     ./components/portfolio/SocialIcons.
 * ─────────────────────────────────────────────────────────────
 */
import type { LucideIcon } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import {
  Code2,
  Layout,
  Database,
  Wrench,
  Sparkles,
  Server,
  Target,
  Rocket,
  BookOpen,
  Compass,
  GraduationCap,
  School,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  InstagramIcon,
  DiscordIcon,
  WhatsappIcon,
  YoutubeIcon,
} from "@/components/portfolio/SocialIcons";

type IconType = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;

/* ── Identity ─────────────────────────────────────────────── */
export const site = {
  name: "Raja Muhammad Hassan",
  shortName: "Raja Hassan",
  initials: "RH",
  role: "Software Engineer",
  university: "National University of Modern Languages (NUML)",
  universityShort: "NUML",
  degree: "BS Software Engineering",
  location: "Pakistan",
  availability: "Available for Internships",
  seo: {
    title: "Raja Muhammad Hassan — Software Engineer",
    description:
      "Portfolio of Raja Muhammad Hassan — Software Engineering student at NUML crafting modern, high-performance web experiences.",
  },
};

/* ── Navigation ───────────────────────────────────────────── */
export const navLinks: { href: string; label: string; hint?: string }[] = [
  { href: "#home", label: "Home", hint: "Hero" },
  { href: "#about", label: "About", hint: "Biography" },
  { href: "#skills", label: "Skills", hint: "Toolbox" },
  { href: "#projects", label: "Projects", hint: "Selected work" },
  { href: "#certificates", label: "Certificates", hint: "Credentials" },
  { href: "#education", label: "Education", hint: "Academic journey" },
  { href: "#github", label: "GitHub", hint: "Stats & repos" },
  { href: "#resume", label: "Resume", hint: "Download CV" },
  { href: "#contact", label: "Contact", hint: "Get in touch" },
];

/* ── Hero ─────────────────────────────────────────────────── */
export const hero = {
  firstName: "Raja Muhammad",
  lastName: "Hassan",
  tagline: "Software Engineer",
  bio: "I design and engineer refined, high-performance digital products — precise typography, considered motion, production-grade code.",
  cta: {
    primary: { label: "View my work", href: "#projects" },
    secondary: { label: "Download Resume", href: "#resume" },
    tertiary: { label: "Let's talk", href: "#contact" },
  },
  meta: [
    { k: "Focus", v: "Full-stack" },
    { k: "Based", v: "Pakistan" },
    { k: "Status", v: "Student" },
  ],
  // Tech chips floating around the avatar card — edit freely.
  techChips: [
    { label: "Java", top: "-4%", left: "-8%", delay: 0.2, float: "animate-float" },
    { label: "C++", top: "18%", right: "-12%", delay: 0.35, float: "animate-float-slower" },
    { label: "Python", top: "48%", left: "-14%", delay: 0.5, float: "animate-float-slower" },
    { label: "React", top: "62%", right: "-10%", delay: 0.6, float: "animate-float" },
    { label: "GitHub", bottom: "2%", left: "6%", delay: 0.75, float: "animate-float" },
    { label: "AI", bottom: "-2%", right: "10%", delay: 0.9, float: "animate-float-slower" },
  ],
  codeLines: [
    `const engineer = { name: "Raja Hassan" };`,
    `function craft<T extends Idea>(i: T) {`,
    `  return build(i).then(ship).catch(retry);`,
    `}`,
    `await deploy({ quality: "premium" });`,
    `// designing the future, one commit at a time`,
    `type Stack = "Java" | "C++" | "Python" | "React";`,
    `interface Avatar { interactive: true; dimension: 3; }`,
  ],
  avatar: {
    title: "Future Interactive",
    accent: "3D Avatar",
    caption:
      "A real-time interactive character will live here — reserved space for the upcoming 3D experience.",
    badge: "Coming soon",
    fileLabel: "avatar.tsx",
    statusLabel: "NUML • SE",
  },
};

/* ── About ────────────────────────────────────────────────── */
export const about = {
  eyebrow: "Biography",
  headline: "Software Engineering student on a mission to build refined digital products.",
  headlineAccent: "refined digital products",
  paragraphs: [
    "I'm Raja Muhammad Hassan, pursuing a Bachelor of Science in Software Engineering at the National University of Modern Languages (NUML), Pakistan. My focus is on writing clean, maintainable code, understanding systems from the ground up, and crafting interfaces that feel effortless.",
    "I care deeply about the details — typography, motion, performance, and accessibility — and I'm constantly sharpening both fundamentals and modern tooling so I can ship work that stands out.",
  ],
  stats: [
    { k: "University", v: "NUML" },
    { k: "Degree", v: "BS SE" },
    { k: "Status", v: "Student" },
  ],
  pillars: [
    {
      icon: Target as IconType,
      title: "Career objective",
      text: "Grow into a well-rounded software engineer building products people love — with an emphasis on quality, performance, and thoughtful design.",
    },
    {
      icon: BookOpen as IconType,
      title: "Learning mindset",
      text: "Curious by default. I move quickly from unknown to shipped by combining fundamentals, focused practice, and modern AI-augmented workflows.",
    },
    {
      icon: Rocket as IconType,
      title: "What I enjoy",
      text: "Turning ideas into polished, production-grade interfaces — end-to-end. From architecture and DSA to motion, micro-interactions, and the last 5% of polish.",
    },
    {
      icon: Compass as IconType,
      title: "Future goals",
      text: "Contribute to meaningful software teams, ship open-source, and continually raise the craft bar for every project I touch.",
    },
  ],
};

/* ── Skills ───────────────────────────────────────────────── */
export type SkillGroup = {
  icon: IconType;
  title: string;
  hint: string;
  items: string[];
  accent: string; // oklch color
};

export const skills: SkillGroup[] = [
  {
    icon: Code2,
    title: "Programming Languages",
    hint: "Core problem-solving stack",
    items: ["Java", "C++", "Python", "JavaScript", "TypeScript"],
    accent: "oklch(0.82 0.16 210)",
  },
  {
    icon: Layout,
    title: "Frontend",
    hint: "Interfaces & experiences",
    items: ["HTML", "CSS", "Tailwind", "React", "Next.js"],
    accent: "oklch(0.68 0.22 258)",
  },
  {
    icon: Server,
    title: "Backend",
    hint: "APIs & services",
    items: ["Node.js", "REST APIs", "Express"],
    accent: "oklch(0.62 0.24 300)",
  },
  {
    icon: Database,
    title: "Databases",
    hint: "Data & persistence",
    items: ["SQL", "MySQL", "PostgreSQL", "SQLite"],
    accent: "oklch(0.72 0.20 240)",
  },
  {
    icon: Wrench,
    title: "Tools",
    hint: "Daily workflow",
    items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Figma"],
    accent: "oklch(0.78 0.14 220)",
  },
  {
    icon: Sparkles,
    title: "AI Tools",
    hint: "Augmented engineering",
    items: ["ChatGPT", "Copilot", "Claude", "Cursor"],
    accent: "oklch(0.62 0.24 300)",
  },
];

/* ── Projects ─────────────────────────────────────────────── */
export type Project = {
  title: string;
  description: string;
  stack: string[];
  slug: string;
  image?: string;         // absolute or /public URL — falls back to a generative placeholder
  featured?: boolean;
  links?: {
    github?: string;
    live?: string;
    caseStudy?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "project-01",
    title: "Project title — TBA",
    description: "Concise description of the problem, approach, and impact.",
    stack: ["React", "TypeScript", "Tailwind"],
    featured: true,
  },
  {
    slug: "project-02",
    title: "Project title — TBA",
    description: "Concise description of the problem, approach, and impact.",
    stack: ["Next.js", "Node.js", "SQL"],
  },
  {
    slug: "project-03",
    title: "Project title — TBA",
    description: "Concise description of the problem, approach, and impact.",
    stack: ["Java", "OOP", "JavaFX"],
  },
  {
    slug: "project-04",
    title: "Project title — TBA",
    description: "Concise description of the problem, approach, and impact.",
    stack: ["Python", "ML", "Pandas"],
  },
  {
    slug: "project-05",
    title: "Project title — TBA",
    description: "Concise description of the problem, approach, and impact.",
    stack: ["C++", "DSA", "CLI"],
  },
  {
    slug: "project-06",
    title: "Project title — TBA",
    description: "Concise description of the problem, approach, and impact.",
    stack: ["React", "Framer Motion", "UI/UX"],
  },
];

/* ── Certificates ─────────────────────────────────────────── */
export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image?: string;        // preview image URL
  credentialUrl?: string;
  description?: string;
};

export const certificates: Certificate[] = [
  { title: "Certificate title — TBA", issuer: "Issuer", date: "Year" },
  { title: "Certificate title — TBA", issuer: "Issuer", date: "Year" },
  { title: "Certificate title — TBA", issuer: "Issuer", date: "Year" },
  { title: "Certificate title — TBA", issuer: "Issuer", date: "Year" },
  { title: "Certificate title — TBA", issuer: "Issuer", date: "Year" },
  { title: "Certificate title — TBA", issuer: "Issuer", date: "Year" },
];

/* ── Education ────────────────────────────────────────────── */
export type Milestone = {
  icon: IconType;
  status: string;
  title: string;
  place: string;
  detail: string;
};

export const education: Milestone[] = [
  {
    icon: GraduationCap,
    status: "In progress",
    title: "Bachelor of Science in Software Engineering",
    place: "National University of Modern Languages (NUML), Pakistan",
    detail:
      "Focused on software architecture, data structures, algorithms, and modern web engineering.",
  },
  {
    icon: BookOpen,
    status: "Placeholder",
    title: "Intermediate / Pre-Engineering",
    place: "Institution — to be added",
    detail: "Details will be added.",
  },
  {
    icon: School,
    status: "Placeholder",
    title: "Secondary School Certificate",
    place: "Institution — to be added",
    detail: "Details will be added.",
  },
];

/* ── GitHub ───────────────────────────────────────────────── */
export const github = {
  handle: "handle-to-be-added",
  profileUrl: "#",
  stats: [
    { label: "Stars", value: "—" },
    { label: "Forks", value: "—" },
    { label: "Commits", value: "—" },
  ],
  pinned: [
    { name: "repo-name-1", description: "Short description placeholder.", url: "#" },
    { name: "repo-name-2", description: "Short description placeholder.", url: "#" },
    { name: "repo-name-3", description: "Short description placeholder.", url: "#" },
    { name: "repo-name-4", description: "Short description placeholder.", url: "#" },
  ],
};

/* ── Resume ───────────────────────────────────────────────── */
export const resume = {
  downloadUrl: "#",     // point at your PDF when ready
  viewUrl: "#",
  fileName: "resume.pdf",
  headline: "A concise, engineering-first CV",
  description:
    "The full PDF will be linked here once ready. Expect a clean, one-page overview covering education, skills, projects, and contact.",
};

/* ── Contact ──────────────────────────────────────────────── */
export const contact = {
  headline: "Get in touch",
  subhead: "Open to internships, collaborations, and thoughtful conversations.",
  responseTime: "Response time: ~24–48h",
  channels: [
    { icon: Mail as IconType, label: "Email", value: "email@placeholder.dev", href: "mailto:email@placeholder.dev" },
    { icon: Phone as IconType, label: "Phone", value: "+92 — — — — —", href: "#" },
    { icon: MessageCircle as IconType, label: "WhatsApp", value: "Handle to be added", href: "#" },
    { icon: MapPin as IconType, label: "Location", value: "Pakistan", href: "#" },
  ],
};

/* ── Socials ──────────────────────────────────────────────── */
export type Social = {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const socials: Social[] = [
  { label: "GitHub", href: "#", icon: GithubIcon },
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
  { label: "X", href: "#", icon: XIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "Discord", href: "#", icon: DiscordIcon },
  { label: "WhatsApp", href: "#", icon: WhatsappIcon },
  { label: "YouTube", href: "#", icon: YoutubeIcon },
];

/* ── Footer ───────────────────────────────────────────────── */
export const footer = {
  copyright: `© ${new Date().getFullYear()} Raja Muhammad Hassan. Crafted with care.`,
  // Which socials to surface in the footer (subset of the socials array by label).
  showSocials: ["GitHub", "LinkedIn", "X", "Email"],
};
