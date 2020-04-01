import React from 'react';
import styles from './Contacts.module.css';
import Button from "../../Buttons/Button";
import H2 from "../../H2/H2";

function Contacts() {
  return (
    <div className={styles.contacts}>
        <div className={styles.myContacts}>
            <H2 name="Контакты"/>
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
