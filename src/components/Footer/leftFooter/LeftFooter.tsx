import React, { FC } from "react";
import styles from "./leftFooter.module.scss";
import logoImg from "../../../assets/images/logo.svg";

const LeftFooter: FC = () => {
  return (
    <div className={styles.leftFooter}>
      <div className={styles.leftLinks}>
        <div className={styles.logo}>
          <a href="/">
            <img src={logoImg} alt="logo" />
          </a>
          <a className={`${styles.link} ${styles.conf}`}>
            Политика конфенедциальности
          </a>
        </div>
        <div className={styles.menu}>
          <a className={styles.link}>Промокоды</a>
          <a className={styles.link}>Скидки</a>
          <a className={styles.link}>Помощь</a>
          <a className={styles.link}>О нас</a>
          <a className={styles.link}>Контакты</a>
        </div>
      </div>
    </div>
  );
};

export default LeftFooter;
