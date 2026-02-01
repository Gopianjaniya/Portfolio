import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Languages from "./Components/Languages";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Languages />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
