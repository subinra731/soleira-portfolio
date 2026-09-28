import { pageMetadata, homeTranslations } from "@/data/seo";
import Image from "next/image";
import Link from "next/link";
import { artworks } from "@/data/artworks";

export default function FrenchPage() {
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
            Capturer l’invisible
            <br />
            entre réalité et suspension
          </p>
        </div>

        <a className="scroll-cue" href="#selected">
          Défiler ↓
        </a>
      </section>

      <section className="section" id="selected">
        <div className="section-heading">
          <p className="eyebrow">Œuvres sélectionnées</p>
          <h2>Sélection d’œuvres, 2026</h2>
          <Link href="/works" className="text-link">
            Voir toutes les œuvres →
          </Link>
        </div>

        <div className="home-grid">
      {artworks.slice(-4).reverse().map((artwork) => (
            <Link
              href={`/works/${artwork.slug}`}
              className="art-card"
              key={artwork.slug}
            >
              {artwork.slug === "i-may-be-insignificant-or-i-may-not-be" ? (
              <div
                className="art-image-wrap"
                style={{ display: "grid", placeItems: "center" }}
              >
                <div style={{ width: "78%", padding: "3.5%", background: "#fff", boxSizing: "border-box" }}>
                  <div style={{ position: "relative", aspectRatio: "130 / 97" }}>
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      fill
                      sizes="(max-width: 800px) 100vw, 50vw"
                      style={{ objectFit: "contain", filter: "saturate(1.15) contrast(1.04)" }}
                    />
                  </div>
                </div>
              </div>
              ) : (
              <div className="art-image-wrap">
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                  className="art-image"
                />
              </div>
              )}

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
          frontière fragile entre le réel et l’irréel.
        </p>

        <Link href="/about" className="text-link light-link">
          Lire la démarche artistique →
        </Link>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">Contact</p>

        <h2>
          Demandes concernant l’atelier, les expositions
          <br />
          et les collaborations.
        </h2>

        <a href="mailto:rasubin@hotmail.com">rasubin@hotmail.com</a>
        <p>France</p>
      </section>
    </main>
  );
}
export const metadata = pageMetadata('SOLEIRA — Artiste contemporaine en France', 'Portfolio de SOLEIRA, artiste contemporaine coréenne basée en France. Découvrez ses peintures et sa démarche artistique.', '/fr', homeTranslations);
