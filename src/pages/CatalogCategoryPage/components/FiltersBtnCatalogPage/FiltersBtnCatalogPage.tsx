import { Button } from '@/components';

import style from './Filters.module.scss';

const FiltersBtnCatalogPage = () => {
  return (
    <div className={style.containerFilters}>
      <ul className={style.filterList}>
        <li className={style.filter}>
          <Button borderStyle="default">Для начинающих</Button>
        </li>
        <li className={style.filter}>
          <Button borderStyle="default">От билдеров</Button>
        </li>
        <li className={style.filter}>
          <Button borderStyle="default">Для профессионалов</Button>
        </li>
        <li className={style.filter}>
          <Button borderStyle="default">Расходники</Button>
        </li>
      </ul>
    </div>
  );
};

export { FiltersBtnCatalogPage };
