import React, { FC } from "react";
import DarkButton from "../../UI/button/darkButton/DarkButton";
import styles from "./SlideContent.module.scss";

interface SlideContentProps {
  header: string;
  desc: string;
}
const SlideContent: FC<SlideContentProps> = ({ header, desc }) => {
  return (
    <div className={styles.slideContent}>
      <span className={styles.slideHeadTxt}>{header}</span>
      <span className={styles.slideDescTxt}>{desc}</span>

      <div className={styles.btn}>
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
  );
};

export default SlideContent;
