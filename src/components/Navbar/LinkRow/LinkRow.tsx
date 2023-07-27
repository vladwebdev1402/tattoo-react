import React, { FC } from "react";
import MyLink from "./MyLink";
import styles from "./LinkRow.module.scss";
const LinkRow: FC = () => {
  return (
    <nav className={styles.linkRow}>
      <ul className={styles.linkList}>
        <li>
          <MyLink name={"Промокоды"} to="/promo" />
        </li>
        <li>
          <MyLink name={"Скидки"} to="/discount" />
        </li>
        <li>
          <MyLink name={"Помощь"} to="/help" />
        </li>
        <li>
          <MyLink name={"О нас"} to="/about" />
        </li>
        <li>
          <MyLink name={"Контакты"} to="/contacts" />
        </li>
      </ul>
    </nav>
  );
};

export default LinkRow;
