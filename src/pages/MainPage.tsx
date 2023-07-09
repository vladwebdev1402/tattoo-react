import React from "react";
import styles from "./MainPage.module.css";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Line from "../components/UI/Line/Line";
import Swiper from "../components/Swiper/Swiper";

const MainPage = () => {
  return (
    <div className={styles.backgroundHeader}>
      <div className={styles.blockHeader}>
        <Header />
        <Line />
        <Navbar />
      </div>
      <Swiper />
    </div>
  );
};

export default MainPage;
