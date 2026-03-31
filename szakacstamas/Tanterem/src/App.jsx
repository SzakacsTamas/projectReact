import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Register from './pages/Register';
import FoOldal from './pages/FoOldal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<FoOldal />} />
      </Routes>
    </Router>
  );
}

export default App;