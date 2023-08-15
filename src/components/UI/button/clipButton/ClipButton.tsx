import React, { FC } from "react";
import styles from "./ClipButton.module.scss";
interface Props {
  theme: "dark" | "light";
  text: string;
  onClick: () => void;
}
const ClipButton: FC<Props> = ({ theme, text, onClick }) => {
  return (
    <div
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        onClick();
      }}
      className={`${styles.btnWrapper} ${
        theme == "dark" ? styles.darkBtn : styles.lightBtn
      }`}
    >
      <button className={styles.btn}></button>
      <span className={styles.textBtn}>{text}</span>
    </div>
  );
};

export default ClipButton;
