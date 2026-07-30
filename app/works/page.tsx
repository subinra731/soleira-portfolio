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
          <Link href={`/works/${artwork.slug}`} className="art-card" key={artwork.slug}>
            <div className="art-image-wrap works-ratio">
              <Image
                src={artwork.image}
                alt={artwork.title}
                fill
                sizes="(max-width: 800px) 100vw, 33vw"
                className="art-image"
              />
            </div>
            <div className="art-meta">
              <span>{artwork.number}</span>
              <h2>{artwork.title}</h2>
              <p>{artwork.year} · {artwork.medium} · {artwork.size}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
