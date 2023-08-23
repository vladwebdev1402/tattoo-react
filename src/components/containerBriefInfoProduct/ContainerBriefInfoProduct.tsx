import React, { FC, useState } from "react";
import { IShopItem } from "../../types/shopItem";
import ClipButton from "../UI/button/clipButton/ClipButton";
import LineButton from "../UI/button/lineButton/LineButton";
import BtnChangeCount from "./btnChangeCount/BtnChangeCount";
import st from "./container.module.scss";

interface Props {
  item: IShopItem;
}

const ContainerBriefInfoProduct: FC<Props> = ({ item }) => {
  const [count, setCount] = useState(0);

  return (
    <div className={st.containerBriefInfo}>
      <div className={st.itemNameTxt}>{item.name}</div>
      <div className={st.priceBlock}>
        <span className={st.currentPrice}>
          {item.price.toLocaleString("ru-RU")} ₽
        </span>
        {item.oldPrice > 0 && (
          <span className={st.oldPrice}>
            {item.oldPrice.toLocaleString("ru-RU")}
          </span>
        )}
        <span className={st.availability}>
          <span className={st.availabilityTxt}>Наличие: </span>
          {item.count}
        </span>
        <BtnChangeCount
          setCount={setCount}
          count={count}
          itemCount={item.count}
          className={st.mobileChangeCount}
        />
      </div>
      <div className={st.descriptionBlock}>
        <div className={st.descriptionTxt}>Описание:</div>
        <span className={st.descriptionTxt}>
          {item.description.split("/")[0]}
        </span>
      </div>
      <LineButton className={st.btnJob} onClick={() => {}}>
        Работы сделанные этой машинкой
      </LineButton>
      <div className={st.basketUtilsContainer}>
        <div className={st.utilsBasket}>
          <BtnChangeCount
            setCount={setCount}
            count={count}
            itemCount={item.count}
            className={st.desktopChangeCount}
          />
          <div className={st.addInBasketBtn}>
            <ClipButton
              theme="dark"
              text="Добавить в корзину"
              onClick={() => {}}
            />
          </div>
          <button className={st.shareBtn}>Поделиться</button>
        </div>
      </div>
    </div>
  );
};

export default ContainerBriefInfoProduct;
