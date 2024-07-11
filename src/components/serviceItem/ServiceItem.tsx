import { FC, useState } from 'react';

import { IServiceItem } from '@/types';
import { Button } from '../UI';

import style from './Service.module.scss';

interface Props {
  item: IServiceItem;
}
const ServiceItem: FC<Props> = ({ item }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className={style.serviceContainer}>
      <img className={style.serviceImg} src={item.img} />
      <div className={style.serviceBody}>
        <div className={style.bodyTitle}>{item.title}</div>
        <div className={style.bodyDescription}>
          <span className={(readMore && style.readMore) || ''}>{item.description}</span>
          <button className={style.readMoreBtn} onClick={() => setReadMore(!readMore)}>
            {!readMore ? <>Читать далее...</> : <>Скрыть</>}
          </button>
        </div>
        <div className={style.servicePrice}>
          Стоимость услуги: {item.price.moneyPrice && <>{item.price.moneyPrice}₽</>}
          {item.price.procentPrice && <>{item.price.procentPrice}% от суммы заказа</>}
        </div>
      </div>
      <div className={style.clipBtn}>
        <Button onClick={() => {}} theme="light">
          Добавить к заказу
        </Button>
      </div>
    </div>
  );
};

export { ServiceItem };
