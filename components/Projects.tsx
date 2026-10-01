"use client";

import { useMemo, useState, type ReactNode } from "react";
import { Code2, Cpu, ExternalLink } from "lucide-react";

import { GithubIcon } from "@/components/BrandIcons";
import Reveal from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { projects, type Project, type ProjectCategory } from "@/lib/data";
import type { Dictionary } from "@/lib/i18n";

type Filter = "all" | ProjectCategory;

const categoryIcons = {
  web: Code2,
  iot: Cpu,
} as const;

/** Accent palette per category — literal classes so Tailwind can scan them. */
const categoryStyles: Record<
  ProjectCategory,
  { badge: string; hover: string }
> = {
  web: {
    badge: "border-cyan-400/25 bg-cyan-400/10 text-cyan-300",
    hover: "hover:border-cyan-400/35 hover:shadow-[0_30px_60px_-32px_rgba(34,211,238,0.9)]",
  },
  iot: {
    badge: "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",
    hover: "hover:border-emerald-400/35 hover:shadow-[0_30px_60px_-32px_rgba(52,211,153,0.9)]",
  },
};

function ActionLink({
  href,
  icon,
  comingSoonTitle,
  children,
}: {
  href: string;
  icon: ReactNode;
  comingSoonTitle: string;
  children: ReactNode;
}) {
  const base =
    "inline-flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-[13px] font-medium transition duration-200";

  if (!href) {
    return (
      <span
        className={`${base} cursor-not-allowed border border-white/10 bg-white/2 text-zinc-600`}
        title={comingSoonTitle}
        aria-disabled="true"
      >
        {icon}
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} border border-white/15 bg-white/4 text-zinc-200 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white`}
    >
      {icon}
      {children}
    </a>
  );
}

function ProjectCard({
  project,
  index,
  dict,
}: {
  project: Project;
  index: number;
  dict: Dictionary;
}) {
  const CategoryIcon = categoryIcons[project.category];
  const styles = categoryStyles[project.category];

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/2 p-6 transition duration-300 hover:-translate-y-1.5 ${styles.hover}`}
    >
      <span
        aria-hidden
        className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent transition duration-300 group-hover:via-cyan-400/60"
      />

      <div className="flex items-center justify-between gap-3">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] ${styles.badge}`}
        >
          <CategoryIcon className="h-3 w-3" />
          {dict.projects.categories[project.category]}
        </span>
        <span className="font-mono text-xs text-zinc-400">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold leading-snug tracking-tight text-white transition duration-300 group-hover:text-cyan-100">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
        {dict.projects.descriptions[project.id]}
      </p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-white/10 bg-white/3 px-2 py-1 font-mono text-[11px] text-zinc-400"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-stretch gap-2 border-t border-white/10 pt-5">
        <ActionLink
          href={project.liveDemo}
          icon={<ExternalLink className="h-3.5 w-3.5" />}
          comingSoonTitle={dict.projects.comingSoon}
        >
          {dict.projects.liveDemo}
        </ActionLink>
        <ActionLink
          href={project.repo}
          icon={<GithubIcon className="h-3.5 w-3.5" />}
          comingSoonTitle={dict.projects.comingSoon}
        >
          {dict.projects.repo}
        </ActionLink>
      </div>
    </article>
  );
}

export default function Projects({ dict }: { dict: Dictionary }) {
  const [filter, setFilter] = useState<Filter>("all");

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: dict.projects.filters.all },
    { id: "web", label: dict.projects.filters.web },
    { id: "iot", label: dict.projects.filters.iot },
  ];

  const visible = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );

  const countFor = (id: Filter) =>
    id === "all"
      ? projects.length
      : projects.filter((project) => project.category === id).length;

  return (
    <Section id="projects">
      <Reveal>
        <SectionHeading
          eyebrow={dict.projects.eyebrow}
          title={
            <>
              {dict.projects.title.before}
              <span className="gradient-text">
                {dict.projects.title.highlight}
              </span>
            </>
          }
          description={dict.projects.description}
        />
      </Reveal>

      {/* Filter tabs */}
      <Reveal delay={80}>
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
          role="group"
          aria-label={dict.projects.filterLabel}
        >
          {filters.map((item) => {
            const isActive = filter === item.id;
            const count = countFor(item.id);

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition duration-200 ${
                  isActive
                    ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-200 shadow-[0_0_26px_-10px_rgba(34,211,238,0.9)]"
                    : "border-white/10 bg-white/3 text-zinc-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${
                    isActive ? "bg-cyan-400/20 text-cyan-200" : "bg-white/10 text-zinc-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Cards — re-keyed so the grid re-animates on every filter change */}
      <div
        key={filter}
        className="animate-fade-up mt-10 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {visible.length > 0 ? (
          visible.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              dict={dict}
            />
          ))
        ) : (
          <p className="col-span-full rounded-2xl border border-dashed border-white/10 p-10 text-center text-sm text-zinc-400">
            {dict.projects.empty}
          </p>
        )}
      </div>
    </Section>
  );
}
