import React, { FC } from "react";
import { IBrandItem } from "../../../types/brandItem";
import BrandItem from "../brandItem/BrandItem";
import styles from "./BrandsBlock.module.scss";
interface Props {
  brands: IBrandItem[];
}
const BrandsBlock: FC<Props> = ({ brands }) => {
  return (
    <div className={styles.brandsBlock}>
      {brands.map((item) => (
        <BrandItem link={item.link} img={item.img} key={item.id} />
      ))}
    </div>
  );
};

export default BrandsBlock;
