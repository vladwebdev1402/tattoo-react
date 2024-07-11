import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { deliveryRadios, paymentRadios } from './radios';
import { Button, Checked, Input, Radio } from '../UI';

import { ModalThanksOrder } from '../modalThanksOrder/ModalThanksOrder';
import style from './Ordering.module.scss';

const Ordering = () => {
  const navigate = useNavigate();
  const [payment, setPayment] = useState('Онлайн на сайте');
  const [delivery, setDelivery] = useState('Курьерская служба');
  const [checked, setChecked] = useState(false);
  const [promo, setPromo] = useState('');
  const [modal, setModal] = useState(false);

  return (
    <div className={style.container}>
      {modal && <ModalThanksOrder setModal={setModal} />}
      <div className={style.block1}>
        <div className={style.priceInfoWrapper}>
          <div className={style.priceInfoContainer}>
            <span className={style.infoHeadTxt}>Всего единиц товара:</span>
            <span className={style.infoValueTxt}>{0}</span>
          </div>
          <div className={style.priceInfoContainer}>
            <span className={style.infoHeadTxt}>Общая скидка:</span>
            <span className={style.infoValueTxt}>0₽</span>
          </div>
          <div className={style.priceInfoContainer}>
            <span className={style.infoHeadTxt}>Доп. услуги</span>
            <span className={style.infoValueTxt}>0₽</span>
          </div>
          <div className={`${style.priceInfoContainer} ${style.totalPrice}`}>
            <span className={style.infoHeadTxt}>Итого:</span>
            <span className={style.infoValueTxt}>{0}₽</span>
          </div>
        </div>
        <div className={style.promocodeContainer}>
          <Input
            className={style.inputPromocode}
            placeholder="Driskell2000"
            label="Промокод"
            value={promo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setPromo(e.target.value);
            }}
          />
          <Button variant="text" full className={style.lineBtn} onClick={() => {}}>
            Активировать промокод
          </Button>
        </div>
        <div className="horizontal-divider"></div>
      </div>
      <div className={style.block2}>
        <div className={style.radiosWrapper}>
          <div className={style.radiosContainer}>
            <div className={style.radiosTitle}>Оплата</div>
            <div className={style.radios}>
              {paymentRadios.map((r) => (
                <Radio
                  onChange={() => setPayment(r.title)}
                  title={r.title}
                  checked={payment == r.title}
                  question={r.question}
                  key={r.title}
                  className={style.radio}
                />
              ))}
            </div>
          </div>
          <div className={style.radiosContainer}>
            <div className={style.radiosTitle}>Доставка</div>
            <div className={style.radios}>
              {deliveryRadios.map((r) => (
                <Radio
                  onChange={() => setDelivery(r.title)}
                  title={r.title}
                  checked={delivery == r.title}
                  question={r.question}
                  key={r.title}
                  className={style.radio}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="horizontal-divider"></div>
      </div>

      <div className={style.btnWrapper}>
        <Button
          onClick={() => {
            navigate('/tattoo-react/catalog/basket/services');
          }}
          theme="dark"
        >
          Оформить заказ
        </Button>
        <Button
          className={style.clipBtn}
          onClick={() => {
            setModal(true);
          }}
          theme="light"
        >
          Купить в 1 клик
        </Button>
        <Checked className={style.checked} onChange={() => setChecked(!checked)} checked={checked}>
          Согласен с
          <a href="#" className={style.link}>
            публичной офертой
          </a>
          и
          <a href="#" className={style.link}>
            обработкой персональных данных
          </a>
        </Checked>
      </div>
    </div>
  );
};

export { Ordering };
