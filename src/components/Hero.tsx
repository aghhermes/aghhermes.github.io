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
          Jesteśmy zespołem studentów AGH, którzy projektują i budują systemy elektroniczne, rozwiązania telemetryczne oraz technologie przetwarzania sygnałów. Łączymy teorię z praktyką, tworząc realne projekty technologiczne.
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
