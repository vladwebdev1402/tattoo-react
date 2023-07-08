import React from "react";
import styles from "./MainPage.module.css";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Line from "../components/UI/Line/Line";

const MainPage = () => {
  return (
    <div className={styles.backgroundHeader}>
      <div className={styles.blockHeader}>
        <Header />
        <Line />
        <Navbar />
      </div>
    </div>
  );
};

export default MainPage;
