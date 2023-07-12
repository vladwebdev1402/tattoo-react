import React, { FC, useState } from "react";
import styles from "./MyInput.module.scss";

interface MyInputProps {
  width: number;
  title: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyInput: FC<MyInputProps> = ({
  width,
  title,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <form className={styles.inputContainer} style={{ width: width }}>
      <span className={styles.inputName}>{title}</span>
      <input
        value={value}
        onChange={onChange}
        className={styles.input}
        placeholder={placeholder}
      />
    </form>
  );
};

export default MyInput;
