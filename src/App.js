import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Company from './pages/Company';
import Contact from './pages/Contact';
import NewProject from './pages/NewProject';

import Container from './components/layout/Container'; // 💡 use o caminho correto

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </div>

      <Routes>
        <Route path="/" element={<Container><Home /></Container>} />
        <Route path="/company" element={<Container><Company /></Container>} />
        <Route path="/contact" element={<Container><Contact /></Container>} />
        <Route path="/newproject" element={<Container><NewProject /></Container>} />
      </Routes>

      <p>Footer</p>
    </Router>
  );
}

export default App;
