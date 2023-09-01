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
          theme="light"
          onClick={() => {
            navigate("catalog");
          }}
        >
          Показать ещё
        </ClipButton>
      </div>
    </div>
  );
};

export default MiniShopFooter;
