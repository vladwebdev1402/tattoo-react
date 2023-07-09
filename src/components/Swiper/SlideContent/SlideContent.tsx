import React, { FC } from "react";
import SlideButton from "../../UI/button/SlideButton/SlideButton";
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
      <SlideButton />
    </div>
  );
};

export default SlideContent;
