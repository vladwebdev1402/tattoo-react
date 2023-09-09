import React, { FC, useEffect, useState } from "react";
import { minishopData } from "../../data/minishopData";
import { IShopItem } from "../../types/shopItem";
import styles from "./MiniShop.module.scss";
import MiniShopFooter from "./MiniShopFooter/MiniShopFooter";
import MiniShopHeader from "./MiniShopHeader/MiniShopHeader";
import ShopItem from "../ShopItem/ShopItem";
import { useWidth } from "../../hooks/useWidth";
import Slider from "../UI/Slider/Slider";
const MiniShop: FC = () => {
  const [items, setItems] = useState<IShopItem[]>([]);
  const [currentCategory, setCurrentCategory] = useState("new");
  const [swipe, setSwipe] = useState(false);

  useEffect(() => {
    if (currentCategory == "popular") setItems(minishopData);
    else
      setItems(
        minishopData.filter((item) =>
          Object.keys(item.marcers || {}).includes(currentCategory)
        )
      );
  }, [currentCategory]);

  return (
    <section className={styles.miniShopContainer}>
      <MiniShopHeader
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <div className={styles.miniShopSwiper}>
        <Slider
          countPagItem={5}
          st__pagination={styles.swiper__pagination}
          st__pag__item__active={styles.active}
          st__pag__item={styles.swiper__pagination__item}
          onSwipe={setSwipe}
          spaceBetween={20}
          freeMode={true}
          transition={1000}
        >
          {items.map((item) => (
            <ShopItem swipe={swipe} key={item.id} item={item} />
          ))}
        </Slider>
      </div>
      <div className={styles.miniShopItems}>
        {items.map((item) => (
          <ShopItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MiniShop;
