import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTER_PATHS } from '@/constants';
import { Typography } from '@/components';

import styles from './Catalog.module.scss';
import { categorys } from './categorys';
import { CatalogItem } from './CatalogItem';
import { CatalogFooter } from './CatalogFooter';

const Catalog: FC = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.catalogContainer}>
      <Typography className={styles.catalogHeader} variant="h1">
        Каталог
      </Typography>

      <div className={styles.catalogBody}>
        {categorys.map((category) => (
          <CatalogItem
            key={category.name}
            name={category.name}
            onClick={() => navigate(ROUTER_PATHS.catalog + category.paths)}
          />
        ))}
      </div>
      <CatalogFooter />
    </section>
  );
};

export { Catalog };
