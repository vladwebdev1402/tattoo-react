import { FC } from 'react';

import { IShopItem } from '@/types';

import { BtnChangeCount } from '../BtnChangeCount';
import style from './ContentBasket.module.scss';

interface Props {
  item: IShopItem;
  count?: number;
  isOrder: boolean;
}
const BasketRow: FC<Props> = ({ item, isOrder, count }) => {
  const deleteItem = () => {};

  return (
    <div className={style.tableRow}>
      <div className={style.itemImgNameContainer}>
        <div className={style.imgContainer}>
          <img className={style.itemImg} src={item.img.img0} />
        </div>

        <div className={style.itemNameContainer}>
          <span className={`${style.itemTxt} ${style.itemName}`}>{item.name}</span>
          <span className={style.itemPrice}>Цена: {item.price}₽</span>
        </div>
      </div>
      <div className={`${style.itemTxt} ${style.tablePrice}`}>
        {item.price.toLocaleString('ru-RU')}₽
      </div>
      <div className={style.itemTxt}>
        {isOrder ? (
          <>
            <span className={style.hint}>Количество: </span>
            {count}
          </>
        ) : (
          <BtnChangeCount className={style.changeCountBtn} item={item} />
        )}
      </div>
      <div className={style.itemTxt}>
        <span className={style.hint}>Стоимость: </span>
        {isOrder && count
          ? (item.price * count).toLocaleString('ru-RU')
          : (item.price * 0).toLocaleString('ru-RU')}
        ₽
      </div>
      {!isOrder && <button className={style.closeBtn} onClick={deleteItem}></button>}
      <div className={`horizontal-divider ${style.itemDivider}`}></div>
    </div>
  );
};

export { BasketRow };
