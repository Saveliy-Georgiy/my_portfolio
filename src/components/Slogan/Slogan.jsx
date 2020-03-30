import React from 'react';
import styles from './Slogan.module.css';
import Button from "../Buttons/Button";

function Slogan() {
    return (
        <div className={styles.slogan}>
            <div className={styles.mySlogan}>
                <div className={styles.text}>
                    Рассматриваю варианты удаленной работы
                </div>
                <Button name="Нанять меня"/>
            </div>
        </div>
    );
}

export default Slogan;
