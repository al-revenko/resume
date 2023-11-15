interface InfoContentI {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>,
  text: string,
  href?: string,
}

type InfoTitleType = 'Контакты' | 'Общее' |'Backend' |'Frontend' 

interface InfoI {
  title: InfoTitleType,
  items: InfoContentI[]
}

export default InfoI;