import { Code2, Cpu, Network } from "lucide-react";

import Reveal from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { skillGroups, type SkillGroup } from "@/lib/data";
import type { Dictionary } from "@/lib/i18n";

const icons = {
  network: Network,
  code: Code2,
  cpu: Cpu,
} satisfies Record<SkillGroup["icon"], typeof Network>;

export default function Skills({ dict }: { dict: Dictionary }) {
  return (
    <Section id="skills">
      <Reveal>
        <SectionHeading
          eyebrow={dict.skills.eyebrow}
          title={
            <>
              {dict.skills.title.before}
              <span className="gradient-text">{dict.skills.title.highlight}</span>
            </>
          }
          description={dict.skills.description}
        />
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = icons[group.icon];
          const localized = dict.skills.groups[group.id];

          return (
            <Reveal key={group.id} delay={index * 90}>
              <article className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/2 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.035] hover:shadow-[0_28px_60px_-32px_rgba(34,211,238,0.9)] sm:p-7">
                <span
                  aria-hidden
                  className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent transition duration-300 group-hover:via-cyan-400/60"
                />

                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition duration-300 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_26px_-6px_rgba(34,211,238,0.9)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs text-zinc-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    {localized.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {localized.blurb}
                  </p>
                </div>

                <ul className="mt-auto flex flex-wrap gap-2">
                  {localized.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/3 px-3 py-1.5 text-[13px] text-zinc-300 transition duration-300 hover:border-emerald-400/30 hover:text-emerald-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
