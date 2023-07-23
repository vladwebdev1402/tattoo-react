import React from "react";
import ContactsManagers from "../../components/contactsManagers/ContactsManagers";
import ContactsOffice from "../../components/contactsOffice/ContactsOffice";
import styles from "./ContactsPage.module.scss";
const ContactsPage = () => {
  return (
    <div className={styles.containerContacts}>
      <div className="txtHeaderBlock">Контакты</div>
      <ContactsOffice />
      <ContactsManagers />
    </div>
  );
};

export default ContactsPage;
