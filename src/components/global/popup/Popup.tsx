import useMediaQuery from '~/hooks/useMediaQuery.hook';
import useAppSelector from '~/store/redux/hooks/useAppSelector.hook';
import useAppDispatch from '~/store/redux/hooks/useAppDispatch.hook';
import { changePopupStatus } from '~/store/redux/slices/popupStatus.slice';
import infoData from '~/store/data/info/info.data';
import breakpoints from '~/styles/_breakpoints.module.scss';
import InfoList from '~/components/comps/info-list/InfoList';
import InfoListPropsI from '~/components/comps/info-list/InfoList.interface';
import style from './Popup.module.scss';
import { useEffect } from 'react';

const Popup = () => {

  const dispatch = useAppDispatch();
  const popupStatus = useAppSelector((state) => state.popupStatus)
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.laptop})`)
  
  useEffect(() => {
    if (!isMobile) {
      document.body.style.overflow = "visible"
      dispatch(changePopupStatus(false))
    }
  }, [dispatch, isMobile])

  const skills = infoData.filter((item) => {
    if (item.title !== 'Контакты') {
      return true;
    }

    return false;
  })

  const infoListStyles: InfoListPropsI['styles'] = {

    title: style.container__categories__category__title,

    ul: style.container__categories__category__skills,

    li__container: style.container__categories__category__skills__skill__text,

    li__container__icon: {
      style: style.container__categories__category__skills__skill__icon,
      width: '20px',
      height: '20px',
    },
  }

  return (
    <div className={style.container} style={!popupStatus.isAcive ? { display: 'none' } : undefined}>
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