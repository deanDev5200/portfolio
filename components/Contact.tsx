import type { ComponentType } from "react";
import { ArrowUpRight, Mail } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import Reveal from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { socials } from "@/lib/data";
import type { Dictionary } from "@/lib/i18n";

type CardId = "github" | "linkedin" | "email";

type ContactCard = {
  id: CardId;
  icon: ComponentType<{ className?: string }>;
  href: string;
  accent: string;
};

/** Structural shell — labels/descriptions come from the dictionary. */
const cards: ContactCard[] = [
  {
    id: "github",
    icon: GithubIcon,
    href: socials.github,
    accent:
      "group-hover:border-white/25 group-hover:shadow-[0_28px_60px_-32px_rgba(255,255,255,0.6)]",
  },
  {
    id: "linkedin",
    icon: LinkedinIcon,
    href: socials.linkedin,
    accent:
      "group-hover:border-cyan-400/35 group-hover:shadow-[0_28px_60px_-32px_rgba(34,211,238,0.9)]",
  },
  {
    id: "email",
    icon: Mail,
    href: socials.email ? `mailto:${socials.email}` : "",
    accent:
      "group-hover:border-emerald-400/35 group-hover:shadow-[0_28px_60px_-32px_rgba(52,211,153,0.9)]",
  },
];

export default function Contact({ dict }: { dict: Dictionary }) {
  return (
    <Section id="contact">
      <Reveal>
        <SectionHeading
          eyebrow={dict.contact.eyebrow}
          title={
            <>
              {dict.contact.title.before}
              <span className="gradient-text">
                {dict.contact.title.highlight}
              </span>
            </>
          }
          description={dict.contact.description}
        />
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => {
          const Icon = card.icon;
          const disabled = !card.href;
          const copy = dict.contact.cards[card.id];

          const content = (
            <>
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/4 text-zinc-300 transition duration-300 group-hover:border-white/25 group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>

              <span className="mt-5 flex items-center gap-1.5 text-base font-semibold text-white">
                {copy.label}
                <ArrowUpRight className="h-4 w-4 text-zinc-400 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" />
              </span>

              <span className="mt-2 block text-sm leading-relaxed text-zinc-400">
                {copy.description}
              </span>

              {disabled ? (
                <span className="mt-4 inline-block font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-400">
                  {dict.contact.comingSoon}
                </span>
              ) : null}
            </>
          );

          const base =
            "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1.5";

          return (
            <Reveal key={card.id} delay={index * 90}>
              {disabled ? (
                <div
                  className={`${base} cursor-not-allowed opacity-80`}
                  title={dict.contact.comingSoon}
                  aria-disabled="true"
                >
                  {content}
                </div>
              ) : (
                <a
                  href={card.href}
                  target={card.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    card.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className={`${base} ${card.accent}`}
                >
                  {content}
                </a>
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
