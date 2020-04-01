import React from 'react';
import styles from './Slogan.module.css';
import Button from "../../Buttons/Button";
import H2 from "../../H2/H2";

function Slogan() {
    return (
        <div className={styles.slogan}>
            <div className={styles.mySlogan}>
                <H2 name="Рассматриваю варианты удаленной работы"/>
                <Button name="Нанять меня"/>
            </div>
        </div>
    );
}

export default Slogan;
