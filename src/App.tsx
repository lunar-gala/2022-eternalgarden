import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home';
import About from './routes/about/about';
import './styles/main.scss';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
