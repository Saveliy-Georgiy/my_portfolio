import React from 'react';
import styles from './Contacts.module.css';
import Button from "../Buttons/Button";

function Contacts() {
  return (
    <div className={styles.contacts}>
        <div className={styles.myContacts}>
          <div className={styles.text}>
            Контакты
          </div>
          <form className={styles.formWrapper}>
              <input placeholder="Имя" type="text"/>
              <input placeholder="e-mail" type="email"/>
              <textarea className={styles.messageArea}>
              </textarea>
          </form>
            <Button name="Отправить"/>
        </div>
    </div>
  );
}

export default Contacts;
