import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components';
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
        <div className={styles.errorHeadetTxt}>Ошибка 404!</div>
        <div className={styles.errorDescTxt}>
          Эта страница не найдена, мы уже работаем, чтобы ее восстановить!
        </div>
        <div className={styles.navigationContainer}>
          <div className={styles.clipBtn}>
            <Button
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

export default ErrorPage;
