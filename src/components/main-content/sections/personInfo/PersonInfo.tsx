import avatar from '~/assets/img/avatar.jpg'
import style from './PersonInfo.module.scss'
import personData from '../../../../store/data/person/person.data';
import { ageToStr, calculateAge } from './age.uttils';

function PersonInfo() {

  const {
    fullname,
    birthday,
    location,
    scheduleType,
    workType,
    salary,
    optionInfo,
  } = personData

  const width = '20px';
  const height = '20px';

  const age = calculateAge(birthday.value) ;
  const ageStr = age + ' ' + ageToStr(23);

  return (
    <section className={style.container}>
        <div className={style.container__avatar}>
          <img className={style.container__avatar__img} src={avatar} alt="Avatar" />
        </div>
        <div className={style.container__infoContainer}>
          <ul className={style.infoContainer__list}>
            <li className={style.infoContainer__list__item}>
              <fullname.Icon width={width} height={height} className={style.infoContainer__list__item__icon} />
              <span className='main-text'>{fullname.value}</span>
            </li>
            <li className={style.infoContainer__list__item}>
              <birthday.Icon width={width} height={height} className={style.infoContainer__list__item__icon} />
              <span className='main-text'>{ageStr}</span>
            </li>
            <li className={style.infoContainer__list__item}>
              <location.Icon width={width} height={height} className={style.infoContainer__list__item__icon} />
              <span className='main-text'>{location.value}</span>
            </li>
          </ul>

          <ul className={style.infoContainer__list}>
            <li className={style.infoContainer__list__item}>
              <workType.Icon width={width} height={height} className={style.infoContainer__list__item__icon} />
              <span className='main-text'>{workType.type}</span>
            </li>
            <li className={style.infoContainer__list__item}>
              <scheduleType.Icon width={width} height={height} className={style.infoContainer__list__item__icon} />
              <span className='main-text'>{scheduleType.type}</span>
            </li>                              <li className={style.infoContainer__list__item}>
              <salary.Icon width={width} height={height} className={style.infoContainer__list__item__icon} />
              <span className='main-text'>{salary.value}</span>
            </li>
            { 
              optionInfo ? 
            <li className={style.infoContainer__list__item}>
              <optionInfo.Icon width={width} height={height} className={style.infoContainer__list__item__icon} />
              <span className='main-text'>{optionInfo.value}</span>
            </li>
            : null
            }
          </ul>
        </div>
    </section>
  )
}

export default PersonInfo;



