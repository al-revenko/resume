import style from './Person.module.scss'

function Person() {
  return (
    <section className={style.container}>
      <h1 className='title-h1'>Александр Ревенко</h1>
      <span className={style.container__profile}>web-developer</span>
    </section>
  )
}

export default Person;


