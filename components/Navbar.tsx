"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Globe, Menu, X } from "lucide-react";

import { navLinks, profile } from "@/lib/data";
import type { Dictionary } from "@/lib/i18n";
import { locales, type Locale } from "@/lib/i18n/locales";

/** Section ids tracked for the active-link highlight. */
const sectionIds = ["home", "about", "skills", "projects", "contact"] as const;

/** Persist the visitor's choice for the root redirect in proxy.ts. */
function rememberLocale(target: Locale) {
  document.cookie = `NEXT_LOCALE=${target}; path=/; max-age=31536000`;
}

export default function Navbar({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [progress, setProgress] = useState(0);

  /* Reading progress bar + active section, computed from cached offsets --- */
  useEffect(() => {
    let metrics = { scrollable: 0, sections: [] as { id: string; top: number }[] };
    let frame = 0;

    const measure = () => {
      const doc = document.documentElement;
      metrics = {
        scrollable: Math.max(0, doc.scrollHeight - doc.clientHeight),
        sections: sectionIds
          .map((id) => document.getElementById(id))
          .filter((node): node is HTMLElement => node !== null)
          .map((node) => ({ id: node.id, top: node.offsetTop })),
      };
    };

    const update = () => {
      frame = 0;
      const scrolled = document.documentElement.scrollTop;

      const nextProgress =
        metrics.scrollable > 0 ? Math.min(1, scrolled / metrics.scrollable) : 0;

      // A marker just above the viewport middle decides which link is active.
      const marker = scrolled + window.innerHeight * 0.4;
      let nextActive = "";
      for (const section of metrics.sections) {
        if (section.top <= marker) nextActive = section.id;
      }

      setProgress((value) => (value === nextProgress ? value : nextProgress));
      setActive((value) => (value === nextActive ? value : nextActive));
    };

    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    const remeasure = () => {
      measure();
      schedule();
    };

    measure();
    schedule();

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", remeasure);

    // Web fonts can shift section offsets after the first paint.
    let disposed = false;
    document.fonts.ready.then(() => {
      if (!disposed) remeasure();
    });

    return () => {
      disposed = true;
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", remeasure);
    };
  }, []);

  /* Mobile menu behaviour ------------------------------------------------ */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  /* Language switch: remember the choice, then load the other locale,
     keeping the current section (hash) in place. ------------------------- */
  const goToLocale = (target: Locale) => {
    rememberLocale(target);
    setOpen(false);
    router.push(`/${target}${window.location.hash}`);
  };

  const linkClasses = (isActive: boolean) =>
    `relative rounded-lg px-3.5 py-2 text-sm font-medium transition duration-200 ${
      isActive ? "text-white" : "text-zinc-400 hover:text-white"
    }`;

  /** Compact EN/ID pill — desktop top bar. */
  const switcher = (
    <div
      role="group"
      aria-label={dict.nav.languageLabel}
      className="ml-2 flex items-center gap-0.5 rounded-full border border-white/10 bg-white/3 p-1"
    >
      {locales.map((code) =>
        code === locale ? (
          <span
            key={code}
            aria-current="true"
            lang={code}
            title={dict.nav.languages[code]}
            className="rounded-full bg-cyan-400/15 px-2.5 py-0.5 text-[11px] font-semibold text-cyan-200"
          >
            {code.toUpperCase()}
          </span>
        ) : (
          <a
            key={code}
            href={`/${code}`}
            lang={code}
            title={dict.nav.languages[code]}
            onClick={(event) => {
              event.preventDefault();
              goToLocale(code);
            }}
            className="rounded-full px-2.5 py-0.5 text-[11px] font-medium text-zinc-400 transition duration-200 hover:text-white"
          >
            {code.toUpperCase()}
          </a>
        ),
      )}
    </div>
  );

  return (
    <header className="sticky top-0 z-50">
      <div className="relative border-b border-white/10 bg-surface/70 backdrop-blur-xl">
        <nav
          aria-label={dict.nav.mainLabel}
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
        >
          <a href="#home" className="group flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-linear-to-br from-cyan-400 to-emerald-400 font-mono text-[13px] font-bold text-zinc-950 shadow-[0_0_24px_-8px_rgba(34,211,238,0.9)] transition duration-300 group-hover:shadow-[0_0_28px_-4px_rgba(34,211,238,0.9)]">
              {profile.initials}
            </span>
            <span className="text-[15px] font-semibold tracking-tight text-white">
              {profile.name}
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={linkClasses(isActive)}
                >
                  {isActive ? (
                    <span
                      aria-hidden
                      className="absolute inset-0 -z-10 rounded-lg bg-white/6 ring-1 ring-white/10"
                    />
                  ) : null}
                  {dict.nav.links[link.id]}
                </a>
              );
            })}
            {switcher}
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/3 text-zinc-300 transition hover:border-cyan-400/40 hover:text-white md:hidden"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>

        {/* Reading progress */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-0.5 bg-white/5"
        >
          <div
            className="h-full bg-linear-to-r from-cyan-400 to-emerald-400 transition-[width] duration-150 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        {/* Mobile menu (overlays content — no layout shift) */}
        <div
          id="mobile-menu"
          className={`absolute inset-x-0 top-full border-b border-white/10 bg-surface/95 backdrop-blur-xl md:hidden ${
            open ? "block" : "hidden"
          }`}
        >
          <nav
            aria-label={dict.nav.mobileLabel}
            className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4"
          >
            {/* Language switcher — full names for easier tapping */}
            <div
              role="group"
              aria-label={dict.nav.languageLabel}
              className="mb-2 flex items-center gap-2 rounded-xl border border-white/10 bg-white/3 p-2"
            >
              <Globe className="h-4 w-4 shrink-0 text-zinc-400" />
              {locales.map((code) =>
                code === locale ? (
                  <span
                    key={code}
                    aria-current="true"
                    lang={code}
                    className="rounded-lg bg-cyan-400/15 px-3 py-1.5 text-sm font-medium text-cyan-200"
                  >
                    {dict.nav.languages[code]}
                  </span>
                ) : (
                  <a
                    key={code}
                    href={`/${code}`}
                    lang={code}
                    onClick={(event) => {
                      event.preventDefault();
                      goToLocale(code);
                    }}
                    className="rounded-lg px-3 py-1.5 text-sm font-medium text-zinc-400 transition duration-200 hover:text-white"
                  >
                    {dict.nav.languages[code]}
                  </a>
                ),
              )}
            </div>

            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium transition ${
                    isActive
                      ? "bg-cyan-400/10 text-cyan-300"
                      : "text-zinc-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {dict.nav.links[link.id]}
                  <ArrowUpRight className="h-4 w-4 opacity-60" />
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
