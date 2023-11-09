/// <reference types="vite-plugin-svgr/client" />

import CategoryI from "./category.interface";

import MailSvg from "assets/img/icon/contact/mail.svg?react"
import VkSvg from "assets/img/icon/contact/vk.svg?react"
import TgSvg from "assets/img/icon/contact/telegram.svg?react"
import GithubSvg from "assets/img/icon/contact/github.svg?react"

import NodeSvg from 'assets/img/icon/other/node.svg?react'
import TsSvg from 'assets/img/icon/other/ts.svg?react'
import GitSvg from 'assets/img/icon/other/git.svg?react'
import NpmSvg from 'assets/img/icon/other/npm.svg?react'
import PySvg from 'assets/img/icon/other/python.svg?react'

import ReactSvg from 'assets/img/icon/frontend/react.svg?react'
import HtmlSvg from 'assets/img/icon/frontend/html.svg?react'
import CssSvg from 'assets/img/icon/frontend/css.svg?react'
import FigmaSvg from 'assets/img/icon/frontend/figma.svg?react'

import NestSvg from 'assets/img/icon/backend/nest.svg?react'
import PsqlSvg from 'assets/img/icon/backend/psql.svg?react'
import RestSvg from 'assets/img/icon/backend/rest.svg?react'
import DockerSvg from 'assets/img/icon/backend/docker.svg?react'
import OpenApiSvg from 'assets/img/icon/backend/openapi.svg?react'

const categoriesData: CategoryI[] = [
  {
    title: 'Контакты',
    items: [
      {
        Icon: MailSvg,
        text: 'revenko.a@bk.ru',
        href: 'mailto:revenko.a@bk.ru'
      },
      {
        Icon: VkSvg,
        text: 'al_revenko',
        href: 'https://vk.com/al_revenko'
      },      
      {
        Icon: TgSvg,
        text: '@lokixio',
        href: 'https://t.me/lokixio'
      },      
      {
        Icon: GithubSvg,
        text: 'al-revenko',
        href: 'https://github.com/al-revenko'
      },
    ]
  },

  {
    title: 'Общее',
    items: [
      {
        Icon: NodeSvg,
        text: 'NodeJS',
      },
      {
        Icon: TsSvg,
        text: 'TypeScript',
      },      {
        Icon: GitSvg,
        text: 'Git',
      },      {
        Icon: NpmSvg,
        text: 'NPM',
      },      {
        Icon: PySvg,
        text: 'Python',
      },
    ]
  },
  
  {
    title: 'Frontend',
    items: [
      {
        Icon: ReactSvg,
        text: 'React',
      },
      {
        Icon: HtmlSvg,
        text: 'HTML',
      },      {
        Icon: CssSvg,
        text: 'CSS',
      },      {
        Icon: FigmaSvg,
        text: 'Figma',
      },
    ]
  },

  {
    title: 'Backend',
    items: [
      {
        Icon: NestSvg,
        text: 'NestJS',
      },
      {
        Icon: PsqlSvg,
        text: 'PostgreSQL',
      }, {
        Icon: RestSvg,
        text: 'REST API',
      }, {
        Icon: DockerSvg,
        text: 'Docker',
      }, {
        Icon: OpenApiSvg,
        text: 'OpenAPI',
      },
    ]
  },
]

export default categoriesData;