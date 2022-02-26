import 'App.css';
import 'styles/main.scss';

import { Route, Routes } from 'react-router-dom';

import Home from 'routes/home';
import Menu from 'routes/menu';
import About from 'routes/about';
import Guide from 'routes/guide';

export default function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu"  element={<Menu />} />
        <Route path="/about"  element={<About />} />
        <Route path="/guide" element={<Guide />} />
      </Routes>
    </main>
  );
}
