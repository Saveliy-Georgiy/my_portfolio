import React from 'react';
import styles from './Footer.module.css';
import Square from "./Square";

function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.myFooter}>
          <div className={styles.text}>
            Бирюков Савелий-Георгий Юрьевич
          </div>
          <div className={styles.block}>
            <Square pictureSquare={styles.pictureSquare1}/>
            <Square pictureSquare={styles.pictureSquare2}/>
            <Square pictureSquare={styles.pictureSquare3}/>
            <Square pictureSquare={styles.pictureSquare4}/>
          </div>
          <div className={styles.text}>
            2020 Все права защищены
          </div>
        </div>
    </div>
  );
}

export default Footer;
