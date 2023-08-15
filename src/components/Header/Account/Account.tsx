import React, { useContext } from "react";
import styles from "./Account.module.scss";
import Basket from "../../UI/icons/headerAndNavIcons/Basket";
import Favorites from "../../UI/icons/headerAndNavIcons/Favorites";
import Profile from "../../UI/icons/headerAndNavIcons/Profile";
import { FavoriteContext } from "../../../context/favoriteContext";

const Account: React.FC = () => {
  const { favorites } = useContext(FavoriteContext);

  return (
    <div className={styles.account}>
      <div className={styles.balance}>
        <span className={styles.balanceText}>37 532 ₽</span>
        <button className={`icon ${styles.iconBtn} ${styles.basket}`}>
          <Basket />
          {favorites.length && (
            <div className={styles.countItemsInBasket}>{favorites.length}</div>
          )}
        </button>
      </div>
      <button className={`icon ${styles.iconBtn} ${styles.favorite}`}>
        <Favorites />
      </button>
      <button className={`icon ${styles.iconBtn} ${styles.profile}`}>
        <Profile />
      </button>
    </div>
  );
};

export default Account;
