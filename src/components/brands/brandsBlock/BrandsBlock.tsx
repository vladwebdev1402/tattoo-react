import React, { FC } from "react";
import { ICategory } from "../../../types/category";
import BrandItem from "../brandItem/BrandItem";
import styles from "./BrandsBlock.module.scss";
interface Props {
  brands: ICategory[];
}
const BrandsBlock: FC<Props> = ({ brands }) => {
  return (
    <div className={styles.brandsBlock}>
      {brands.map((item) => (
        <BrandItem link={item.link || ""} img={item.img || ""} key={item.id} />
      ))}
      <div className={`vertical-divider ${styles.vD} ${styles.d1}`}></div>
      <div className={`vertical-divider ${styles.vD} ${styles.d2}`}></div>
      <div className={`vertical-divider ${styles.vD} ${styles.d3}`}></div>
      <div className={`vertical-divider ${styles.vD} ${styles.d4}`}></div>
      <div className={`horizontal-divider ${styles.hD}`}></div>
    </div>
  );
};

export default BrandsBlock;
