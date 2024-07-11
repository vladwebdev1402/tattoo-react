import { FC } from 'react';
import PromocodeItem from '../../components/promocodeItem/PromocodeItem';
import { promocodes } from '../../data/promocode';
import { Breadcrumbs, Typography } from '@/components';

import styles from './PromocodesPage.module.scss';
const PromocodesPage: FC = () => {
  return (
    <div className={styles.promocodesContainer}>
      <Breadcrumbs className={styles.margin} />
      <Typography variant="h1" className={styles.margin}>
        Промокоды
      </Typography>
      <div className={styles.promocodesBody}>
        {promocodes.map((promo) => (
          <PromocodeItem key={promo.id} promo={promo} />
        ))}
      </div>
    </div>
  );
};

export default PromocodesPage;
