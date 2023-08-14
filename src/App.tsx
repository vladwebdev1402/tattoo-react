import React, { useEffect, useState } from "react";
import "./styles/App.scss";
import MainPage from "./pages/MainPage/MainPage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import PromocodesPage from "./pages/PromocodesPage/PromocodesPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Root from "./pages/Root/Root";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import CatalogCategoryPage from "./pages/CatalogCategoryPage/CatalogCategoryPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<MainPage />} />
        <Route path="promo" element={<PromocodesPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="catalog/" element={<CatalogCategoryPage />}>
          <Route path=":type" />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
