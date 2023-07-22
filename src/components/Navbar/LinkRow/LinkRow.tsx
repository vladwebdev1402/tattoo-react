import React, { FC } from "react";
import MyLink from "./MyLink";
import styles from "./LinkRow.module.scss";
const LinkRow: FC = () => {
  return (
    <div className={styles.linkRow}>
      <MyLink name={"Промокоды"} to="/promo" />
      <MyLink name={"Скидки"} to="/discount" />
      <MyLink name={"Помощь"} to="/help" />
      <MyLink name={"О нас"} to="/about" />
      <MyLink name={"Контакты"} to="/contacts" />
    </div>
  );
};

export default LinkRow;
