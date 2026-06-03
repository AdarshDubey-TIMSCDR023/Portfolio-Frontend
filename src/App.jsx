import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Certificates from "./components/Certificates";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

// Map section IDs to their components
const sections = [
  { id: "home", Component: Hero },
  { id: "about", Component: About },
  { id: "projects", Component: Projects },
  { id: "achievements", Component: Achievements },
  { id: "certificates", Component: Certificates },
  { id: "resume", Component: Resume },
  { id: "contact", Component: Contact },
];

// Reusable Section Wrapper Component
const Section = ({ id, Component }) => (
  <div id={id === "home" ? undefined : id} className="scroll-mt-32">
    <Component />
  </div>
);

function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      {sections.map(({ id, Component }) => (
        <Section key={id} id={id} Component={Component} />
      ))}
    </main>
  );
}

export default App;
