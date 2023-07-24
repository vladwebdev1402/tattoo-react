import React, { useEffect, useState } from "react";
import LinkCatalog from "./CatalogLink/LinkCatalog";
import LinkRow from "./LinkRow/LinkRow";
import styles from "./Navbar.module.scss";
import Search from "./Seacrh/Search";
import Account from "../Header/Account/Account";

const Navbar: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (width <= 1024) {
    return (
      <div className={styles.down}>
        <LinkCatalog />
        <Search />
        <Account />
      </div>
    );
  }

  return (
    <div className={styles.down}>
      <LinkCatalog />
      <Search />
      <LinkRow />
    </div>
  );
};

export default Navbar;
