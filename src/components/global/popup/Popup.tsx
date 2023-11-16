import { useAppSelector } from '~/store/redux/reduxHooks';
import infoData from '~/store/data/info/info.data';
import InfoList from '~/components/comps/info-list/InfoList';
import InfoListPropsI from '~/components/comps/info-list/infoList.interface';
import style from './Popup.module.scss';


const Popup = () => {

  const popupStatus = useAppSelector((state) => state.popupStatus)

  const skills = infoData.filter((item) => {
    if (item.title !== 'Контакты') {
      return true;
    }

    return false;
  })

  const infoListStyles: InfoListPropsI['styles'] = {
    
    title: style.container__categories__category__title,
    
    ul: style.container__categories__category__skills,

    li: style.container__categories__category__skills__skill,
    
    li_icon: {
      style: style.container__categories__category__skills__skill__icon,
      width: '20px',
      height: '20px',
    },
    
    li_paragraph: style.container__categories__category__skills__skill__text,
  }

  return (
    <div className={style.container} style={!popupStatus.isAcive ? {display: 'none'} : undefined}>
      <ul className={style.container__categories}>
        {
          skills.map((skill, index) => {
            return (
              <li className={style.container__categories__category} key={index}>
                <InfoList infoObj={skill} styles={infoListStyles} />
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Popup;