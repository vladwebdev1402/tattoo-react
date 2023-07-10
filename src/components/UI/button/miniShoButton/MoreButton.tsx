import React, { FC } from "react";
import { buttonProps } from "../../../../types/buttonProps";

const MoreButton: FC<buttonProps> = ({
  nameClassDiv,
  nameClassText,
  onClick,
}) => {
  return (
    <div className={nameClassDiv} onClick={onClick}>
      <svg
        width="275"
        height="70"
        viewBox="0 0 275 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 17.5V1H259V17.5V26.25V26.8244L259.496 27.1138L273.015 35L259.496 42.8862L259 43.1756V43.75V52.5V69H16V52.5V43.75V43.1756L15.5039 42.8862L1.98463 35L15.5039 27.1138L16 26.8244V26.25V17.5Z"
          fill="#EEEEEE"
          stroke="#BB8C5F"
          stroke-width="2"
        />
        <text x="77" y="40" fill="#BB8C5F" className={nameClassText}>
          Показать ещё
        </text>
      </svg>
    </div>
  );
};

export default MoreButton;
