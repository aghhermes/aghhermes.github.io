import styles from "./Board.module.css";

const BOARD_MEMBERS = [
  {
    name: "Joe",
    role: "Prezes",
    initials: "JK",
    bio: "Człowiek orkiestra, koordynuje pracę koła i zajmuje się projektami w zespole elektroników. Lubi oscypki i posługuje się gwarą góralską na poziomie A1.",
  },
  {
    name: "Maks",
    role: "Wiceprezes",
    initials: "MS",
    bio: "Pasjonat integracji systemów i telemetrii. Hobby - pizza z żabki.",
  },
  {
    name: "Daniel",
    role: "Sekretarz",
    initials: "DF",
    bio: "Entuzjasta sieci teleinformatycznych i vibe coding'u. Lubi pograć w gierki, głównie w cs'ka.",
  },
];

export default function Board() {
  return (
    <section id="board" className={`section ${styles.board}`}>
      <div className="container">
        <div className={styles.boardHeader}>
          <span className="section-label">Zarząd</span>
          <h2 className="section-title">Nasz Zespół Zarządzający</h2>
          <p className="section-description" style={{ margin: "0 auto" }}>
            Poznaj osoby odpowiedzialne za rozwój i działalność koła naukowego
            AGH&nbsp;HERMES.
          </p>
        </div>

        <div className={styles.boardGrid}>
          {BOARD_MEMBERS.map((member) => (
            <div key={member.name} className={`glass-card ${styles.boardCard}`}>
              <div className={styles.avatarWrapper}>
                <div className={styles.avatar}>{member.initials}</div>
              </div>
              <h3 className={styles.boardName}>{member.name}</h3>
              <p className={styles.boardRole}>{member.role}</p>
              <p className={styles.boardBio}>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
