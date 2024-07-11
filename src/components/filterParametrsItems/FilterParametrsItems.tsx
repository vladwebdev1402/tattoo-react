import React, { FC, useState } from 'react';

import filterIcon from '@/assets/staticIcons/filter.svg';
import { IFiltersParametrs } from '@/types';
import { regNumber } from '@/utils';

import { InputPrice, Select, Switch } from '../UI';
import { Filter } from './Filter';
import { ModalFilters } from './ModalFiltersWindow';
import style from './FilterParametrsItems.module.scss';

interface Props {
  filters: IFiltersParametrs;
  setFilters: (filters: IFiltersParametrs) => void;
}

const FilterParametrsItems: FC<Props> = ({ filters, setFilters }) => {
  const [modal, setModal] = useState<boolean>(false);

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
    <div className={style.container}>
      <div className={style.filterIconContainer} onClick={() => setModal(!modal)}>
        <img src={filterIcon} />
        <span className={style.txtFilterIcon}>Фильтры</span>
      </div>

      <Filter name="Цена">
        <InputPrice value={filters.price.minPrice} onChange={changeMinPrice} />
        <span className={style.dash}> — </span>
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

export { FilterParametrsItems };
