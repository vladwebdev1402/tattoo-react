import React, { FC } from "react";
import styles from "./CatalogItem.module.scss";
import img from "../../../assets/images/catalog-category/tattoo-kits.png";
interface CatalogItemProps {
  name: string;
  onClick: () => void;
}
const CatalogItem: FC<CatalogItemProps> = ({ name, onClick }) => {
  return (
    <div className={styles.item} onClick={onClick}>
      <div className={styles.itemName}>{name}</div>
    </div>
  );
};

export default CatalogItem;
