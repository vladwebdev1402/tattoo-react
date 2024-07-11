import { FC } from 'react';
import { category } from '../../data/catalogCategory';
import st from './FIlterCategoryCatalog.module.scss';
import { Button } from '../UI';
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
    <div className={st.containerFilters}>
      <ul className={st.filterList}>
        {all && (
          <li className={st.filter}>
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
          <li className={st.filter} key={category.id}>
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
