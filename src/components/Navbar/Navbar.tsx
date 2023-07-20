import React, { useContext } from "react";
import LinkCatalog from "./CatalogLink/LinkCatalog";
import LinkRow from "./LinkRow/LinkRow";
import styles from "./Navbar.module.scss";
import Search from "./Seacrh/Search";
import Account from "../Header/Account/Account";
import { WidthContext } from "../../context";
const Navbar: React.FC = () => {
  const width = useContext(WidthContext);
  if (width > 768) {
    return (
      <div className={styles.down}>
        <LinkCatalog />
        <Search />
        <LinkRow />
      </div>
    );
  } else
    return (
      <div className={styles.down}>
        <LinkCatalog />
        <Search />
        <Account />
      </div>
    );
};

export default Navbar;
