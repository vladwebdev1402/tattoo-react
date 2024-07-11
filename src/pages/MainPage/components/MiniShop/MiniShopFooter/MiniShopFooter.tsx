import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components';
import { ROUTER_PATHS } from '@/constants';

import styles from './MiniShopFooter.module.scss';

const MiniShopFooter: FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.miniShopFooter}>
      <div className={styles.btn}>
        <Button
          theme="light"
          onClick={() => {
            navigate(ROUTER_PATHS.catalog);
          }}
          full
        >
          Показать ещё
        </Button>
      </div>
    </div>
  );
};

export { MiniShopFooter };
