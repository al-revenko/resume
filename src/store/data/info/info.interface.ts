interface InfoContentI {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>,
  text: string,
  href?: string,
}

interface InfoObjContentI {
    title: string,
    items: InfoContentI[]
}

interface InfoI {
  contacts: InfoObjContentI 
  skills: InfoObjContentI 
}

export default InfoI;
export type {InfoContentI, InfoObjContentI}