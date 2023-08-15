import React, { FC, useContext, useState } from "react";
import { IShopItem } from "../../types/shopItem";
import FavoriteItem from "../UI/icons/itemIcons/favoriteIcon/FavoriteItem";
import ShopItemSwiper from "./ShopItemSwiper/ShopItemSwiper";
import styles from "./ShopItem.module.scss";
import ClipButton from "../UI/button/clipButton/ClipButton";
import { useWidth } from "../../hooks/useWidth";
import Marcers from "./Marcers/Marcers";
import {
  deleteFavorite,
  FavoriteContext,
  findFavorite,
} from "../../context/favoriteContext";
interface ShopItemProps {
  item: IShopItem;
}

const ShopItem: FC<ShopItemProps> = ({ item }) => {
  const width = useWidth();
  const [countBasket, setCountBasket] = useState<number>(0);
  const { favorites, setFavorites } = useContext(FavoriteContext);
  const [isFavorite, setIsFavorite] = useState<boolean>(
    findFavorite(favorites, item.id)
  );
  const plusBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCountBasket(countBasket + 1);
  };
  const minusBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCountBasket(countBasket - 1);
  };

  const clickFavorite = () => {
    if (isFavorite) {
      setFavorites(deleteFavorite(favorites, item.id));
      setIsFavorite(false);
    } else {
      setFavorites([...favorites, { id: item.id }]);
      setIsFavorite(true);
    }
  };

  return (
    <div className={styles.item}>
      <div
        className={styles.itemContainer}
        onClick={() => {
          console.log("navigate");
        }}
      >
        <ShopItemSwiper images={item.img} />
        <div className={styles.itemName}>{item.name}</div>
        <div className={styles.itemPrice}>{item.price} ₽</div>

        <div className={styles.button}>
          {!countBasket && (
            <ClipButton
              onClick={() => {
                setCountBasket(1);
              }}
              theme="light"
              text={`${width <= 992 ? "В корзину" : "Добавить в корзину"}`}
            />
          )}

          {countBasket > 0 && (
            <div className={styles.basketBtnContainer}>
              <button
                className={styles.basketBtn}
                onClick={minusBasket}
              ></button>
              <div className={styles.countInBasket}>
                <span className={styles.countTxt}>{countBasket}шт</span>
                <span className={styles.infoTxt}>В корзине</span>
              </div>
              <button
                className={`${styles.basketBtn} ${styles.plus}`}
                onClick={plusBasket}
              ></button>
            </div>
          )}
        </div>
        <Marcers marcers={item.marcers} />
        <FavoriteItem
          isActive={isFavorite}
          onClick={clickFavorite}
          nameDivClass={styles.favorite}
        />
      </div>
    </div>
  );
};

export default ShopItem;
