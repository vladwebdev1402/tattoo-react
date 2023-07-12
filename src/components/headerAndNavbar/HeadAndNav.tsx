import React, { FC } from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Line from "../UI/line/Line";
import styles from "./HeadAndNav.module.scss";
const HeadAndNav: FC = () => {
  return (
    <header className={styles.headContainer}>
      <div className={styles.head}>
        <Header />
        <Line />
        <Navbar />
      </div>
    </header>
  );
};

export default HeadAndNav;
