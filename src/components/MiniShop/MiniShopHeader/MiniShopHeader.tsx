import React, { FC } from "react";
import styles from "./MiniShopHeader.module.scss";
import MiniShopHeaderLink from "./MiniShopHeaderLink";

const MiniShopHeader: FC = () => {
  return (
    <div className={styles.miniShopHeader}>
      <ul className={styles.linksList}>
        <li>
          <MiniShopHeaderLink active={false}>Хиты продаж</MiniShopHeaderLink>
        </li>
        <li>
          <MiniShopHeaderLink active={false}>
            Самые популярные
          </MiniShopHeaderLink>
        </li>
        <li>
          <MiniShopHeaderLink active={true}>
            Новые поступления
          </MiniShopHeaderLink>
        </li>
        <li>
          <MiniShopHeaderLink active={false}>
            Акционные товары
          </MiniShopHeaderLink>
        </li>
      </ul>
    </div>
  );
};

export default MiniShopHeader;
