import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";

import { getDictionary, hasLocale, locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/data";

import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** Statically render `/en` and `/id`; anything else 404s. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();

  const dict = getDictionary(locale);

  return {
    // TODO: set your deployed URL in lib/data.ts — this switches on
    // metadataBase (canonical) and the hreflang alternates below.
    ...(siteUrl
      ? {
          metadataBase: new URL(siteUrl),
          alternates: {
            canonical: `/${locale}`,
            languages: {
              en: "/en",
              id: "/id",
              "x-default": "/en",
            },
          },
        }
      : {}),
    title: {
      default: dict.meta.title,
      template: "%s | Dean Putra",
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    authors: [{ name: "Dean Putra" }],
    creator: "Dean Putra",
    openGraph: {
      type: "website",
      locale: locale === "id" ? "id_ID" : "en_US",
      siteName: dict.meta.siteName,
      title: dict.meta.title,
      description: dict.profile.tagline,
    },
    twitter: {
      card: "summary",
      title: dict.meta.title,
      description: dict.profile.tagline,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  return (
    <html
      lang={hasLocale(locale) ? locale : "en"}
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-dvh flex-col bg-surface font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
