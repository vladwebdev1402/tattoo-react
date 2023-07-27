import React, { useEffect, useState } from "react";
import LinkCatalog from "./CatalogLink/LinkCatalog";
import LinkRow from "./LinkRow/LinkRow";
import styles from "./Navbar.module.scss";
import Search from "./Seacrh/Search";
import Account from "../Header/Account/Account";
import { useWidth } from "../../hooks/useWidth";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const Navbar: React.FC = () => {
  const width = useWidth();

  if (width <= 992) {
    return (
      <div className={styles.down}>
        <BurgerMenu />
        <div className={styles.inputContainer}>
          <Search />
        </div>

        <Account />
      </div>
    );
  }

  return (
    <div className={styles.down}>
      <LinkCatalog />
      <div className={styles.inputContainer}>
        <Search />
      </div>

      <LinkRow />
    </div>
  );
};

export default Navbar;
