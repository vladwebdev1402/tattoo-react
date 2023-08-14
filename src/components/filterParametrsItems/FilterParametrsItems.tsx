import React, { FC, useState } from "react";
import { IFiltersParametrs } from "../../types/FilterParametrs";
import MySelect from "../UI/select/MySelect";
import styles from "./FilterParametrsItems.module.scss";

interface Props {
  filters: IFiltersParametrs;
  setFilters: (filters: IFiltersParametrs) => void;
}

const FilterParametrsItems: FC<Props> = ({ filters, setFilters }) => {
  const changeMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      price: { ...filters.price, minPrice: e.target.value },
    });
  };

  const changeMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      price: { ...filters.price, maxPrice: e.target.value },
    });
  };

  const zeroingOptions = (
    stateOptions: { name: string; isActive: boolean }[],
    nameOption: string
  ) => {
    let options: { name: string; isActive: boolean }[] = [];

    stateOptions.forEach((option) =>
      options.push({
        name: option.name,
        isActive: option.name === nameOption ? true : false,
      })
    );

    return options;
  };

  const setSortingSelect = (nameOption: string) => {
    const options = zeroingOptions(filters.sortOptions, nameOption);
    setFilters({ ...filters, sortOptions: options });
  };

  const setTypeItemSelect = (nameOption: string) => {
    const options = zeroingOptions(filters.typeOptions, nameOption);
    setFilters({ ...filters, typeOptions: options });
  };

  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <span className={styles.filterName}>Цена</span>
        <div className={styles.filter}>
          <input
            className={styles.inputPrice}
            value={filters.price.minPrice}
            onChange={changeMinPrice}
          />
          <span className={styles.dash}> — </span>
          <input
            className={styles.inputPrice}
            value={filters.price.maxPrice}
            onChange={changeMaxPrice}
          />
        </div>
      </div>
      <div className={styles.filterContainer}>
        <span className={styles.filterName}>Тип машинки</span>
        <div className={styles.filter}>
          <MySelect
            options={filters.typeOptions}
            setOptions={setTypeItemSelect}
          />
        </div>
      </div>
      <div className={styles.filterContainer}>
        <span className={styles.filterName}>Только в наличии</span>
        <div className={styles.filter}>
          <div
            className={`${styles.switch} ${
              filters.inStock && styles.switchActive
            }`}
            onClick={() =>
              setFilters({ ...filters, inStock: !filters.inStock })
            }
          ></div>
        </div>
      </div>
      <div className={styles.filterContainer}>
        <span className={styles.filterName}>Сортировка</span>
        <div className={styles.filter}>
          <MySelect
            options={filters.sortOptions}
            setOptions={setSortingSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterParametrsItems;
