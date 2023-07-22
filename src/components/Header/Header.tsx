import React from "react";
import Account from "./Account/Account";
import Contacts from "./Contacts/Contacts";
import styles from "./Header.module.scss";
import logoImg from "../../assets/images/logo.svg";
const Header: React.FC = () => {
  return (
    <div className={styles.up}>
      <Contacts />
      <a className={styles.logo} href="/">
        <img src={logoImg} alt="logo" />
      </a>
      <Account />
    </div>
  );
};

export default Header;
