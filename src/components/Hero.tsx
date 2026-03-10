import HeroLogo from "./HeroLogo";
import styles from "./Hero.module.css";

export default function Hero() {

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroBg} />
      <div className={styles.heroGrid} />

      <div className={styles.heroContent}>
        <div className={styles.heroLogoWrapper}>
          <HeroLogo className={styles.heroLogo} />
        </div>

        <p className={styles.heroTagline}>Koło Naukowe AGH</p>
        <h1 className={styles.heroTitle}>
          Systemy, Sygnały &amp; Telemetria
        </h1>
        <p className={styles.heroDescription}>
          Jesteśmy zespołem studentów Akademii Górniczo-Hutniczej w Krakowie,
          którzy łączą pasję do technologii z praktycznym podejściem do
          integracji nowoczesnych systemów, przetwarzania sygnałów cyfrowych
          i&nbsp;telemetrii.
        </p>

        <div className={styles.heroActions}>
          <a href="#contact" className="btn-primary">
            <span>Dołącz do nas</span>
          </a>
          <a href="#about" className="btn-outline">
            Poznaj nas bliżej
          </a>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDot} />
        <span>Przewiń</span>
      </div>
    </section>
  );
}
