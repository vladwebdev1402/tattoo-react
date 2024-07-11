import { useEffect } from 'react';

import {
  AboutCompany,
  Banners,
  Brands,
  Catalog,
  HeaderSlider,
  MiniShop,
  Reviews,
  Subscribe,
} from './components';

const MainPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <HeaderSlider />
      <MiniShop />
      <Catalog />
      <Banners />
      <Brands />
      <AboutCompany />
      <Reviews />
      <Subscribe />
    </div>
  );
};

export { MainPage };
