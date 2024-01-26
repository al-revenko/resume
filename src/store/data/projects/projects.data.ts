import ProjectDataI from "./project.interface";

import cancrinImg from "~/assets/img/project-present/cancrin.jpg";
import resumeImg from "~/assets/img/project-present/github.jpg";
import loftImg from "~/assets/img/project-present/loft.jpg"

const projectsData: ProjectDataI[] = [
  {
    title: "LoftHouse",
    href: 'https://al-revenko.github.io/LoftHouse/',
    git_href: "https://github.com/al-revenko/cancrinBot",
    img_src: loftImg,
  },
  {
    title: "CancrinBot",
    git_href: "https://github.com/al-revenko/cancrinBot",
    img_src: cancrinImg,
  },
  {
    title: "Репозиторий CV",
    href: "https://github.com/al-revenko/resume",
    img_src: resumeImg,
  },
];

export default projectsData;
