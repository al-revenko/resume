import About from "./sections/About";
import Briefing from "./sections/Briefing";
import Person from "./sections/Person";
import Projects from "./sections/Projects";

function MainContent() {
  return (
    <main>
      <Person />
      <Briefing />
      <About />
      <Projects />
    </main>
  )
}

export default MainContent;

