import React, { FC, useState } from "react";
import { IItemImg } from "../../../types/shopItem";
import Slider from "../../UI/Slider/Slider";
import styles from "./ShopItemSwiper.module.scss";

interface Props {
  images: IItemImg;
}

const ShopItemSwiper: FC<Props> = ({ images }) => {
  return (
    <div className={styles.containerSlider} id="itemSliderContainer">
      <Slider
        st__pagination={styles.slider__pagination}
        st__pag__item={styles.pagination__item}
        st__pag__item__active={styles.active}
        st__pag__btn__next=""
        st__pag__btn__prev=""
      >
        {Object.values(images).map((img, idx) => (
          <li className={styles.slide} key={idx}>
            <img src={img} draggable="false" className={styles.itemImage} />
          </li>
        ))}
      </Slider>
    </div>
  );
};

export default ShopItemSwiper;
