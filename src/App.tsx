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
import CatalogPage from "./pages/CatalogPage/CatalogPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<MainPage />} />
        <Route path="promo" element={<PromocodesPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="catalog/:type" element={<CatalogPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
