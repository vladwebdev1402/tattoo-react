import React, { FC } from "react";
import IconCatalog from "../../UI/icons/headerAndNavIcons/IconCatalog";
import styles from "./LinkCatalog.module.scss";
const LinkCatalog: FC = () => {
  return (
    <div className={styles.catalog}>
      <span className={styles.catalogTxt}>Каталог</span>
      <div className="icon" style={{ alignSelf: "flex-end", marginBottom: 1 }}>
        <IconCatalog />
      </div>
    </div>
  );
};

export default LinkCatalog;
