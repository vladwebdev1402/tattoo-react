import { FC } from 'react';

import { IMarcers } from '@/types';
import m1 from '@/assets/staticIcons/marcers/new.svg';
import m2 from '@/assets/staticIcons/marcers/hot.svg';
import m3 from '@/assets/staticIcons/marcers/promotion.svg';
import m4 from '@/assets/staticIcons/marcers/discount.svg';
import m5 from '@/assets/staticIcons/marcers/no.svg';

import style from './Marcers.module.scss';

interface Props {
  marcers: IMarcers;
  className?: string;
}
const Marcers: FC<Props> = ({ marcers, className = '' }) => {
  const marcersImg: { [key: string]: string } = {
    new: m1,
    hot: m2,
    promotion: m3,
    discount: m4,
    no: m5,
  };
  return (
    <div className={`${style.marcersContainer} ${className}`}>
      {Object.keys(marcers).map((key, idx) => (
        <div className={style.marcer} key={idx}>
          <img src={marcersImg[key]} />
        </div>
      ))}
    </div>
  );
};

export { Marcers };
