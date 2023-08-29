import React, { FC, useContext } from "react";
import {
  BasketContext,
  getCountItemInBasket,
  removeFromBasket,
  setCountItemsInBasket,
} from "../../context/basketContext";
import { IShopItem } from "../../types/shopItem";
import st from "./btnChangeCount.module.scss";
interface Props {
  item: IShopItem;
  className?: string;
}
const BtnChangeCount: FC<Props> = ({ item, className }) => {
  const { basket, setBasket } = useContext(BasketContext);
  const itemsInBasket = getCountItemInBasket(basket, item.id) || 0;
  const plusBasket = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setCountItemsInBasket(
      setBasket,
      basket,
      item,
      itemsInBasket + 1 < item.count ? itemsInBasket + 1 : item.count
    );
  };
  const minusBasket = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (itemsInBasket - 1 < 0) removeFromBasket(setBasket, basket, item.id);
    else setCountItemsInBasket(setBasket, basket, item, itemsInBasket - 1);
  };

  return (
    <div className={`${st.container} ${className}`}>
      <div className={st.basketBtn} onClick={minusBasket}></div>
      <div className={st.basketCount}>{itemsInBasket}</div>
      <div className={`${st.basketBtn} ${st.plus}`} onClick={plusBasket}></div>
    </div>
  );
};

export default BtnChangeCount;
