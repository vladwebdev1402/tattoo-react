import React, { FC } from "react";
import { useWidth } from "../../hooks/useWidth";
import ClipButton from "../UI/button/clipButton/ClipButton";
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
          <ClipButton
            onClick={() => {
              console.log("click to catalog");
            }}
            theme="dark"
            text="Смотреть каталог"
          />
        </div>
      </div>
    </div>
  );
};

export default Slide;
