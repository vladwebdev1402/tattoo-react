import React, { FC } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import CatalogPage from "../../pages/CatalogPage/CatalogPage";
import CatalogCategoryPage from "../../pages/CatalogCategoryPage/CatalogCategoryPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import ItemPage from "../../pages/ItemPage/ItemPage";
import MainPage from "../../pages/MainPage/MainPage";
import PromocodesPage from "../../pages/PromocodesPage/PromocodesPage";
import Root from "../../pages/Root/Root";
import BrandPage from "../../pages/BrandPage/BrandPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import BasketPage from "../../pages/BasketPage/BasketPage";

const AppRouter: FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<MainPage />} />
        <Route path="promo" element={<PromocodesPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="catalog/:type/" element={<CatalogCategoryPage />} />
        <Route path="catalog/:type/:id" element={<ItemPage />} />
        <Route path="brands/:id" element={<BrandPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="basket" element={<BasketPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default AppRouter;
