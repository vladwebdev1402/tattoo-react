import React, { FC } from "react";
import MyLink from "./MyLink";
import styles from "./LinkRow.module.scss";
const LinkRow: FC = () => {
  return (
    <div className={styles.linkRow}>
      <MyLink name={"Промокоды"} active={false} />
      <MyLink name={"Скидки"} active={false} />
      <MyLink name={"Помощь"} active={false} />
      <MyLink name={"О нас"} active={true} />
      <MyLink name={"Контакты"} active={false} />
    </div>
  );
};

export default LinkRow;
