import styles from "./Teams.module.css";

const TEAMS = [
  {
    icon: "📡",
    name: "Programiści",
    description:
      "Pracujemy zarówno nad frontendem jak i backendem.",
    tags: ["React", "React Native", "Next.js", "Postgres", "Python", "Julia"],
  },
  {
    icon: "🔧",
    name: "Elektronicy",
    description:
      "Zajmujemy się projektowaniem i integracją nowoczesnych systemów pomiarowych i sterujących. Łączymy komponenty sprzętowe z oprogramowaniem, tworząc kompletne rozwiązania inżynierskie.",
    tags: ["STM32", "ESP32", "Sensory"],
  },
  {
    icon: "📊",
    name: "Marketing",
    description:
      "Promujemy nasze projekty i budujemy społeczność wokół koła naukowego. Organizujemy wydarzenia, tworzymy materiały promocyjne i dbamy o obecność AGH HERMES w mediach społecznościowych.",
    tags: ["Youtube", "Facebook", "Instagram"],
  },
];

const SUBPROJECTS = [
  {
    title: "Aplikacja mobilna",
    description:
      "Aplikacja pozwalająca na użytkowanie zasobów AGH HERMES. Poprzez uwierzytelnianie przy pomocy SSO.",
    status: "active" as const,
    statusLabel: "W trakcie",
  },
];

const STATUS_CLASSES: Record<string, string> = {
  active: styles.statusActive,
  completed: styles.statusCompleted,
  planned: styles.statusPlanned,
};

export default function Teams() {
  return (
    <section id="teams" className={`section ${styles.teams}`}>
      <div className="container">
        {/* Teams */}
        <div className={styles.teamsHeader}>
          <span className="section-label">Zespoły</span>
          <h2 className="section-title">Nasze Zespoły</h2>
          <p className="section-description" style={{ margin: "0 auto" }}>
            Każdy zespół specjalizuje się w innym obszarze naszego projektu,
            tworząc kompleksowe podejście do integracji systemów.
          </p>
        </div>

        <div className={styles.teamsGrid}>
          {TEAMS.map((team) => (
            <div key={team.name} className={`glass-card ${styles.teamCard}`}>
              <div className={styles.teamIconRow}>
                <div className={styles.teamIcon}>{team.icon}</div>
                <h3 className={styles.teamName}>{team.name}</h3>
              </div>
              <p className={styles.teamDescription}>{team.description}</p>
              <div className={styles.teamTags}>
                {team.tags.map((tag) => (
                  <span key={tag} className={styles.teamTag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sub-projects */}
        <div className={styles.projectsHeader}>
          <span className="section-label">Projekty</span>
          <h2 className="section-title">Nasze Projekty</h2>
          <p className="section-description" style={{ margin: "0 auto" }}>
            Obecnie jesteśmy w trakcie realizacji naszego pierwszego projektu.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {SUBPROJECTS.map((project) => (
            <div
              key={project.title}
              className={`glass-card ${styles.projectCard}`}
            >
              <span
                className={`${styles.projectStatus} ${STATUS_CLASSES[project.status]}`}
              >
                <span>●</span> {project.statusLabel}
              </span>
              <h4 className={styles.projectTitle}>{project.title}</h4>
              <p className={styles.projectDescription}>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
