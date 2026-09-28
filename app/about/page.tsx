import { pageMetadata, aboutTranslations } from "@/data/seo";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="page-shell about-page">
      <header className="page-title">
        <p className="eyebrow">About</p>
        <h1>SOLEIRA</h1>
        <p>Korean contemporary artist based in France.</p>
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
            L’Énergie de l’Entre-deux:
            <br />
            Capturer l’Invisible
          </h2>

          <p>
            Ma pratique artistique s’articule autour de la notion de
            « suspension ». À la croisée de mon héritage coréen et de mon
            expérience de vie européenne, je cherche à matérialiser ce qui
            échappe à la logique rationnelle.
          </p>

          <p>
            Je perçois la toile comme un espace d’émancipation absolue. Par des
            jeux de transparence et de textures, j’édifie des paysages
            psychiques où l’instinct, la mémoire et les figures protectrices se
            rencontrent.
          </p>

          <p>
            Mon art est un rite de passage : une tentative de transformer la
            vulnérabilité en une puissance visuelle vibrante.
          </p>

          <div className="cv-list">
            <h3>Selected exhibitions</h3>
            <p>2026 · Salon d’Automne — “Ham-sa-seyo”</p>

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
export const metadata = pageMetadata('À propos', 'Découvrez la démarche et le parcours de SOLEIRA, artiste contemporaine coréenne basée en France.', '/about', aboutTranslations);
