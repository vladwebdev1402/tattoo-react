import React, { FC } from "react";
import PromocodeItem from "../../components/promocodeItem/PromocodeItem";
import styles from "./PromocodesPage.module.scss";
import { promocodes } from "../../data/promocode";
import HeadAndNav from "../../components/headerAndNavbar/HeadAndNav";
const PromocodesPage: FC = () => {
  return (
    <div className="page">
      <HeadAndNav />
      <div className={styles.promocodesContainer}>
        <div className={styles.promocodesHeader}>
          <span className="txtHeaderBlock "> Промокоды</span>
        </div>
        <div className={styles.promocodesBody}>
          {promocodes.map((promo) => (
            <PromocodeItem key={promo.id} promo={promo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromocodesPage;
