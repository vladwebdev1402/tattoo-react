import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { pathnames } from "../../data/pathnames";
import styles from "./Breadcrumbs.module.scss";

interface Props {
  params?: true;
  nameParams?: string;
}
const Breadcrumbs: FC<Props> = () => {
  const location = useLocation().pathname.split("/").slice(1);

  // const getPath = (idx: number): string => {
  //   const path = location.reduce((allPath, currentPath, reduceIdx) => {
  //     console.log(reduceIdx);
  //     if (reduceIdx <= idx) return allPath + `/${currentPath}`;
  //     return "";
  //   }, "");
  //   return path;
  // };

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
    </ul>
  );
};

export default Breadcrumbs;
