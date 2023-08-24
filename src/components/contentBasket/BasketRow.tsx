import React, { FC } from "react";
import BtnChangeCount from "../containerBriefInfoProduct/btnChangeCount/BtnChangeCount";
import st from "./ContentBasket.module.scss";
interface Props {
  img: string;
  name: string;
  price: number;
  count: number;
  isOrder: boolean;
}
const BasketRow: FC<Props> = ({ img, name, price, count, isOrder }) => {
  return (
    <div className={st.tableRow}>
      <div className={st.itemImgNameContainer}>
        <div className={st.imgContainer}>
          <img className={st.itemImg} src={img} />
        </div>

        <div className={st.itemNameContainer}>
          <span className={`${st.itemTxt} ${st.itemName}`}>{name}</span>
          <span className={st.itemPrice}>Цена: {price}₽</span>
        </div>
      </div>
      <div className={`${st.itemTxt} ${st.tablePrice}`}>
        {price.toLocaleString("ru-RU")} ₽
      </div>
      <div className={st.itemTxt}>
        {isOrder ? (
          <>
            <span className={st.hint}>Количество: </span>
            {count}
          </>
        ) : (
          <BtnChangeCount
            className={st.changeCountBtn}
            count={count}
            setCount={() => {}}
            itemCount={4}
          />
        )}
      </div>
      <div className={st.itemTxt}>
        <span className={st.hint}>Стоимость: </span>
        {(price * count).toLocaleString("ru-RU")}₽
      </div>
      {!isOrder && <button className={st.closeBtn}></button>}
      <div className={`horizontal-divider ${st.itemDivider}`}></div>
    </div>
  );
};

export default BasketRow;
