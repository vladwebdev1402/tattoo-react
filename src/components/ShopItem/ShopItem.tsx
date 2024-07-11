import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IShopItem } from '@/types';

import { Button, Checked } from '../UI';
import FavoriteItem from '../UI/icons/itemIcons/favoriteIcon/FavoriteItem';
import { ShopItemSwiper } from './ShopItemSwiper/ShopItemSwiper';
import { Marcers } from './Marcers/Marcers';
import style from './ShopItem.module.scss';

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
    <div className={`${style.item} ${smallItem && style.smallItem} ${noneBtn && style.noneBtn}`}>
      <div
        className={style.itemContainer}
        onClick={() => {
          if (!swipe) navigate(`/tattoo-react/catalog/${item.type}/${item.id}`);
        }}
      >
        <ShopItemSwiper images={item.img} className={smallItem ? style.smallImg : ''} />
        <div className={style.itemName}>{item.name}</div>
        <div className={style.itemPrice}>
          {item.price.toLocaleString('ru-RU')} ₽
          {item.oldPrice > 0 && (
            <span className={style.oldPrice}>{item.oldPrice.toLocaleString('ru-RU')}</span>
          )}
        </div>

        <div className={style.button}>
          {!inBasket && (
            <Button onClick={() => setInBasket(true)} theme="light" size="small">
              <span className={style.addTextDesktop}>Добавить в корзину</span>
              <span className={style.addTextMobile}>В корзину</span>
            </Button>
          )}

          {inBasket && (
            <div className={style.basketBtnContainer}>
              <button className={style.basketBtn} onClick={minusBasket}></button>
              <div className={style.countInBasket}>
                <span className={style.countTxt}>{0}шт</span>
                <span className={style.infoTxt}>В корзине</span>
              </div>
              <button className={`${style.basketBtn} ${style.plus}`} onClick={plusBasket}></button>
            </div>
          )}
        </div>
        {!checkbox && (
          <Marcers marcers={item.marcers || {}} className={smallItem ? style.marcersSmall : ''} />
        )}

        {checkbox && (
          <div
            className={style.checkboxContainer}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
            }}
          >
            <Checked
              className={style.checkbox}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {}}
              checked={true}
            />
          </div>
        )}
        <FavoriteItem id={item.id} className={style.favorite} />
      </div>
    </div>
  );
};

export { ShopItem };
