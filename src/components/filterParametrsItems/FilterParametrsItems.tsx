import React, { FC, useState } from "react";
import { IFiltersParametrs } from "../../types/FilterParametrs";
import MySelect from "../UI/select/MySelect";
import styles from "./FilterParametrsItems.module.scss";
import filterIcon from "../../assets/staticIcons/filter.svg";
import MySwitch from "../UI/switch/MySwitch";
import Filter from "./Filter";
import InputPrice from "../UI/input/InputPrice";
import ModalFilters from "./ModalFiltersWindow";
interface Props {
  filters: IFiltersParametrs;
  setFilters: (filters: IFiltersParametrs) => void;
}

const FilterParametrsItems: FC<Props> = ({ filters, setFilters }) => {
  const [modal, setModal] = useState<boolean>(false);

  const regValue = (prevValue: string, targetValue: string): string => {
    const re = /^\d+$/;
    let value = re.test(targetValue) ? targetValue : prevValue;
    value = targetValue ? value : "0";
    return value;
  };

  const changeMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      price: {
        ...filters.price,
        minPrice: regValue(filters.price.minPrice, e.target.value),
      },
    });
  };

  const changeMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      price: {
        ...filters.price,
        maxPrice: regValue(filters.price.maxPrice, e.target.value),
      },
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

  const setSwitch = () => {
    setFilters({ ...filters, inStock: !filters.inStock });
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.filterIconContainer}
        onClick={() => setModal(!modal)}
      >
        <img src={filterIcon} />
        <span className={styles.txtFilterIcon}>Фильтры</span>
      </div>

      <Filter name="Цена">
        <InputPrice value={filters.price.minPrice} onChange={changeMinPrice} />
        <span className={styles.dash}> — </span>
        <InputPrice value={filters.price.maxPrice} onChange={changeMaxPrice} />
      </Filter>

      <Filter name="Тип машинки">
        <MySelect
          options={filters.typeOptions}
          setOptions={setTypeItemSelect}
        />
      </Filter>

      <Filter name="Только в наличии">
        <MySwitch active={filters.inStock} setState={setSwitch} />
      </Filter>

      <Filter name="Сортировка">
        <MySelect options={filters.sortOptions} setOptions={setSortingSelect} />
      </Filter>

      {modal && (
        <ModalFilters
          closeWindow={() => {
            setModal(false);
          }}
          changeMax={changeMaxPrice}
          changeMin={changeMinPrice}
          changeSort={setSortingSelect}
          changeType={setTypeItemSelect}
          filters={filters}
          setSwitch={setSwitch}
        />
      )}
    </div>
  );
};

export default FilterParametrsItems;
