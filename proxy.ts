import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, hasLocale, locales, type Locale } from "./lib/i18n/locales";

/** Pick the best supported locale from an `Accept-Language` header (q-values). */
function negotiateLocale(header: string | null): Locale {
  if (!header) return defaultLocale;

  const preferences = header
    .split(",")
    .map((part) => {
      const [tag = "", ...params] = part.trim().split(";");
      const qualityParam = params
        .map((param) => param.trim())
        .find((param) => param.startsWith("q="));
      const quality = qualityParam
        ? Number.parseFloat(qualityParam.slice(2))
        : 1;
      return {
        tag: tag.trim().toLowerCase(),
        quality: Number.isNaN(quality) ? 0 : quality,
      };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of preferences) {
    if (tag === "*") return defaultLocale;
    const primary = tag.split("-")[0];
    if (hasLocale(primary)) return primary;
  }
  return defaultLocale;
}

/**
 * Redirects locale-less paths to a localized one: `/` → `/en` or `/id`.
 *
 * The `NEXT_LOCALE` cookie (set by the language switcher) wins, then the
 * visitor's `Accept-Language` header, then the default locale. Paths that
 * already carry a locale prefix pass through untouched.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (pathnameHasLocale) return;

  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  const locale = hasLocale(cookieLocale)
    ? cookieLocale
    : negotiateLocale(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip framework internals and any path with a file extension
  // (favicon.ico, sitemap.xml, robots.txt, …).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
