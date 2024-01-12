import BurgerBtn from '../../comps/burger-btn/BurgerBtn'
import style from './Head.module.scss'
import infoData from '~/store/data/info/info.data'

const Head = () => {
  const contacts = infoData.contacts

  const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
  
  return (
    <header className={style.container}>
      <ul className={style.container__contacts}>
        {
          
          contacts ? contacts.items.map((item, index) => {

            const isEmail = emailRegex.test(item.text);

            return (
              <li key={index}>
                <a className={style.container__contacts__item} href={item.href}>
                  {
                    isEmail ?
                      <span>{item.text}</span> :
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