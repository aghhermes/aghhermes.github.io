import styles from "./Board.module.css";

const BOARD_MEMBERS = [
  {
    name: "Joe",
    role: "Prezes",
    initials: "JK",
    bio: "Pilnuje, żeby projekty się spinały, a koło działało jak dobrze zorganizowany system. Najczęściej można go znaleźć przy projektach elektronicznych. Fan oscypków i ogarniacz gwary góralskiej na poziomie A1.",
  },
  {
    name: "Maks",
    role: "Wiceprezes",
    initials: "MS",
    bio: "Interesuje się integracją systemów i telemetrią. Najchętniej łączy różne technologie w działające rozwiązania. Po godzinach regeneracja przy pizzy z żabki.",
  },
  {
    name: "Daniel",
    role: "Sekretarz",
    initials: "DF",
    bio: "Entuzjasta sieci komputerowych i wszystkiego, co dzieje się „pod maską” internetu. Po godzinach najczęściej można go spotkać na serwerach — tym razem w CS-ie.",
  },
];

export default function Board() {
  return (
    <section id="board" className={`section ${styles.board}`}>
      <div className="container">
        <div className={styles.boardHeader}>
          <span className="section-label">Zarząd</span>
          <h2 className="section-title">Nasz Zarząd</h2>
          <p className="section-description" style={{ margin: "0 auto" }}>
            Poznaj osoby odpowiedzialne za założenie, rozwój i działalność koła naukowego
            AGH HERMES.
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
