import React, { FC } from "react";
import SlideButton from "../../UI/button/slideButton/SlideButton";
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
      <SlideButton
        nameClassDiv={styles.slideBtn}
        nameClassText={styles.txtBtn}
        onClick={() => {
          console.log("click to catalog");
        }}
      />
    </div>
  );
};

export default SlideContent;
