import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import Register from "./pages/Register";
import FooOldal from "./pages/FooOldal";
import Layout from "./components/program/Layout";
import Uzenetek from "./components/program/Uzenetek";
import KurzusLetrehozas from "./components/program/KurzusLetrehozas";
import Kurzus1 from "./components/program/kurzusok/Kurzus1";

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
            <Route path="/register" element={<Register />} />
          </Route>

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App; 