import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import Register from "./pages/Register";
import FooOldal from "./pages/FooOldal";
import Layout from "./components/program/Layout";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<FooOldal />} />
          <Route path="/register" element={<Register />} />
        </Route>

      </Routes>
    </Router>
    </ThemeProvider>

  );
}

export default App;