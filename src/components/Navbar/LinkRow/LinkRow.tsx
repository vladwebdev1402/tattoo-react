import React, { FC } from "react";
import MyLink from "./MyLink";
import styles from "./LinkRow.module.scss";
const LinkRow: FC = () => {
  return (
    <nav className={styles.linkRow}>
      <ul className={styles.linkList}>
        <li className={styles.linkElement}>
          <MyLink name={"Промокоды"} to="/promo" />
        </li>
        <li className={styles.linkElement}>
          <MyLink name={"Скидки"} to="/discount" />
        </li>
        <li className={styles.linkElement}>
          <MyLink name={"Помощь"} to="/help" />
        </li>
        <li className={styles.linkElement}>
          <MyLink name={"О нас"} to="/about" />
        </li>
        <li className={styles.linkElement}>
          <MyLink name={"Контакты"} to="/contacts" />
        </li>
      </ul>
    </nav>
  );
};

export default LinkRow;
