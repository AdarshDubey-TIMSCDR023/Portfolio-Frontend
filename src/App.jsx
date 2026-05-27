import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="overflow-x-hidden">

      <Navbar />

      {/* HOME */}
      <div className="scroll-mt-32">
        <Hero />
      </div>

      {/* ABOUT */}
      <div
        id="about"
        className="scroll-mt-32"
      >
        <About />
      </div>
      {/* ACHIEVEMENTS */}
      <div
        id="achievements"
        className="scroll-mt-32"
      >
        <Achievements />
      </div>

      {/* PROJECTS */}
      <div
        id="projects"
        className="scroll-mt-32"
      >
        <Projects />
      </div>

      {/* CERTIFICATES */}
      <div
        id="certificates"
        className="scroll-mt-32"
      >
        <Certificates />
      </div>

      {/* RESUME */}
      <div
        id="resume"
        className="scroll-mt-32"
      >
        <Resume />
      </div>

      {/* CONTACT */}
      <div
        id="contact"
        className="scroll-mt-32"
      >
        <Contact />
      </div>

    </main>
  );
}

export default App;