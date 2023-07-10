import React from "react";
import styles from "./Account.module.scss";
import Basket from "../../UI/icons/headerAndNavIcons/Basket";
import Favorites from "../../UI/icons/headerAndNavIcons/Favorites";
import Profile from "../../UI/icons/headerAndNavIcons/Profile";

const Account: React.FC = () => {
  return (
    <div className={styles.account}>
      <div className={styles.balance}>
        <span className={styles.balanceText}>37 532 ₽</span>
        <div className="icon">
          <Basket />
        </div>
      </div>
      <div className="icon">
        <Favorites />
      </div>
      <div className="icon">
        <Profile />
      </div>
    </div>
  );
};

export default Account;
