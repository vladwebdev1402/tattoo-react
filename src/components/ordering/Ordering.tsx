import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ModalThanksOrder from '../modalThanksOrder/ModalThanksOrder';
import st from './Ordering.module.scss';
import { deliveryRadios, paymentRadios } from './radios';
import { Button, Checked, Input, Radio } from '../UI';
const Ordering = () => {
  const navigate = useNavigate();
  const [payment, setPayment] = useState('Онлайн на сайте');
  const [delivery, setDelivery] = useState('Курьерская служба');
  const [checked, setChecked] = useState(false);
  const [promo, setPromo] = useState('');
  const [modal, setModal] = useState(false);

  return (
    <div className={st.container}>
      {modal && <ModalThanksOrder setModal={setModal} />}
      <div className={st.block1}>
        <div className={st.priceInfoWrapper}>
          <div className={st.priceInfoContainer}>
            <span className={st.infoHeadTxt}>Всего единиц товара:</span>
            <span className={st.infoValueTxt}>{0}</span>
          </div>
          <div className={st.priceInfoContainer}>
            <span className={st.infoHeadTxt}>Общая скидка:</span>
            <span className={st.infoValueTxt}>0₽</span>
          </div>
          <div className={st.priceInfoContainer}>
            <span className={st.infoHeadTxt}>Доп. услуги</span>
            <span className={st.infoValueTxt}>0₽</span>
          </div>
          <div className={`${st.priceInfoContainer} ${st.totalPrice}`}>
            <span className={st.infoHeadTxt}>Итого:</span>
            <span className={st.infoValueTxt}>{0}₽</span>
          </div>
        </div>
        <div className={st.promocodeContainer}>
          <Input
            className={st.inputPromocode}
            placeholder="Driskell2000"
            label="Промокод"
            value={promo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPromo(e.target.value);
            }}
          />
          <Button variant="text" className={st.lineBtn} onClick={() => {}}>
            Активировать промокод
          </Button>
        </div>
        <div className="horizontal-divider"></div>
      </div>
      <div className={st.block2}>
        <div className={st.radiosWrapper}>
          <div className={st.radiosContainer}>
            <div className={st.radiosTitle}>Оплата</div>
            <div className={st.radios}>
              {paymentRadios.map((r) => (
                <Radio
                  onChange={() => setPayment(r.title)}
                  title={r.title}
                  checked={payment == r.title}
                  question={r.question}
                  key={r.title}
                  className={st.radio}
                />
              ))}
            </div>
          </div>
          <div className={st.radiosContainer}>
            <div className={st.radiosTitle}>Доставка</div>
            <div className={st.radios}>
              {deliveryRadios.map((r) => (
                <Radio
                  onChange={() => setDelivery(r.title)}
                  title={r.title}
                  checked={delivery == r.title}
                  question={r.question}
                  key={r.title}
                  className={st.radio}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="horizontal-divider"></div>
      </div>

      <div className={st.btnWrapper}>
        <Button
          onClick={() => {
            navigate('/tattoo-react/catalog/basket/services');
          }}
          theme="dark"
        >
          Оформить заказ
        </Button>
        <Button
          className={st.clipBtn}
          onClick={() => {
            setModal(true);
          }}
          theme="light"
        >
          Купить в 1 клик
        </Button>
        <Checked className={st.checked} onChange={() => setChecked(!checked)} checked={checked}>
          Согласен с
          <a href="#" className={st.link}>
            публичной офертой
          </a>
          и
          <a href="#" className={st.link}>
            обработкой персональных данных
          </a>
        </Checked>
      </div>
    </div>
  );
};

export { Ordering };
