export default function Home() {
  return (
    <section className="container">
        <div className=" heroTitle hero heroText">
          <h1>
            O nas
          </h1>
        </div>
        <div className="topBanner">
            <img className="topBannerImg" src="/banner.png" alt="AGH Hermes" />
        </div>

        <div className="heroText heroIntro">
        <div>
          <p>
            AGH Hermes - koło naukowe Wydziału Informatyki Elektroniki i Telekomunikacji Akademii Górniczo-Hutniczej, zajmujące się: 
            <br />- Embedded systems
            <br />- Zaawansowanym przetwarzaniem sygnałów
            <br />- Technikami lokalizacji
            <br />- Bezpieczeństwem informatycznym systemów moblinych
            <br />- Elektroniką mocy w kontekście systemów moblinych
            <br />- Algorytmikami sterowania napędami
          </p>
        </div>
      </div>
    </section>
  );
}