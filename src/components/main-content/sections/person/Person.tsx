import personData from '../../../../store/data/person/person.data';
import style from './Person.module.scss'

function Person() {
  return (
    <section className={style.container}>
      <h1 className='title-h1'>Александр Ревенко</h1>
      <span className={style.container__profile}>{personData.position.value}</span>
    </section>
  )
}

export default Person;


