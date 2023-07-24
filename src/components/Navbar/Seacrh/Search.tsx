import React, { FC, useState } from "react";
import styles from "./Search.module.scss";
const Search: FC = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div className={styles.seatchContainer}>
      <input
        style={{ marginLeft: 13 }}
        type="text"
        placeholder="Поиск"
        className={styles.myInput}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
