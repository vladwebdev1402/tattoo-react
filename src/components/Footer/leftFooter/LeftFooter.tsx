import React, { FC } from "react";
import styles from "./leftFooter.module.scss";
import logoImg from "../../../assets/images/logo.svg";

const LeftFooter: FC = () => {
  return (
    <div className={styles.leftFooter}>
      <div className={styles.logo}>
        <a href="/">
          <img src={logoImg} alt="logo" />
        </a>
        <a className={`${styles.link} ${styles.conf}`}>
          Политика конфенедциальности
        </a>
      </div>
      <ul className={styles.menu}>
        <li>
          <a className={styles.link}>Промокоды</a>
        </li>
        <li>
          <a className={styles.link}>Скидки</a>
        </li>
        <li>
          <a className={styles.link}>Помощь</a>
        </li>
        <li>
          <a className={styles.link}>О нас</a>
        </li>
        <li>
          <a className={styles.link}>Контакты</a>
        </li>
      </ul>
    </div>
  );
};

export default LeftFooter;
