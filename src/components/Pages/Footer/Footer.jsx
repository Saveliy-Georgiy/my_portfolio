import React from 'react';
import styles from './Footer.module.css';
import Icon from "../../../Icons/Icon";
import vk from "../../../Icons/vk.png"
import telegram from "../../../Icons/telegram.png"
import linkedin from "../../../Icons/linkedin.png"
import viber from "../../../Icons/viber.svg"

function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.myFooter}>
          <div className={styles.text}>
            Бирюков Савелий-Георгий Юрьевич
          </div>
          <div className={styles.socialBlock}>
            <Icon picture={vk} url="https://vk.com/sav4ik33"/>
            <Icon picture={telegram} url="https://t.me/Sav4ik33"/>
            <Icon picture={linkedin} url="https://www.linkedin.com/in/%D1%81%D0%B0%D0%B2%D0%B5%D0%BB%D0%B8%D0%B9-%D0%B3%D0%B5%D0%BE%D1%80%D0%B3%D0%B8%D0%B9-%D0%B1%D0%B8%D1%80%D1%8E%D0%BA%D0%BE%D0%B2-81a83419a/"/>
            <Icon picture={viber} url="viber://chat?number=%2B375293096500"/>
          </div>
          <div className={styles.text}>
            2020 Все права защищены
          </div>
        </div>
    </div>
  );
}

export default Footer;
