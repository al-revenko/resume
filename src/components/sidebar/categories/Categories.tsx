import categoriesData from 'components/sidebar/categories/categories.data';
import style from './Categories.module.scss'
import CategoryI from './category.interface';

const Categories = () => {

  const categories = categoriesData;

  const getCategoryContent = (category: CategoryI) => {

    const {title, items} = category;

    return (
      <>
        <h2 className={style.categories__category__title}>{title}</h2>
        <ul>
          {
            items.map((item, index) => {

              const {Icon, text, href} = item;

              return (
                <li className={style.categories__category__content} key={index}>
                  <Icon width='20px' height='20px' className={style.categories__category__content__icon}/>
                  {
                    item.href ?
                    <a className={style.categories__category__content__text} href={href}>{text}</a> :
                    <p className={style.categories__category__content__text} >{text}</p>
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
    <ul className={style.categories}>
      {
        categories.map((category, index) => {
          return (
            <li className={style.categories__category} key={index}>
              { getCategoryContent(category) }
            </li>
          )
        })
      }
    </ul>
  )
}

export default Categories;