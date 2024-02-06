import "./App.css";
import Navbar from "./Sections/Navbar";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import GithubOverview from "./Sections/GithubOverview";
import ScrollToTop from "./Sections/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Navbar />
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
