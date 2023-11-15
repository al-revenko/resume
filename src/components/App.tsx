import Main from "./main-content/MainContent"
import Sidebar from "./sidebar/Sidebar"
import Head from "./global/head/Head"
import Popup from "./global/popup/Popup"
import style from "./App.module.scss"

function App() {
  return (
    <>
    <Head />
    <div className={style.container}>
      <Main />
      <Sidebar />
    </div>
    <Popup />
    </>
  )
}

export default App
