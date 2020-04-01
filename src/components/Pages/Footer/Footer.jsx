import React from 'react';
import styles from './Footer.module.css';
import Icon from "../../Icons/Icon";

function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.myFooter}>
          <div className={styles.text}>
            Бирюков Савелий-Георгий Юрьевич
          </div>
          <div className={styles.socialBlock}>
            <Icon pictureSquare={styles.pictureSquare1}/>
            <Icon pictureSquare={styles.pictureSquare2}/>
            <Icon pictureSquare={styles.pictureSquare3}/>
            <Icon pictureSquare={styles.pictureSquare4}/>
          </div>
          <div className={styles.text}>
            2020 Все права защищены
          </div>
        </div>
    </div>
  );
}

export default Footer;
