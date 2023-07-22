import React, { FC, useState } from "react";
import IconCatalog from "../../UI/icons/headerAndNavIcons/IconCatalog";
import LinkCatalogBody from "./CatalogBody/LinkCatalogBody";
import styles from "./LinkCatalog.module.scss";
const LinkCatalog: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const clickCatalog = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className={styles.catalog}>
      <span className={styles.catalogTxt} onClick={clickCatalog}>
        Каталог
      </span>
      <div className="icon" style={{ alignSelf: "flex-end", marginBottom: 1 }}>
        <IconCatalog />
      </div>
      <LinkCatalogBody isVisible={isVisible} />
    </div>
  );
};

export default LinkCatalog;
