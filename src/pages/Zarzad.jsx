export default function Zarzad() {
  const people = [
    {
      role: "Przewodniczący",
      name: "Joe",
      text:
        "Krótki opis osoby: czym się zajmuje, w jakich projektach działa, zainteresowania.",
    },
    {
      role: "Wiceprzewodniczący",
      name: "Maks",
      text:
        "Krótki opis osoby: np. koordynuje projekty, prowadzi spotkania, ogarnia organizację.",
    },
    {
      role: "Sekretarz",
      name: "Daniel",
      text:
        "Krótki opis osoby: np. formalności, budżet, współprace, kontakt z partnerami.",
    },
  ];

  return (
    <section className="container">
      <h1>Zarząd</h1>

      <div className="boardList">
        {people.map((p) => (
          <article key={p.role} className="boardCard">
            <div className="boardGrid">
              <h2 className="boardRole">{p.role}</h2>

              <div className="boardPhotoWrap">
                <img
                  className="boardPhoto"
                  src="/ph.jpg"
                  alt={`${p.role} — ${p.name}`}
                />
              </div>

              <div className="boardText">
                <div className="boardName">{p.name}</div>
                <p>{p.text}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}