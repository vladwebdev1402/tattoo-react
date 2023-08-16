import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { pathnames } from "../../data/pathnames";
import styles from "./Breadcrumbs.module.scss";

interface Props {
  params?: boolean;
  nameParams?: string;
}
const Breadcrumbs: FC<Props> = ({ params = false, nameParams = "" }) => {
  const location = useLocation().pathname.split("/").slice(1);

  let allPath = "";

  return (
    <ul className={styles.breadcrumbsContainer}>
      <Link to="/">
        <span className={styles.linkTxt}>Главная</span>
      </Link>
      {location.map((path, idx) => {
        allPath += `/${path}`;
        return (
          <li
            key={idx}
            className={`${styles.link} ${
              idx === location.length - 1 && styles.active
            }`}
          >
            <span className={styles.slash}>/</span>
            <Link to={allPath}>
              <span className={styles.linkTxt}>{pathnames[path]}</span>
            </Link>
          </li>
        );
      })}
      {params && (
        <Link to={allPath}>
          <li className={`${styles.link} ${styles.active}`}>
            <Link to={allPath}>
              <span className={styles.linkTxt}>{nameParams}</span>
            </Link>
          </li>
        </Link>
      )}
    </ul>
  );
};

export default Breadcrumbs;
