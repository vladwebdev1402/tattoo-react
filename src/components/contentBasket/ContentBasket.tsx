import React, { FC } from "react";
import { minishopData } from "../../data/minishopData";
import { IShopItem } from "../../types/shopItem";
import BasketRow from "./BasketRow";
import st from "./ContentBasket.module.scss";
const ContentBasket: FC = () => {
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
        <BasketRow
          price={shopItem.price}
          img={shopItem.img.img0}
          count={4}
          name={shopItem.name}
        />
        <BasketRow
          price={shopItem.price}
          img={shopItem.img.img0}
          count={4}
          name={shopItem.name}
        />
        <BasketRow
          price={shopItem.price}
          img={shopItem.img.img0}
          count={4}
          name={shopItem.name}
        />
      </div>
    </div>
  );
};

export default ContentBasket;
