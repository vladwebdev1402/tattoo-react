import React from "react";
import FilterBtn from "../UI/button/filterBtn/FilterBtn";
import HorizontalSwiper from "../UI/Swiper/HorizontalSwiper";
import styles from "./Filters.module.scss";
const FiltersBtnCatalogPage = () => {
  return (
    <div className={styles.containerFilters}>
      <HorizontalSwiper pag={false}>
        <li className={styles.filter}>
          <FilterBtn>Для начинающих</FilterBtn>
        </li>
        <li className={styles.filter}>
          <FilterBtn>От билдеров</FilterBtn>
        </li>
        <li className={styles.filter}>
          <FilterBtn>Для профессионалов</FilterBtn>
        </li>
        <li className={styles.filter}>
          <FilterBtn>Расходники</FilterBtn>
        </li>
      </HorizontalSwiper>
    </div>
  );
};

export default FiltersBtnCatalogPage;
