import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import Register from "./pages/Register";
import FooOldal from "./pages/FooOldal";
import Layout from "./components/program/Layout";
import Uzenetek from "./components/program/Uzenetek";
import KurzusLetrehozas from "./components/program/KurzusLetrehozas";
import Kurzus1 from "./components/program/kurzusok/Kurzus1";
import SajatFiok from "./components/program/SajatFiok";
import Feladat1 from "./components/program/kurzusok/Feladat1";
import FeladatLetrehozas from "./components/program/FeladatLetrehozas";
import TanagyagLetrehozas from "./components/program/TanagyagLetrehozas";
function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>

          <Route element={<Layout />}>
            <Route path="/" element={<FooOldal />} />
            <Route path="/uzenetek" element={<Uzenetek />} />
            <Route path="/kurzus-letrehozas" element={<KurzusLetrehozas />} />
            <Route path="/kurzus/:id" element={<Kurzus1 />} />
            <Route path="/sajat-fiok" element={<SajatFiok />} />
            <Route path="/register" element={<Register />} />
            <Route path="/kurzus/:id/feladat/:feladatId" element={<Feladat1 />} />
            <Route path="/kurzus/:id/uj-feladat" element={<FeladatLetrehozas />} />
            <Route path="/kurzus/:id/uj-tananyag" element={<TanagyagLetrehozas />} />
          </Route>

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App; 