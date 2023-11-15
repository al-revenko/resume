interface InfoContentI {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>,
  text: string,
  href?: string,
}

interface InfoI {
  title: string,
  items: InfoContentI[]
}

export default InfoI;