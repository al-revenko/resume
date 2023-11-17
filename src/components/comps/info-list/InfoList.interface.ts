import InfoI from "~/store/data/info/info.interface";

interface InfoListPropsI {
  infoObj: InfoI
  styles: {
    title?: string
    
    ul?: string
    
    li?: string
    
    li__container?: string
    
    li__linkContainer?: string
    
    li__container__icon?: {
      style: string
      width: string | number
      height: string | number
    }
  }
}

export default InfoListPropsI;