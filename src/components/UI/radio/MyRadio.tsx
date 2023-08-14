import React, { FC } from "react";
import st from "./Radio.module.scss";

interface Props {
  title: string;
  onChange: () => void;
  checked: boolean;
}

const MyRadio: FC<Props> = ({ title, onChange, checked }) => {
  return (
    <label className={st.radioContainer}>
      <input
        className={st.input}
        type="radio"
        onChange={onChange}
        checked={checked}
      />
      <div className={st.radioIcon}></div>

      <span className={st.title}>{title}</span>
    </label>
  );
};

export default MyRadio;
