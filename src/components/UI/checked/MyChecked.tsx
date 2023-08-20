import React, { FC } from "react";
import styles from "./checked.module.scss";

interface MyCheckedProps {
  title?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  className?: string;
}

const MyChecked: FC<MyCheckedProps> = ({
  title = "",
  onChange,
  checked,
  className = "",
}) => {
  return (
    <label className={`${styles.inputBox} ${className}`}>
      <input
        type="checkbox"
        className={`${styles.input} ${checked ? styles.checked : ""}`}
        checked={checked ? true : false}
        onChange={onChange}
      />
      <span className={styles.title}>{title}</span>
    </label>
  );
};

export default MyChecked;
