import projectsData from "~/store/data/projects/projects.data";
import style from "./Projects.module.scss";

import GitSvg from "~/assets/svg/icon/contact/github.svg?react";

function Projects() {
  return (
    <section className={style.container}>
      <h2 className="title-h2">Мои проекты</h2>
      <ul className={style.projects_list}>
        {projectsData.map((project, index) => {
          return (
            <li className={style.projectCard} key={index}>
              <a className={style.projectCard__link} href={project.href ?? project.git_href}>
                <img src={project.img_src} alt={project.title} />
              </a>
              <div className={style.projectCard__info}>
                <h3>{project.title}</h3>
                {
                  project.git_href ? 
                  <a href={project.git_href}>
                    <GitSvg width="35px" height="35px" />
                  </a> 
                  : 
                  null
                }
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Projects;
