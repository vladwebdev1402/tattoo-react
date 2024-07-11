import React, { FC, useState } from 'react';
import { IFiltersParametrs } from '../../types/FilterParametrs';
import styles from './FilterParametrsItems.module.scss';
import filterIcon from '../../assets/staticIcons/filter.svg';
import Filter from './Filter';
import ModalFilters from './ModalFiltersWindow';
import { regNumber } from '../../utils/regNumber';
import { InputPrice, Select, Switch } from '../UI';
interface Props {
  filters: IFiltersParametrs;
  setFilters: (filters: IFiltersParametrs) => void;
}

const FilterParametrsItems: FC<Props> = ({ filters, setFilters }) => {
  const [modal, setModal] = useState<boolean>(false);

  // const regValue = (prevValue: string, targetValue: string): string => {
  //   const valueSplit = targetValue.split(/\s+/).join("");
  //   const re = /^\d+$/;
  //   let value = re.test(valueSplit) ? valueSplit : prevValue;
  //   value = valueSplit ? value : "0";
  //   return value;
  // };

  const changeMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      price: {
        ...filters.price,
        minPrice: regNumber(filters.price.minPrice, e.target.value.split(/\s+/).join('')),
      },
    });
  };

  const changeMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      price: {
        ...filters.price,
        maxPrice: regNumber(filters.price.maxPrice, e.target.value.split(/\s+/).join('')),
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
      <div className={styles.filterIconContainer} onClick={() => setModal(!modal)}>
        <img src={filterIcon} />
        <span className={styles.txtFilterIcon}>Фильтры</span>
      </div>

      <Filter name="Цена">
        <InputPrice value={filters.price.minPrice} onChange={changeMinPrice} />
        <span className={styles.dash}> — </span>
        <InputPrice value={filters.price.maxPrice} onChange={changeMaxPrice} />
      </Filter>

      <Filter name="Тип машинки">
        <Select options={filters.typeOptions} setOptions={setTypeItemSelect} />
      </Filter>

      <Filter name="Только в наличии">
        <Switch active={filters.inStock} setState={setSwitch} />
      </Filter>

      <Filter name="Сортировка">
        <Select options={filters.sortOptions} setOptions={setSortingSelect} />
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
