import React, { FC } from "react";
import { IBasket } from "../../context/basketContext";
import BasketRow from "./BasketRow";
import st from "./ContentBasket.module.scss";

interface Props {
  items: IBasket[];
  isOrder?: boolean;
  className?: string;
}

const ContentBasket: FC<Props> = ({ items, isOrder = false, className }) => {
  return (
    <div className={`${st.container} ${className}`}>
      <div className={st.tableContainer}>
        <div className={st.tableHeader}>
          <span>Наименование</span>
          <span className={st.tableHeadTxt}>Цена</span>
          <span className={st.tableHeadTxt}>Количество</span>
          <span className={st.tableHeadTxt}>Стоимость</span>
        </div>
        <div className={`horizontal-divider ${st.divider}`}></div>
        {items.map(({ item, count }, idx) => (
          <BasketRow item={item} count={count} isOrder={isOrder} />
        ))}
      </div>
    </div>
  );
};

export default ContentBasket;
