import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects";
import About from "./pages/About/About";
import "./index.css";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
