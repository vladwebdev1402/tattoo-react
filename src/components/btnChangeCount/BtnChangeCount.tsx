import { FC, MouseEvent } from 'react';

import { IShopItem } from '@/types';

import style from './btnChangeCount.module.scss';

interface Props {
  item: IShopItem;
  className?: string;
}
const BtnChangeCount: FC<Props> = ({ item, className }) => {
  const plusBasket = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  const minusBasket = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className={`${style.container} ${className}`}>
      <div className={style.basketBtn} onClick={minusBasket}></div>
      <div className={style.basketCount}>{0}</div>
      <div className={`${style.basketBtn} ${style.plus}`} onClick={plusBasket}></div>
    </div>
  );
};

export { BtnChangeCount };
