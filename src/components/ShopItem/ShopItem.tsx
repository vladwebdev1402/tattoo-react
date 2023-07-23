import React, { FC } from "react";

import { minishopItem } from "../../types/minishop";
import ItemButton from "../UI/button/miniShoButton/ItemButton";
import FavoriteItem from "../UI/icons/itemIcons/favoriteIcon/FavoriteItem";
import NewMarker from "../UI/marcers/NewMarker";
import ShopItemSwiper from "./ShopItemSwiper/ShopItemSwiper";
import styles from "./ShopItem.module.scss";
import SmallLightButton from "../UI/button/lightButton/SmallLightButton";
import ClipButton from "../UI/button/clipButton/ClipButton";
interface ShopItemProps {
  item: minishopItem;
}

const ShopItem: FC<ShopItemProps> = ({ item }) => {
  const width = window.innerWidth;

  return (
    <div className={styles.item}>
      <div className={styles.itemContainer}>
        <ShopItemSwiper images={item.img} />
        <div className={styles.itemName}>{item.name}</div>
        <div className={styles.itemPrice}>{item.price} ₽</div>

        <div className={styles.button}>
          <ClipButton
            onClick={() => {
              console.log("add basket");
            }}
            theme="light"
            text={`${width <= 1024 ? "В корзину" : "Добавить в корзину"}`}
          />
        </div>

        <FavoriteItem
          isActive={item.isFavourite}
          onClick={() => {
            console.log("click favorites item");
          }}
          nameDivClass={styles.favorite}
        />

        <NewMarker />
      </div>
    </div>
  );
};

export default ShopItem;
