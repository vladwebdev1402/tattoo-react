import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./BrandItem.module.scss";
interface Props {
  img: string;
  link: string;
}
const BrandItem: FC<Props> = ({ img, link }) => {
  return (
    <div className={styles.brandItem}>
      <img className={styles.brandImg} src={img} alt="" />
    </div>
  );
};

export default BrandItem;
