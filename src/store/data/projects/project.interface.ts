interface ProjectDataI {
  title: {
    text: string,
    IconSvg: React.FC<React.SVGProps<SVGSVGElement>>,
  },

  link: {
    href: string
    text: string
  }

  desc: string,

  present: {
    hooks: string[],
    img_src: string
  }
}

export default ProjectDataI;