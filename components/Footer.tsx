import { navLinks, profile } from "@/lib/data";
import type { Dictionary } from "@/lib/i18n";

export default function Footer({ dict }: { dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-surface/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-8 sm:px-8 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-linear-to-br from-cyan-400 to-emerald-400 font-mono text-[11px] font-bold text-zinc-950">
            {profile.initials}
          </span>
          <p className="text-sm text-zinc-400">
            © {year} {profile.name}. {dict.footer.rights}
          </p>
        </div>

        <nav
          aria-label={dict.footer.navLabel}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition duration-200 hover:text-cyan-300"
            >
              {dict.nav.links[link.id]}
            </a>
          ))}
        </nav>

        <p className="font-mono text-[11px] text-zinc-400">
          {dict.footer.builtWith}
        </p>
      </div>
    </footer>
  );
}
