import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import st from './ModalThanksOrder.module.scss';
import { ROUTER_PATHS } from '@/constants';
import ModalView from '../UI/modal/ModalView';
import CloseModal from '../UI/button/closeModal/CloseModal';
import { Button } from '../UI';
interface Props {
  setModal: (value: boolean) => void;
}

const ModalThanksOrder: FC<Props> = ({ setModal }) => {
  const navigate = useNavigate();
  return (
    <ModalView onClick={() => setModal(false)}>
      <div
        className={st.modalWrapper}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
        }}
      >
        <CloseModal onClick={() => setModal(false)} className={st.closeBtn} />

        <div className={st.head}>Спасибо за заказ!</div>
        <div className={st.numberOrder}>
          Номер вашего заказа: <span className={st.number}>123456789</span>
        </div>
        <div className={st.helpInfo}>
          В ближайшее время с вами свяжется наш менеджер для уточнения деталей заказа
        </div>
        <div className={st.navigationContainer}>
          <Button
            onClick={() => {
              setModal(false);
              navigate(ROUTER_PATHS.main);
            }}
            className={st.returnMainbtn}
          >
            <span className={st.btnText}>Вернуться на главную</span>
            <span className={`${st.btnText} ${st.mobileBtnText}`}>На главную</span>
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
    </ModalView>
  );
};

export default ModalThanksOrder;
