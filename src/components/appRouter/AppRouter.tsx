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
import ServicesPage from "../../pages/ServicesPage/ServicesPage";

const AppRouter: FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/tattoo-react" element={<Root />}>
        <Route index element={<MainPage />} />
        <Route path="/tattoo-react/promo" element={<PromocodesPage />} />
        <Route path="/tattoo-react/contacts" element={<ContactsPage />} />
        <Route path="/tattoo-react/catalog" element={<CatalogPage />} />
        <Route
          path="/tattoo-react/catalog/:type/"
          element={<CatalogCategoryPage />}
        />
        <Route path="/tattoo-react/catalog/:type/:id" element={<ItemPage />} />
        <Route path="/tattoo-react/brands/:id" element={<BrandPage />} />
        <Route path="/tattoo-react/profile" element={<ProfilePage />} />
        <Route path="/tattoo-react/catalog/basket" element={<BasketPage />} />
        <Route
          path="/tattoo-react/catalog/basket/services"
          element={<ServicesPage />}
        />
        <Route path="/tattoo-react/*" element={<ErrorPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default AppRouter;
