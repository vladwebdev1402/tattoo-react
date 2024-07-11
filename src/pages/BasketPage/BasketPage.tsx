import { Breadcrumbs, ContentBasket, Ordering, ProfileDataInputs } from '@/components';

import style from './BasketPage.module.scss';

const BasketPage = () => {
  return (
    <div className={style.container}>
      <Breadcrumbs className={style.margin} />
      <h1 className={style.pageTitle}>Корзина</h1>
      <div className={style.contentPageContainer}>
        <div className={style.leftContainer}>
          <ContentBasket items={[]} className={style.margin} />
          <ProfileDataInputs isBasket={true} />
        </div>
        <div className={style.rightContainer}>
          <Ordering />
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
