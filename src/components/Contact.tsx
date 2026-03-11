import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.contactWrapper}>
          <span className={`section-label ${styles.contactLabel}`}>
            Kontakt
          </span>
          <h2 className="section-title">Dołącz do AGH&nbsp;HERMES</h2>
          <p className={`section-description ${styles.contactDescription}`}>
            Chcesz budować realne systemy — od elektroniki i telemetrii po oprogramowanie?
            W AGH HERMES rozwijamy projekty, w których teoria spotyka się z praktyką.
          </p>

          <div className={`glass-card ${styles.contactCard}`}>
            <div className={styles.contactInner}>
              <h3 className={styles.contactCta}>
                Zacznij budować z nami!
              </h3>
              <p className={styles.contactSubtext}>
                Dołącz do zespołu studentów, którzy projektują i budują własne rozwiązania technologiczne.
                Sprawdź aktualne rekrutacje lub odezwij się do nas w mediach społecznościowych.
              </p>

              <div className={styles.contactActions}>
                <a href="https://forms.gle/5tfCR9hXJ73t2K2D6" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <span>📝 Formularz rekrutacyjny</span>
                </a>
              </div>

              <div className={styles.contactDivider} />

              <div className={styles.contactInfo}>
                <div className={styles.contactInfoItem}>
                  <span>📍</span>
                  <span>AGH, Kraków, Polska</span>
                </div>
                <div className={styles.contactInfoItem}>
                  <span>✉</span>
                  <span>TBA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
