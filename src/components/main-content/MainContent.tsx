import About from "./sections/about/About";
import Person from "./sections/person/Person";
import Projects from "./sections/projects/Projects";

import style from './MainContent.module.scss'
import PersonInfo from "./sections/personInfo/PersonInfo";

function MainContent() {
  return (
    <main className={style.container}>
      <Person />
      <PersonInfo />
      <About />
      <Projects />
    </main>
  )
}

export default MainContent;

