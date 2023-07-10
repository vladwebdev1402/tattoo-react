import React, { FC } from "react";
import { minishopItem } from "../../../types/minishop";
import ItemButton from "../../UI/button/miniShoButton/ItemButton";
import FavoriteItem from "../../UI/icons/itemIcons/favoriteIcon/FavoriteItem";
import NewMarker from "../../UI/marcers/NewMarker";
import MiniShopSwiper from "../MiniShopSwiper/MiniShopSwiper";
import styles from "./MiniShopItem.module.scss";
interface CatalogItemProps {
  item: minishopItem;
}

const MiniShopItem: FC<CatalogItemProps> = ({ item }) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemContainer}>
        <MiniShopSwiper />
        <div className={styles.itemName}>{item.name}</div>
        <div className={styles.itemPrice}>{item.price} ₽</div>

        <FavoriteItem
          isActive={item.isFavourite}
          onClick={() => {
            console.log("click favorites item");
          }}
          nameDivClass={styles.favorite}
        />

        <NewMarker />
        <ItemButton
          nameClassDiv={styles.button}
          nameClassText={styles.buttonText}
          onClick={() => {
            console.log("clik add basket");
          }}
        />
      </div>
    </div>
  );
};

export default MiniShopItem;
