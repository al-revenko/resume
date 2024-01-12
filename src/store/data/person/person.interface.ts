interface PersonI {
  position: {
    value: string
  }

  fullname: {
    value: string
    Icon: React.FC<React.SVGProps<SVGSVGElement>>,
  }
  
  birthday: {
    value: Date
    Icon: React.FC<React.SVGProps<SVGSVGElement>>,
  }
  
  location: {
    value: string
    Icon: React.FC<React.SVGProps<SVGSVGElement>>,
  }
  scheduleType: {
    type: 'Удаленная работа' | 'Полный день' | 'Гибкий график' | 'Сменный график' | 'Вахтовый метод'
    Icon: React.FC<React.SVGProps<SVGSVGElement>>,
  } 
  
  workType: {
    type: 'Полная занятость' | 'Частичная занятость' | 'Стажировка'
    Icon: React.FC<React.SVGProps<SVGSVGElement>>,
  }  
  
  salary: {
    value: string
    Icon: React.FC<React.SVGProps<SVGSVGElement>>,
  }
  
  optionInfo?: {
    value: string
    Icon: React.FC<React.SVGProps<SVGSVGElement>>,
  }
}

export default PersonI;