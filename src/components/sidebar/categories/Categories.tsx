import infoData from "~/store/data/info/info.data";
import style from "./Categories.module.scss";
import InfoList from "~/components/comps/info-list/InfoList";
import InfoListPropsI from "~/components/comps/info-list/InfoList.interface";

const Categories = () => {
  const { contacts, skills } = infoData;

  const listStyles: InfoListPropsI["styles"] = {
    ul: style.container__category__content,

    li: style.container__category__content,

    li__container__icon: {
      style: style.container__category__content__item__container__icon,
      width: "20px",
      height: "20px",
    },

    li__linkContainer: style.container__category__content__item__linkContainer,

    li__container: style.container__category__content__item__textContainer,
  };

  return (
    <ul className={style.container}>
      <li className={style.container__category}>
        <h2 className={style.container__category__title}>{contacts.title}</h2>
        <InfoList infoObjItems={contacts.items} styles={listStyles} />
      </li>
      <li className={style.container__category}>
        <h2 className={style.container__category__title}>{skills.title}</h2>
        <InfoList infoObjItems={skills.items} styles={listStyles} />
      </li>
    </ul>
  );
};

export default Categories;
