import React, { FC, useState, useContext } from "react";
import { minishopData } from "../../data/minishopData";
import { WidthContext } from "../../context";
import { minishopItem } from "../../types/minishop";
import styles from "./MiniShop.module.scss";
import MiniShopFooter from "./MiniShopFooter/MiniShopFooter";
import MiniShopHeader from "./MiniShopHeader/MiniShopHeader";
import ShopItem from "../ShopItem/ShopItem";
import HorizontalSwiper from "../UI/Swiper/HorizontalSwiper";
const MiniShop: FC = () => {
  const [items, setItems] = useState<minishopItem[]>(minishopData);
  const width = useContext(WidthContext);
  if (width <= 1024) {
    return (
      <div className={styles.catalogContainer}>
        <MiniShopHeader />
        <div className={styles.catalogItems}>
          <HorizontalSwiper>
            {items.map((item) => (
              <li className={styles.slide}>
                <ShopItem key={item.id} item={item} />
              </li>
            ))}
          </HorizontalSwiper>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.catalogContainer}>
      <MiniShopHeader />
      <div className={styles.catalogItems}>
        {items.map((item) => (
          <ShopItem key={item.id} item={item} />
        ))}
      </div>
      <MiniShopFooter />
    </div>
  );
};

export default MiniShop;
