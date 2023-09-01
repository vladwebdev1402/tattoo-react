import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import ClipButton from "../UI/button/clipButton/ClipButton";
import styles from "./Swiper.module.scss";
import img from "../../assets/images/bg1.png";
interface Props {
  header: string;
  desc: string;
}
const Slide: FC<Props> = ({ header, desc }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.slide}>
      <img src={img} />
      <div className={styles.slideContent}>
        <div className={styles.slideHeader}>{header}</div>
        <div className={styles.slideDesc}>{desc}</div>
        <div className={styles.slideBtn}>
          <ClipButton
            onClick={() => {
              navigate("catalog");
            }}
            theme="dark"
          >
            Смотреть каталог
          </ClipButton>
        </div>
      </div>
    </div>
  );
};

export default Slide;
