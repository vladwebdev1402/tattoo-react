import React, { FC } from "react";
import { IMarcers } from "../../../types/shopItem";
import st from "./Marcers.module.scss";
interface Props {
  marcers: IMarcers;
  className?: string;
}
const Marcers: FC<Props> = ({ marcers, className = "" }) => {
  return (
    <div className={`${st.marcersContainer} ${className}`}>
      <div
        className={st.marcer}
        style={{ display: `${!marcers.new && "none"}` }}
      ></div>
      <div
        className={st.marcer}
        style={{ display: `${!marcers.hot && "none"}` }}
      ></div>
      <div
        className={st.marcer}
        style={{ display: `${!marcers.discount && "none"}` }}
      ></div>
      <div
        className={st.marcer}
        style={{ display: `${!marcers.no && "none"}` }}
      ></div>
      <div
        className={st.marcer}
        style={{ display: `${!marcers.promotion && "none"}` }}
      ></div>
    </div>
  );
};

export default Marcers;
