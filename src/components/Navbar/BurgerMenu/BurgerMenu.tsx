import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./BurgerMenu.module.scss";
import { category } from "../../../data/catalogCategory";
import RightFooter from "../../Footer/RightFooter/RightFooter";
import MyLink from "../LinkRow/MyLink";
import Search from "../Seacrh/Search";
import BurgerIcon from "../../UI/icons/headerAndNavIcons/BurgerIcon";
const BurgerMenu: FC = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [isActiveCatalog, setIsActiveCatalog] = useState(false);
  const clickMenu = () => {
    setIsActiveMenu(!isActiveMenu);
  };
  return (
    <>
      <div className={styles.burgerMenu}>
        <span className={styles.catalogTxt} onClick={clickMenu}>
          Меню
        </span>
        <BurgerIcon isActive={isActiveMenu} />
      </div>
      <div className={`${styles.menuBody} ${isActiveMenu && styles.active}`}>
        <div
          className="horizontal-divider"
          style={{ backgroundColor: "var(--dark-orange)" }}
        ></div>
        <div className={styles.burgerMenuNav}>
          <div
            className={`${styles.catalogContainer} ${
              isActiveCatalog && styles.activeCatalog
            }`}
            onClick={() => {
              setIsActiveCatalog(!isActiveCatalog);
            }}
          >
            <span className={`${styles.headCategory} ${styles.catalog}`}>
              Каталог
            </span>
            <div className={styles.categorys}>
              <div
                className="vertical-divider"
                style={{ backgroundColor: "var(--dark-orange)" }}
              ></div>
              <div className={styles.categorysBody}>
                {category.map((category) => (
                  <Link
                    key={category.id}
                    to={`catalog/${category.link}`}
                    className={styles.linkCategory}
                    onClick={() => {
                      setIsActiveMenu(!isActiveMenu);
                    }}
                  >
                    <span className={styles.linkTxt}>{category.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <nav
            onClick={() => {
              setIsActiveMenu(!isActiveMenu);
            }}
          >
            <ul className={styles.linkColumn}>
              <li className={styles.linkLi}>
                <MyLink name={"Промокоды"} to="/promo" />
              </li>
              <li className={styles.linkLi}>
                <MyLink name={"Скидки"} to="/discount" />
              </li>
              <li className={styles.linkLi}>
                <MyLink name={"Помощь"} to="/help" />
              </li>
              <li className={styles.linkLi}>
                <MyLink name={"О нас"} to="/about" />
              </li>
              <li className={styles.linkLi}>
                <MyLink name={"Контакты"} to="/contacts" />
              </li>
              <li className={styles.linkLi}>
                <MyLink name={"Избранное"} to="/contacts" />
              </li>
              <li className={styles.linkLi}>
                <MyLink name={"Личный кабинет"} to="/profile" />
              </li>
            </ul>
          </nav>
          <div className={styles.inputContainer}>
            <Search />
          </div>
        </div>

        <div
          className="horizontal-divider"
          style={{ marginTop: "30px", backgroundColor: "var(--dark-orange)" }}
        ></div>
        <div className={styles.footerContainer}>
          <RightFooter />
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
