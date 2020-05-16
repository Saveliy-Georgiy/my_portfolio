import React from 'react';
import styles from './Contacts.module.css';
import ButtonProject from "../../Buttons/ButtonProject/ButtonProject";
import H2 from "../../H2/H2";
import ButtonWindow from "../../Buttons/ButtonProject/ButtonWindow";

function Contacts() {
  return (
    <div className={styles.contacts} id="contacts">
        <div className={styles.myContacts}>
            <H2 name="Контакты"/>
          <form className={styles.formWrapper}>
              <input className={styles.formArea} placeholder="Имя" type="text"/>
              <input className={styles.formArea} placeholder="e-mail" type="email"/>
              <textarea className={styles.messageArea} placeholder="Сообщение">
              </textarea>
          </form>
            <ButtonWindow name="Отправить"/>
        </div>
    </div>
  );
}

export default Contacts;
