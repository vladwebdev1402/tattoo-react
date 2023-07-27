import React, { FC, useState, useEffect } from "react";
import styles from "./Brands.module.scss";
import { IBrandItem } from "../../types/brandItem";
import { brandsData } from "../../data/brandsData";
import { useBrands } from "../../hooks/useBrands";
import BrandsBlock from "./brandsBlock/BrandsBlock";
import Slider from "../UI/Slider/Slider";
import { useWidth } from "../../hooks/useWidth";

const Brands: FC = () => {
  const width = useWidth();

  const [countInGroup, setCountInGroup] = useState(10);
  const [brands, setBrands] = useState<IBrandItem[]>(brandsData);
  const groupBrands: Array<Array<IBrandItem>> = useBrands(brands, countInGroup);

  useEffect(() => {
    if (width <= 768) {
      setCountInGroup(6);
    } else if (width <= 1400) {
      setCountInGroup(8);
    } else setCountInGroup(10);
  }, [width]);

  return (
    <div className={styles.brandsContainer}>
      <div className={styles.brandsContainerHead}>
        <h1>Популярные бренды</h1>
        <a className={styles.brandsLink}>Смотреть все</a>
      </div>
      <div className={styles.brandsContainerBody}>
        <Slider
          spaceBetween={80}
          st__pag__btn__next={`${styles.btnNext} ${styles.btn}`}
          st__pag__btn__prev={`${styles.btnPrev} ${styles.btn}`}
          st__slider__container={`${styles.sliderContainer}`}
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
