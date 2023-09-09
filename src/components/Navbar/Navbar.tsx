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

  return (
    <div className={styles.down}>
      <LinkCatalog />
      <BurgerMenu />
      <Search className={styles.inputContainer} />
      <LinkRow />
      <Account className={styles.account} />
    </div>
  );
};

export default Navbar;
