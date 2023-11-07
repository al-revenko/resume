import style from './Sidebar.module.scss'
import Categories from './categories/Categories';

function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <Categories />
    </aside>
  )
}

export default Sidebar;

