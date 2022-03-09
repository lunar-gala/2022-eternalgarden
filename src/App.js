import 'App.css';
import 'styles/main.scss';

import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from 'routes/home';
import Menu from 'routes/menu';
import About from 'routes/about';
import Guide from 'routes/guide';

export default function App() {
  const location = useLocation();

  return (
    <main className="App">
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </AnimatePresence>
    </main>
  );
}
