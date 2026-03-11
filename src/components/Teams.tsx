import styles from "./Teams.module.css";

const TEAMS = [
  {
    icon: "📡",
    name: "Programiści",
    description:
      "Kod to nasz główny interfejs ze światem. Tworzymy aplikacje webowe, mobilne i systemy backendowe, które łączą użytkowników z projektami powstającymi w kole. Od UI po integrację z hardwarem.",
    tags: ["React", "React Native", "Next.js", "Postgres", "Python", "Julia"],
  },
  {
    icon: "🔧",
    name: "Elektronicy",
    description:
      "Tam gdzie kończy się kod, zaczyna się hardware. Projektujemy płytki, pracujemy z mikrokontrolerami i sensorami, a z pojedynczych komponentów składamy działające systemy.",
    tags: ["STM32", "ESP32", "Sensory"],
  },
  {
    icon: "📊",
    name: "Marketing",
    description:
      "Łączymy projekty z ludźmi. Tworzymy content, organizujemy wydarzenia i dbamy o to, żeby nasze projekty nie kończyły się tylko w laboratorium.",
    tags: ["Youtube", "Facebook", "Instagram"],
  },
];

const SUBPROJECTS = [
  {
    title: "Aplikacja mobilna",
    description:
      "Aplikacja umożliwiająca szybkie wypożyczenie hulajnogi na kampusie. Logowanie odbywa się przez uczelniane SSO, dzięki czemu system jest dostępny wyłącznie dla społeczności AGH.",
    status: "active" as const,
    statusLabel: "W trakcie",
  },

  {
    title: "System stabilizacji",
    description:
      "Układ żyroskopowy wspierający stabilność i kontrolę jazdy. Monitoruje ruch hulajnogi i pomaga utrzymać bezpieczeństwo użytkownika.",
    status: "active" as const,
    statusLabel: "W trakcie",
  },

  {
    title: "System Sensorów",
    description:
      "Zestaw czujników monitorujących otoczenie hulajnogi. Wykrywa przeszkody i wspiera systemy bezpieczeństwa podczas jazdy.",
    status: "active" as const,
    statusLabel: "W trakcie",
  },

  {
    title: "Stacja ładowania",
    description:
      "Stanowisko umożliwiające automatyczne ładowanie hulajnóg podczas postoju. Docelowo wykorzystujące energię odnawialną.",
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
            Każdy zespół specjalizuje się w innym obszarze,
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
          <h2 className="section-title">Inteligentna flota hulajnóg na kampusie AGH</h2>
          <p className="section-description" style={{ margin: "0 auto" }}>
            Budujemy system współdzielonych hulajnóg elektrycznych zaprojektowany specjalnie dla kampusu AGH.
            Projekt obejmuje zarówno oprogramowanie, elektronikę pokładową, jak i infrastrukturę ładowania — wszystko tworzone przez studentów, z myślą o bezpiecznym i wygodnym poruszaniu się po miasteczku.

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
