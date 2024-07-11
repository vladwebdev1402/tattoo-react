import { FC } from 'react';
import { Breadcrumbs, ProfileDataInputs, TechnicalSupport, Typography } from '@/components';
import { managersData } from '@/data';
import st from './ProfilePage.module.scss';
import { StoryOrders } from './components';
const ProfilePage: FC = () => {
  const discount: number = 15;
  return (
    <div className={st.container}>
      <div className={st.leftContainer}>
        <Breadcrumbs className={st.margin} />
        <Typography variant="h1" tag="h1" className={st.margin}>
          Личный кабинет
        </Typography>
        <ProfileDataInputs />
        <StoryOrders />
      </div>
      <div className={st.rightContainer}>
        <div className={st.discountContainer}>
          Ваша Персональная скидка:
          <span className={st.discount}> {discount}%</span>
        </div>
        <TechnicalSupport personalSupport={true} manager={managersData[0]} />
      </div>
    </div>
  );
};

export { ProfilePage };
