import React, { FC } from "react";
import LineButton from "../UI/button/lineButton/LineButton";

import styles from "./banners.module.scss";
const Banners: FC = () => {
  return (
    <div className={styles.bannersContainer}>
      <div className={`${styles.banner}  ${styles.left} ${styles.img}`}>
        <div className={styles.bannerTxt}>Краски Lip Nitn</div>

        <div className={styles.bannerBtn}>
          <LineButton onClick={() => {}}>Смотреть в каталоге</LineButton>
        </div>
      </div>
      <div className={`${styles.banner}  ${styles.right} ${styles.img}`}>
        <div className={styles.bannerTxt}>Foxx viper — хит 2021 года</div>
        <div className={styles.bannerBtn}>
          <LineButton onClick={() => {}}>Смотреть в каталоге</LineButton>
        </div>
      </div>
    </div>
  );
};

export default Banners;
