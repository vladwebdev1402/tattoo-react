import React, { FC } from "react";
import styles from "./banners.module.scss";
const Banners: FC = () => {
  return (
    <div className={styles.bannersContainer}>
      <div className={styles.banner}>
        <div className={styles.bannerTxt}>Краски Lip Nitn</div>
        <button>Смотреть в каталоге</button>
      </div>
      <div className={styles.banner}>
        <div className={styles.bannerTxt}>Foxx viper — хит 2021 года</div>
        <button>Смотреть в каталоге</button>
      </div>
    </div>
  );
};

export default Banners;
