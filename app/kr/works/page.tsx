import { pageMetadata, worksTranslations } from "@/data/seo";
import Image from "next/image";
import Link from "next/link";
import { koreanArtworks } from "@/data/artworks-kr";

export default function KoreanWorksPage() {
  return (
    <main className="kr-page">
      <section className="kr-page-heading">
        <p className="eyebrow">작품</p>
        <h1>작품, 2026</h1>
      </section>

      <section className="kr-works-section">
        <div className="kr-works-grid">
          {koreanArtworks.map((artwork) => (
            <Link
              href={`/kr/works/${artwork.slug}`}
              className="kr-work-card"
              key={artwork.slug}
            >
              <div className="kr-work-image" style={artwork.slug === "i-may-be-insignificant-or-i-may-not-be" ? { display: "grid", placeItems: "center" } : undefined}>
                {artwork.slug === "i-may-be-insignificant-or-i-may-not-be" ? (<div style={{ width: "82%", padding: "4%", background: "#fff", boxSizing: "border-box" }}>
                  <div style={{ position: "relative", aspectRatio: "130 / 97" }}>
                    <Image src={artwork.image} alt={artwork.title} fill
                      sizes="(max-width: 800px) 100vw, 50vw"
                      style={{ objectFit: "contain", filter: "saturate(1.15) contrast(1.04)" }} />
                  </div>
                </div>) : (
                  <Image src={artwork.image} alt={artwork.title} fill
                    sizes="(max-width: 800px) 100vw, 50vw" />
                )}
              </div>

              <div className="kr-work-meta">
                <span>{artwork.number}</span>

                <div>
                  <h2>{artwork.title}</h2>
                  <p>
                    {artwork.year} · {artwork.medium}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
export const metadata = pageMetadata('작품', '프랑스에서 활동하는 현대미술 작가 SOLEIRA의 회화 작품을 살펴보세요.', '/kr/works', worksTranslations);
