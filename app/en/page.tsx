import Image from "next/image";
import Link from "next/link";
import { englishArtworks } from "@/data/artworks-en";

export default function EnglishPage() {
  const hero = {
    image: "/artworks/ham-sa-seyo.jpg",
    title: "SOLEIRA",
  };

  return (
    <main>
      <section className="hero hero-home">
        <div className="hero-image-box">
          <Image
            src={hero.image}
            alt={hero.title}
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
        </div>

        <div className="hero-wash" />

        <div className="hero-copy">
          <p className="eyebrow">Contemporary artist · France</p>
          <h1>SOLEIRA</h1>
          <p>
            Capturing the Invisible
            <br />
            Between Reality and Suspension
          </p>
        </div>

        <a className="scroll-cue" href="#selected">
          Scroll ↓
        </a>
      </section>

      <section className="section" id="selected">
        <div className="section-heading">
          <p className="eyebrow">Selected works</p>
          <h2>A Selection of Works, 2026</h2>

          <Link href="/en/works" className="text-link">
            View all works →
          </Link>
        </div>

        <div className="home-grid">
          {englishArtworks.slice(0, 4).map((artwork) => (
            <Link
              href={`/en/works/${artwork.slug}`}
              className="art-card"
              key={artwork.slug}
            >
              <div className="art-image-wrap">
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                  className="art-image"
                />
              </div>

              <div className="art-meta">
                <span>{artwork.number}</span>
                <h3>{artwork.title}</h3>
                <p>
                  {artwork.year} · {artwork.medium}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="statement-band">
        <p className="eyebrow">Artist statement</p>

        <p className="statement-large">
          My practice explores suspension, invisible energies, and the fragile
          boundary between reality and unreality.
        </p>

        <Link href="/en/about" className="text-link light-link">
          Read the artist statement →
        </Link>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">Contact</p>

        <h2>
          Studio inquiries, exhibitions
          <br />
          and collaborations.
        </h2>

        <a href="mailto:rasubin@hotmail.com">rasubin@hotmail.com</a>
        <p>France</p>
      </section>
    </main>
  );
}