import React, { FC } from "react";
import { useWidth } from "../../hooks/useWidth";
import DarkButton from "../UI/button/darkButton/DarkButton";
import styles from "./Swiper.module.scss";

interface Props {
  header: string;
  desc: string;
}
const Slide: FC<Props> = ({ header, desc }) => {
  return (
    <div className={styles.slide}>
      <div className={styles.slideContent}>
        <div className={styles.slideHeader}>{header}</div>
        <div className={styles.slideDesc}>{desc}</div>
        <div className={styles.slideBtn}>
          <DarkButton
            x="64"
            onClick={() => {
              console.log("click to catalog");
            }}
          >
            Смотреть каталог
          </DarkButton>
        </div>
      </div>
    </div>
  );
};

export default Slide;
