import React, { FC } from "react";
import { minishopData } from "../../data/minishopData";
import { IShopItem } from "../../types/shopItem";
import BasketRow from "./BasketRow";
import st from "./ContentBasket.module.scss";

interface Props {
  items: { item: IShopItem; count: number }[];
  isOrder?: boolean;
}

const ContentBasket: FC<Props> = ({ items, isOrder = false }) => {
  const shopItem: IShopItem = minishopData[4];
  return (
    <div className={st.container}>
      <div className={st.tableContainer}>
        <div className={st.tableHeader}>
          <span>Наименование</span>
          <span className={st.tableHeadTxt}>Цена</span>
          <span className={st.tableHeadTxt}>Количество</span>
          <span className={st.tableHeadTxt}>Стоимость</span>
        </div>
        <div className={`horizontal-divider ${st.divider}`}></div>
        {items.map(({ item, count }, idx) => (
          <BasketRow
            key={idx}
            name={item.name}
            price={item.price}
            img={item.img.img0}
            count={count}
            isOrder={isOrder}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentBasket;
