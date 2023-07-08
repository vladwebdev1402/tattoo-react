import React, { FC } from "react";
import MyLink from "./MyLink";
import styles from "./LinkRow.module.scss";
const LinkRow: FC = () => {
  return (
    <div className={styles.linkRow}>
      <MyLink name={"Промокоды"} />
      <MyLink name={"Скидки"} />
      <MyLink name={"Помощь"} />
      <MyLink name={"О нас"} />
      <MyLink name={"Контакты"} />
    </div>
  );
};

export default LinkRow;
