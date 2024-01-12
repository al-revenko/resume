import useMediaQuery from "~/hooks/useMediaQuery.hook";
import useAppSelector from "~/store/redux/hooks/useAppSelector.hook";
import useAppDispatch from "~/store/redux/hooks/useAppDispatch.hook";
import { changePopupStatus } from "~/store/redux/slices/popupStatus.slice";
import infoData from "~/store/data/info/info.data";
import breakpoints from "~/styles/_breakpoints.module.scss";
import InfoList from "~/components/comps/info-list/InfoList";
import InfoListPropsI from "~/components/comps/info-list/InfoList.interface";
import style from "./Popup.module.scss";
import { useEffect } from "react";

const Popup = () => {
  const dispatch = useAppDispatch();
  const popupStatus = useAppSelector((state) => state.popupStatus);
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.laptop})`);

  useEffect(() => {
    if (!isMobile) {
      document.body.style.overflow = "visible";
      dispatch(changePopupStatus(false));
    }
  }, [dispatch, isMobile]);

  const skills = infoData.skills;

  const infoListStyles: InfoListPropsI["styles"] = {
    ul: style.container__skills__list,

    li__container: style.container__skills__list__item,

    li__container__icon: {
      style: style.container__skills__list__item__icon,
      width: "20px",
      height: "20px",
    },
  };

  return (
    <div
      className={style.container}
      style={!popupStatus.isAcive ? { display: "none" } : undefined}>
      <div className={style.container__skills}>
        <h2 className={style.container__skills__title}>{skills.title}</h2>
        <InfoList infoObjItems={skills.items} styles={infoListStyles} />
      </div>
    </div>
  );
};

export default Popup;
