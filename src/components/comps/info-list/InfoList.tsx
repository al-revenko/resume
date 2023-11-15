import InfoListPropsI from "./infoList.interface";


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
                <Icon width={styles.li_icon?.width} height={styles.li_icon?.height} className={styles.li_icon?.style} />
                {
                  item.href ?
                    <a className={styles.li_link} href={href}>{text}</a> :
                    <p className={styles.li_paragraph} >{text}</p>
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
