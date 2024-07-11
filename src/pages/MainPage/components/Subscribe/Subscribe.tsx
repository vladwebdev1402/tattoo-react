import React, { FC, useState } from 'react';

import img from '@/assets/images/hand.png';
import { Button, Checked, Input, Typography } from '@/components';

import styles from './Subscribe.module.scss';

interface IStateInput {
  mail: string;
  name: string;
}
const Subscribe: FC = () => {
  const [values, setValues] = useState<IStateInput>({
    mail: '',
    name: '',
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
        <Typography variant="h1">Узнавайте первыми</Typography>
        <div className={styles.subscribeFormsDesc}>
          Подпишитесь на новостную рассылку с самыми интересными новостями и акциями
        </div>
        <div className={styles.inputsContainer}>
          <Input
            onChange={changeMail}
            value={values.mail}
            label="Эл. почта"
            placeholder="Figur@mail.ru"
            containerClassName={styles.input}
          />
          <Input
            containerClassName={styles.input}
            onChange={changeName}
            value={values.name}
            label="Имя"
            placeholder="Введите имя"
          />
        </div>
        <div className={styles.btnsContainer}>
          <Checked
            className={styles.checked}
            checked={checked}
            onChange={changeChecked}
            title="Вы соглашаетесь на обработку ваших персональных данных"
          />

          <Button
            className={styles.btn}
            onClick={() => {
              console.log(values);
            }}
          >
            Подписаться
          </Button>
        </div>
      </div>

      <div className={styles.subscribeImg}>
        <img src={img} />
      </div>
    </div>
  );
};

export { Subscribe };
