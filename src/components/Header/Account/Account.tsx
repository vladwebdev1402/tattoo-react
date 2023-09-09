import React, { useContext, useState } from "react";
import styles from "./Account.module.scss";
import Basket from "../../UI/icons/headerAndNavIcons/Basket";
import Favorites from "../../UI/icons/headerAndNavIcons/Favorites";
import Profile from "../../UI/icons/headerAndNavIcons/Profile";
import { useNavigate } from "react-router-dom";
import ModalAuth from "../../modalAuth/ModalAuth";
import {
  BasketContext,
  getCountItemsInBasket,
  getSumBasket,
} from "../../../context/basketContext";
interface Props {
  className?: string;
}
const Account: React.FC<Props> = ({ className }) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const { basket, setBasket } = useContext(BasketContext);
  const countItems = getCountItemsInBasket(basket);
  return (
    <div className={`${className} ${styles.account}`}>
      {modal && <ModalAuth setModal={setModal} />}
      <div className={styles.balance}>
        <span className={styles.balanceText}>
          {getSumBasket(basket).toLocaleString("ru-RU")} ₽
        </span>
        <button
          className={`icon ${styles.iconBtn} ${styles.basket}`}
          onClick={() => {
            navigate("catalog/basket");
          }}
        >
          <Basket />
          {
            <div
              className={`${countItems && styles.active} ${
                styles.countItemsInBasket
              }`}
            >
              {countItems}
            </div>
          }
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
