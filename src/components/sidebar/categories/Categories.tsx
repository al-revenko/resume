import infoData from '~/store/data/info/info.data';
import InfoI from '~/store/data/info/info.interface';
import style from './Categories.module.scss'

const Categories = () => {

  const categories = infoData;

  const getCategoryContent = (category: InfoI) => {

    const {title, items} = category;

    return (
      <>
        <h2 className={style.container__category__title}>{title}</h2>
        <ul>
          {
            items.map((item, index) => {

              const {Icon, text, href} = item;

              return (
                <li className={style.container__category__content} key={index}>
                  <Icon width='20px' height='20px' className={style.container__category__content__icon}/>
                  {
                    item.href ?
                    <a className={style.container__category__content__text} href={href}>{text}</a> :
                    <p className={style.container__category__content__text} >{text}</p>
                  }
                </li>
              )
            })
          }
        </ul>
      </>
    )
  }

  return (
    <ul className={style.container}>
      {
        categories.map((category, index) => {
          return (
            <li className={style.container__category} key={index}>
              { getCategoryContent(category) }
            </li>
          )
        })
      }
    </ul>
  )
}

export default Categories;