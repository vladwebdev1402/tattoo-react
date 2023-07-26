import React, { FC } from "react";
import styles from "./MiniShopHeader.module.scss";

interface CatalogHeaderLinkProps {
  children: React.ReactNode;
  active: boolean;
}

const MiniShopHeaderLink: FC<CatalogHeaderLinkProps> = ({
  active,
  children,
}) => {
  return (
    <div className={`${styles.link} ${active ? styles.active : ""}`}>
      <span className={styles.linkTxt}>{children}</span>
    </div>
  );
};

export default MiniShopHeaderLink;
