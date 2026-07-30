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
              <div className="kr-work-image">
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                />
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