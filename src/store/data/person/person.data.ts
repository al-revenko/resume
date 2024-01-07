import PersonI from "./person.interface";

import personSvg from "~/assets/svg/icon/personInfo/person.svg?react"
import cakeSvg from "~/assets/svg/icon/personInfo/birthday-cake.svg?react"
import pointSvg from "~/assets/svg/icon/personInfo/location-point.svg?react"
import bagSvg from "~/assets/svg/icon/personInfo/working-bag.svg?react"
import clockSvg from "~/assets/svg/icon/personInfo/clock.svg?react"
import moneySvg from "~/assets/svg/icon/personInfo/money.svg?react"
import infoSvg from "~/assets/svg/icon/personInfo/info.svg?react"



const personData: PersonI = {
  fullname: {
    value: 'Ревенко Александр Иванович',
    Icon: personSvg,
  }, 
  
  birthday: {
    value: new Date('2001-05-24'),
    Icon: cakeSvg,
  },
  
  location: {
    value:'Новосибирск, Россия',
    Icon: pointSvg,
  },
  
  scheduleType: {
    type: 'Удаленная работа',
    Icon: bagSvg,
  }, 
  
  workType: {
    type: 'Полная занятость',
    Icon: clockSvg,
  }, 
  
  salary: {
    value: '45.000₽',
    Icon: moneySvg,
  }, 
  
  optionInfo: {
    value: 'Инвалид II группы',
    Icon: infoSvg,
  },
}

export default personData