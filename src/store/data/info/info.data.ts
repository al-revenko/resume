/// <reference types="vite-plugin-svgr/client" />

import InfoI from "./info.interface";

import MailSvg from "~/assets/svg/icon/contact/mail.svg?react";
import VkSvg from "~/assets/svg/icon/contact/vk.svg?react";
import TgSvg from "~/assets/svg/icon/contact/telegram.svg?react";
import GithubSvg from "~/assets/svg/icon/contact/github.svg?react";

import TsSvg from "~/assets/svg/icon/skills/ts.svg?react";
import GitSvg from "~/assets/svg/icon/skills/git.svg?react";
import NpmSvg from "~/assets/svg/icon/skills/npm.svg?react";
import ReactSvg from "~/assets/svg/icon/skills/react.svg?react";
import ReduxSvg from "~/assets/svg/icon/skills/redux.svg?react";
import HtmlSvg from "~/assets/svg/icon/skills/html.svg?react";
import CssSvg from "~/assets/svg/icon/skills/css.svg?react";
import SassSvg from "~/assets/svg/icon/skills/sass.svg?react";

const infoData: InfoI = {
  contacts: {
    title: "Контакты",
    items: [
      {
        Icon: MailSvg,
        text: "revenko.a@bk.ru",
        href: "mailto:revenko.a@bk.ru",
      },
      {
        Icon: VkSvg,
        text: "al_revenko",
        href: "https://vk.com/al_revenko",
      },
      {
        Icon: TgSvg,
        text: "@lokixio",
        href: "https://t.me/lokixio",
      },
      {
        Icon: GithubSvg,
        text: "al-revenko",
        href: "https://github.com/al-revenko",
      },
    ],
  },

  skills: {
    title: "Основной стек",
    items: [
      {
        Icon: TsSvg,
        text: "TypeScript",
      },
      {
        Icon: ReactSvg,
        text: "React",
      },
      {
        Icon: HtmlSvg,
        text: "HTML",
      },
      {
        Icon: CssSvg,
        text: "CSS",
      },
      {
        Icon: SassSvg,
        text: "Sass / Scss",
      },
      {
        Icon: ReduxSvg,
        text: "Redux",
      },
      {
        Icon: GitSvg,
        text: "Git",
      },
      {
        Icon: NpmSvg,
        text: "NPM",
      },
    ],
  },
};

export default infoData;
