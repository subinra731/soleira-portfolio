import { pageMetadata, homeTranslations } from "@/data/seo";
import Image from "next/image";
import Link from "next/link";
import { koreanArtworks } from "@/data/artworks-kr";

export default function KoreanHomePage() {
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
          <p className="eyebrow">현대미술 작가 · 프랑스</p>

          <h1>SOLEIRA</h1>

          <p>
            보이지 않는 것을 포착하며
            <br />
            현실과 부유 사이를 탐구합니다
          </p>
        </div>

        <a className="scroll-cue" href="#selected">
          아래로 ↓
        </a>
      </section>

      <section className="section" id="selected">
        <div className="section-heading">
          <p className="eyebrow">주요 작품</p>
          <h2>작품, 2026</h2>

          <Link href="/kr/works" className="text-link">
            모든 작품 보기 →
          </Link>
        </div>

        <div className="home-grid">
         {koreanArtworks.slice(-4).reverse().map((artwork) => (
            <Link
              href={`/kr/works/${artwork.slug}`}
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
        <p className="eyebrow">작가노트</p>

        <p className="statement-large">
          나의 작업은 부유하는 상태와 보이지 않는 에너지,
          현실과 비현실 사이의 불안정한 경계를 탐구합니다.
        </p>

        <Link href="/kr/about" className="text-link light-link">
          작가 소개 읽기 →
        </Link>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">연락처</p>

        <h2>
          전시 및 작품 문의
          <br />
          협업 제안
        </h2>

        <a href="mailto:rasubin@hotmail.com">
          rasubin@hotmail.com
        </a>

        <p>프랑스</p>
      </section>
    </main>
  );
}
export const metadata = pageMetadata('SOLEIRA — 프랑스에서 활동하는 현대미술 작가', '프랑스에서 활동하는 한국 현대미술 작가 SOLEIRA의 회화 작품과 작가 소개를 만나보세요.', '/kr', homeTranslations);
