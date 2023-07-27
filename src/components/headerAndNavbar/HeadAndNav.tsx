import React, { FC, useState, useEffect } from "react";
import { useWidth } from "../../hooks/useWidth";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import styles from "./HeadAndNav.module.scss";

const HeadAndNav: FC = () => {
  const width = useWidth();

  if (width <= 992) {
    return (
      <header>
        <div className={styles.headContainer}>
          <Navbar />
        </div>
      </header>
    );
  }

  return (
    <header className={styles.headContainer}>
      <div className={styles.head}>
        <Header />
        <div className="horizontal-divider" style={{ marginTop: "11px" }}></div>
        <Navbar />
      </div>
    </header>
  );
};

export default HeadAndNav;
