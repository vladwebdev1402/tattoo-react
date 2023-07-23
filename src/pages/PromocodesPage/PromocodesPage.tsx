import React, { FC } from "react";
import PromocodeItem from "../../components/promocodeItem/PromocodeItem";
import styles from "./PromocodesPage.module.scss";
import { promocodes } from "../../data/promocode";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
const PromocodesPage: FC = () => {
  return (
    <div className="page">
      <Breadcrumbs />
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
