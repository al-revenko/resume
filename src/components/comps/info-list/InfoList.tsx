import InfoListPropsI from "./InfoList.interface";


const InfoList = (props: InfoListPropsI) => {

  const { infoObjItems, styles } = props;

  return (
      <ul className={styles.ul}>
        {
          infoObjItems.map((item, index) => {

            const { Icon, text, href } = item;

            return (
              <li className={styles.li} key={index}>
                {
                  item.href ?
                    <a className={styles.li__linkContainer} href={href}>
                      <Icon width={styles.li__container__icon?.width} height={styles.li__container__icon?.height} className={styles.li__container__icon?.style} />
                      <p>{text}</p>
                    </a> 
                    :
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
  )
}

export default InfoList;
