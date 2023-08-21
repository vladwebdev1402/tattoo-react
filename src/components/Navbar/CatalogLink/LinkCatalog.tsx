import React, { FC, useEffect, useRef, useState } from "react";
import { useClose } from "../../../hooks/useClose";
import IconCatalog from "../../UI/icons/headerAndNavIcons/IconCatalog";
import LinkCatalogBody from "./CatalogBody/LinkCatalogBody";
import styles from "./LinkCatalog.module.scss";
const LinkCatalog: FC = () => {
  const catalogRef = useRef<HTMLDivElement>(null);

  const { isVisible, setIsVisible } = useClose(catalogRef);
  const clickCatalog = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.catalog} onClick={clickCatalog} ref={catalogRef}>
      <span className={styles.catalogTxt}>Каталог</span>
      <div className="icon" style={{ alignSelf: "flex-end", marginBottom: 1 }}>
        <IconCatalog />
      </div>
      <LinkCatalogBody isVisible={isVisible} />
    </div>
  );
};

export default LinkCatalog;
