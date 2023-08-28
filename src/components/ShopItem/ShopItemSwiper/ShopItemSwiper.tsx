import React, { FC } from "react";
import { IItemImg } from "../../../types/shopItem";
import Slider from "../../UI/Slider/Slider";
import styles from "./ShopItemSwiper.module.scss";

interface Props {
  images: IItemImg;
  className?: string;
}

const ShopItemSwiper: FC<Props> = ({ images, className = "" }) => {
  return (
    <div
      className={`${styles.containerSlider} ${className}`}
      onMouseDown={(e: React.MouseEvent | React.TouchEvent) => {
        e.stopPropagation();
      }}
    >
      <Slider
        st__pagination={styles.slider__pagination}
        st__pag__item={styles.pagination__item}
        st__pag__item__active={styles.active}
      >
        {Object.values(images).map((img, idx) => (
          <img
            key={idx}
            src={img}
            draggable="false"
            className={styles.itemImage}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ShopItemSwiper;
