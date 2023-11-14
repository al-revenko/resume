import Main from "./main-content/MainContent"
import Sidebar from "./sidebar/Sidebar"
import style from "./App.module.scss"

function App() {
  return (
    <>
    <div className={style.container}>
      <Main />
      <Sidebar />
    </div>
    </>
  )
}

export default App
