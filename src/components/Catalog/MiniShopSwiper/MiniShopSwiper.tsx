import React, { FC, useState } from "react";
import MiniShopRadio from "../MiniShopRadio/MiniShopRadio";
import styles from "./MiniShopSwiper.module.scss";

const MiniShopSwiper: FC = () => {
  const [currentRadio, setCurrentRadio] = useState<string>("0");
  return (
    <div className={styles.containerSwiper}>
      <div
        className={styles.itemImage}
        style={{
          backgroundImage: `url(${require("../../../assets/images/tattoo-mashine/5.jpg")})`,
        }}
      ></div>
      <MiniShopRadio
        currentRadio={currentRadio}
        setCurrentRadio={setCurrentRadio}
      />
    </div>
  );
};

export default MiniShopSwiper;
