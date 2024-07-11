import { FC } from 'react';

import { category } from '@/data';

import { Button } from '../UI';
import style from './FIlterCategoryCatalog.module.scss';

interface Props {
  navigate?: (link: string) => void;
  setType?: (value: string) => void;
  currentType?: string;
  all?: boolean;
}
const FilterCategoryCatalog: FC<Props> = ({ navigate, setType, currentType = '', all = false }) => {
  const onClick = (str: string) => {
    if (navigate) navigate(str);
    else if (setType) setType(str);
  };
  return (
    <div className={style.containerFilters}>
      <ul className={style.filterList}>
        {all && (
          <li className={style.filter}>
            <Button
              borderStyle="default"
              onClick={() => onClick('all')}
              active={currentType == 'all'}
            >
              Все категории
            </Button>
          </li>
        )}
        {category.slice(1).map((category) => (
          <li className={style.filter} key={category.id}>
            <Button
              borderStyle="default"
              onClick={() => onClick(category.link || '')}
              active={currentType == category.link}
            >
              {category.filter}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { FilterCategoryCatalog };
