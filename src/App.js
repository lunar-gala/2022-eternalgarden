import 'App.css';
import 'styles/main.scss';

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from 'routes/home';
import Menu from 'routes/menu';
import Guide from 'routes/guide';

export default function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu"  element={<Menu />} />
        <Route path="/guide" element={<Guide />} />
      </Routes>
    </main>
  );
}
