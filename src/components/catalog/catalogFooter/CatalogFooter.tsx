import React, { FC } from "react";
import LightButton from "../../UI/button/lightButton/LightButton";
import styles from "./CatalogFooter.module.scss";
const CatalogFooter: FC = () => {
  return (
    <div className={styles.catalogFooterContainer}>
      <LightButton x="64" onClick={() => {}}>
        Смотреть каталог
      </LightButton>
    </div>
  );
};

export default CatalogFooter;
