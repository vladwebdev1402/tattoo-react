import React from "react";
import styles from "./LinkRow.module.scss";
interface LinkProps {
  name: string;
}

const MyLink: React.FC<LinkProps> = ({ name }) => {
  return (
    <div className={styles.linkBlock}>
      <span className={styles.link}>{name}</span>
      <div className={styles.lineBlock}>
        <div className={styles.degBlock}></div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default MyLink;
