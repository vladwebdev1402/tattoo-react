import { FC, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTER_PATHS } from '@/constants';
import { Button, CloseModal, Modal } from '../UI';

import style from './ModalThanksOrder.module.scss';

interface Props {
  setModal: (value: boolean) => void;
}

const ModalThanksOrder: FC<Props> = ({ setModal }) => {
  const navigate = useNavigate();
  return (
    <Modal onClick={() => setModal(false)}>
      <div
        className={style.modalWrapper}
        onClick={(e: MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
        }}
      >
        <CloseModal onClick={() => setModal(false)} className={style.closeBtn} />

        <div className={style.head}>Спасибо за заказ!</div>
        <div className={style.numberOrder}>
          Номер вашего заказа: <span className={style.number}>123456789</span>
        </div>
        <div className={style.helpInfo}>
          В ближайшее время с вами свяжется наш менеджер для уточнения деталей заказа
        </div>
        <div className={style.navigationContainer}>
          <Button
            onClick={() => {
              setModal(false);
              navigate(ROUTER_PATHS.main);
            }}
            className={style.returnMainbtn}
          >
            <span className={style.btnText}>Вернуться на главную</span>
            <span className={`${style.btnText} ${style.mobileBtnText}`}>На главную</span>
          </Button>

          <Button
            variant="text"
            onClick={() => {
              setModal(false);
              navigate(ROUTER_PATHS.catalog);
            }}
          >
            Вернуться в каталог
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export { ModalThanksOrder };
