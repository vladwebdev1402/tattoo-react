import React, { FC, useState } from "react";
import MiniShopSwiperRadioButton from "../../UI/Radio/MiniShopSwiperRadio/MiniShopSwiperRadioButton";
import styles from "./MiniShopRadio.module.scss";

interface CatalogRadioProps {
  currentRadio: string;
  setCurrentRadio: (value: string) => void;
}
const MiniShopRadio: FC<CatalogRadioProps> = ({
  currentRadio,
  setCurrentRadio,
}) => {
  const radio = ["0", "1", "2", "3"];
  return (
    <div className={styles.itemRadio}>
      {radio.map((radio) => (
        <MiniShopSwiperRadioButton
          key={radio}
          radio={radio}
          currentRadio={currentRadio}
          setCurrentRadio={setCurrentRadio}
        />
      ))}
    </div>
  );
};

export default MiniShopRadio;
