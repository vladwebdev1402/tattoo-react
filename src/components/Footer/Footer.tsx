import React, { FC } from "react";
import styles from "./Footer.module.scss";
import LeftFooter from "./leftFooter/LeftFooter";
import RightFooter from "./RightFooter/RightFooter";

const Footer: FC = () => {
  return (
    <div className={styles.footerContainer}>
      <LeftFooter />
      <RightFooter />
    </div>
  );
};

export default Footer;
