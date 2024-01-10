import style from './Sidebar.module.scss'
import Categories from './categories/Categories';

function Sidebar() {
  return (
    <aside className={style.wrapper}>
      <div className={style.container}>
        <Categories />
      </div>
    </aside>
  )
}

export default Sidebar;

