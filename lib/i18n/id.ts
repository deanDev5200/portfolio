import type { Dictionary } from "./en";

/** Indonesian (Bahasa Indonesia) dictionary. */
export const id: Dictionary = {
  meta: {
    title: "Dean Putra - Full-Stack & Embedded Systems Developer",
    description:
      "Portofolio Dean Putra, siswa TKJ kelas 11 di SMK Negeri Bali Mandara yang bergerak di jaringan komputer, pengembangan web full-stack, dan perangkat keras IoT ESP32.",
    siteName: "Dean Putra - Portofolio",
    keywords: [
      "Dean Putra",
      "Full-Stack Developer",
      "Embedded Systems Developer",
      "ESP32",
      "Teknik Komputer dan Jaringan",
      "TKJ",
      "SMK Negeri Bali Mandara",
      "Next.js",
      "React",
      "Portofolio",
    ],
  },

  profile: {
    role: {
      line1: "Full-Stack &",
      line2: "Embedded Systems Developer",
    },
    subtitle:
      "Siswa Teknik Komputer dan Jaringan (TKJ) Kelas 11 di SMK Negeri Bali Mandara",
    tagline:
      "Menjembatani jaringan komputer, aplikasi web, dan inovasi perangkat keras IoT.",
  },

  nav: {
    links: {
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      contact: "Kontak",
    },
    mainLabel: "Utama",
    mobileLabel: "Mobile",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    languageLabel: "Ganti bahasa",
    languages: {
      en: "English",
      id: "Bahasa Indonesia",
    },
  },

  hero: {
    viewProjects: "Lihat Proyek",
    contactMe: "Hubungi Saya",
    scroll: "gulir",
  },

  about: {
    eyebrow: "Tentang Saya",
    title: { before: "Dari kabel jaringan ke ", highlight: "mikrokontroler" },
    paragraphs: [
      [
        { text: "Saya siswa " },
        { text: "Teknik Komputer dan Jaringan (TKJ)", style: "strong" },
        { text: " kelas 11 di " },
        { text: "SMK Negeri Bali Mandara", style: "strong" },
        {
          text: ", tempat saya mempelajari perancangan, konfigurasi, dan keamanan jaringan. Mulai dari kabel dan switching hingga server Linux serta protokol jaringan.",
        },
      ],
      [
        {
          text: "Selain pelajaran sekolah, saya membangun aplikasi web full-stack dengan ",
        },
        { text: "Next.js", style: "cyan" },
        { text: ", " },
        { text: "React", style: "cyan" },
        { text: ", " },
        { text: "TypeScript", style: "cyan" },
        {
          text: ", dan basis data SQL, dengan fokus pada antarmuka yang bersih dan alur data yang andal.",
        },
      ],
      [
        { text: "Di sisi perangkat keras, saya mengembangkan proyek dengan " },
        { text: "ESP32-C6", style: "emerald" },
        {
          text: ", menghubungkan sensor piezo, modul audio MP3, dan periferal lainnya untuk mengubah peristiwa fisik menjadi sistem interaktif secara real-time.",
        },
      ],
    ],
    focusAreas: [
      {
        label: "Rekayasa Jaringan",
        description:
          "TCP/IP, routing, switching, dan administrasi sistem Linux.",
      },
      {
        label: "Web Full-Stack",
        description:
          "Aplikasi type-safe dengan Next.js, React, dan basis data SQL.",
      },
      {
        label: "Embedded & IoT",
        description: "Firmware ESP32, sensor, dan sistem audio real-time.",
      },
    ],
    terminal: [
      {
        prompt: "whoami",
        output: "Dean Putra - Pengembang Full-Stack & Sistem Embedded",
      },
      { prompt: "school", output: "SMK Negeri Bali Mandara · TKJ (Kelas 11)" },
      { prompt: "focus", output: "jaringan · web · embedded / IoT" },
      { prompt: "stack", output: "Next.js · React · PostgreSQL · ESP32 · STM32 · Linux" },
    ],
  },

  skills: {
    eyebrow: "Keahlian",
    title: { before: "Tiga disiplin, ", highlight: "satu toolkit" },
    description:
      "Dasar jaringan, framework web modern, dan perangkat keras embedded. Digabungkan untuk menuntaskan proyek dari awal hingga akhir.",
    groups: {
      networking: {
        title: "Jaringan & Sistem",
        blurb: "Merancang, mengonfigurasi, dan memecahkan masalah jaringan nyata.",
        items: ["Jaringan Komputer", "Sistem Linux", "Protokol Jaringan"],
      },
      web: {
        title: "Pengembangan Web",
        blurb: "Membangun aplikasi web full-stack yang responsif dan type-safe.",
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
        title: "Sistem Embedded & Perangkat Keras",
        blurb: "Menjembatani firmware, sensor, dan dunia fisik.",
        items: [
          "ESP32",
          "Arduino",
          "STM32",
          "C/C++",
          "Sensor Digital",
          "Modul Audio",
          "Interfasing Hardware",
        ],
      },
    },
  },

  projects: {
    eyebrow: "Proyek",
    title: { before: "Berikut karya yang ", highlight: "kubuat" },
    description:
      "Kombinasi aplikasi web dan eksperimen perangkat keras. Filter berdasarkan kategori untuk mengeksplor.",
    filterLabel: "Filter proyek",
    filters: { all: "Semua", web: "Web Dev", iot: "IoT / Hardware" },
    categories: { web: "Web Dev", iot: "IoT / Hardware" },
    descriptions: {
      "gamelan-digital-esp32":
        "Gamelan gangsa digital interaktif yang memanfaatkan mikrokontroler ESP32-C6 dan sensor getar piezo untuk memicu pemutaran audio MP3 rekaman secara real-time.",
      "mandara-talenta":
        "Platform pengelolaan bakat dan pengembangan karakter tingkat sekolah.",
      "school-book-lending":
        "Aplikasi web yang mengotomatiskan alur peminjaman perpustakaan sekolah dan manajemen buku.",
    },
    liveDemo: "Demo Langsung",
    repo: "Repo GitHub",
    comingSoon: "Tautan segera hadir",
    empty: "Belum ada proyek di kategori ini. Silakan kembali lagi nanti.",
  },

  contact: {
    eyebrow: "Kontak",
    title: { before: "Mari bangun sesuatu ", highlight: "bersama" },
    description:
      "Terbuka untuk magang, kolaborasi, dan diskusi tentang jaringan, aplikasi web, atau proyek IoT embedded.",
    cards: {
      github: {
        label: "GitHub",
        description: "Kode sumber, proyek sampingan, dan eksperimen perangkat keras.",
      },
      linkedin: {
        label: "LinkedIn",
        description: "Mari terhubung secara profesional dan membahas peluang.",
      },
      email: {
        label: "Email",
        description: "Cara tercepat untuk menghubungi saya langsung.",
      },
    },
    comingSoon: "tautan segera hadir",
  },

  footer: {
    navLabel: "Footer",
    rights: "Hak cipta dilindungi",
    builtWith: "Dibangun dengan Next.js & Tailwind CSS",
  },
};
