import InfoI from "~/store/data/info/info.interface";

interface InfoListPropsI {
  infoObj: InfoI
  styles: {
    ul?: string
    title?: string
    
    li?: string
    li_icon?: {
      style: string
      width: string | number
      height: string | number
    }
    li_link?: string
    li_paragraph?: string
  }
}

export default InfoListPropsI;