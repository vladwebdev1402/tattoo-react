import React from "react";
import Catalog from "./Catalog/Catalog";
import LinkRow from "./LinkRow/LinkRow";
import styles from "./Navbar.module.scss";
import Search from "./Seacrh/Search";
const Navbar: React.FC = () => {
  return (
    <div className={styles.down}>
      <Catalog />
      <Search />
      <LinkRow />
    </div>
  );
};

export default Navbar;
