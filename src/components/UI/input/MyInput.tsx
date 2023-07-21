import React, { FC, useState } from "react";
import styles from "./MyInput.module.scss";

interface MyInputProps {
  title: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyInput: FC<MyInputProps> = ({ title, placeholder, onChange, value }) => {
  return (
    <form className={styles.inputContainer}>
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
