import React, { FC } from "react";
import { ICategory } from "../../../../types/category";
import styles from "./LinkCatalogBody.module.scss";
interface Props {
  items: ICategory[];
}
const CategoryContainer: FC<Props> = ({ items }) => {
  return (
    <div className={styles.categoryContainer}>
      {items.map((item) => (
        <div key={item.id} className={styles.category}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default CategoryContainer;
