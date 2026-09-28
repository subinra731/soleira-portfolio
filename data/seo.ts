import type { Metadata } from "next";

export const siteUrl = "https://soleira.gallery";
const shareImage = "/artworks/ham-sa-seyo.jpg";

export function pageMetadata(title: string, description: string, path: string, translations?: Record<string, string>, image = shareImage): Metadata {
  const canonical = path === "/fr" ? "/" : path;
  return {
    title: { absolute: title.includes("SOLEIRA") ? title : `${title} | SOLEIRA` },
    description,
    alternates: {
      canonical,
      ...(translations ? { languages: Object.fromEntries(Object.entries(translations).map(([language, url]) => [language, url === "/fr" ? "/" : url])) } : {}),
    },
    openGraph: {
      title, description, url: canonical, siteName: "SOLEIRA",
      images: [{ url: image.split("?")[0], alt: title }], type: "website",
    },
    twitter: { card: "summary_large_image", title, description, images: [image.split("?")[0]] },
  };
}

export const homeTranslations = { fr: "/", en: "/en", ko: "/kr", "x-default": "/" };
export const worksTranslations = { fr: "/works", en: "/en/works", ko: "/kr/works", "x-default": "/works" };
export const aboutTranslations = { fr: "/about", en: "/en/about", ko: "/kr/about", "x-default": "/about" };
export const artworkTranslations = (slug: string) => ({
  fr: `/works/${slug}`, en: `/en/works/${slug}`, ko: `/kr/works/${slug}`, "x-default": `/works/${slug}`,
});
