import Image from "next/image";
import Link from "next/link";
import { artworks } from "@/data/artworks";

export default function Home() {
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
          <p className="eyebrow">Artiste contemporaine · France</p>

          <h1>SOLEIRA</h1>

          <p>
            Capturer l'invisible
            <br />
            Entre le réel et la suspension
          </p>
        </div>

        <a className="scroll-cue" href="#selected">
          Défiler ↓
        </a>
      </section>

      <section className="section" id="selected">
        <div className="section-heading">
          <p className="eyebrow">Œuvres sélectionnées</p>

          <h2>Œuvres, 2026</h2>

          <Link href="/works" className="text-link">
            Voir toutes les œuvres →
          </Link>
        </div>

        <div className="home-grid">
          {artworks.slice(0, 4).map((artwork) => (
            <Link
              href={`/works/${artwork.slug}`}
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
        <p className="eyebrow">Démarche artistique</p>

        <p className="statement-large">
          Ma pratique explore la suspension, les énergies invisibles et la
          frontière fragile entre le réel et l'irréel.
        </p>

        <Link href="/about" className="text-link light-link">
          Lire le texte →
        </Link>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">Contact</p>

        <h2>
          Demandes de studio,
          <br />
          expositions et collaborations.
        </h2>

        <a href="mailto:rasubin@hotmail.com">
          rasubin@hotmail.com
        </a>

        <p>France</p>
      </section>
    </main>
  );
}