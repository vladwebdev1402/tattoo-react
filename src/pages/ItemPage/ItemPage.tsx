import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Marcers from "../../components/ShopItem/Marcers/Marcers";
import ClipButton from "../../components/UI/button/clipButton/ClipButton";
import LineButton from "../../components/UI/button/lineButton/LineButton";
import FavoriteItem from "../../components/UI/icons/itemIcons/favoriteIcon/FavoriteItem";
import { minishopData } from "../../data/minishopData";
import { IShopItem } from "../../types/shopItem";
import st from "./ItemPage.module.scss";
const ItemPage: FC = () => {
  const params = useParams<{ id: string }>();
  const [count, setCount] = useState(0);
  const [item, setItem] = useState<IShopItem>(
    minishopData.filter((item) => item.id === Number(params.id))[0]
  );

  return (
    <div className={st.containerPage}>
      <Breadcrumbs params={true} nameParams={item.name} />
      <div className={st.imagesAndBriefInfo}>
        <div className={st.containerImages}>
          <div className={st.radioConrainer}>
            <div className={st.radio}></div>
            <div className={st.radio}></div>
            <div className={st.radio}></div>
            <div className={st.radio}></div>
          </div>
          <div className={st.currentImage}>
            <Marcers marcers={item.marcers} />
            <FavoriteItem
              onClick={() => {}}
              isActive={false}
              className={st.favorite}
            />
            <img className={st.image} src={item.img[0]} />
          </div>
        </div>
        <div className={st.containerBriefInfo}>
          <span className={st.itemNameTxt}>{item.name}</span>
          <div className={st.priceBlock}>
            <span className={st.currentPrice}>{item.price} ₽</span>
            {item.oldPrice && (
              <span className={st.oldPrice}>{item.oldPrice}</span>
            )}
            <span className={st.availability}>
              <span className={st.availabilityTxt}>Наличие: </span>
              {item.count}
            </span>
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
          <div className={st.basketBlock}>
            <div className={st.utilsBasket}>
              <div
                className={st.basketBtn}
                onClick={() => {
                  setCount(count - 1 < 0 ? 0 : count - 1);
                }}
              ></div>
              <div className={st.basketCount}>{count}</div>
              <div
                className={`${st.basketBtn} ${st.plus}`}
                onClick={() => {
                  setCount(count + 1);
                }}
              ></div>
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
      </div>
    </div>
  );
};

export default ItemPage;
