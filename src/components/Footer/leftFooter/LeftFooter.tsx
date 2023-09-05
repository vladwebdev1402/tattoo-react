import React, { FC } from "react";
import styles from "./leftFooter.module.scss";
import logoImg from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const LeftFooter: FC = () => {
  return (
    <div className={styles.leftFooter}>
      <div className={styles.logo}>
        <Link to={"/"}>
          <img src={logoImg} alt="logo" />
        </Link>
        <a className={`${styles.link} ${styles.conf}`}>
          Политика конфенедциальности
        </a>
      </div>
      <ul className={styles.menu}>
        <li className={styles.menuLink}>
          <Link to={"/promo"} className={styles.link}>
            Промокоды
          </Link>
        </li>
        <li className={styles.menuLink}>
          <Link to={"/discount"} className={styles.link}>
            Скидки
          </Link>
        </li>
        <li className={styles.menuLink}>
          <Link to={"/help"} className={styles.link}>
            Помощь
          </Link>
        </li>
        <li className={styles.menuLink}>
          <Link to={"/about"} className={styles.link}>
            О нас
          </Link>
        </li>
        <li className={styles.menuLink}>
          <Link to={"/contacts"} className={styles.link}>
            Контакты
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftFooter;
