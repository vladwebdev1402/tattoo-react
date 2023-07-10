import React from "react";
import LinkCatalog from "./CatalogLink/LinkCatalog";
import LinkRow from "./LinkRow/LinkRow";
import styles from "./Navbar.module.scss";
import Search from "./Seacrh/Search";
const Navbar: React.FC = () => {
  return (
    <div className={styles.down}>
      <LinkCatalog />
      <Search />
      <LinkRow />
    </div>
  );
};

export default Navbar;
