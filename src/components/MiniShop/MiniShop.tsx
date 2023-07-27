import React, { FC, useState } from "react";
import { minishopData } from "../../data/minishopData";
import { minishopItem } from "../../types/minishop";
import styles from "./MiniShop.module.scss";
import MiniShopFooter from "./MiniShopFooter/MiniShopFooter";
import MiniShopHeader from "./MiniShopHeader/MiniShopHeader";
import ShopItem from "../ShopItem/ShopItem";
import HorizontalSwiper from "../UI/Swiper/HorizontalSwiper";
import { useWidth } from "../../hooks/useWidth";
const MiniShop: FC = () => {
  const [items, setItems] = useState<minishopItem[]>(minishopData);
  const width = useWidth();
  if (width <= 768) {
    return (
      <section className={styles.miniShopContainer}>
        <MiniShopHeader />
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
      <MiniShopHeader />
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
