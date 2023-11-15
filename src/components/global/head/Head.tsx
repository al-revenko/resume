import BurgerBtn from '../../comps/burger-btn/BurgerBtn'
import style from './Head.module.scss'
import infoData from '~/store/data/info/info.data'

const Head = () => {
  const contacts = infoData.find((item) => {
    if (item.title === 'Контакты') {
      return true;
    }

    return false;
  })

  return (
    <header className={style.container}>
      <ul className={style.container__contacts}>
        {
          contacts ? contacts.items.map((item, index) => {

            // eslint-disable-next-line no-useless-escape
            const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

            const isEmail = emailRegex.test(item.text);

            return (
              <li key={index}>
                <a className={style.container__contacts__item} href={item.href}>
                  {
                    isEmail ?
                      item.text :
                      <item.Icon className={style.container__contacts__item__icon} width='20px' height='20px' />
                  }
                </a>
              </li>
            )
          })
          :
          null
        }
      </ul>
      <BurgerBtn />
    </header>
  )
}

export default Head;