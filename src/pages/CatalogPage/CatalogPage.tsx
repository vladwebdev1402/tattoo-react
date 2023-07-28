import React from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import FiltersBtnCatalogPage from "../../components/filtersBtnCatalogPage/FiltersBtnCatalogPage";
import styles from "./CatalogPage.module.scss";
import { minishopData } from "../../data/minishopData";
import ShopItem from "../../components/ShopItem/ShopItem";
import ClipButton from "../../components/UI/button/clipButton/ClipButton";
const CatalogPage = () => {
  return (
    <div className={styles.catalogContainer}>
      <Breadcrumbs />
      <h1>Тату машинки</h1>
      <FiltersBtnCatalogPage />
      <div className={styles.itemsContainer}>
        {minishopData.map((item) => (
          <ShopItem item={item} key={item.id} />
        ))}
      </div>
      <div className={styles.btn}>
        <ClipButton theme="light" text="Показать ещё" onClick={() => {}} />
      </div>
    </div>
  );
};

export default CatalogPage;
