import { FC } from 'react';

import { IBasket } from '../../store/reducers/basketReducers';
import { BasketRow } from './BasketRow';

import style from './ContentBasket.module.scss';

interface Props {
  items: IBasket[];
  isOrder?: boolean;
  className?: string;
}

const ContentBasket: FC<Props> = ({ items, isOrder = false, className }) => {
  return (
    <div className={`${style.container} ${className}`}>
      <div className={style.tableContainer}>
        <div className={style.tableHeader}>
          <span>Наименование</span>
          <span className={style.tableHeadTxt}>Цена</span>
          <span className={style.tableHeadTxt}>Количество</span>
          <span className={style.tableHeadTxt}>Стоимость</span>
        </div>
        <div className={`horizontal-divider ${style.divider}`}></div>
        {items.length ? (
          items.map(({ item, count }) => <BasketRow item={item} count={count} isOrder={isOrder} />)
        ) : (
          <>Корзина пуста</>
        )}
      </div>
    </div>
  );
};

export { ContentBasket };
