import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Sidebar.css";
import { useTheme } from "../hooks/useTheme";
import {useRef} from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [groupsOpen, setGroupsOpen] = useState(false);
  const { theme, toggle, useSystem, isSystem } = useTheme();
  const isDark = theme === "dark";
  const closeTimerRef = useRef(null);

  // Zamknij klawiszem ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setGroupsOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeAll = () => {
    setOpen(false);
    setGroupsOpen(false);
  };

  const scheduleClose = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
        setOpen(false);
        setGroupsOpen(false);
    }, 250); // <- czas w ms (np. 200–400)
};

const cancelClose = () => {
  if (closeTimerRef.current) {
    clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  }
};

useEffect(() => {
  return () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  };
}, []);

  return (
    <>
      {/* Hot zone: najechanie na lewy brzeg otwiera */}
      <div
        className="edgeHotZone"
        onMouseEnter={() => {
            cancelClose();
            setOpen(true)
        }}
        aria-hidden="true"
      />

      {/* Overlay na mobile / po otwarciu */}
      <div
        className={`sidebarOverlay ${open ? "show" : ""}`}
        onClick={closeAll}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        className={`sidebar ${open ? "open" : ""}`}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        <div className="sidebarHeader">
        </div>

        <nav className="sidebarNav">
          
          <NavLink to="/" className="sideLink" onClick={closeAll}>
            O nas
          </NavLink>


          <NavLink to="/zarzad" className="sideLink" onClick={closeAll}>
            Zarząd
          </NavLink>

          <button
            className="sideLink sideBtn"
            type="button"
            aria-expanded={groupsOpen}
            onClick={() => setGroupsOpen((v) => !v)}
          >
            Zespoły <span className="caret">▾</span>
          </button>

          <div className={`sideSub ${groupsOpen ? "show" : ""}`}>
            <NavLink to="/grupy/programisci" className="sideSubLink" onClick={closeAll}>
              Programiści
            </NavLink>
            <NavLink to="/grupy/elektronicy" className="sideSubLink" onClick={closeAll}>
              Elektronicy
            </NavLink>
            <NavLink to="/grupy/marketing" className="sideSubLink" onClick={closeAll}>
              Marketing
            </NavLink>
          </div>

          <NavLink to="/kontakt" className="sideLink" onClick={closeAll}>
            Kontakt
          </NavLink>

          <NavLink to="/rekrutacja" className="sideLink" onClick={closeAll}>
            Rekrutacja
          </NavLink>

          <div className="sideDivider" />

          {/* Theme toggle */}
          <label className="themeToggle" title="Tryb jasny/ciemny">
            <input
              type="checkbox"
              checked={isDark}
              onChange={toggle}
              aria-label="Przełącz tryb ciemny"
            />
            <span className="track">
              <span className="thumb" />
            </span>
            <img
              className="themeIconImg"
              src={isDark ? "/dm.png" : "/lm.png"}
              alt=""
              aria-hidden="true"
            />
          </label>
        </nav>
      </aside>

      {/* Przycisk otwierania (zawsze widoczny w rogu) */}
      <button
        className="sidebarOpenBtn"
        onClick={() => setOpen(true)}
        aria-label="Otwórz menu"
        type="button"
      >
        <img
            className="sidebarOpenIcon"
            src={isDark ? "/logo_dm.png" : "/logo_lm.png"}
            alt=""
            aria-hidden="true"
            />
      </button>
    </>
  );
}