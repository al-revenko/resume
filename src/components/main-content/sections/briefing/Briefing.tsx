import breakpoints from '~/styles/breakpoints.module.scss';
import avatar from '~/assets/img/avatar.jpg'
import style from './Briefing.module.scss'
import useMediaQuery from '../../../../hooks/useMediaQuery.hook';


function Briefing() {

  const isMobileVersion = useMediaQuery(`(max-width: ${breakpoints.laptop})`)

  return (
    <section className={style.container}>
      <div className={style.container__avatar}>
        <img className={style.container__avatar__img} src={avatar} alt="Avatar" />
      </div>
      <div className={style.container__textContainer}>
        <p className='main-text'>Добро пожаловать.</p>
        {
          isMobileVersion ?
            <p className='main-text'>
              Сверху вы увидите мои контакты и кнопку
              <svg
                className={style.container__textContainer__burgerButtonSvg}
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={20}
                height={20}
                viewBox="0 0 50 50"
              >
                <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z" />
              </svg> 
              которая откроет модальное окно с информацией о стеке технологий которым я владею.</p>
            :
            <p className='main-text'>В меню слева вы увидите мои контакты и стек технологий которым я владею. </p>
        }
        <p className='main-text'>Снизу находятся разделы “Обо мне” и “Мои проекты”.</p>
      </div>
    </section>
  )
}

export default Briefing;



