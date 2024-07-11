import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components';
import { ROUTER_PATHS } from '@/constants';

import styles from './CatalogFooter.module.scss';

const CatalogFooter: FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.catalogFooterContainer}>
      <div className={styles.btn}>
        <Button
          onClick={() => {
            navigate(ROUTER_PATHS.catalog);
          }}
        >
          Смотреть каталог
        </Button>
      </div>
    </div>
  );
};

export { CatalogFooter };
