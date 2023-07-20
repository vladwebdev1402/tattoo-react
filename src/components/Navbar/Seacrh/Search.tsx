import React, { FC } from "react";
import styles from "./Search.module.scss";
const Search: FC = () => {
  return (
    <input
      style={{ marginLeft: 13 }}
      type="text"
      placeholder="Поиск"
      className={styles.myInput}
    />
    // <div className={styles.search}>
    //   <div className="icon" style={{ marginLeft: 17 }}>
    //     <IconSearch />
    //   </div>
    //   <input
    //     style={{ marginLeft: 13 }}
    //     type="text"
    //     placeholder="Поиск"
    //     className={styles.myInput}
    //   />
    // </div>
  );
};

export default Search;
