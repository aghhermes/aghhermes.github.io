import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Zarzad from "./pages/Zarzad";
import Grupy from "./pages/Grupy";
import GrupaProgramisci from "./pages/GrupaProgramisci";
import GrupaElektronicy from "./pages/GrupaElektronicy";
import GrupaMarketing from "./pages/GrupaMarketing";
import Kontakt from "./pages/Kontakt";
import Rekrutacja from "./pages/Rekrutacja";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="zarzad" element={<Zarzad />} />

        <Route path="grupy" element={<Grupy />} />
        <Route path="grupy/programisci" element={<GrupaProgramisci />} />
        <Route path="grupy/elektronicy" element={<GrupaElektronicy />} />
        <Route path="grupy/marketing" element={<GrupaMarketing />} />

        <Route path="kontakt" element={<Kontakt />} />
        <Route path="rekrutacja" element={<Rekrutacja />} />
      </Route>
    </Routes>
  );
}