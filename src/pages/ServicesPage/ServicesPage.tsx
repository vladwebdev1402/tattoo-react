import { useEffect } from 'react';
import ServiceItem from '../../components/serviceItem/ServiceItem';
import { servicesData } from '../../data/servicesData';
import st from './ServicesPage.module.scss';
import { Breadcrumbs, Ordering } from '@/components';
const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 100, behavior: 'smooth' });
  }, []);
  return (
    <div className={st.container}>
      <Breadcrumbs className={st.margin} />
      <h1 className={st.margin}>Доп. услуги</h1>
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

export default ServicesPage;
