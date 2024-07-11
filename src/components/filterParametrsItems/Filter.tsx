import { FC, ReactNode } from 'react';

import style from './Filter.module.scss';

interface Props {
  children: ReactNode;
  name: string;
}
const Filter: FC<Props> = ({ name, children }) => {
  return (
    <div className={style.filterContainer}>
      <span className={style.filterName}>{name}</span>
      <div className={style.filter}>{children}</div>
    </div>
  );
};

export { Filter };
