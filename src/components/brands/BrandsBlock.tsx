import React, { FC } from "react";
import { IBrandItem } from "../../types/brandItem";
import BrandItem from "./BrandItem";
import styles from "./Brands.module.scss";
interface Props {
  brands: IBrandItem[];
}
const BrandsBlock: FC<Props> = ({ brands }) => {
  return (
    <div className={styles.brandsBlock}>
      <div className={styles.brands}>
        {brands.map((item) => (
          <BrandItem link={item.link} img={item.img} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default BrandsBlock;
