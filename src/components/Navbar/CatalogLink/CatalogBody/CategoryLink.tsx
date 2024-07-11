import { FC, MouseEvent } from 'react';

import style from './LinkCatalogBody.module.scss';

interface Props {
  name: string;
  isActive: boolean;
  onClick: () => void;
}
const CategoryLink: FC<Props> = ({ name, isActive, onClick }) => {
  return (
    <div
      onClick={(e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        onClick();
      }}
      className={`${style.catalogCategoryLinkBlock} ${isActive && style.active}`}
    >
      <span className={style.catalogCategoryLink}>{name}</span>
      <div className={style.hoverLine}></div>
    </div>
  );
};

export { CategoryLink };
