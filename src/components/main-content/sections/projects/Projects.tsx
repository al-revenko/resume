import projectsData from '~/store/data/projects/projects.data';
import style from './Projects.module.scss'

function Projects() {
  return (
    <section className="content-container" style={{ gap: '50px' }}>
      <h2 className="title-h2">Мои проекты</h2>
      <ul className={style.container}>
        {
          projectsData.map((project, index) => {
            const { title, link, desc, present } = project;

            return (
              <li className={style.container__project} key={index}>
                <div className={style.container__project__title}>
                  <title.IconSvg width={48} height={48} />
                  <h3 className='title-h3'>{title.text}</h3>
                </div>
                <a className={style.container__project__link} href={link.href}>{link.text}</a>
                <p className='main-text'>{desc}</p>
                <div className={style.container__project__present}>
                  <ul className={style.container__project__present__list}>
                    {
                      present.hooks.map((hook, index) => {
                        return (
                          <li key={index}>
                            {hook}
                          </li>
                        )
                      })
                    }
                  </ul>
                  <div className={style.container__project__present__imgContainer}>
                    <img src={present.img_src} />
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul >
    </section >
  )
}

export default Projects;