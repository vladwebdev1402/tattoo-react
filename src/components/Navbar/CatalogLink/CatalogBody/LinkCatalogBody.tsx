import { FC, useState } from 'react';

import { brands, category } from '@/data';

import { CategoryLink } from './CategoryLink';
import { CategoryContainer } from './CategoryContainer';
import style from './LinkCatalogBody.module.scss';

interface Props {
  isVisible: boolean;
}
const LinkCatalogBody: FC<Props> = ({ isVisible }) => {
  const [isBrands, setIsBrands] = useState<boolean>(false);
  return (
    <div
      className={`${style.catalogBody} ${isVisible && style.active} ${
        isBrands && style.brandsActive
      }`}
    >
      <div className={style.catalogCategoryLinkContainer}>
        <CategoryLink onClick={() => setIsBrands(false)} isActive={!isBrands} name="По категории" />
        <CategoryLink onClick={() => setIsBrands(true)} isActive={isBrands} name="По брендам" />
      </div>
      <div className="horizontal-divider"></div>
      <CategoryContainer items={isBrands ? brands : category} brands={isBrands} />
    </div>
  );
};

export { LinkCatalogBody };
