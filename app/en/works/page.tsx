import { pageMetadata, worksTranslations } from "@/data/seo";
import Image from "next/image";
import Link from "next/link";
import { englishArtworks } from "@/data/artworks-en";

export default function EnglishWorksPage() {
  return (
    <main className="page-shell">
      <header className="page-title">
        <p className="eyebrow">Archive</p>
        <h1>Works</h1>
        <p>Selected works, 2026</p>
      </header>

      <div className="works-grid">
        {englishArtworks.map((artwork) => (
          <Link
            href={`/en/works/${artwork.slug}`}
            className="art-card"
            key={artwork.slug}
          >
            <div className="art-image-wrap works-ratio" style={artwork.slug === "i-may-be-insignificant-or-i-may-not-be" ? { display: "grid", placeItems: "center" } : undefined}>
              {artwork.slug === "i-may-be-insignificant-or-i-may-not-be" ? (<div style={{ width: "82%", padding: "4%", background: "#fff", boxSizing: "border-box" }}>
                  <div style={{ position: "relative", aspectRatio: "130 / 97" }}>
                    <Image src={artwork.image} alt={artwork.title} fill
                      sizes="(max-width: 800px) 100vw, 50vw"
                      style={{ objectFit: "contain", filter: "saturate(1.15) contrast(1.04)" }} />
                  </div>
                </div>) : (
                <Image src={artwork.image} alt={artwork.title} fill
                  sizes="(max-width: 800px) 100vw, 33vw" className="art-image" />
              )}
            </div>

            <div className="art-meta">
              <span>{artwork.number}</span>
              <h2>{artwork.title}</h2>
              <p>
                {artwork.year} · {artwork.medium} · {artwork.size}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
export const metadata = pageMetadata('Works', 'Browse paintings and selected works by SOLEIRA, a contemporary artist based in France.', '/en/works', worksTranslations);
