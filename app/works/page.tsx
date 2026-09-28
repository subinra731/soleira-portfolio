import { pageMetadata, worksTranslations } from "@/data/seo";
import Image from "next/image";
import Link from "next/link";
import { artworks } from "@/data/artworks";

export default function WorksPage() {
  return (
    <main className="page-shell">
      <header className="page-title">
        <p className="eyebrow">Archive</p>
        <h1>Œuvres</h1>
        <p>Sélection d'œuvres · 2026</p>
      </header>

      <div className="works-grid">
        {artworks.map((artwork) => (
          <Link
            href={`/works/${artwork.slug}`}
            className="art-card"
            key={artwork.slug}
          >
            <div
              className="art-image-wrap works-ratio"
              style={
                artwork.slug === "i-may-be-insignificant-or-i-may-not-be"
                  ? { display: "grid", placeItems: "center" }
                  : undefined
              }
            >
              {artwork.slug === "i-may-be-insignificant-or-i-may-not-be" ? (
                <div
                  style={{
                    width: "82%",
                    padding: "4%",
                    background: "#fff",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "130 / 97",
                    }}
                  >
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      fill
                      sizes="(max-width: 800px) 100vw, 33vw"
                      style={{
                        objectFit: "contain",
                        filter: "saturate(1.15) contrast(1.04)",
                      }}
                    />
                  </div>
                </div>
              ) : (
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  sizes="(max-width: 800px) 100vw, 33vw"
                  className="art-image"
                />
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
export const metadata = pageMetadata('Œuvres', 'Découvrez les peintures et les œuvres sélectionnées de SOLEIRA, artiste contemporaine en France.', '/works', worksTranslations);
