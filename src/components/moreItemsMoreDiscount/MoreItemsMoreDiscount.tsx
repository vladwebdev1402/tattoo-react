import React from "react";
import { minishopData } from "../../data/minishopData";
import ShopItem from "../ShopItem/ShopItem";
import ClipButton from "../UI/button/clipButton/ClipButton";
import st from "./MoreItemsMoreDiscount.module.scss";
const MoreItemsMoreDiscount = () => {
  return (
    <div className={st.moreItemsMoreDiscountContainer}>
      <h1>Больше товаров — больше скидка</h1>
      <div className={st.moreItemsBody}>
        <div className={st.moreItemsHead}>
          Дополните комплект нужными товарами
        </div>
        <div className={st.moreItemsContainer}>
          <ShopItem item={minishopData[0]} smallItem={true} noneBtn={true} />
          <div className={st.plus}></div>
          <ShopItem item={minishopData[0]} smallItem={true} noneBtn={true} />
          <div className={st.plus}></div>
          <ShopItem item={minishopData[0]} smallItem={true} noneBtn={true} />
        </div>
        <div
          className="horizontal-divider"
          style={{ backgroundColor: "var(--gray)", marginTop: "20px" }}
        ></div>
        <div className={st.discountContainer}>
          <ClipButton
            className={st.addInBasketBtn}
            text="Добавить в корзину"
            onClick={() => {}}
            theme="dark"
          />
          <div className={st.priceInfo}>
            <div className={st.priceContainer}>
              <div className={st.countItems}>3 товара на сумму:</div>
              <div className={st.price}>
                <span className="item-price">7 500 ₽</span>{" "}
                <span className={`item-discount ${st.discountTxt}`}>8057</span>
              </div>
            </div>
            <div className={st.savingPrice}>1 500 ₽</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreItemsMoreDiscount;
