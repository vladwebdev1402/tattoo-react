import React, { FC } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styles from "./Breadcrumbs.module.scss";
interface Pathnames {
  [key: string]: string;
}

interface Props {
  params?: true;
  nameParams?: string;
}
const Breadcrumbs: FC<Props> = ({ params = false, nameParams = "type" }) => {
  const location = useLocation().pathname.split("/").slice(1);
  const pathnames: Pathnames = {
    promo: "Промокоды",
    contacts: "Контакты",
    catalog: "Каталог",
    t: "Тату машинки",
  };
  const getPath = (idx: number): string => {
    let path = "";
    location.map((mapPath, mapIdx) => {
      if (mapIdx <= idx) {
        path += `/${mapPath}`;
      }
    });
    return path;
  };
  return (
    <ul className={styles.breadcrumbsContainer}>
      <Link to="/">
        <span className={styles.linkTxt}>Главная</span>
      </Link>
      {location.map((path, idx) => (
        <li
          className={`${styles.link} ${
            idx === location.length - 1 && styles.active
          }`}
        >
          <span className={styles.slash}>/</span>
          <Link to={getPath(idx)}>
            <span className={styles.linkTxt}>{pathnames[path]}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
