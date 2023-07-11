import React, { FC } from "react";
import styles from "./button.module.scss";
interface LineButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const LineButton: FC<LineButtonProps> = ({ children, onClick }) => {
  return (
    <div className={styles.btn}>
      <span className={styles.txtBtn}>{children}</span>
      <div className={styles.line}></div>
    </div>
  );
};

export default LineButton;
