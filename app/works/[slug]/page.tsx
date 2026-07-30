import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { artworks } from "@/data/artworks";

export function generateStaticParams() {
  return artworks.map((artwork) => ({ slug: artwork.slug }));
}

export default async function ArtworkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artwork = artworks.find((item) => item.slug === slug);
  if (!artwork) notFound();

  const index = artworks.findIndex((item) => item.slug === slug);
  const previous = artworks[(index - 1 + artworks.length) % artworks.length];
  const next = artworks[(index + 1) % artworks.length];

  return (
    <main className="detail-page">
      <div className="detail-copy">
        <Link href="/works" className="back-link">← Back to works</Link>
        <p className="eyebrow">{artwork.number} / {String(artworks.length).padStart(2, "0")}</p>
        <h1>{artwork.title}</h1>
        <dl>
          <div><dt>Year</dt><dd>{artwork.year}</dd></div>
          <div><dt>Medium</dt><dd>{artwork.medium}</dd></div>
          <div><dt>Dimensions</dt><dd>{artwork.size}</dd></div>
        </dl>
        <p className="detail-description">{artwork.description}</p>
        <div className="detail-nav">
          <Link href={`/works/${previous.slug}`}>← Previous</Link>
          <Link href={`/works/${next.slug}`}>Next →</Link>
        </div>
      </div>

      <div className="detail-image-frame">
        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          priority
          sizes="(max-width: 900px) 100vw, 60vw"
          className="detail-image"
        />
      </div>
    </main>
  );
}
