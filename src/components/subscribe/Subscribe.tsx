import React, { FC, useState } from "react";
import ClipButton from "../UI/button/clipButton/ClipButton";
import MyChecked from "../UI/checked/MyChecked";
import MyInput from "../UI/input/MyInput";
import styles from "./Subscribe.module.scss";
import img from "../../assets/images/hand.png";
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
        <div className={styles.subscribeFormsHead}>Узнавайте первыми</div>
        <div className={styles.subscribeFormsDesc}>
          Подпишитесь на новостную рассылку с самыми интересными новостями
          и акциями
        </div>
        <div className={styles.inputsContainer}>
          <MyInput
            onChange={changeMail}
            value={values.mail}
            title="Эл. почта"
            placeholder="Figur@mail.ru"
            className={styles.input}
          />
          <MyInput
            className={styles.input}
            onChange={changeName}
            value={values.name}
            title="Имя"
            placeholder="Введите имя"
          />
        </div>
        <div className={styles.btnsContainer}>
          <MyChecked
            className={styles.checked}
            checked={checked}
            onChange={changeChecked}
            title="Вы соглашаетесь на обработку ваших персональных данных"
          />

          <ClipButton
            className={styles.btn}
            onClick={() => {
              console.log(values);
            }}
            theme="dark"
          >
            Подписаться
          </ClipButton>
        </div>
      </div>

      <div className={styles.subscribeImg}>
        <img src={img} />
      </div>
    </div>
  );
};

export default Subscribe;
