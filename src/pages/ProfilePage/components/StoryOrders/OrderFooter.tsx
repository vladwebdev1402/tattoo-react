import { FC } from 'react';
import { Button } from '@/components';
import st from './StoryOrders.module.scss';
interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
const OrderFooter: FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <div className={st.footerContainer}>
      <div className="horizontal-divider"></div>
      <Button
        variant="text"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={st.clipBtn}
      >
        {!isOpen && <span className={st.lineBtnText}>Подробнее о заказе</span>}
        {isOpen && <span className={st.lineBtnText}>Скрыть информацию</span>}
      </Button>
    </div>
  );
};

export default OrderFooter;
