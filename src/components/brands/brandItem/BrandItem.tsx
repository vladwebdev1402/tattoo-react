import React, { FC } from "react";
import styles from "./BrandItem.module.scss";
interface Props {
  img: string;
  link: string;
}
const BrandItem: FC<Props> = ({ img, link }) => {
  return (
    <div className={styles.brandItem}>
      <a href={link}>
        <img className={styles.brandImg} src={img} alt="" />
      </a>
    </div>
  );
};

export default BrandItem;
