import infoData from '~/store/data/info/info.data';
import style from './Categories.module.scss'
import InfoList from '~/components/comps/info-list/InfoList';
import InfoListPropsI from '../../comps/info-list/infoList.interface';

const Categories = () => {

  const categories = infoData;

  const listStyles: InfoListPropsI['styles'] = {
    title: style.container__category__title,
    
    li: style.container__category__content,
    
    li_icon: {
      style: style.container__category__content__icon,
      width: '20px',
      height: '20px',
    },
    li_link: style.container__category__content__text,
    
    li_paragraph: style.container__category__content__text,
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