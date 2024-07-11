import { managersData } from '@/data';

import { Manager } from '@/components';

import styles from './ContactsManagers.module.scss';
const ContactsManagers = () => {
  return (
    <div className={styles.containerManagers}>
      <div className={styles.headTxt}>Менеджеры</div>
      <div className={styles.containerBodyManagers}>
        {managersData.map((manager) => (
          <Manager key={manager.id} manager={manager} />
        ))}
      </div>
    </div>
  );
};

export { ContactsManagers };
