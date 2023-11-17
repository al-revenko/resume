import InfoListPropsI from "./InfoList.interface";


const InfoList = (props: InfoListPropsI) => {

  const { infoObj, styles } = props;

  const { title, items } = infoObj;

  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.ul}>
        {
          items.map((item, index) => {

            const { Icon, text, href } = item;

            return (
              <li className={styles.li} key={index}>
                {
                  item.href ?
                    <a className={styles.li__linkContainer} href={href}>
                      <Icon width={styles.li__container__icon?.width} height={styles.li__container__icon?.height} className={styles.li__container__icon?.style} />
                      <p>{text}</p>
                    </a> :
                    <div className={styles.li__container}>
                      <Icon width={styles.li__container__icon?.width} height={styles.li__container__icon?.height} className={styles.li__container__icon?.style} />
                      <p>{text}</p>
                    </div>
                }
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default InfoList;
