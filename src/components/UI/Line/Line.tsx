import React from "react";
import styles from "./Line.module.scss";
const Line: React.FC = () => {
  return (
    <div className={styles.blockLine}>
      <div className={styles.degBlock}></div>
      <div className={styles.line}></div>
      <div className={styles.degBlock}></div>
    </div>
  );
};

export default Line;
