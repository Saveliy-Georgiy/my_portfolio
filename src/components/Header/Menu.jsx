import React from 'react';
import styles from './Menu.module.css';

function Menu() {
    return (
        <div className={styles.menu}>
            <a href="" className={styles.link}>
                Главная
            </a>
            <a href="" className={styles.link}>
                Скиллы
            </a>
            <a href="" className={styles.link}>
                Проекты
            </a>
            <a href="" className={styles.link}>
                Контакты
            </a>
        </div>
    );
}

export default Menu;
