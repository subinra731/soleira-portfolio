import Image from "next/image";

export default function KoreanAboutPage() {
  return (
    <main className="page-shell about-page">
      <header className="page-title">
        <p className="eyebrow">작가 소개</p>

        <h1>SOLEIRA</h1>

        <p>프랑스를 기반으로 활동하는 한국 현대미술 작가</p>
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
            경계 사이의 에너지
            <br />
            보이지 않는 것을 포착하다
          </h2>

          <p>
            나의 작업은 현실과 비현실 사이의 불안정한 경계와 부유하는
            상태, 그리고 눈에 보이지 않는 에너지를 탐구합니다.
          </p>

          <p>
            한국에서 형성된 문화적 기억과 유럽에서의 삶이 교차하는
            지점에서, 이성적인 논리만으로 설명할 수 없는 감각과 존재의
            흔적을 회화로 표현합니다.
          </p>

          <p>
            캔버스는 나에게 절대적인 해방의 공간입니다. 투명한 층과
            다양한 질감, 상징적인 형상들을 통해 본능과 기억, 보호하는
            존재들이 만나는 심리적 풍경을 구성합니다.
          </p>

          <p>
            작품 속 인물과 공간은 명확한 서사를 전달하기보다 감각과
            기억, 내면의 움직임을 드러냅니다. 익숙한 현실은 낯선 형태로
            변형되고, 인물들은 꿈과 의식의 경계에 머뭅니다.
          </p>

          <p>
            전통과 기술, 신체와 정신, 인간과 기계가 교차하는 지점에서
            새로운 존재의 가능성을 탐색합니다. 나의 예술은 취약함을
            생동하는 시각적 힘으로 변화시키는 하나의 통과의례입니다.
          </p>

          <div className="cv-list">
            <h3>약력</h3>

            <p>프랑스를 기반으로 활동하는 한국 현대미술 작가</p>

            <h3>주요 전시 및 선정</h3>

            <p>2026 · Salon d’Automne — 「Ham-sa-seyo」</p>

            <h3>학력</h3>

            <p>2024—2025 · Gerrit Rietveld Academie, Amsterdam</p>

            <p>2023—2024 · Royal Academy of Art, The Hague</p>

            <p>2009—2014 · Dongguk University, Seoul</p>

            <h3>연락처</h3>

            <p>
              <a href="mailto:rasubin@hotmail.com">
                rasubin@hotmail.com
              </a>
            </p>

            <p>France</p>
          </div>
        </div>
      </section>
    </main>
  );
}