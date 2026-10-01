/**
 * English dictionary. the source of truth for the `Dictionary` type.
 *
 * Every other locale must satisfy this exact shape; TypeScript fails the build
 * if a translation is missing (or adds one that does not exist).
 *
 * Inline styles for rich-text segments:
 *   strong → emphasised keyword, cyan/emerald → coloured tech name.
 */
export const en = {
  meta: {
    title: "Dean Putra - Full-Stack & Embedded Systems Developer",
    description:
      "Portfolio of Dean Putra, an 11th-grade TKJ student at SMK Negeri Bali Mandara working across computer networks, full-stack web development, and ESP32 IoT hardware.",
    siteName: "Dean Putra - Portfolio",
    keywords: [
      "Dean Putra",
      "Full-Stack Developer",
      "Embedded Systems Developer",
      "ESP32",
      "Computer & Network Engineering",
      "TKJ",
      "SMK Negeri Bali Mandara",
      "Next.js",
      "React",
      "Portfolio",
    ],
  },

  profile: {
    role: {
      line1: "Full-Stack &",
      line2: "Embedded Systems Developer",
    },
    subtitle:
      "11th Grade Computer and Network Engineering (TKJ) Student at SMK Negeri Bali Mandara",
    tagline:
      "Bridging computer networks, web applications, and hardware IoT innovations.",
  },

  nav: {
    links: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    mainLabel: "Main",
    mobileLabel: "Mobile",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageLabel: "Switch language",
    languages: {
      en: "English",
      id: "Bahasa Indonesia",
    },
  },

  hero: {
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    scroll: "scroll",
  },

  about: {
    eyebrow: "About Me",
    title: { before: "From network cables to ", highlight: "microcontrollers" },
    paragraphs: [
      [
        { text: "I'm an 11th-grade " },
        { text: "Computer and Network Engineering (TKJ)", style: "strong" },
        { text: " student at " },
        { text: "SMK Negeri Bali Mandara", style: "strong" },
        {
          text: ", where I study how networks are designed, configured, and secured. From cabling and switching to Linux servers and network protocols.",
        },
      ],
      [
        {
          text: "Alongside my coursework I build full-stack web applications with ",
        },
        { text: "Next.js", style: "cyan" },
        { text: ", " },
        { text: "React", style: "cyan" },
        { text: ", " },
        { text: "TypeScript", style: "cyan" },
        {
          text: ", and SQL databases, focusing on clean interfaces and reliable data flows.",
        },
      ],
      [
        { text: "On the hardware side I develop with the " },
        { text: "ESP32-C6", style: "emerald" },
        {
          text: ", wiring up piezo sensors, MP3 audio modules, and other peripherals to turn physical events into real-time, interactive systems.",
        },
      ],
    ],
    focusAreas: [
      {
        label: "Network Engineering",
        description: "TCP/IP, routing, switching and Linux systems administration.",
      },
      {
        label: "Full-Stack Web",
        description:
          "Type-safe applications with Next.js, React and SQL databases.",
      },
      {
        label: "Embedded & IoT",
        description: "ESP32 firmware, sensors and real-time audio systems.",
      },
    ],
    terminal: [
      {
        prompt: "whoami",
        output: "Dean Putra - Full-Stack & Embedded Systems Developer",
      },
      { prompt: "school", output: "SMK Negeri Bali Mandara · TKJ (Grade 11)" },
      { prompt: "focus", output: "networking · web apps · embedded / IoT" },
      { prompt: "stack", output: "Next.js · React · PostgreSQL · ESP32 · STM32 · Linux" },
    ],
  },

  skills: {
    eyebrow: "Skills",
    title: { before: "Three disciplines, ", highlight: "one toolkit" },
    description:
      "Networking fundamentals, modern web frameworks, and embedded hardware. Combined to ship projects end to end.",
    groups: {
      networking: {
        title: "Networking & Systems",
        blurb: "Designing, configuring, and troubleshooting real-world networks.",
        items: ["Computer Networking", "Linux Systems", "Network Protocols"],
      },
      web: {
        title: "Web Development",
        blurb: "Shipping responsive, type-safe full-stack web applications.",
        items: [
          "Next.js",
          "React",
          "Tailwind CSS",
          "TypeScript/JavaScript",
          "SQLite",
          "PostgreSQL",
        ],
      },
      embedded: {
        title: "Embedded Systems & Hardware",
        blurb: "Bridging firmware, sensors, and the physical world.",
        items: [
          "ESP32",
          "Arduino",
          "STM32",
          "C/C++",
          "Digital Sensors",
          "Audio Modules",
          "Hardware Interfacing",
        ],
      },
    },
  },

  projects: {
    eyebrow: "Projects",
    title: { before: "Things I've ", highlight: "built" },
    description:
      "A mix of web applications and hardware experiments. Filter by category to explore.",
    filterLabel: "Filter projects",
    filters: { all: "All", web: "Web Dev", iot: "IoT / Hardware" },
    categories: { web: "Web Dev", iot: "IoT / Hardware" },
    descriptions: {
      "gamelan-digital-esp32":
        "An interactive digital gangsa gamelan leveraging ESP32-C6 microcontrollers and piezo vibration sensors to trigger real-time recorded MP3 audio playback.",
      "mandara-talenta":
        "A school-wide talent management and character development platform.",
      "school-book-lending":
        "A web app automating school library borrowing workflows and book management.",
    },
    liveDemo: "Live Demo",
    repo: "GitHub Repo",
    comingSoon: "Link coming soon",
    empty: "No projects in this category yet. Check back soon.",
  },

  contact: {
    eyebrow: "Contact",
    title: { before: "Let's build something ", highlight: "together" },
    description:
      "Open to internships, collaborations, and conversations about networks, web applications, or embedded IoT projects.",
    cards: {
      github: {
        label: "GitHub",
        description: "Source code, side projects and hardware experiments.",
      },
      linkedin: {
        label: "LinkedIn",
        description: "Let's connect professionally and talk opportunities.",
      },
      email: {
        label: "Email",
        description: "The fastest way to reach me directly.",
      },
    },
    comingSoon: "link coming soon",
  },

  footer: {
    navLabel: "Footer",
    rights: "All rights reserved.",
    builtWith: "Built with Next.js & Tailwind CSS",
  },
};

export type Dictionary = typeof en;
