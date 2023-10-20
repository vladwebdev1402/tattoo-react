import React, { FC } from "react";
import { IFiltersParametrs } from "../../types/FilterParametrs";
import InputPrice from "../UI/input/InputPrice";
import MyRadio from "../UI/radio/MyRadio";
import MySwitch from "../UI/switch/MySwitch";
import ModalFilter from "./ModalFilter";
import st from "./ModalFiltersWindow.module.scss";
import ModalView from "../UI/modal/ModalView";

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
    <ModalView onClick={closeWindow} className={st.modal}>
      <div
        className={st.modalFiltersContainer}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <div className={st.headModal}>
          <span className={st.headTxt}>Фильтры</span>
          <div className={st.closeIcon} onClick={closeWindow}></div>
        </div>
        <ModalFilter name="Цена">
          <InputPrice value={filters.price.minPrice} onChange={changeMin} />
          <span className={st.dash}> — </span>
          <InputPrice value={filters.price.maxPrice} onChange={changeMax} />
        </ModalFilter>
        <ModalFilter name="Сортировка">
          {filters.sortOptions.map((option) => (
            <div key={option.name} className={st.radioItem}>
              <MyRadio
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
            <div key={option.name} className={st.radioItem}>
              <MyRadio
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
          <MySwitch active={filters.inStock} setState={setSwitch} />
        </ModalFilter>
      </div>
    </ModalView>
  );
};

export default ModalFilters;
