import React, { useEffect, useState } from "react";
import "./styles/App.scss";
import MainPage from "./pages/MainPage/MainPage";
import { Routes, Route } from "react-router-dom";
import PromocodesPage from "./pages/PromocodesPage/PromocodesPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Root from "./pages/Root/Root";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<MainPage />} />
        <Route path="promo" element={<PromocodesPage />} />
        <Route path="promo/:id" element={<PromocodesPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
