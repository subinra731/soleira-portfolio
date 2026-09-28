import type { MetadataRoute } from "next";
import { artworks } from "@/data/artworks";
import { siteUrl, homeTranslations, worksTranslations, aboutTranslations, artworkTranslations } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    ["/", homeTranslations], ["/en", homeTranslations], ["/kr", homeTranslations],
    ["/works", worksTranslations], ["/en/works", worksTranslations], ["/kr/works", worksTranslations],
    ["/about", aboutTranslations], ["/en/about", aboutTranslations], ["/kr/about", aboutTranslations],
  ] as const;
  const entries = [
    ...staticPages.map(([path, languages]) => ({ path, languages })),
    ...artworks.flatMap(({ slug }) => ["/works", "/en/works", "/kr/works"].map((prefix) => ({
      path: `${prefix}/${slug}`, languages: artworkTranslations(slug),
    }))),
  ];
  return entries.map(({ path, languages }) => ({
    url: `${siteUrl}${path}`,
    alternates: { languages: Object.fromEntries(Object.entries(languages).map(([language, url]) => [language, `${siteUrl}${url}`])) },
  }));
}
