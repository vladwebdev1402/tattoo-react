import React, { useContext, useState } from "react";
import styles from "./Account.module.scss";
import Basket from "../../UI/icons/headerAndNavIcons/Basket";
import Favorites from "../../UI/icons/headerAndNavIcons/Favorites";
import Profile from "../../UI/icons/headerAndNavIcons/Profile";
import { FavoriteContext } from "../../../context/favoriteContext";
import { useNavigate } from "react-router-dom";
import ModalAuth from "../../modalAuth/ModalAuth";

const Account: React.FC = () => {
  const { favorites } = useContext(FavoriteContext);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  return (
    <div className={styles.account}>
      {modal && <ModalAuth setModal={setModal} />}
      <div className={styles.balance}>
        <span className={styles.balanceText}>37 532 ₽</span>
        <button
          className={`icon ${styles.iconBtn} ${styles.basket}`}
          onClick={() => {
            navigate("catalog/basket");
          }}
        >
          <Basket />
          {favorites.length && (
            <div className={styles.countItemsInBasket}>{favorites.length}</div>
          )}
        </button>
      </div>
      <button className={`icon ${styles.iconBtn} ${styles.favorite}`}>
        <Favorites />
      </button>
      <button
        className={`icon ${styles.iconBtn} ${styles.profile}`}
        onClick={() => navigate("profile")}
        // onClick={() => setModal(true)}
      >
        <Profile />
      </button>
    </div>
  );
};

export default Account;
