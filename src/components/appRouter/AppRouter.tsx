import { FC } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { TestPage } from '@/pages/TestPage/TestPage';
import {
  BasketPage,
  BrandPage,
  CatalogCategoryPage,
  CatalogPage,
  ContactsPage,
  ErrorPage,
  ItemPage,
  MainPage,
  ProfilePage,
  PromocodesPage,
  Root,
  ServicesPage,
} from '@/pages';
import { ROUTER_PATHS } from '@/constants';

const AppRouter: FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTER_PATHS.main} element={<Root />}>
        <Route index element={<MainPage />} />
        <Route path={ROUTER_PATHS.promocodes} element={<PromocodesPage />} />
        <Route path={ROUTER_PATHS.contacts} element={<ContactsPage />} />
        <Route path={ROUTER_PATHS.catalog} element={<CatalogPage />} />
        <Route path={ROUTER_PATHS.catalogByCategory} element={<CatalogCategoryPage />} />
        <Route path={ROUTER_PATHS.item} element={<ItemPage />} />
        <Route path={ROUTER_PATHS.brand} element={<BrandPage />} />
        <Route path={ROUTER_PATHS.profile} element={<ProfilePage />} />
        <Route path={ROUTER_PATHS.basket} element={<BasketPage />} />
        <Route path={ROUTER_PATHS.services} element={<ServicesPage />} />
        <Route path="/tattoo-react/test" element={<TestPage />} />
        <Route path={ROUTER_PATHS.notFound} element={<ErrorPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export { AppRouter };
