import React, { FC } from "react";
import styles from "./radio.module.scss";

interface SwiperRadioProps {
  currentRadio: string;
  radio: string;
  setCurrentRadio: (radio: string) => void;
}

const MiniShopSwiperRadioButton: FC<SwiperRadioProps> = ({
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
        className={styles.inputRadio}
        type="radio"
        value={radio}
        checked={currentRadio == radio ? true : false}
        onChange={changeRadio}
      ></input>
      <div className={styles.radioBlock}></div>
    </label>
  );
};

export default MiniShopSwiperRadioButton;
