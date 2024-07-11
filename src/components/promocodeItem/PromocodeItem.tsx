import { FC } from 'react';

import { IPromocodeItem } from '@/types';
import { Button } from '../UI';

import style from './PromocodeItem.module.scss';

interface Props {
  promo: IPromocodeItem;
}

const PromocodeItem: FC<Props> = ({ promo }) => {
  return (
    <div className={style.promocodeItem}>
      <img src={promo.img} className={style.promItemImg} />
      <div className={style.promDescContainer}>
        <div className={style.promHeaderTxt}>{promo.name}</div>
        <div className={style.promDesc}>
          {promo.description.split('\n').map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>

      <div className={style.btn}>
        <Button
          onClick={() => {
            navigator.clipboard.writeText(promo.promocode);
          }}
          theme="light"
        >
          Скопировать промокод
        </Button>
      </div>
    </div>
  );
};

export { PromocodeItem };
