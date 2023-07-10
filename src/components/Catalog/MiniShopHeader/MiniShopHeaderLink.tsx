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
    <div
      className={`${styles.catalogHeaderLinkBlock} ${
        active ? styles.active : ""
      }`}
    >
      <span className={styles.catalogHeaderLink}>{children}</span>
      <div className={styles.hoverLine}></div>
    </div>
  );
};

export default MiniShopHeaderLink;
