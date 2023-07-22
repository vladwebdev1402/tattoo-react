import React from "react";
import styles from "./LinkRow.module.scss";
import { useMatch, Link } from "react-router-dom";
interface LinkProps {
  name: string;
  to: string;
}

const MyLink: React.FC<LinkProps> = ({ name, to }) => {
  const match = useMatch(to);
  return (
    <Link to={to} className={`${styles.linkBlock} ${match && styles.active}`}>
      <span className={styles.link}>{name}</span>
    </Link>
  );
};

export default MyLink;
