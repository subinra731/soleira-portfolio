import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { koreanArtworks } from "@/data/artworks-kr";

type KoreanArtworkPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function KoreanArtworkPage({
  params,
}: KoreanArtworkPageProps) {
  const { slug } = await params;

  const artworkIndex = koreanArtworks.findIndex(
    (item) => item.slug === slug
  );

  if (artworkIndex === -1) {
    notFound();
  }

  const artwork = koreanArtworks[artworkIndex];

  const previousArtwork =
    artworkIndex > 0
      ? koreanArtworks[artworkIndex - 1]
      : null;

  const nextArtwork =
    artworkIndex < koreanArtworks.length - 1
      ? koreanArtworks[artworkIndex + 1]
      : null;

  return (
    <main className="kr-detail-page">
      <section className="kr-detail">
        <div className="kr-detail-visual">
          <div className="kr-detail-image">
            <Image
              src={artwork.image}
              alt={artwork.title}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 58vw"
            />
          </div>
        </div>

        <div className="kr-detail-info">
          <Link href="/kr/works" className="kr-back-link">
            ← 작품 목록
          </Link>

          <p className="eyebrow">
            {artwork.number} · {artwork.year}
          </p>

          <h1>{artwork.title}</h1>

          <div className="kr-detail-specs">
            <p>{artwork.medium}</p>
            <p>{artwork.size}</p>
          </div>

          <p className="kr-detail-description">
            {artwork.description}
          </p>
        </div>
      </section>

      <nav className="kr-detail-navigation">
        <div className="kr-nav-item">
          {previousArtwork ? (
            <Link href={`/kr/works/${previousArtwork.slug}`}>
              <span>이전 작품</span>
              <strong>{previousArtwork.title}</strong>
            </Link>
          ) : (
            <span />
          )}
        </div>

        <Link href="/kr/works" className="kr-all-works">
          모든 작품
        </Link>

        <div className="kr-nav-item kr-nav-next">
          {nextArtwork ? (
            <Link href={`/kr/works/${nextArtwork.slug}`}>
              <span>다음 작품</span>
              <strong>{nextArtwork.title}</strong>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </nav>
    </main>
  );
}