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
        <button className={`icon ${styles.iconBtn} ${styles.basket}`}>
          <Basket />
        </button>
        <div className={styles.countItemsInBasket}>17</div>
      </div>
      <button className={`icon ${styles.iconBtn}`}>
        <Favorites />
      </button>
      <button className={`icon ${styles.iconBtn}`}>
        <Profile />
      </button>
    </div>
  );
};

export default Account;
