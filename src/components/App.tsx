import Main from "./main-content/MainContent"
import Sidebar from "./sidebar/Sidebar"
import style from "./App.module.scss"
import Head from "./global/head/Head"

function App() {
  return (
    <>
    <Head />
    <div className={style.container}>
      <Main />
      <Sidebar />
    </div>
    </>
  )
}

export default App
