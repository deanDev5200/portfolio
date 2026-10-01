import { en, type Dictionary } from "./en";
import { id } from "./id";
import type { Locale } from "./locales";

/** All dictionaries, keyed by locale. Server-side only — pass slices as props. */
export const dictionaries: Record<Locale, Dictionary> = { en, id };

/** Synchronous lookup: both dictionaries are tiny static modules. */
export const getDictionary = (locale: Locale): Dictionary =>
  dictionaries[locale];

export { defaultLocale, hasLocale, locales } from "./locales";
export type { Locale } from "./locales";
export type { Dictionary };
