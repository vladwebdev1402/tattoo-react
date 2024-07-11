import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { IFiltersParametrs, IShopItem } from '@/types';
import {
  Breadcrumbs,
  Button,
  FilterParametrsItems,
  ItemsContainer,
  ShopItem,
  Typography,
} from '@/components';
import { minishopData, pathnames } from '@/data';

import { FiltersBtnCatalogPage } from './components';
import style from './CatalogPage.module.scss';

interface CategoryPage {
  type: string;
  [key: string]: string;
}
const CatalogCategoryPage = () => {
  const params = useParams<CategoryPage>();
  const [items, setItems] = useState<IShopItem[]>([]);
  const [filtersItem, setFiltersItem] = useState<IShopItem[]>([]);
  const [filters, setFilters] = useState<IFiltersParametrs>({
    price: { maxPrice: '999999', minPrice: '0' },
    inStock: false,
    sortOptions: [
      { name: 'Популярные', isActive: true },
      { name: 'По алфавиту', isActive: false },
      { name: 'Дешёвые', isActive: false },
      { name: 'Дорогие', isActive: false },
    ],
    typeOptions: [
      { name: 'Роторные', isActive: true },
      { name: 'Индукционные', isActive: false },
    ],
  });

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    setItems(minishopData.filter((item) => item.type === params.type));
  }, [params]);

  useEffect(() => {
    const itemsWithFilter = items.filter(
      (item) =>
        item.price <= Number(filters.price.maxPrice) &&
        item.price >= Number(filters.price.minPrice) &&
        (!filters.inStock || (filters.inStock && item.count > 0))
    );
    filters.sortOptions.forEach((filter) => {
      if (filter.isActive) {
        if (filter.name === 'Дешёвые')
          setFiltersItem(itemsWithFilter.sort((a, b) => a.price - b.price));
        if (filter.name === 'Дорогие')
          setFiltersItem(itemsWithFilter.sort((a, b) => b.price - a.price));
        if (filter.name === 'По алфавиту')
          setFiltersItem(
            itemsWithFilter.sort((a, b) => {
              if (a.name > b.name) return 1;
              else return -1;
            })
          );
      }
    });
    setFiltersItem(itemsWithFilter);
  }, [items, filters]);

  return (
    <div className={style.catalogContainer}>
      <Breadcrumbs />
      <Typography variant="h1" tag="h1">
        {pathnames[params.type || '']}
      </Typography>
      <FiltersBtnCatalogPage />
      <FilterParametrsItems filters={filters} setFilters={setFilters} />
      <ItemsContainer>
        {filtersItem.length ? (
          filtersItem.map((item) => <ShopItem item={item} key={item.id} />)
        ) : (
          <h1>Товары данного типа отсутствуют</h1>
        )}
      </ItemsContainer>

      {items.length !== 0 && (
        <Button
          className={style.btn}
          theme="light"
          onClick={() => {
            console.log(filtersItem);
          }}
        >
          Показать ещё
        </Button>
      )}
    </div>
  );
};

export { CatalogCategoryPage };
