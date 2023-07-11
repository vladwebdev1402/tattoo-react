import React from "react";
import styles from "./MainPage.module.css";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Line from "../components/UI/line/Line";
import Swiper from "../components/Swiper/Swiper";
import MiniShop from "../components/MiniShop/MiniShop";
import Catalog from "../components/catalog/Catalog";
import Banners from "../components/banners/Banners";

const MainPage = () => {
  return (
    <div className="page">
      <div className={styles.backgroundHeader}>
        <div className={styles.blockHeader}>
          <Header />
          <Line />
          <Navbar />
        </div>
        <Swiper />
      </div>
      <MiniShop />
      <Catalog />
      <Banners />
    </div>
  );
};

export default MainPage;
