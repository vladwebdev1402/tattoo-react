import React, { FC } from "react";
import MoreButton from "../../UI/button/miniShoButton/MoreButton";
import styles from "./MiniShopFooter.module.scss";
const MiniShopFooter: FC = () => {
  return (
    <div className={styles.catalogFooter}>
      <MoreButton
        nameClassDiv={styles.moreButton}
        nameClassText={styles.moreBtnTxt}
        onClick={() => {
          console.log("click more");
        }}
      />
    </div>
  );
};

export default MiniShopFooter;
