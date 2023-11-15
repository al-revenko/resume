import BurgerBtn from '../../comps/burger-btn/BurgerBtn'
import style from './Head.module.scss'

const Head = () => {
  return (
    <header className={style.container}>
      <BurgerBtn />
    </header>
  )
}

export default Head;