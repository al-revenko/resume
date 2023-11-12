/// <reference types="vite-plugin-svgr/client" />

import cancrinImg from '~/assets/img/cancrin-present.jpg'
import CbrSvg from '~/assets/img/icon/projects/cbr.svg?react'
import ProjectDataI from './project.interface'

const projectsData: ProjectDataI[] = [
  {
    title: {
      text: 'CancrinBot',
      IconSvg: CbrSvg,
    },
    
    link: {
      href: 'https://github.com/al-revenko/cancrinBot',
      text: 'github.com/al-revenko/cancrinBot',
    },

    desc: 'Telegram бот позволяющий быстро получить актуальные курсы валют от Центрального банка России.',

    present: {
      hooks: [
        'Простота использования',
        'Встроенный парсер данных которые предоставляет сайт cbr-xml-daily.ru',
        'Бот сам обновляет данные по будням в 1 час ночи по МСК',
        'Парсер можно с лёгкостью заменить на другой.',
      ],
      img_src: cancrinImg,
    }
  },
  {
    title: {
      text: 'CancrinBot',
      IconSvg: CbrSvg,
    },
    
    link: {
      href: 'https://github.com/al-revenko/cancrinBot',
      text: 'github.com/al-revenko/cancrinBot',
    },

    desc: 'Telegram бот позволяющий быстро получить актуальные курсы валют от Центрального банка России.',

    present: {
      hooks: [
        'Простота использования',
        'Встроенный парсер данных которые предоставляет сайт cbr-xml-daily.ru',
        'Бот сам обновляет данные по будням в 1 час ночи по МСК',
        'Парсер можно с лёгкостью заменить на другой.',
      ],
      img_src: cancrinImg,
    }
  },  {
    title: {
      text: 'CancrinBot',
      IconSvg: CbrSvg,
    },
    
    link: {
      href: 'https://github.com/al-revenko/cancrinBot',
      text: 'github.com/al-revenko/cancrinBot',
    },

    desc: 'Telegram бот позволяющий быстро получить актуальные курсы валют от Центрального банка России.',

    present: {
      hooks: [
        'Простота использования',
        'Встроенный парсер данных которые предоставляет сайт cbr-xml-daily.ru',
        'Бот сам обновляет данные по будням в 1 час ночи по МСК',
        'Парсер можно с лёгкостью заменить на другой.',
      ],
      img_src: cancrinImg,
    }
  },
]

export default projectsData;