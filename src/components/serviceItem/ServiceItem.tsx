import { FC, useState } from 'react';
import st from './Service.module.scss';
import { IServiceItem } from '@/types';
import { Button } from '../UI';
interface Props {
  item: IServiceItem;
}
const ServiceItem: FC<Props> = ({ item }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className={st.serviceContainer}>
      <img className={st.serviceImg} src={item.img} />
      <div className={st.serviceBody}>
        <div className={st.bodyTitle}>{item.title}</div>
        <div className={st.bodyDescription}>
          <span className={(readMore && st.readMore) || ''}>{item.description}</span>
          <button className={st.readMoreBtn} onClick={() => setReadMore(!readMore)}>
            {!readMore ? <>Читать далее...</> : <>Скрыть</>}
          </button>
        </div>
        <div className={st.servicePrice}>
          Стоимость услуги: {item.price.moneyPrice && <>{item.price.moneyPrice}₽</>}
          {item.price.procentPrice && <>{item.price.procentPrice}% от суммы заказа</>}
        </div>
      </div>
      <Button className={st.clipBtn} onClick={() => {}} theme="light">
        Добавить к заказу
      </Button>
    </div>
  );
};

export default ServiceItem;
