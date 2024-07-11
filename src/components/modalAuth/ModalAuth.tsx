import React, { FC, useState } from 'react';
import CloseModal from '../UI/button/closeModal/CloseModal';
import { Button, Checked, Input, InputCode, Modal } from '../UI';
import st from './ModalAuth.module.scss';

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
        className={`${st.modalBody} ${smsTo && st.smsToBody}`}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
        }}
      >
        <CloseModal onClick={() => setModal(false)} className={st.closeBtn} />

        {!smsTo && <div className={st.headTxt}>Личный кабинет</div>}
        {smsTo && <div className={st.headTxt}>Введите код</div>}

        {!smsTo && (
          <Input
            value={number}
            placeholder="+7 ХХХ ХХХ ХХ ХХ"
            title="Введите номер"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setNumber(e.target.value);
            }}
          />
        )}

        {smsTo && (
          <div className={st.codeInputContainer}>
            <InputCode
              value={code[0]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCode({ ...code, 0: e.target.value })
              }
            />
            <InputCode
              value={code[1]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCode({ ...code, 1: e.target.value })
              }
            />
            <InputCode
              value={code[2]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCode({ ...code, 2: e.target.value })
              }
            />
            <InputCode
              value={code[3]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCode({ ...code, 3: e.target.value })
              }
            />
            <button className={st.btnOk} onClick={() => setModal(false)}>
              Ok
            </button>
          </div>
        )}

        {smsTo && (
          <span className={st.infoTxt}>
            Вам потупит звонок на <span className={st.numberTxt}>{number} </span>
            Введите последние 4 цифры звонящего номера. Получить новый код можно будет через 01:48
          </span>
        )}

        {!smsTo && (
          <Button
            className={st.btn}
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
          className={st.checked}
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

export default ModalAuth;
