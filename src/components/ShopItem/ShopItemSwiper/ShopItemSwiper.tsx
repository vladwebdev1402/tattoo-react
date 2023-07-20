import React, { FC, useState } from "react";
import Slider from "../../UI/Slider/Slider";
import styles from "./ShopItemSwiper.module.scss";

interface Props {
  images: string[];
}

const ShopItemSwiper: FC<Props> = ({ images }) => {
  return (
    <div className={styles.containerSwiper}>
      <Slider
        st__pagination={styles.slider__pagination}
        st__pag__item={styles.pagination__item}
        st__pag__item__active={styles.active}
        st__pag__btn__next=""
        st__pag__btn__prev=""
      >
        {images.map((img) => (
          <li className={styles.slide}>
            <img src={img} draggable="false" className={styles.itemImage} />
          </li>
        ))}
      </Slider>
    </div>
  );
};

export default ShopItemSwiper;
