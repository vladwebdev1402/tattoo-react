import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import FiltersBtnCatalogPage from "../../components/filtersBtnCatalogPage/FiltersBtnCatalogPage";
import styles from "./CatalogPage.module.scss";
import { minishopData } from "../../data/minishopData";
import ShopItem from "../../components/ShopItem/ShopItem";
import ClipButton from "../../components/UI/button/clipButton/ClipButton";
import { pathnames } from "../../data/pathnames";
import FilterParametrsItems from "../../components/filterParametrsItems/FilterParametrsItems";
import { useParams } from "react-router-dom";
import { IFiltersParametrs } from "../../types/FilterParametrs";

interface CategoryPage {
  type: string;
  [key: string]: string;
}
const CatalogPage = () => {
  const params = useParams<CategoryPage>();
  const [filtersItem, setFiltersItem] = useState<IFiltersParametrs>({
    price: { maxPrice: "99999", minPrice: "0" },
    inStock: false,
    sortOptions: [
      { name: "Популярные", isActive: true },
      { name: "По алфавиту", isActive: false },
      { name: "Дешёвые", isActive: false },
      { name: "Дорогие", isActive: false },
    ],
    typeOptions: [
      { name: "Роторные", isActive: true },
      { name: "Индукционные", isActive: false },
    ],
  });

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className={styles.catalogContainer}>
      <Breadcrumbs />
      <h1>{pathnames[params.type || ""]}</h1>
      <FiltersBtnCatalogPage />
      <FilterParametrsItems filters={filtersItem} setFilters={setFiltersItem} />
      <div className={styles.itemsContainer}>
        {minishopData.map((item) => (
          <ShopItem item={item} key={item.id} />
        ))}
      </div>
      <div className={styles.btn}>
        <ClipButton
          theme="light"
          text="Показать ещё"
          onClick={() => {
            console.log(filtersItem);
          }}
        />
      </div>
    </div>
  );
};

export default CatalogPage;
