import React, { FC } from "react";
import LineButton from "../UI/button/lineButton/LineButton";
import paintsImg from "../../assets/images/banners/paints.png";
import foxxImg from "../../assets/images/banners/foxx-viper.png";
import styles from "./banners.module.scss";
const Banners: FC = () => {
  const onClick = () => {
    console.log("click banners to catalog");
  };

  return (
    <div className={styles.bannersContainer}>
      <div className={`${styles.banner}  ${styles.left}`}>
        <img src={paintsImg} />

        <div className={styles.bannerTxt}>Краски Lip Nitn</div>

        <div className={styles.bannerBtn}>
          <LineButton onClick={onClick}>Смотреть в каталоге</LineButton>
        </div>
      </div>
      <div className={`${styles.banner}  ${styles.right}`}>
        <img src={foxxImg} />

        <div className={styles.bannerTxt}>Foxx viper — хит 2021 года</div>
        <div className={styles.bannerBtn}>
          <LineButton onClick={onClick}>Смотреть в каталоге</LineButton>
        </div>
      </div>
    </div>
  );
};

export default Banners;
