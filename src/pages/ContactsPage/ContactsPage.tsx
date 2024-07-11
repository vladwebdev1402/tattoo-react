import { Breadcrumbs } from '@/components';

import { ContactsManagers, ContactsOffice } from './components';
import styles from './ContactsPage.module.scss';

const ContactsPage = () => {
  return (
    <div className={styles.containerContacts}>
      <Breadcrumbs className={styles.margin} />
      <h1 className={styles.margin}>Контакты</h1>
      <ContactsOffice />
      <ContactsManagers />
    </div>
  );
};

export default ContactsPage;
