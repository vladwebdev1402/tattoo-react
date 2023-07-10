import React, { FC } from "react";
import IconSearch from "../../UI/icons/headerAndNavIcons/IconSearch";
import styles from "./Search.module.scss";
const Search: FC = () => {
  return (
    <div className={styles.search}>
      <div className="icon" style={{ marginLeft: 17 }}>
        <IconSearch />
      </div>
      <input
        style={{ marginLeft: 13 }}
        type="text"
        placeholder="Поиск"
        className={styles.myInput}
      />
    </div>
  );
};

export default Search;
