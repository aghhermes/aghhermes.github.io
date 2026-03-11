import IconLogo from "./IconLogo";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand column */}
          <div>
            <div className={styles.footerBrand}>
              <IconLogo className={styles.footerLogo} />
              <span className={styles.footerBrandName}>AGH HERMES</span>
            </div>
            <p className={styles.footerDescription}>
              Koło naukowe działające na AGH w Krakowie. Tworzymy projekty z zakresu integracji systemów, elektroniki i telemetrii.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className={styles.footerColumnTitle}>Nawigacja</h4>
            <div className={styles.footerLinks}>
              <a href="#about" className={styles.footerLink}>O nas</a>
              <a href="#board" className={styles.footerLink}>Zarząd</a>
              <a href="#teams" className={styles.footerLink}>Zespoły</a>
              <a href="#contact" className={styles.footerLink}>Kontakt</a>
            </div>
          </div>

          {/* Projekt */}
          <div>
            <h4 className={styles.footerColumnTitle}>Projekty</h4>
            <div className={styles.footerLinks}>
              <a href="#teams" className={styles.footerLink}>Flota hulajnóg AGH</a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className={styles.footerColumnTitle}>Social Media</h4>
            <div className={styles.footerLinks}>
              <a
                href="https://www.youtube.com/@AGH_Hermes"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                YouTube
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579947956744&locale=pl_PL"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/agh_hermes"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerDivider} />

        <div className={styles.footerBottom}>
          <p className={styles.footerCopyright}>
            © {currentYear} AGH HERMES — Koło Naukowe AGH
          </p>
          <p className={styles.footerAgh}>
            Akademia Górniczo-Hutnicza im. St. Staszica w Krakowie
          </p>
        </div>
      </div>
    </footer>
  );
}
