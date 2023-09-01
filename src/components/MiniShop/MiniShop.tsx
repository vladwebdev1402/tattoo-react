import React, { FC, useEffect, useState } from "react";
import { minishopData } from "../../data/minishopData";
import { IShopItem } from "../../types/shopItem";
import styles from "./MiniShop.module.scss";
import MiniShopFooter from "./MiniShopFooter/MiniShopFooter";
import MiniShopHeader from "./MiniShopHeader/MiniShopHeader";
import ShopItem from "../ShopItem/ShopItem";
import HorizontalSwiper from "../UI/Swiper/HorizontalSwiper";
import { useWidth } from "../../hooks/useWidth";
const MiniShop: FC = () => {
  const [items, setItems] = useState<IShopItem[]>([]);
  const [currentCategory, setCurrentCategory] = useState("new");
  const width = useWidth();
  useEffect(() => {
    setItems(
      minishopData.filter((item) =>
        Object.keys(item.marcers).includes(currentCategory)
      )
    );
  }, [currentCategory]);
  if (width <= 768) {
    return (
      <section className={styles.miniShopContainer}>
        <MiniShopHeader
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
        <div className={styles.miniShopItems}>
          <HorizontalSwiper>
            {items.map((item) => (
              <li className={styles.slide} style={{ marginRight: "20px" }}>
                <ShopItem key={item.id} item={item} />
              </li>
            ))}
          </HorizontalSwiper>
        </div>
      </section>
    );
  }
  return (
    <section className={styles.miniShopContainer}>
      <MiniShopHeader
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <div className={styles.miniShopItems}>
        {items.map((item) => (
          <ShopItem key={item.id} item={item} />
        ))}
      </div>
      <MiniShopFooter />
    </section>
  );
};

export default MiniShop;
