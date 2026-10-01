/**
 * Locale-independent site data: identity, links and project structure.
 *
 * All human-readable copy lives in `lib/i18n/` (en/id dictionaries).
 * URLs are kept here as placeholders — see the TODOs below.
 */

/** TODO: add your deployed URL (e.g. "https://deanputra.vercel.app").
 * Enables canonical + hreflang metadata. Leave "" to skip. */
export const siteUrl = "";

export const profile = {
  name: "I Dewa Gede Agung Dean Putra Purwita",
  initials: "DP",
} as const;

export const socials = {
  github: "https://github.com/deanDev5200",
  linkedin: "https://www.linkedin.com/in/d3anputra/",
  email: "deanpop5200@gmail.com",
};

/** Anchor ids used by the navbar/footer links (labels come from the dictionary). */
export type SectionId = "about" | "skills" | "projects" | "contact";

export const navLinks: { id: SectionId; href: string }[] = [
  { id: "about", href: "#about" },
  { id: "skills", href: "#skills" },
  { id: "projects", href: "#projects" },
  { id: "contact", href: "#contact" },
];

export type SkillGroupId = "networking" | "web" | "embedded";

/** Structural skeleton — titles, blurbs and item labels live in the dictionaries. */
export type SkillGroup = { id: SkillGroupId; icon: "network" | "code" | "cpu" };

export const skillGroups: SkillGroup[] = [
  { id: "networking", icon: "network" },
  { id: "web", icon: "code" },
  { id: "embedded", icon: "cpu" },
];

export type ProjectCategory = "web" | "iot";

export type ProjectId =
  | "gamelan-digital-esp32"
  | "mandara-talenta"
  | "school-book-lending";

export type Project = {
  id: ProjectId;
  title: string;
  category: ProjectCategory;
  stack: string[];
  /** TODO: add your deployed URL, or leave "" to show a disabled button */
  liveDemo: string;
  /** TODO: add your repository URL, or leave "" to show a disabled button */
  repo: string;
};

export const projects: Project[] = [
  {
    id: "gamelan-digital-esp32",
    title: "Gamelan Digital ESP32-C6",
    category: "iot",
    stack: ["ESP32-C6", "Piezo Sensor", "Audio MP3 Module", "C/C++"],
    liveDemo: "",
    repo: "",
  },
  {
    id: "mandara-talenta",
    title: "Mandara Talenta",
    category: "web",
    stack: ["React", "Tailwind CSS", "PostgreSQL"],
    liveDemo: "",
    repo: "",
  },
  {
    id: "school-book-lending",
    title: "School Book Lending System",
    category: "web",
    stack: ["Next.js", "React", "Tailwind CSS", "SQLite"],
    liveDemo: "",
    repo: "",
  },
];
