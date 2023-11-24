/// <reference types="vite-plugin-svgr/client" />

import ProjectDataI from './project.interface'

import cancrinImg from '~/assets/img/project-present/cancrin-present.webp'
import CbrSvg from '~/assets/svg/icon/projects/cbr.svg?react'

import ResumeSvg from '~/assets/svg/icon/projects/resume.svg?react'
import resumeImg from '~/assets/img/project-present/resume-present.webp'

const projectsData: ProjectDataI[] = [
  {
    title: {
      text: 'CancrinBot',
      IconSvg: CbrSvg,
    },
    
    link: {
      href: 'https://github.com/al-revenko/cancrinBot',
      text: 'github.com/al-revenko/cancrinBot'
    },

    desc: 'Telegram бот позволяющий быстро получить актуальные курсы валют от Центрального банка России.',

    present: {
      hooks: [
        'Простота использования',
        'Встроенный парсер данных которые предоставляет сайт cbr-xml-daily.ru',
        'Бот сам обновляет данные по будням в 1 час ночи по МСК',
        'Парсер можно с лёгкостью заменить на другой',
      ],
      img_src: cancrinImg,
    }
  },
  {
    title: {
      text: 'Этот сайт',
      IconSvg: ResumeSvg,
    },
    
    link: {
      href: 'https://github.com/al-revenko/resume',
      text: 'github.com/al-revenko/resume'
    },
    
    desc: 'Моё резюме и демонстрация моих навыков в Frontend разработке.',

    present: {
      hooks: [
        'Написан на TypeScript',
        'Используются библиотеки React и Redux',
        'Стилизован с помощью SCSS',
        'Адаптирован под мобильные устройства',
      ],
      img_src: resumeImg,
    }
  },
]

export default projectsData;