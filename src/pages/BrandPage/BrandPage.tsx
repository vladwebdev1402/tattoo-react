import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import st from './BrandPage.module.scss';
import { Breadcrumbs, Button, FilterCategoryCatalog, ItemsContainer, ShopItem } from '@/components';
import { ICategory, IShopItem } from '@/types';
import { brands, minishopData } from '@/data';
import { BrandImgHeader } from './components';
const BrandPage = () => {
  const params = useParams<{ id: string }>();
  const [brand, setBrand] = useState<ICategory>();
  const [currentType, setCurrentType] = useState('all');
  const [items, setItems] = useState<IShopItem[]>([]);
  const [filterItems, setFilterItems] = useState<IShopItem[]>([]);

  useEffect(() => {
    window.scrollTo({ top: 120, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const brand = brands.filter((brand) => brand.id === Number(params.id))[0];
    setBrand(brand);
    setItems(minishopData.filter((item) => item.brand === brand.name));
  }, [params]);

  useEffect(() => {
    if (currentType == 'all') setFilterItems(items);
    else setFilterItems(items.filter((item) => item.type === currentType));
  }, [currentType, items]);
  return (
    <div className={st.container}>
      <Breadcrumbs params={true} nameParams={brand?.name} />
      <BrandImgHeader img={brand?.img || ''} name={brand?.name || ''} />
      <FilterCategoryCatalog setType={setCurrentType} currentType={currentType} all={true} />
      <ItemsContainer>
        {filterItems.length ? (
          filterItems.map((item) => <ShopItem item={item} key={item.id} />)
        ) : (
          <h1>Товары этой категории от данного бренда отсутствуют</h1>
        )}
      </ItemsContainer>

      {filterItems.length > 0 && (
        <Button theme="light" onClick={() => {}} className={st.btn}>
          Показать ещё
        </Button>
      )}
    </div>
  );
};

export { BrandPage };
