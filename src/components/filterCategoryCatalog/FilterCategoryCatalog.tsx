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
    <div className={st.container}>
      <div className={st.containerBtn}>
        {category.slice(1).map((category) => (
          <FilterBtn
            onClick={() => onClick(category.link || "")}
            key={category.id}
          >
            {category.filter}
          </FilterBtn>
        ))}
      </div>
    </div>
  );
};

export default FilterCategoryCatalog;
