import React, { FC } from "react";
import styles from "./MiniShopHeader.module.scss";
import MiniShopHeaderLink from "./MiniShopHeaderLink";

const MiniShopHeader: FC = () => {
  return (
    <div className={styles.catalogHeader}>
      <MiniShopHeaderLink active={false}>Хиты продаж</MiniShopHeaderLink>
      <MiniShopHeaderLink active={false}>Самые популярные</MiniShopHeaderLink>
      <MiniShopHeaderLink active={true}>Новые поступления</MiniShopHeaderLink>
      <MiniShopHeaderLink active={false}>Акционные товары</MiniShopHeaderLink>
    </div>
  );
};

export default MiniShopHeader;
