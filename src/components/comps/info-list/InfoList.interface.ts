import { InfoObjContentI } from "~/store/data/info/info.interface";

interface InfoListPropsI {
  infoObjItems: InfoObjContentI['items']
  
  styles: {
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