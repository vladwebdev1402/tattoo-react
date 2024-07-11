import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { ICategory } from '@/types';

import style from './LinkCatalogBody.module.scss';

interface Props {
  items: ICategory[];
  brands: boolean;
}
const CategoryContainer: FC<Props> = ({ items, brands }) => {
  const navigate = useNavigate();
  return (
    <div className={style.categoryContainer}>
      {items.map((item) => (
        <div
          key={item.id}
          className={style.category}
          onClick={() => {
            if (brands) navigate(`brands/${item?.id}`);
            else navigate(`catalog/${item?.link}`);
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export { CategoryContainer };
