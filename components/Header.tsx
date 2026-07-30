"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const isKorean = pathname === "/kr" || pathname.startsWith("/kr/");

  const homeLink = isEnglish
    ? "/en"
    : isKorean
      ? "/kr"
      : "/";

  const aboutLink = isEnglish
    ? "/en/about"
    : isKorean
      ? "/kr/about"
      : "/about";

  const worksLink = isEnglish
    ? "/en/works"
    : isKorean
      ? "/kr/works"
      : "/works";

  const contactLink =
    homeLink === "/" ? "/#contact" : `${homeLink}#contact`;

  return (
    <header className="site-header">
      <Link href={homeLink} className="wordmark" aria-label="SOLEIRA home">
        SOLEIRA
      </Link>

      <nav className="desktop-nav" aria-label="Main navigation">
        <Link href={homeLink}>
          {isKorean ? "홈" : isEnglish ? "Home" : "Accueil"}
        </Link>

        <Link href={aboutLink}>
          {isKorean ? "작가 소개" : isEnglish ? "About" : "À propos"}
        </Link>

        <Link href={worksLink}>
          {isKorean ? "작품" : isEnglish ? "Works" : "Œuvres"}
        </Link>

        <Link href={contactLink}>
          {isKorean ? "연락처" : "Contact"}
        </Link>
      </nav>

      <div className="languages">
        <Link href="/">FR</Link>
        <Link href="/en">EN</Link>
        <Link href="/kr">KR</Link>
      </div>
    </header>
  );
}