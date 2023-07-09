import React, { FC } from "react";
import styles from "./SlideButton.module.scss";
const SlideButton: FC = () => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.slideButton}>Смотреть каталог</button>
    </div>
  );
};

export default SlideButton;
