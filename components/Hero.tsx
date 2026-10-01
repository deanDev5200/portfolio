import { ArrowDown, ChevronDown, GraduationCap, Mail } from "lucide-react";

import { profile } from "@/lib/data";
import type { Dictionary } from "@/lib/i18n";

const highlights = [
  "ESP32",
  "Arduino",
  "STM32",
  "Next.js",
  "React",
  "Linux",
  "PostgreSQL",
  "TypeScript",
];

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-5 pt-16 pb-24 sm:px-8"
    >
      {/* Ambient backdrop ------------------------------------------------ */}
      <div
        aria-hidden
        className="grid-overlay pointer-events-none absolute inset-0 -z-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-105 w-105 -translate-x-1/2 rounded-full bg-cyan-500/[0.14] blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 right-0 -z-10 h-95 w-95 rounded-full bg-emerald-500/10 blur-[120px]"
      />

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        {/* Name */}
        <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-cyan-400 sm:text-xs">
          {`// ${profile.name}`}
        </p>

        {/* Role title */}
        <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">{dict.profile.role.line1}</span>
          <span className="gradient-text block">{dict.profile.role.line2}</span>
        </h1>

        {/* Subtitle badge */}
        <span className="mt-7 inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.07] px-4 py-2 text-xs font-medium text-emerald-200 sm:text-sm">
          <GraduationCap className="h-4 w-4 shrink-0 text-emerald-400" />
          <span className="text-left leading-snug">{dict.profile.subtitle}</span>
        </span>

        {/* Tagline */}
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          {dict.profile.tagline}
        </p>

        {/* CTAs */}
        <div className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <a
            href="#projects"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-400 to-emerald-400 px-7 py-3.5 text-sm font-semibold text-zinc-950 shadow-[0_10px_30px_-12px_rgba(34,211,238,0.9)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_-12px_rgba(52,211,153,0.9)] sm:w-auto"
          >
            {dict.hero.viewProjects}
            <ArrowDown className="h-4 w-4 transition duration-300 group-hover:translate-y-0.5" />
          </a>

          <a
            href="#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/4 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-100 sm:w-auto"
          >
            {dict.hero.contactMe}
            <Mail className="h-4 w-4 transition duration-300 group-hover:scale-110" />
          </a>
        </div>

        {/* Tech strip */}
        <ul className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {highlights.map((item) => (
            <li
              key={item}
              className="rounded-md border border-white/10 bg-white/3 px-2.5 py-1 font-mono text-[11px] text-zinc-400 transition duration-300 hover:border-cyan-400/30 hover:text-cyan-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-400">
          {dict.hero.scroll}
        </span>
        <ChevronDown className="h-4 w-4 animate-bounce text-cyan-400" />
      </div>
    </section>
  );
}
