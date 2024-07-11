import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import img from '@/assets/images/bg1.webp';
import { Button, Typography } from '@/components';

import styles from './Swiper.module.scss';

const Slide: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.slide}>
      <img src={img} />
      <div className={styles.slideContent}>
        <Typography className={styles.slideHeader} variant="h0">
          Лучшие товары в мире татуировок
        </Typography>
        <Typography className={styles.slideDesc} variant="h3">
          Оборудование и расходники для самых ярких и качественных работ
        </Typography>
        <div className={styles.slideBtn}>
          <Button
            onClick={() => {
              navigate('/tattoo-react/catalog');
            }}
          >
            Смотреть каталог
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Slide;
