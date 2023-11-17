import infoData from '~/store/data/info/info.data';
import style from './Categories.module.scss'
import InfoList from '~/components/comps/info-list/InfoList';
import InfoListPropsI from '~/components/comps/info-list/InfoList.interface';

const Categories = () => {

  const categories = infoData;

  const listStyles: InfoListPropsI['styles'] = {
    title: style.container__category__title,
    
    ul: style.container__category__content,

    li: style.container__category__content,
    
    li__container__icon: {
      style: style.container__category__content__item__container__icon,
      width: '20px',
      height: '20px',
    },
    
    li__linkContainer: style.container__category__content__item__linkContainer,
    
    li__container: style.container__category__content__item__textContainer,
  }

  return (
    <ul className={style.container}>
      {
        categories.map((category, index) => {
          return (
            <li className={style.container__category} key={index}>
              <InfoList infoObj={category} styles={listStyles} />
            </li>
          )
        })
      }
    </ul>
  )
}

export default Categories;