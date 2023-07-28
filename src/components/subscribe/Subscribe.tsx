import React, { FC, useState } from "react";
import ClipButton from "../UI/button/clipButton/ClipButton";
import MyChecked from "../UI/checked/MyChecked";
import MyInput from "../UI/input/MyInput";
import styles from "./Subscribe.module.scss";

interface IStateInput {
  mail: string;
  name: string;
}
const Subscribe: FC = () => {
  const [values, setValues] = useState<IStateInput>({
    mail: "",
    name: "",
  });

  const [checked, setChecked] = useState<boolean>(true);

  const changeMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, mail: e.target.value });
  };

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, name: e.target.value });
  };

  const changeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <div className={styles.subscribeContainer}>
      <div className={styles.subscribeForms}>
        <span className={styles.subscribeFormsHead}>Узнавайте первыми</span>
        <span className={styles.subscribeFormsDesc}>
          Подпишитесь на новостную рассылку с самыми интересными новостями
          и акциями
        </span>
        <div className={styles.input}>
          <MyInput
            onChange={changeMail}
            value={values.mail}
            title="Эл. почта"
            placeholder="Figur@mail.ru"
          />
        </div>
        <div className={styles.input}>
          <MyInput
            onChange={changeName}
            value={values.name}
            title="Имя"
            placeholder="Введите имя"
          />
        </div>
        <div className={styles.checked}>
          <MyChecked
            checked={checked}
            onChange={changeChecked}
            title="Вы соглашаетесь на обработку ваших персональных данных"
          />
        </div>

        <div className={styles.btn}>
          <ClipButton
            onClick={() => {
              console.log(values);
            }}
            theme="dark"
            text="Подписаться"
          />
        </div>
      </div>
      <div className={styles.subscribeImg}></div>
    </div>
  );
};

export default Subscribe;
