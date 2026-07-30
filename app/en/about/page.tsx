import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="page-shell about-page">
      <header className="page-title">
        <p className="eyebrow">About</p>
        <h1>SOLEIRA</h1>
        <p>Contemporary artist based in France.</p>
      </header>

      <section className="about-grid">
        <div className="portrait-placeholder">
          <Image
            src="/artworks/ham-sa-seyo.jpg"
            alt="SOLEIRA"
            fill
            className="portrait-image"
          />
        </div>

        <div className="about-copy">
          <h2>
            The Energy of In-Between:
            <br />
            Capturing the Invisible
          </h2>

          <p>
            My artistic practice revolves around the notion of suspension.
            At the intersection of my Korean heritage and my experience of
            living in Europe, I seek to give form to what escapes rational logic.
          </p>

          <p>
            I see the canvas as a space of complete freedom. Through layers
            of transparency and texture, I construct psychological landscapes
            where instinct, memory, and protective figures converge.
          </p>

          <p>
            My work is a rite of passage—an attempt to transform
            vulnerability into a vibrant visual force.
          </p>

          <div className="cv-list">
            <h3>Selected Exhibitions</h3>
            <p>2026 · Salon d’Automne — "Ham-sa-seyo"</p>

            <h3>Education</h3>
            <p>2024—2025 · Gerrit Rietveld Academie, Amsterdam</p>
            <p>2023—2024 · Royal Academy of Art, The Hague</p>
            <p>2009—2014 · Dongguk University, Seoul</p>
          </div>
        </div>
      </section>
    </main>
  );
}