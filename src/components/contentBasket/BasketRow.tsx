import React, { FC } from "react";
import st from "./ContentBasket.module.scss";
interface Props {
  img: string;
  name: string;
  price: string;
  count: number;
}
const BasketRow: FC<Props> = ({ img, name, price, count }) => {
  return (
    <div className={st.tableRow}>
      <div className={st.itemImgNameContainer}>
        <img className={st.itemImg} src={img} />
        <span className={`${st.itemTxt} ${st.itemName}`}>{name}</span>
      </div>
      <div className={st.itemTxt}>{price} ₽</div>
      <div className={st.itemTxt}>4</div>
      <div className={st.itemTxt}>
        {Number(price.split(" ").join("")) * count} ₽
      </div>
    </div>
  );
};

export default BasketRow;
