import { ChangeEvent, FC, MouseEvent, useState } from 'react';

import { Button, Checked, CloseModal, Input, InputCode, Modal } from '../UI';

import style from './ModalAuth.module.scss';

interface Props {
  setModal: (modal: boolean) => void;
}

const ModalAuth: FC<Props> = ({ setModal }) => {
  const [number, setNumber] = useState('');
  const [checked, setChecked] = useState(false);
  const [smsTo, setSmsTo] = useState(false);
  const [code, setCode] = useState({ 0: '', 1: '', 2: '', 3: '' });
  return (
    <Modal onClick={() => setModal(false)}>
      <div
        className={`${style.modalBody} ${smsTo && style.smsToBody}`}
        onClick={(e: MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
        }}
      >
        <CloseModal onClick={() => setModal(false)} className={style.closeBtn} />

        {!smsTo && <div className={style.headTxt}>Личный кабинет</div>}
        {smsTo && <div className={style.headTxt}>Введите код</div>}

        {!smsTo && (
          <Input
            value={number}
            placeholder="+7 ХХХ ХХХ ХХ ХХ"
            title="Введите номер"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setNumber(e.target.value);
            }}
          />
        )}

        {smsTo && (
          <div className={style.codeInputContainer}>
            <InputCode
              value={code[0]}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCode({ ...code, 0: e.target.value })
              }
            />
            <InputCode
              value={code[1]}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCode({ ...code, 1: e.target.value })
              }
            />
            <InputCode
              value={code[2]}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCode({ ...code, 2: e.target.value })
              }
            />
            <InputCode
              value={code[3]}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCode({ ...code, 3: e.target.value })
              }
            />
            <button className={style.btnOk} onClick={() => setModal(false)}>
              Ok
            </button>
          </div>
        )}

        {smsTo && (
          <span className={style.infoTxt}>
            Вам потупит звонок на <span className={style.numberTxt}>{number} </span>
            Введите последние 4 цифры звонящего номера. Получить новый код можно будет через 01:48
          </span>
        )}

        {!smsTo && (
          <Button
            className={style.btn}
            onClick={() => {
              setSmsTo(true);
            }}
            theme="dark"
          >
            Получить код в SMS
          </Button>
        )}

        {smsTo && (
          <Button
            variant="text"
            onClick={() => {
              setSmsTo(false);
            }}
          >
            Не приходит код
          </Button>
        )}

        <Checked
          className={style.checked}
          title="При воходе или регистрации вы соглашаетесь с условиями предоставления сервиса"
          onChange={() => {
            setChecked(!checked);
          }}
          checked={checked}
        />
      </div>
    </Modal>
  );
};

export { ModalAuth };
