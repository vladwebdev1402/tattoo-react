import { FC } from 'react';
import { IShopItem } from '../../../../types/shopItem';
import BtnChangeCount from '../../../../components/btnChangeCount/BtnChangeCount';
import st from './container.module.scss';
import { Button } from '@/components';

interface Props {
  item: IShopItem;
  setModal: (modal: boolean) => void;
  modal: boolean;
}

const ContainerBriefInfoProduct: FC<Props> = ({ item, modal, setModal }) => {
  return (
    <div className={st.containerBriefInfo}>
      <div className={st.itemNameTxt}>{item.name}</div>
      <div className={st.priceBlock}>
        <span className={st.currentPrice}>{item.price.toLocaleString('ru-RU')} ₽</span>
        {item.oldPrice > 0 && (
          <span className={st.oldPrice}>{item.oldPrice.toLocaleString('ru-RU')}</span>
        )}
        <span className={st.availability}>
          <span className={st.availabilityTxt}>Наличие: </span>
          {item.count}
        </span>
        <BtnChangeCount item={item} className={st.mobileChangeCount} />
      </div>
      <div className={st.descriptionBlock}>
        <div className={st.descriptionTxt}>Описание:</div>
        <span className={st.descriptionTxt}>{item.description.split('/')[0]}</span>
      </div>
      <Button
        className={st.btnJob}
        variant="text"
        onClick={() => {
          setModal(!modal);
        }}
      >
        Работы сделанные этой машинкой
      </Button>
      <div className={st.basketUtilsContainer}>
        <div className={st.utilsBasket}>
          <BtnChangeCount item={item} className={st.desktopChangeCount} />
          <div className={st.addInBasketBtn}>
            <Button onClick={() => {}}>Добавить в корзину</Button>
          </div>
          <button className={st.shareBtn}>Поделиться</button>
        </div>
      </div>
    </div>
  );
};

export { ContainerBriefInfoProduct };
