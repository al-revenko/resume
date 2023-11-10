import style from './Briefing.module.scss'
import avatar from '../../../assets/img/avatar.jpg'

function Briefing() {
  return (
    <section className={style.container}>
      <div className={style.container__avatar}>
        <img className={style.container__avatar__img} src={avatar} alt="Avatar"/>
      </div>
      <div className={style.container__container__textContainer}>
        <p className='main-text'>Добро пожаловать.</p>
        <p className='main-text'>В меню слева вы увидите мои контакты и стек технологий которым я владею. Контакты и стек (все 3 раздела
          по отдельности) отсортированы по приоритету сверху вниз от большего к меньшему приоритету. </p>
        <p className='main-text'>Снизу находятся разделы “Обо мне” и “Мои проекты”.</p>
      </div>
    </section>
  )
}

export default Briefing;



