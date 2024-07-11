import { FC } from 'react';

import paintsImg from '@/assets/images/banners/paints.png';
import foxxImg from '@/assets/images/banners/foxx-viper.png';
import { Button } from '@/components';

import styles from './Banners.module.scss';

const Banners: FC = () => {
  const onClick = () => {
    console.log('click banners to catalog');
  };

  return (
    <div className={styles.bannersContainer}>
      <div className={`${styles.banner}  ${styles.left}`}>
        <img src={paintsImg} />

        <div className={styles.bannerTxt}>Краски Lip Nitn</div>

        <div className={styles.bannerBtn}>
          <Button variant="text" onClick={onClick} full>
            Смотреть в каталоге
          </Button>
        </div>
      </div>
      <div className={`${styles.banner}  ${styles.right}`}>
        <img src={foxxImg} />

        <div className={styles.bannerTxt}>Foxx viper — хит 2021 года</div>
        <div className={styles.bannerBtn}>
          <Button variant="text" onClick={onClick} full>
            Смотреть в каталоге
          </Button>
        </div>
      </div>
    </div>
  );
};

export { Banners };
