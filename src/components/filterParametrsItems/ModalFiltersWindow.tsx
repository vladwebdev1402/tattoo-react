import React, { FC, MouseEvent } from 'react';

import { IFiltersParametrs } from '@/types';

import { CloseModal, InputPrice, Modal, Radio, Switch } from '../UI';
import { ModalFilter } from './ModalFilter';
import style from './ModalFiltersWindow.module.scss';

interface Props {
  closeWindow: () => void;
  filters: IFiltersParametrs;
  changeMin: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeMax: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeSort: (nameOption: string) => void;
  changeType: (nameOption: string) => void;
  setSwitch: () => void;
}

const ModalFilters: FC<Props> = ({
  closeWindow,
  filters,
  changeMin,
  changeMax,
  changeSort,
  changeType,
  setSwitch,
}) => {
  return (
    <Modal onClick={closeWindow} className={style.modal}>
      <div
        className={style.modalFiltersContainer}
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <div className={style.headModal}>
          <span className={style.headTxt}>Фильтры</span>
          <CloseModal onClick={closeWindow} />
        </div>
        <ModalFilter name="Цена">
          <InputPrice value={filters.price.minPrice} onChange={changeMin} />
          <span className={style.dash}> — </span>
          <InputPrice value={filters.price.maxPrice} onChange={changeMax} />
        </ModalFilter>
        <ModalFilter name="Сортировка">
          {filters.sortOptions.map((option) => (
            <div key={option.name} className={style.radioItem}>
              <Radio
                onChange={() => {
                  changeSort(option.name);
                }}
                title={option.name}
                checked={option.isActive}
              />
            </div>
          ))}
        </ModalFilter>
        <ModalFilter name="Тип машинки">
          {filters.typeOptions.map((option) => (
            <div key={option.name} className={style.radioItem}>
              <Radio
                onChange={() => {
                  changeType(option.name);
                }}
                title={option.name}
                checked={option.isActive}
              />
            </div>
          ))}
        </ModalFilter>
        <ModalFilter name="Только в наличии" inStock={true}>
          <Switch active={filters.inStock} setState={setSwitch} />
        </ModalFilter>
      </div>
    </Modal>
  );
};

export { ModalFilters };
