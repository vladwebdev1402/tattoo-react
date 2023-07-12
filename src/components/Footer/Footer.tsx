import React, { FC } from "react";
import Logo from "../Header/Logo/Logo";
import styles from "./Footer.module.scss";
const Footer: FC = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.leftFooter}>
        <div className={styles.leftLinks}>
          <div className={styles.logo}>
            <Logo />
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
      <div className={styles.rightooter}></div>
    </div>
  );
};

export default Footer;
