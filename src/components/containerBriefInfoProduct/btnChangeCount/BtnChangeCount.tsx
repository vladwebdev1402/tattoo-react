import React, { DOMAttributes, FC } from "react";
import st from "./btnChangeCount.module.scss";
interface Props {
  count: number;
  itemCount: number;
  setCount: (count: number) => void;
  className?: string;
}
const BtnChangeCount: FC<Props> = ({
  count,
  itemCount,
  setCount,
  className,
}) => {
  return (
    <div className={`${st.container} ${className}`}>
      <div
        className={st.basketBtn}
        onClick={() => {
          setCount(count - 1 < 0 ? 0 : count - 1);
        }}
      ></div>
      <div className={st.basketCount}>{count}</div>
      <div
        className={`${st.basketBtn} ${st.plus}`}
        onClick={() => {
          setCount(count + 1 > itemCount ? count : count + 1);
        }}
      ></div>
    </div>
  );
};

export default BtnChangeCount;
