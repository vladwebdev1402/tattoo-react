import React, { FC, useEffect, useRef, useState } from "react";
import { useWidth } from "../../../hooks/useWidth";
import { IItemImg, IMarcers } from "../../../types/shopItem";
import Marcers from "../../ShopItem/Marcers/Marcers";
import FavoriteItem from "../../UI/icons/itemIcons/favoriteIcon/FavoriteItem";
import Slider from "../../UI/Slider/Slider";
import st from "./imagesSlider.module.scss";
interface Props {
  images: IItemImg;
  marcers: IMarcers;
  id: number;
}
const ImagesSlider: FC<Props> = ({ images, marcers, id }) => {
  const [sliderItemWidth, setSliderItemWidth] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const width = useWidth();
  useEffect(() => {
    if (ref.current) {
      setSliderItemWidth(ref.current.clientWidth);
    }
  }, [ref, width]);
  return (
    <div className={st.containerSwiper} ref={ref}>
      <Slider
        st__pag__item__active={st.active}
        st__pagination={st.pagination}
        st__pag__item={st.pagItem}
      >
        {Object.values(images).map((img) => (
          <li
            key={img}
            className={st.img}
            style={{ width: `${width < 350 && sliderItemWidth}px` }}
          >
            <img className={st.img} src={img} draggable={false} />
          </li>
        ))}
      </Slider>
      <Marcers marcers={marcers} className={st.marcers} />
      <FavoriteItem id={id} className={st.favorite} />
    </div>
  );
};

export default ImagesSlider;
