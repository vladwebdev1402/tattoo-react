import React from 'react';
import { minishopData } from '../../../../data/minishopData';
import ClipButton from '../../../../components/UI/button/clipButton/ClipButton';
import st from './MoreItemsMoreDiscount.module.scss';
import { ShopItem } from '../../../../components/ShopItem';
const MoreItemsMoreDiscount = () => {
  return (
    <div className={st.moreItemsMoreDiscountContainer}>
      <h1 className={st.title}>Больше товаров — больше скидка</h1>
      <div className={st.moreItemsBodyContainer}>
        <div className={st.moreItemsHead}>Дополните комплект нужными товарами</div>
        <div className={st.scrollDiv}>
          <div className={st.moreItemsContainer}>
            <ShopItem item={minishopData[0]} smallItem={true} noneBtn={true} checkbox={true} />
            <div className={st.plus}></div>
            <ShopItem item={minishopData[0]} smallItem={true} noneBtn={true} checkbox={true} />
            <div className={st.plus}></div>
            <ShopItem item={minishopData[0]} smallItem={true} noneBtn={true} checkbox={true} />
          </div>
        </div>

        <div className={`horizontal-divider ${st.divider}`}></div>
        <div className={st.discountContainer}>
          <ClipButton className={st.addInBasketBtn} onClick={() => {}} theme="dark">
            Добавить в корзину
          </ClipButton>
          <div className={st.priceInfo}>
            <div className={st.priceContainer}>
              <div className={st.countItems}>3 товара на сумму:</div>
              <div className={st.price}>
                <span className="item-price">7 500 ₽</span>{' '}
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

export { MoreItemsMoreDiscount };
