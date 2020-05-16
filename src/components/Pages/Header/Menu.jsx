import React from 'react';
import styles from './Menu.module.css';

function Menu() {
    return (
        <div className={styles.menu}>
            <a href="#main" className={styles.link}>
                Главная
            </a>
            <a href="#skills" className={styles.link}>
                Скиллы
            </a>
            <a href="#projects" className={styles.link}>
                Проекты
            </a>
            <a href="#contacts" className={styles.link}>
                Контакты
            </a>
        </div>
    );
}

export default Menu;
