import './App.css';
import './styles/main.scss';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/menu';
import Home from './routes/home/home';
import About from './routes/about/about';

export default function App() {
  const [menu, setMenu] = useState(false);

  return (
    <main className="App">
      <Menu active={menu} setActive={setMenu} />
      <Routes>
        <Route path="/" element={<Home setMenu={setMenu} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
}
