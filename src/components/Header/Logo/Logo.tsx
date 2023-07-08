import React from "react";
import Line from "../../UI/Line/Line";
import styles from "./Logo.module.scss";
const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      <span className={`${styles.logoName} ${styles.logoText}`}>
        MR. DRISKELL
      </span>
      <Line />
      <span className={`${styles.logoSubName} ${styles.logoText}`}>
        TATTOO SHOP
      </span>
    </div>
  );
};

export default Logo;
