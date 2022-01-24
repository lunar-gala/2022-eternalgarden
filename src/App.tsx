import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./home/home";
import About from "./about/about";
import NavBar from "./shared/navbar/navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
