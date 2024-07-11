import { Button } from '@/components';

import styles from './Filters.module.scss';

const FiltersBtnCatalogPage = () => {
  return (
    <div className={styles.containerFilters}>
      <ul className={styles.filterList}>
        <li className={styles.filter}>
          <Button borderStyle="default">Для начинающих</Button>
        </li>
        <li className={styles.filter}>
          <Button borderStyle="default">От билдеров</Button>
        </li>
        <li className={styles.filter}>
          <Button borderStyle="default">Для профессионалов</Button>
        </li>
        <li className={styles.filter}>
          <Button borderStyle="default">Расходники</Button>
        </li>
      </ul>
    </div>
  );
};

export { FiltersBtnCatalogPage };
