import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
interface Pathnames {
  [key: string]: string;
}
const Breadcrumbs: FC = () => {
  // const location = useLocation().pathname.split("/").slice(1);
  // const pathnames: Pathnames = {
  //   promo: "Промокод",
  // };
  // const getPath = (idx: number): string => {
  //   let path = "";
  //   location.map((mapPath, mapIdx) => {
  //     console.log(mapIdx);
  //     if (mapIdx <= idx) {
  //       path += `/${mapPath}`;
  //     }
  //   });
  //   return path;
  // };
  // return (
  //   <ul>
  //     <Link to="/">Главная</Link>
  //     {location.map((path, idx) => (
  //       <Link to={getPath(idx)}>{pathnames[path]}</Link>
  //     ))}
  //   </ul>
  // );

  return <></>;
};

export default Breadcrumbs;
