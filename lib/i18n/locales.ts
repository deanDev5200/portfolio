/**
 * Supported locales.
 *
 * Kept in its own dependency-free module so `proxy.ts` can import it without
 * pulling the dictionaries into the proxy bundle.
 */
export const locales = ["en", "id"] as const;

export type Locale = (typeof locales)[number];

/** Locale served at `/` before the visitor has expressed a preference. */
export const defaultLocale: Locale = "en";

/** Type guard narrowing an arbitrary string to a supported locale. */
export const hasLocale = (value: unknown): value is Locale =>
  locales.includes(value as Locale);
