import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
  return (
    <div className={styles.contacts}>
        <div className={styles.myContacts}>
          <div className={styles.text}>
            Контакты
          </div>
          <form className={styles.block}>
              <p>&lt;input&gt;</p>
              <p>&lt;input&gt;</p>
              <p className={styles.text + ' ' + styles.textarea}>&lt;textarea&gt;</p>
          </form>
          <button>Отправить</button>
        </div>
    </div>
  );
}

export default Contacts;
