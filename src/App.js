import 'App.css';
import 'styles/main.scss';

import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from 'routes/home';
import Menu from 'routes/menu';
import About from 'routes/about';
import Lines from 'routes/lines';
import Guide from 'routes/guide';

import People from 'routes/people';

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
          <Route path="/people" element={<People />} />

          <Route path="/lines" element={<Lines />} />
        </Routes>
      </AnimatePresence>
    </main>
  );
}
