import React, { FC } from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import styles from "./HeadAndNav.module.scss";
import { WidthContext } from "../../context";
import { useContext } from "react";
const HeadAndNav: FC = () => {
  const width = useContext(WidthContext);
  if (width > 768) {
    return (
      <header className={styles.headContainer}>
        <div className={styles.head}>
          <Header />
          <div
            className="horizontal-divider"
            style={{ marginTop: "11px" }}
          ></div>
          <Navbar />
        </div>
      </header>
    );
  } else
    return (
      <header>
        <div className={styles.headContainer}>
          <Navbar />
        </div>
      </header>
    );
};

export default HeadAndNav;
