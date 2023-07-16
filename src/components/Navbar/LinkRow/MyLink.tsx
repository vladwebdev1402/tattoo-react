import React from "react";
import styles from "./LinkRow.module.scss";
interface LinkProps {
  name: string;
  active: boolean;
}

const MyLink: React.FC<LinkProps> = ({ name, active }) => {
  return (
    <div className={`${styles.linkBlock} ${active ? styles.active : ""}`}>
      <span className={styles.link}>{name}</span>
    </div>
  );
};

export default MyLink;
