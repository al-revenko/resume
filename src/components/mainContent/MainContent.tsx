import About from "./sections/about/About";
import Briefing from "./sections/briefing/Briefing";
import Person from "./sections/person/Person";
import Projects from "./sections/projects/Projects";

import style from './MainContent.module.scss'

function MainContent() {
  return (
    <main className={style.container}>
      <Person />
      <Briefing />
      <About />
      <Projects />
    </main>
  )
}

export default MainContent;

