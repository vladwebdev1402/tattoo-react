import React, { FC } from "react";
import LightButton from "../../UI/button/lightButton/LightButton";
import styles from "./MiniShopFooter.module.scss";
const MiniShopFooter: FC = () => {
  return (
    <div className={styles.catalogFooter}>
      <LightButton
        x="77"
        onClick={() => {
          console.log("click more footer");
        }}
      >
        Показать ещё
      </LightButton>
    </div>
  );
};

export default MiniShopFooter;
