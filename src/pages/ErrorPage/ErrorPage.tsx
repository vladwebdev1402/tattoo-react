import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Typography } from '@/components';
import { ROUTER_PATHS } from '@/constants';

import styles from './ErrorPage.module.scss';
const ErrorPage: FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorBody}>
        <Typography variant="h0">Ошибка 404!</Typography>
        <Typography variant="h3" className={styles.errorDescTxt}>
          Эта страница не найдена, мы уже работаем, чтобы ее восстановить!
        </Typography>
        <div className={styles.navigationContainer}>
          <div className={styles.clipBtn}>
            <Button
              full
              onClick={() => {
                navigate(ROUTER_PATHS.main);
              }}
            >
              Вернуться на главную
            </Button>
          </div>
          <div className={styles.lineBtn}>
            <Button
              variant="text"
              onClick={() => {
                navigate(ROUTER_PATHS.catalog);
              }}
            >
              Вернуться в каталог
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ErrorPage };
