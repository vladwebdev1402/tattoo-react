import React, { FC } from "react";
import styles from "./FilterBtn.module.scss";
interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const FilterBtn: FC<Props> = ({ children, ...buttonProps }) => {
  return (
    <button {...buttonProps} className={styles.btn}>
      {children}
    </button>
  );
};

export default FilterBtn;
