import React, { useEffect, useState } from "react";
import HeaderSlider from "../../components/HeaderSlider/HeaderSlider";
import MiniShop from "../../components/MiniShop/MiniShop";
import Catalog from "../../components/catalog/Catalog";
import Banners from "../../components/banners/Banners";
import AboutCompany from "../../components/aboutCompany/AboutCompany";
import Subscribe from "../../components/subscribe/Subscribe";
import Brands from "../../components/brands/Brands";

const MainPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <HeaderSlider />
      <MiniShop />
      <Catalog />
      <Banners />
      <Brands />
      <AboutCompany />
      <Subscribe />
    </div>
  );
};

export default MainPage;
