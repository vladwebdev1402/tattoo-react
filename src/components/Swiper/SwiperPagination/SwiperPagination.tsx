import React, { FC, ChangeEvent } from "react";
import btnIcon from "../../../assets/lineBtnSlide.svg";
import SwiperRadio from "../../UI/Radio/SwiperRadio/SwiperRadio";
import styles from "./SwiperPagination.module.scss";

interface SwiperPagination {
  radios: string[];
  currentRadio: string;
  setCurrentRadio: (radio: string) => void;
}

const SwiperPagination: FC<SwiperPagination> = ({
  radios,
  currentRadio,
  setCurrentRadio,
}) => {
  const clickUp = () => {
    let number: number = (Number(currentRadio) - 1) % radios.length;
    number = number < 0 ? radios.length - 1 : number;
    setCurrentRadio(number.toString());
  };
  const clickDown = () => {
    let number: number = (Number(currentRadio) + 1) % radios.length;
    setCurrentRadio(number.toString());
  };

  return (
    <div className={styles.swiperPagination}>
      <div className={`${styles.swiperBtn} ${styles.up}`} onClick={clickUp}>
        <div className={styles.swiperBtnIcon}>
          <img src={btnIcon}></img>
        </div>
        <div className={styles.swiperBtnBox}></div>
      </div>

      {radios.map((radio) => (
        <SwiperRadio
          key={radio}
          currentRadio={currentRadio}
          radio={radio}
          setCurrentRadio={setCurrentRadio}
        />
      ))}

      <div className={`${styles.swiperBtn} ${styles.down}`} onClick={clickDown}>
        <div className={styles.swiperBtnIcon}>
          <img src={btnIcon}></img>
        </div>
        <div className={styles.swiperBtnBox}></div>
      </div>
    </div>
  );
};

export default SwiperPagination;
