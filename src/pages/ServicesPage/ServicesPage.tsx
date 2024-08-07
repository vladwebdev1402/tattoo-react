import { useEffect } from 'react';

import { Breadcrumbs, Ordering, ServiceItem, Typography } from '@/components';
import { servicesData } from '@/data';

import st from './ServicesPage.module.scss';
const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 100, behavior: 'smooth' });
  }, []);
  return (
    <div className={st.container}>
      <Breadcrumbs className={st.margin} />
      <Typography variant="h1" tag="h1" className={st.margin}>
        Доп. услуги
      </Typography>
      <div className={st.contentPage}>
        <div className={st.servicesContainer}>
          {servicesData.map((item) => (
            <ServiceItem key={item.id} item={item} />
          ))}
        </div>
        <Ordering />
      </div>
    </div>
  );
};

export { ServicesPage };
