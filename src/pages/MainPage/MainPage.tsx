import React, { useEffect, useState } from "react";
import styles from "./MainPage.module.scss";
import HeaderSlider from "../../components/HeaderSlider/HeaderSlider";
import MiniShop from "../../components/MiniShop/MiniShop";
import Catalog from "../../components/catalog/Catalog";
import Banners from "../../components/banners/Banners";
import AboutCompany from "../../components/aboutCompany/AboutCompany";
import Subscribe from "../../components/subscribe/Subscribe";
import Brands from "../../components/brands/Brands";
import HeadAndNav from "../../components/headerAndNavbar/HeadAndNav";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
  return (
    <div className="page">
      <HeadAndNav />
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
