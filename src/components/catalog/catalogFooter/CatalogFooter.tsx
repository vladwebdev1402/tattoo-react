import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import ClipButton from "../../UI/button/clipButton/ClipButton";
import styles from "./CatalogFooter.module.scss";
const CatalogFooter: FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.catalogFooterContainer}>
      <div className={styles.btn}>
        <ClipButton
          theme="light"
          onClick={() => {
            navigate("catalog");
          }}
        >
          Смотреть каталог
        </ClipButton>
      </div>
    </div>
  );
};

export default CatalogFooter;
