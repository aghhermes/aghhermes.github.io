import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [groupsOpen, setGroupsOpen] = useState(false);
  const groupsRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (groupsRef.current && !groupsRef.current.contains(e.target)) {
        setGroupsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const closeAll = () => {
    setOpen(false);
    setGroupsOpen(false);
  };

  return (
    <header className="navHeader">
      <div className="navInner">
        <NavLink to="/" className="brand" onClick={closeAll}>
          <img className="brandLogo" src="/logo.png" alt="AGH Hermes" />
        </NavLink>

        <button
          className="burger"
          aria-label="Otwórz menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          ☰
        </button>

        <nav className={`navLinks ${open ? "open" : ""}`}>
          <NavLink to="/zarzad" className="link" onClick={closeAll}>
            Zarząd
          </NavLink>

          <div className="dropdown" ref={groupsRef}>
            <button
              className="link dropdownBtn"
              aria-haspopup="true"
              aria-expanded={groupsOpen}
              onClick={() => setGroupsOpen((v) => !v)}
              type="button"
            >
              Zespoły ▾
            </button>

            <div className={`dropdownMenu ${groupsOpen ? "show" : ""}`}>
              <NavLink to="/grupy/programisci" className="dropItem" onClick={closeAll}>
                Programiści
              </NavLink>
              <NavLink to="/grupy/elektronicy" className="dropItem" onClick={closeAll}>
                Elektronicy
              </NavLink>
              <NavLink to="/grupy/marketing" className="dropItem" onClick={closeAll}>
                Marketing
              </NavLink>
            </div>
          </div>

          <NavLink to="/kontakt" className="link" onClick={closeAll}>
            Kontakt
          </NavLink>

          <NavLink to="/rekrutacja" className="link cta" onClick={closeAll}>
            Rekrutacja
          </NavLink>
        </nav>
      </div>
    </header>
  );
}