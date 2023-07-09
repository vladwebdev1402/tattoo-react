import React, { FC } from "react";
import styles from "./SwiperRadio.module.scss";

interface MyRadioProps {
  currentRadio: string;
  radio: string;
  setCurrentRadio: (radio: string) => void;
}

const SwiperRadio: FC<MyRadioProps> = ({
  currentRadio,
  radio,
  setCurrentRadio,
}) => {
  const changeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentRadio(e.target.value);
  };
  return (
    <label>
      <input
        type="radio"
        name={radio}
        value={radio}
        checked={currentRadio == radio ? true : false}
        onChange={changeRadio}
        className={styles.inputRadio}
      />
      <div className={styles.radioBlock}></div>
    </label>
  );
};

export default SwiperRadio;
