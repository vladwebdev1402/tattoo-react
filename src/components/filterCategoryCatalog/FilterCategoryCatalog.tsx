import React, { FC } from "react";
import { category } from "../../data/catalogCategory";
import FilterBtn from "../UI/button/filterBtn/FilterBtn";
import st from "./FIlterCategoryCatalog.module.scss";
interface Props {
  navigate?: (link: string) => void;
}
const FilterCategoryCatalog: FC<Props> = ({ navigate }) => {
  const onClick = (str: string) => {
    if (navigate) {
      navigate(str);
    }
  };
  return (
    <div className={st.containerFilters}>
      <ul className={st.filterList}>
        {category.slice(1).map((category) => (
          <li className={st.filter} key={category.id}>
            <FilterBtn onClick={() => onClick(category.link || "")}>
              {category.filter}
            </FilterBtn>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterCategoryCatalog;
