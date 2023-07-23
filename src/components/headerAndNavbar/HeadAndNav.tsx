import React, { FC } from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import styles from "./HeadAndNav.module.scss";

const HeadAndNav: FC = () => {
  const width = window.innerWidth;

  if (width <= 1024) {
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
