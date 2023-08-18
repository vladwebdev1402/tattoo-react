import React, { FC, useState } from "react";
import { IShopItem } from "../../types/shopItem";
import FavoriteItem from "../UI/icons/itemIcons/favoriteIcon/FavoriteItem";
import ShopItemSwiper from "./ShopItemSwiper/ShopItemSwiper";
import styles from "./ShopItem.module.scss";
import ClipButton from "../UI/button/clipButton/ClipButton";
import { useWidth } from "../../hooks/useWidth";
import Marcers from "./Marcers/Marcers";

import { useNavigate } from "react-router-dom";
interface ShopItemProps {
  item: IShopItem;
}

const ShopItem: FC<ShopItemProps> = ({ item }) => {
  const width = useWidth();
  const [countBasket, setCountBasket] = useState<number>(0);

  const navigate = useNavigate();
  const plusBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCountBasket(
      countBasket + 1 > item.count ? countBasket : countBasket + 1
    );
  };
  const minusBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCountBasket(countBasket - 1);
  };

  return (
    <div className={styles.item}>
      <div
        className={styles.itemContainer}
        onClick={() => {
          navigate(`/catalog/${item.type}/${item.id}`);
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
        <FavoriteItem id={item.id} className={styles.favorite} />
      </div>
    </div>
  );
};

export default ShopItem;
