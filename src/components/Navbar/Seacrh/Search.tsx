import { ChangeEvent, FC, useState } from 'react';

import style from './Search.module.scss';

interface Props {
  className?: string;
}
const Search: FC<Props> = ({ className = '' }) => {
  const [value, setValue] = useState<string>('');
  return (
    <input
      type="text"
      placeholder="Поиск"
      className={`${className} ${style.myInput}`}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
      }}
    />
  );
};

export { Search };
