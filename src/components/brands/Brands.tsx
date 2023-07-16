import React, { FC, useState } from "react";
import styles from "./Brands.module.scss";
import { IBrandItem } from "../../types/brandItem";
import { brandsData } from "../../data/brandsData";
import { useBrands } from "../../hooks/useBrands";
import BrandsBlock from "./BrandsBlock";
import Slider from "../UI/Slider/Slider";
const Brands: FC = () => {
  const [brands, setBrands] = useState<IBrandItem[]>(brandsData);
  const groupBrands: Array<Array<IBrandItem>> = useBrands(brands);

  return (
    <div className={styles.brandsContainer}>
      <div className={styles.brandsContainerHead}>
        <span className="txtHeaderBlock">Популярные бренды</span>
        <a className={styles.brandsLink}>Смотреть все</a>
      </div>
      <div className={styles.brandsContainerBody}>
        <Slider
          spaceBetween={0}
          st__pag__btn__next={`${styles.btnNext} ${styles.btn}`}
          st__pag__btn__prev={`${styles.btnPrev} ${styles.btn}`}
        >
          {groupBrands.map((group) => (
            <li className={styles.slide}>
              <BrandsBlock brands={group} />
            </li>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Brands;
