import React from "react";
import Account from "./Account/Account";
import Contacts from "./Contacts/Contacts";
import styles from "./Header.module.scss";
import Logo from "./Logo/Logo";
const Header: React.FC = () => {
  return (
    <div className={styles.up}>
      <Contacts />
      <Logo />
      <Account />
    </div>
  );
};

export default Header;
