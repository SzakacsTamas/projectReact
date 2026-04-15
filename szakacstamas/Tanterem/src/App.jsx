import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import Register from "./pages/Register";
import FooOldal from "./pages/FooOldal";
import Layout from "./components/program/Layout";
import Uzenetek from "./components/program/Uzenetek";
import KurzusLetrehozas from "./components/program/KurzusLetrehozas";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<FooOldal />} />
          <Route path="/Uzenetek" element={<Uzenetek />} />
          <Route path="/KurzusLetrehozas" element={<KurzusLetrehozas />} />
        </Route>

      </Routes>
    </Router>
    </ThemeProvider>

  );
}

export default App;