import { Check } from "lucide-react";

import Reveal from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import type { Dictionary } from "@/lib/i18n";

/** Inline classes for rich-text segments (see lib/i18n/en.ts). */
const segmentStyles: Record<string, string> = {
  strong: "font-medium text-zinc-200",
  cyan: "text-cyan-300",
  emerald: "text-emerald-300",
};

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <Section id="about">
      <Reveal>
        <SectionHeading
          eyebrow={dict.about.eyebrow}
          title={
            <>
              {dict.about.title.before}
              <span className="gradient-text">{dict.about.title.highlight}</span>
            </>
          }
        />
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal delay={80} className="flex flex-col gap-5">
          <div className="space-y-5 text-[15px] leading-relaxed text-zinc-400 sm:text-base">
            {dict.about.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>
                {paragraph.map((segment, segmentIndex) => {
                  if (segment.style === "strong") {
                    return (
                      <strong
                        key={segmentIndex}
                        className="font-medium text-zinc-200"
                      >
                        {segment.text}
                      </strong>
                    );
                  }
                  if (segment.style) {
                    return (
                      <span
                        key={segmentIndex}
                        className={segmentStyles[segment.style]}
                      >
                        {segment.text}
                      </span>
                    );
                  }
                  return segment.text;
                })}
              </p>
            ))}
          </div>

          <ul className="mt-2 flex flex-col gap-3">
            {dict.about.focusAreas.map((area) => (
              <li
                key={area.label}
                className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/2 p-4 transition duration-300 hover:border-cyan-400/30 hover:bg-white/4"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-400/15 text-emerald-400 transition group-hover:bg-emerald-400/25">
                  <Check className="h-3 w-3" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-white">
                    {area.label}
                  </span>
                  <span className="mt-0.5 block text-sm text-zinc-400">
                    {area.description}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Terminal card */}
        <Reveal delay={160}>
          <div className="glass h-full overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/3 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 truncate font-mono text-[11px] text-zinc-400">
                dean@balimandara: ~/portfolio
              </span>
            </div>

            <div className="space-y-4 p-5 font-mono text-[12.5px] leading-relaxed sm:p-6 sm:text-[13px]">
              {dict.about.terminal.map((line) => (
                <div key={line.prompt}>
                  <p>
                    <span className="text-emerald-400">$</span>{" "}
                    <span className="text-cyan-300">{line.prompt}</span>
                  </p>
                  <p className="pl-4 wrap-break-word text-zinc-400">
                    {line.output}
                  </p>
                </div>
              ))}

              <p>
                <span className="text-emerald-400">$</span>{" "}
                <span
                  aria-hidden
                  className="inline-block h-3.5 w-2 translate-y-0.5 animate-pulse bg-cyan-400/80"
                />
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
