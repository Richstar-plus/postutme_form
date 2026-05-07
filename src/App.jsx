import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="site-header">
          <div>
            <h1>PostUtme</h1>
            <p>React + Vite starter with routing and FontAwesome.</p>
          </div>
          <nav className="site-nav">
            <NavLink end to="/" className="nav-link">
              <FontAwesomeIcon icon={faHouse} /> Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              <FontAwesomeIcon icon={faCircleInfo} /> About
            </NavLink>
          </nav>
        </header>

        <main className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
