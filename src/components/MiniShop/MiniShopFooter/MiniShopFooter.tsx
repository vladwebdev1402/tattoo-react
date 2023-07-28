import React, { FC } from "react";
import ClipButton from "../../UI/button/clipButton/ClipButton";
import styles from "./MiniShopFooter.module.scss";
import { useNavigate } from "react-router-dom";
const MiniShopFooter: FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.miniShopFooter}>
      <div className={styles.btn}>
        <ClipButton
          text="Показать ещё"
          theme="light"
          onClick={() => {
            navigate("catalog");
          }}
        />
      </div>
    </div>
  );
};

export default MiniShopFooter;
