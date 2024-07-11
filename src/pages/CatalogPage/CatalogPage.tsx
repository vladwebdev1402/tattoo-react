import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { minishopData } from '../../data/minishopData';
import st from './CatalogPage.module.scss';
import { Breadcrumbs, FilterCategoryCatalog, ItemsContainer, ShopItem } from '@/components';
const CatalogPage = () => {
  const navigate = useNavigate();
  const onClick = (link: string) => {
    navigate(`${link}`);
  };
  useEffect(() => {
    window.scrollTo({ top: 100, behavior: 'smooth' });
  });
  return (
    <div className={st.container}>
      <Breadcrumbs />
      <FilterCategoryCatalog navigate={onClick} />
      <ItemsContainer>
        {minishopData.map((item) => (
          <ShopItem item={item} key={item.id} />
        ))}
      </ItemsContainer>
    </div>
  );
};

export default CatalogPage;
