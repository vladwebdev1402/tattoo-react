import React, { FC, useEffect, useState } from "react";
import styles from "./MySelect.module.scss";
interface Props {
  options: { name: string; isActive: boolean }[];
  setOptions: (option: string) => void;
}

const MySelect: FC<Props> = ({ options, setOptions }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<string>("");

  const seacrhCurrentOption = () => {
    let optionName: string = "";

    options.forEach((option) => {
      option.isActive ? (optionName = option.name) : (optionName = optionName);
    });

    setCurrentOption(optionName);
  };

  useEffect(() => {
    seacrhCurrentOption();
  }, [options]);
  return (
    <div
      className={`${styles.selectContainer} ${open && styles.active}`}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <span className={`${styles.txtOption} ${styles.currentTxtOption}`}>
        {currentOption}
      </span>

      <div className={styles.optionsContainer}>
        {options.map((option) => (
          <div
            key={option.name}
            className={styles.option}
            onClick={() => {
              setOptions(option.name);
            }}
          >
            <span className={styles.txtOption}>{option.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySelect;
