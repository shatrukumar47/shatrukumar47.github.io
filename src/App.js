import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Particle from "./components/Particle";
import GithubOverview from "./components/GithubOverview";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Particle /> */}
      <Home />
      <About />
      <Skills />
      <Projects />
      <GithubOverview />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;
