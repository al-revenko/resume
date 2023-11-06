import About from "./sections/About";
import Briefing from "./sections/Briefing";
import Person from "./sections/Person";
import Projects from "./sections/Projects";

import style from './MainContent.module.scss'

function MainContent() {
  return (
    <main className={style.main__container}>
      <Person />
      <Briefing />
      <About />
      <Projects />
    </main>
  )
}

export default MainContent;

