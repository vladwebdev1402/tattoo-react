import React, { FC } from "react";
import styles from "./button.module.scss";
import { IButtonProps } from "../../../../types/buttonProps";

const SmallLightButton: FC<IButtonProps> = ({ onClick, children, x }) => {
  return (
    <button className={styles.blockBtn} onClick={onClick}>
      <svg
        width="208"
        height="50"
        viewBox="0 0 208 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 7.5V1H192V7.5V16.25V16.8244L192.496 17.1138L206.015 25L192.496 32.8862L192 33.1756V33.75V42.5V49H16V42.5V33.75V33.1756L15.5039 32.8862L1.98463 25L15.5039 17.1138L16 16.8244V16.25V7.5Z"
          fill="#EEEEEE"
          stroke="#BB8C5F"
          stroke-width="2"
        />
        <text x={x} y="30" className={styles.txtBtn}>
          {children}
        </text>
      </svg>
    </button>
  );
};

export default SmallLightButton;
