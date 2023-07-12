import React from "react";
import styles from "./MainPage.module.css";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Line from "../components/UI/line/Line";
import Swiper from "../components/Swiper/Swiper";
import MiniShop from "../components/MiniShop/MiniShop";
import Catalog from "../components/catalog/Catalog";
import Banners from "../components/banners/Banners";
import AboutCompany from "../components/aboutCompany/AboutCompany";
import Subscribe from "../components/subscribe/Subscribe";

const MainPage = () => {
  return (
    <div className="page">
      <Swiper />
      <MiniShop />
      <Catalog />
      <Banners />
      <AboutCompany />
      <Subscribe />
    </div>
  );
};

export default MainPage;
