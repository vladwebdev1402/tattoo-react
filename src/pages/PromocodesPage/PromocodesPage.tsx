import { Breadcrumbs, PromocodeItem, Typography } from '@/components';
import { promocodes } from '@/data';

import styles from './PromocodesPage.module.scss';

const PromocodesPage = () => {
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

export { PromocodesPage };
