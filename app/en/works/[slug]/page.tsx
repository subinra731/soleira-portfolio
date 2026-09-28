import type { Metadata } from "next";
import { pageMetadata, artworkTranslations } from "@/data/seo";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { englishArtworks } from "@/data/artworks-en";

export function generateStaticParams() {
  return englishArtworks.map((artwork) => ({
    slug: artwork.slug,
  }));
}

export default async function EnglishArtworkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const artwork = englishArtworks.find(
    (item) => item.slug === slug
  );

  if (!artwork) {
    notFound();
  }

  const index = englishArtworks.findIndex(
    (item) => item.slug === slug
  );

  const previous =
    englishArtworks[
      (index - 1 + englishArtworks.length) %
        englishArtworks.length
    ];

  const next =
    englishArtworks[
      (index + 1) % englishArtworks.length
    ];

  return (
    <main className="detail-page">
      <div className="detail-copy">
        <Link href="/en/works" className="back-link">
          ← Back to works
        </Link>

        <p className="eyebrow">
          {artwork.number} /{" "}
          {String(englishArtworks.length).padStart(2, "0")}
        </p>

        <h1>{artwork.title}</h1>

        <dl>
          <div>
            <dt>Year</dt>
            <dd>{artwork.year}</dd>
          </div>

          <div>
            <dt>Medium</dt>
            <dd>{artwork.medium}</dd>
          </div>

          <div>
            <dt>Dimensions</dt>
            <dd>{artwork.size}</dd>
          </div>
        </dl>

        <p className="detail-description">
          {artwork.description}
        </p>

        <div className="detail-nav">
          <Link href={`/en/works/${previous.slug}`}>
            ← Previous
          </Link>

          <Link href={`/en/works/${next.slug}`}>
            Next →
          </Link>
        </div>
      </div>

      <div className="detail-image-frame" style={artwork.slug === "i-may-be-insignificant-or-i-may-not-be" ? { display: "grid", placeItems: "center" } : undefined}>
        {artwork.slug === "i-may-be-insignificant-or-i-may-not-be" ? (
          <div style={{ width: "82%", padding: "4%", background: "#fff", boxSizing: "border-box" }}>
            <div style={{ position: "relative", aspectRatio: "130 / 97" }}>
              <Image src={artwork.image} alt={artwork.title} fill priority
                sizes="(max-width: 900px) 100vw, 60vw"
                style={{ objectFit: "contain", filter: "saturate(1.15) contrast(1.04)" }} />
            </div>
          </div>
        ) : (
          <Image src={artwork.image} alt={artwork.title} fill priority
            sizes="(max-width: 900px) 100vw, 60vw" className="detail-image" />
        )}
      </div>
    </main>
  );
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const artwork = englishArtworks.find((item) => item.slug === slug);
  if (!artwork) return {};
  return pageMetadata(
    artwork.title,
    `${artwork.title} — ${artwork.year}, ${artwork.medium}, ${artwork.size}. ${artwork.description}`,
    `/en/works/${slug}`,
    artworkTranslations(slug),
    artwork.image,
  );
}
