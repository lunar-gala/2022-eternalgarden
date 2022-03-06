import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/index';
import About from './routes/about/index';
import Lines from './routes/lines/index';
import './styles/main.scss';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lines" element={<Lines />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
