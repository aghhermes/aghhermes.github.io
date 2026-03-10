import styles from "./About.module.css";

const HIGHLIGHTS = [
  {
    icon: "📡",
    title: "Przetwarzanie Sygnałów",
    description: "Analiza i przetwarzanie sygnałów cyfrowych w czasie rzeczywistym",
  },
  {
    icon: "🔧",
    title: "Integracja Systemów",
    description: "Projektowanie i integracja nowoczesnych systemów pomiarowych",
  },
  {
    icon: "📊",
    title: "Telemetria",
    description: "Zbieranie, przesyłanie i analiza danych telemetrycznych",
  },
];

const STATS = [
  { number: "16", label: "Członków" },
  { number: "1", label: "Projekty" },
  { number: "2025", label: "Rok założenia" },
  { number: "3", label: "Zespoły" },
];

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <span className="section-label">O nas</span>
            <h2 className="section-title">
              Poznaj Koło Naukowe AGH&nbsp;HERMES
            </h2>
            <p className={`section-description ${styles.aboutDescription}`}>
              AGH HERMES to koło naukowe działające na Akademii
              Górniczo-Hutniczej w Krakowie. Skupiamy studentów pasjonujących
              się integracją nowoczesnych systemów, przetwarzaniem sygnałów
              cyfrowych i telemetrią. Realizujemy projekty łączące teorię
              z&nbsp;praktyką inżynierską.
            </p>

            <div className={styles.aboutHighlights}>
              {HIGHLIGHTS.map((item) => (
                <div key={item.title} className={styles.highlight}>
                  <div className={styles.highlightIcon}>{item.icon}</div>
                  <div className={styles.highlightContent}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.aboutCards}>
            {STATS.map((stat) => (
              <div key={stat.label} className={`glass-card ${styles.aboutCard}`}>
                <div className={styles.aboutCardNumber}>{stat.number}</div>
                <div className={styles.aboutCardLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
