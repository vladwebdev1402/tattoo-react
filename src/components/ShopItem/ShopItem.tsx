import React, { FC, useContext, useState } from 'react';
import { IShopItem } from '../../types/shopItem';
import FavoriteItem from '../UI/icons/itemIcons/favoriteIcon/FavoriteItem';
import ShopItemSwiper from './ShopItemSwiper/ShopItemSwiper';
import styles from './ShopItem.module.scss';
import Marcers from './Marcers/Marcers';

import { useNavigate } from 'react-router-dom';
import MyChecked from '../UI/checked/MyChecked';
import { Button } from '../UI';

interface ShopItemProps {
  item: IShopItem;
  smallItem?: boolean;
  checkbox?: boolean;
  noneBtn?: boolean;
  swipe?: boolean;
}

const ShopItem: FC<ShopItemProps> = ({
  item,
  smallItem = false,
  noneBtn = false,
  checkbox = false,
  swipe = false,
}) => {
  const [inBasket, setInBasket] = useState(false);
  const navigate = useNavigate();
  const plusBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };
  const minusBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  return (
    <div className={`${styles.item} ${smallItem && styles.smallItem} ${noneBtn && styles.noneBtn}`}>
      <div
        className={styles.itemContainer}
        onClick={() => {
          if (!swipe) navigate(`/tattoo-react/catalog/${item.type}/${item.id}`);
        }}
      >
        <ShopItemSwiper images={item.img} className={smallItem ? styles.smallImg : ''} />
        <div className={styles.itemName}>{item.name}</div>
        <div className={styles.itemPrice}>
          {item.price.toLocaleString('ru-RU')} ₽
          {item.oldPrice > 0 && (
            <span className={styles.oldPrice}>{item.oldPrice.toLocaleString('ru-RU')}</span>
          )}
        </div>

        <div className={styles.button}>
          {!inBasket && (
            <Button onClick={() => setInBasket(true)} theme="light" size="small">
              <span className={styles.addTextDesktop}>Добавить в корзину</span>
              <span className={styles.addTextMobile}>В корзину</span>
            </Button>
          )}

          {inBasket && (
            <div className={styles.basketBtnContainer}>
              <button className={styles.basketBtn} onClick={minusBasket}></button>
              <div className={styles.countInBasket}>
                <span className={styles.countTxt}>{0}шт</span>
                <span className={styles.infoTxt}>В корзине</span>
              </div>
              <button
                className={`${styles.basketBtn} ${styles.plus}`}
                onClick={plusBasket}
              ></button>
            </div>
          )}
        </div>
        {!checkbox && (
          <Marcers marcers={item.marcers || {}} className={smallItem ? styles.marcersSmall : ''} />
        )}

        {checkbox && (
          <div
            className={styles.checkboxContainer}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
            }}
          >
            <MyChecked
              className={styles.checkbox}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {}}
              checked={true}
            />
          </div>
        )}
        <FavoriteItem id={item.id} className={styles.favorite} />
      </div>
    </div>
  );
};

export { ShopItem };
